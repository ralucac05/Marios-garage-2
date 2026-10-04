# Native scroll-linked car rotation

## Goal
Change only the 3D car’s hero interaction. Keep all existing visuals, content, styling, and site sections unchanged.

## Changes
- Remove the hero’s sticky/pinned behavior so the page always uses normal uninterrupted vertical scrolling.
- Measure the hero’s natural scroll progress from 0% at its starting position to 100% at the end of its intended rotation range.
- Map that progress directly and linearly to the car angle: `0% → 0°`, `25% → 37.5°`, `50% → 75°`, `100% → 150°`.
- Clamp the angle at 150° after the range ends.
- Make the mapping fully reversible so scrolling upward returns the car through the same angles to 0°.
- Remove delayed/eased playback from the 3D car so its pose follows the current scroll position rather than continuing independently.
- Preserve reduced-motion behavior without introducing scroll locking.

## Verification
- Check desktop and mobile scrolling.
- Confirm scrolling remains native, the page moves continuously, and the car responds proportionally in both directions.
- Confirm the car starts centered at its existing front-facing pose and never rotates beyond 150°.
