# Forge V0.45 — Exercise Library + Workout Exercise Reordering

Built on the confirmed-working V0.44 Strength Set Tick Fix / progressive overload baseline.

## Exercise library expansion
- Added explicit barbell variants including Barbell Bench Press, Barbell Incline Bench Press, Barbell Overhead Press, Barbell Front Squat, Barbell RDL, Barbell Romanian Deadlift, Barbell Row, Barbell Bulgarian Split Squat, Barbell Reverse Lunge, Barbell Walking Lunge, Barbell Good Morning, Barbell Shrug, Barbell Curl and Close-Grip Bench Press.
- Added additional dumbbell variants including DB RDL, DB Romanian Deadlift, DB Row, DB Incline Press, DB Bulgarian Split Squat, DB Reverse Lunge, DB Walking Lunge and DB Good Morning.
- Added additional cable/core options including Cable Chest Press, Cable Lateral Raise, Cable Triceps Pushdown, Cable Curl, Plank, Dead Bug and Hanging Knee Raise.
- New strength exercises have centrally defined progressive-overload defaults where appropriate.
- Existing custom exercises and workout definitions are unchanged.

## Workout exercise reordering
- Added stable Up and Down controls to each exercise in the workout editor.
- Moving an exercise changes its position in the workout immediately.
- The saved workout order follows the editor order.
- Up is unavailable logically at the top and Down at the bottom; no drag-and-drop dependency was introduced.
- Reordering does not change exercise configuration, history, IDs or progression state.
- Existing workouts are automatically compatible because their current array order is preserved.

## Versioning
- Visible version: v0.45
- Manifest: manifest_v0_45.json
- Service worker: sw_v0_45.js
- Cache: forge-v0.45
