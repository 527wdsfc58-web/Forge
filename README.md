# Forge V0.38

Circuit workout UI update built on the confirmed-working V0.37 baseline.

## Circuit active workout
- Count-up workout timer using the existing Forge timer.
- Displays one circuit round at a time.
- Reuses existing exercise cards and completion checkboxes.
- Complete round button requires every exercise to be completed.
- Completing a round clears the exercise boxes and advances the round counter.
- Records full rounds plus exercises completed in a partial round.
- Existing Strength, AMRAP, EMOM and Run execution paths are otherwise unchanged.
- Existing localStorage data and workout IDs are preserved.

## Versioning
- Visible version: v0.38
- Manifest: manifest_v0_38.json
- Service worker: sw_v0_38.js
- Cache: forge-v0.38
