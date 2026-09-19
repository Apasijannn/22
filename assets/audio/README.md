# Audio

Drop your song in this folder, then open `rsvp.html` and edit the `MUSIC` block
near the bottom of the file:

```js
const MUSIC = {
  src: 'assets/audio/theme.mp3',       // <- your file
  title: "Can't Take My Eyes Off You", // <- what the button says
  volume: 0.45,                        // 0 silent, 1 full
  startAt: 0,                          // seconds to skip past an intro
  autoplay: true                       // false = wait for a tap
};
```

That block is the only thing you need to touch.

## Formats

`.mp3` and `.m4a` play in every browser. `.ogg` and `.wav` work in most.
Keep the file under a few MB so the page does not stall on a phone connection.

## What happens if you change nothing

The page still works. The button reads **"♫ Add a track to assets/audio/"**
and does nothing when tapped — no broken playback, no console noise.

## Autoplay

Browsers refuse to play audio until the visitor has touched the page. The page
handles this: it tries on load, and if refused, starts on the first tap anywhere
and the button reads "Tap to play" until then. Nothing to configure.
