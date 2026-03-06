# NextYU Solution

## Current State
A multi-page dark-themed business website for NextYU Solution with pages: Home, About, Services, Portfolio, Contact. Uses a Red & Dark color scheme with glassmorphism design. Has floating contact buttons (left side), a chatbot widget (bottom-right), navbar, and footer. App.tsx wraps all pages in a RootLayout component.

## Requested Changes (Diff)

### Add
- A global `MouseTrailEffect` component that renders a full-viewport fixed canvas/overlay layer (pointer-events: none, z-index below content)
- A soft glowing radial gradient that follows the mouse cursor with smooth CSS transition (the "glow orb")
- Floating particle system: small dots/sparkles that spawn near the cursor and drift upward/outward before fading out
- A subtle light trail that lingers briefly after mouse movement
- A `useMousePosition` hook to track cursor position with requestAnimationFrame smoothing

### Modify
- `App.tsx` RootLayout: mount `<MouseTrailEffect />` as a fixed global background layer so it appears on every page

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/hooks/useMousePosition.ts` -- hook that tracks raw mouse position and computes a smoothed follow position via lerp + requestAnimationFrame
2. Create `src/frontend/src/components/MouseTrailEffect.tsx`:
   - Fixed full-viewport div with `pointer-events: none` and low z-index
   - Glow orb: a radial gradient div that transitions to follow the cursor (CSS transform + transition)
   - Canvas layer: draws floating particles (spawned on mousemove, each with position, velocity, opacity, size); animates via requestAnimationFrame
   - Light trail: a fading gradient streak using recent cursor positions stored in a circular buffer
3. Update `App.tsx` RootLayout to include `<MouseTrailEffect />` before all content
4. Ensure performance: particles capped at ~60, canvas cleared each frame, all effects disabled/paused when mouse is idle
