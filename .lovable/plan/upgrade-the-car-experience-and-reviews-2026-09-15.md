# Upgrade the car experience and reviews

## What will change
- Replace the flat hero image with a locally bundled, properly licensed 3D premium sedan rendered in the page.
- Make the first part of the scroll rotate the car by roughly 150°, then continue smoothly through the remaining turn.
- Add the four supplied customer reviews verbatim to the Reviews page and include a focused selection on the homepage.
- Keep the existing contact details, Google rating, visual style, accessibility, and mobile layout intact.

## Technical details
- Use React Three Fiber with a local GLB, cinematic lighting, grounded shadows, a visible loading state, and reduced-motion support.
- Keep scroll progress as the single source controlling the 3D model rotation.
- Store review copy alongside the existing business data, then render it through a reusable review-card component.
- Verify the 3D scene, scroll motion, reviews, mobile presentation, and browser console in the live preview.
