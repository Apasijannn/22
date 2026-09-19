/**
 * Drift guard: every hex literal in the screens must exist in design-tokens.json.
 *
 *   node assets/check-tokens.mjs          # report
 *   node assets/check-tokens.mjs --strict # exit 1 if any orphan hex remains
 *
 * Replaces the skill's html-token-validator.py, which crashes reading these
 * UTF-8 files under the Windows cp1252 default.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const HEX = /#[0-9a-fA-F]{6}\b/g;

const norm = (h) => h.toLowerCase();

function tokenHexes(tokens) {
  const found = new Set();
  (function walk(node) {
    if (node && typeof node === 'object') {
      if (typeof node.$value === 'string') {
        for (const h of node.$value.match(HEX) ?? []) found.add(norm(h));
      }
      for (const v of Object.values(node)) walk(v);
    }
  })(tokens);
  return found;
}

// The shipped pages at the project root. Reference/ holds the pre-migration
// originals on purpose, so it is not scanned.
function screens() {
  return readdirSync(root, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.html'))
    .map((e) => join(root, e.name));
}

const known = tokenHexes(JSON.parse(readFileSync(join(root, 'assets/design-tokens.json'), 'utf8')));
const orphans = new Map(); // hex -> Set(file)

for (const file of screens()) {
  const label = file.slice(root.length + 1);
  for (const raw of readFileSync(file, 'utf8').match(HEX) ?? []) {
    const hex = norm(raw);
    if (known.has(hex)) continue;
    if (!orphans.has(hex)) orphans.set(hex, new Set());
    orphans.get(hex).add(label);
  }
}

const ranked = [...orphans].sort((a, b) => b[1].size - a[1].size || a[0].localeCompare(b[0]));

console.log(`tokens: ${known.size} hex values`);
console.log(`screens: ${screens().length}`);
console.log(`orphan hex (not in any token): ${ranked.length}\n`);
for (const [hex, files] of ranked) {
  console.log(`  ${hex}  ${[...files].sort().join(', ')}`);
}

// Self-check: the token file must at least cover the six brand anchors.
const anchors = ['#24331f', '#3a4a34', '#571d07', '#74321b', '#c9a24b', '#f4fcec'];
const missing = anchors.filter((a) => !known.has(a));
if (missing.length) {
  console.error(`\nFAIL: brand anchors missing from tokens: ${missing.join(', ')}`);
  process.exit(1);
}

if (process.argv.includes('--strict') && ranked.length) {
  console.error(`\nFAIL (--strict): ${ranked.length} orphan hex values still in markup`);
  process.exit(1);
}
