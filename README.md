# Forge V0.32

Workout Engine V2 refactor built incrementally from Forge V0.31.

- Strength keeps the existing exercise/set execution model.
- Circuit uses Circuit → Round → Exercise with round completion tracking.
- AMRAP uses a countdown, full-round counter and partial-exercise tracking.
- EMOM uses minute-driven automatic progression and supports repeating or variable minute configurations.
- For Time is a new workout type with an elapsed completion timer.
- Existing Circuit/AMRAP/EMOM workouts are interpreted through backwards-compatible legacy adapters; saved data is not migrated just to fit the new model.
- Mobility, Today, Plan, Progress, Profile, history and existing localStorage structures are preserved.
- The existing editable Rest timer remains separate from workout timing.
- Service worker/cache is versioned as forge-v0.32 and uses the existing network-first/cache-busting approach.

Deploy the four files at the root of the ZIP to GitHub Pages.
