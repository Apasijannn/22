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

## Photographs

Every image is a placeholder in `assets/img/`. Replace a file and the page picks it
up — keep the same filename and nothing else needs editing. Any format works
(`.jpg`, `.png`, `.webp`); the `.svg` extension in the filename is not required, but
if you change it, update the matching `src=` in the page listed below.

| File | Shape | Appears on |
|---|---|---|
| `logo.svg` | wide, transparent background | every page, top left |
| `avatar.svg` | square, shown as a circle | every page except `index.html` |
| `memory-1.svg` | square | `memories.html` — July 14, Golden Hour |
| `memory-2.svg` | square | `memories.html` — August 29, Seaside Pier |
| `memory-3.svg` | square | `memories.html` — November 18, Rainy Café |
| `bistro.svg` | landscape | `trivia.html`, behind the question |
| `dinner-table.svg` | landscape | `rsvp.html`, the table for two |

The captions that go with the photos are plain text in the pages — search for
"Golden Hour" in `memories.html` to change them.

## Music

`rsvp.html` plays a song in the background. Put the file in `assets/audio/` and edit
the `MUSIC` block near the bottom of `rsvp.html`; see `assets/audio/README.md` for
the details. With no file present the page still works — the button simply says so.

## Known limits

- Photographs ship as placeholders; the originals were hot-linked to Google's CDN
  and are preserved only in `Reference/`.
