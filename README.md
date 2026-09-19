# A Table Reserved For You

A five-screen digital dinner invitation, themed as a tasting menu at Botanika, Surabaya.
Static HTML, no build step, no dependencies.

## Run it

Open `index.html`, or serve the folder:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## The screens

| Page | Course |
|---|---|
| `index.html` | The reservation envelope — tap the wax seal, then step inside |
| `memories.html` | Amuse-bouche of memories — a stack of polaroids to swipe |
| `trivia.html` | The trivia gate — one question before the next course |
| `reveal.html` | The reveal — scratch the gold foil, add it to your calendar |
| `rsvp.html` | Closing the bill — the RSVP, and a button that will not be caught |

## Setting the date

`reveal.html` defines the evening in one place:

```js
const EVENT_DATE = new Date('2026-10-28T19:30:00+07:00');
```

The printed date, the live countdown and the Google Calendar link are all derived from it,
so they cannot drift apart. Change that line and everything follows.

## Design tokens

Colour, type, spacing and component values live in `assets/design-tokens.json`
(three layers: primitive → semantic → component). Everything else is generated from it:

```bash
# regenerate the stylesheet after editing the JSON
node <skill>/scripts/generate-tokens.cjs -c assets/design-tokens.json -o assets/design-tokens.css

# fail if any raw hex has crept back into the pages
node assets/check-tokens.mjs --strict
```

`assets/tailwind.tokens.js` is the shared Tailwind config — one file for all five pages,
where there used to be five copies that had already drifted apart.

`assets/MIGRATION.md` records what each old hex literal became.

## Layout

```
index.html  memories.html  trivia.html  reveal.html  rsvp.html
assets/     tokens, shared config, drift check
Reference/  the original pre-migration screens, kept as-is
```

## Known limits

- Photographs are hot-linked to Google's CDN and will break if those URLs expire.
  Swap in local images under `assets/` before this needs to last.
- The music control on `rsvp.html` toggles its icon only; there is no audio element yet.
