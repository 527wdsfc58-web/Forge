# Forge V0.46 — Postpartum Workout Library & Mia's 12-Week Program

Built from the V0.45 source baseline. This release extends the existing Forge PWA rather than rebuilding it.

## Architecture preserved
- Existing shared workout and exercise libraries remain intact.
- Existing profile-specific goals, measurements, schedules, sessions and progression state remain in the V0.41 multi-profile structure.
- Mitch's existing profile/history is not reset.
- Mia is added as `profile_mia` with her own plan and schedule.
- The 50 postpartum workouts are normal Forge workout definitions with additional optional metadata (`postpartum`, `category`, `tags`, `phase`, `description`, `warmup`, `intensity`, `scaling`, `safetyNote`, `equipment`).
- Existing workout execution, timers and history continue to use the existing workout/session model.

## Postpartum library
50 workouts:
- 10 Strength
- 10 AMRAP
- 10 EMOM
- 10 Circuit
- 10 Recovery / low-impact conditioning, core and mobility

All are 15–30 minutes and exclude running, jumping, skipping, burpees, high-impact plyometrics and maximal/heavy lifting from the library.

## Mia plan
- Profile: Mia
- Start: Monday 28 September 2026
- End: Sunday 20 December 2026
- 12 weeks
- 4 structured sessions/week: Monday, Tuesday, Thursday, Friday
- Wednesday/Saturday/Sunday are not scheduled by this program.
- Weeks 1–4: Rebuild and reconnect
- Weeks 5–8: Build strength and capacity
- Weeks 9–12: Develop general fitness

The plan references workout IDs/names rather than duplicating workout definitions.

## Migration markers
- `forgePostpartumLibraryV1`
- `forgeMiaPostpartumPlanV1`

The Mia schedule migration is idempotent after its first successful creation and does not overwrite later user edits to the plan.

## Versioning
- Visible version: v0.46
- Manifest: `manifest_v0_46.json`
- Service worker: `sw_v0_46.js`
- Cache: `forge-v0.46`
