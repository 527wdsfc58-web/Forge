# Forge v0.29

GitHub Pages deployment package.

Upload the contents of this folder to the root of the GitHub Pages branch/repository. Keep `index.html`, `manifest_v0_29.json`, and `sw_v0_29.js` together.

This release cleans and standardises all 50 built-in Mobility sessions. The previous filler logic that could append repeated Child’s Pose or Cat-Cow exercises has been removed. Existing routines now reach their intended durations by extending the existing movements rather than adding filler blocks. A one-time migration repairs legacy filler-generated routines and removes immediately repeated Mobility exercises without overwriting deliberately edited routines.

Existing workouts, Mobility sessions, history, schedules, profile/goals and localStorage data are preserved. The Mobility migration only changes a session when it exactly matches the known legacy filler-generated version or contains immediately repeated exercise entries.

The service worker retains the network-first/cache-busting architecture and uses only V0.29 assets.
