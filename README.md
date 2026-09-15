# Forge V0.33

Bug-fix release based directly on Forge V0.32.

## Fixes
- Restored Strength/legacy workout execution renderer required by the V2 execution engine.
- Restored active-workout exit handling.
- Restored builder metric-change handling.
- V2 execution screens render their initial state immediately.
- EMOM now saves/completes automatically when the final minute expires.
- Completed normal workouts can be deleted directly from the Plan day view.
- Deleting a completed workout removes only the completed session; the scheduled workout remains planned.

## Deployment
Required GitHub Pages root files:
- index.html
- manifest_v0_33.json
- sw_v0_33.js
- README.md
