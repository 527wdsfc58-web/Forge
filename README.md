# Forge V0.39

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
- Visible version: v0.39
- Manifest: manifest_v0_39.json
- Service worker: sw_v0_39.js
- Cache: forge-v0.39

- Circuit workouts now support a targeted number of rounds with a visual round tracker; completing the final target round automatically completes the workout. Existing circuits without an explicit round target derive it from their existing exercise set counts.

- EMOM execution updated to a minute-driven tracker: one minute per exercise occurrence, automatic minute advancement, pause/resume/reset, progress tracking, and completion history.
- AMRAP/Circuit no-previous-result text removed; the existing empty state remains visual.
