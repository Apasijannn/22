# Token Migration Map

Run `node assets/check-tokens.mjs` to see what is still unmigrated. Target: 0 orphans.

Every hex below is a one-off literal in the screens that duplicates a role already in
`design-tokens.json`. Replace with the Tailwind class or CSS variable in the right column.

## Gold / foil — 8 different golds served one role

| Hex in markup | Screen | Replace with |
|---|---|---|
| `#bfa15f` | 2 | `foil` / `var(--color-foil)` |
| `#b08b4f` | 3 | `foil` |
| `#b89552` | 5 | `foil` |
| `#d4af37` | 5 | `foil` |
| `#c6993b` | 4 (canvas) | `var(--foil-scratch-base)` |
| `#997034` | 3 | `foil-deep` |
| `#a07621` | 4 (canvas) | `var(--foil-scratch-shade)` |
| `#e8c56b`, `#e1bd60` | 4 (canvas) | `var(--foil-scratch-light)` |

Already canonical: `#c9a24b` → `foil`, `#a37e2c` → `foil-deep`, `#dfbe6d` → `foil-bright`,
`#f7e7a9` → `var(--foil-scratch-highlight)`.

## Paper / linen — 17 near-identical creams

| Hex in markup | Screen | Replace with |
|---|---|---|
| `#fefefc`, `#fcfbf7`, `#fbf9f4` | 2, 3, 1 | `paper-raised` |
| `#f8f3e6` | 4 | `paper` |
| `#efebe0`, `#efe9db`, `#ece7dc` | 3, 4, 2 | `paper-sunken` |
| `#eae2d1`, `#efe5cd`, `#e4d4b3`, `#e5dac0` | 4, 4, 4, 3 | `var(--primitive-color-linen-300)` |
| `#ded8c4`, `#dfd8c7`, `#d6cfb8` | 3, 3, 3 | `paper-edge` |
| `#d3c7a8`, `#d6cbaf`, `#cfc5ad`, `#cfc8b0`, `#d3cbbe` | 4, 3, 3, 3, 3 | `var(--primitive-color-linen-500)` |

## Wax / deep terracotta

| Hex in markup | Screen | Replace with |
|---|---|---|
| `#6b2c16`, `#6e3a11` | 1, 4 | `wax` |
| `#501a08`, `#511e0e`, `#301f09` | 1, 5, 4 | `wax-deep` |
| `#8a391e` | 1 | `var(--primitive-color-terracotta-600)` |
| `#d39379` | 4 | `tertiary-fixed-dim` |
| `#d8b8ac` | 3 | `romantic` |

## Muted warm text

| Hex in markup | Screen | Replace with |
|---|---|---|
| `#7d7767` | 3 | `outline` |
| `#7a6b53` | 4 | `outline` |

## Also worth fixing while migrating

- **DESIGN.md disagrees with the code.** It names `#B5654A` (terracotta) and `#D9A5A0`
  (dusty rose) as brand colors; neither appears in any screen. Both are now tokens
  (`terracotta-500`, `romantic`) — either adopt them or correct DESIGN.md.
- **Per-screen Tailwind config.** Each screen inlines its own ~4KB copy. Replace the inline
  `<script id="tailwind-config">` block with:
  ```html
  <link rel="stylesheet" href="../../assets/design-tokens.css">
  <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  <script src="../../assets/tailwind.tokens.js"></script>
  ```
  (adjust `../../` to wherever the screens end up sitting relative to `assets/`)
