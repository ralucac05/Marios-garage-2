# Right-side to left-side Mercedes rotation

## Goal
Change only the 3D Mercedes orientation and scroll-linked rotation. Preserve the existing page design, dimensions, styling, content, and native scrolling.

## Changes
- Set the car’s zero-degree pose to a centered right-side profile.
- Change the maximum scroll-linked turn from 150° to 180°.
- Keep the angle directly proportional to hero progress: 0%, 25%, 50%, 75%, and 100% map to 0°, 45°, 90°, 135°, and 180°.
- Apply the Y-axis direction that brings the front through view between the two side profiles.
- Keep the mapping reversible when scrolling upward and clamped at 180° afterward.
- Retain the existing passive scroll observer with no wheel handling, scroll locking, sticky positioning, or independent animation.

## Verification
- Capture the car at 0°, 45°, 90°, 135°, and 180° to visually confirm the sequence is right side → front → left side.
- Check forward and reverse angle values on desktop and mobile.
- Confirm the page position changes continuously and there are no browser errors.
