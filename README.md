# Forge V0.47 — True Grit Sydney 10 km Training Plan

Built from the V0.46 source. Existing multi-profile data, workout history, goals, progression state, mobility library, PWA behaviour and Mia's postpartum program are preserved.

## Mitch — 20-week True Grit plan
- Start: Monday 5 October 2026
- End: Sunday 21 February 2027
- Duration: 20 weeks
- Frequency: 5 structured sessions/week
- Goal event: True Grit Sydney 10 km, late February 2027
- Focus: aerobic endurance, grip/pulling strength, carries, crawling/climbing strength, lower-body durability and run-to-obstacle conditioning.
- Final two weeks reduce workload before race week.

## New OCR exercise library
Adds running intervals, trail/tempo/hill running, dead/towel hangs, scapular pull-ups, bear/low crawls, carry variations and box step-overs.

## New True Grit workouts
Includes base strength, strength + grip, grip/carry, run + grip, run + legs, hill/carry, crawl/climb, obstacle engine, 4 km/6 km/8 km race simulations and taper sessions.

## Alphabetical ordering audit
Alphabetical sorting is now enforced for the Exercise Library, Add Exercise picker, workout selection in the planner, workout filter types and profile selector. The Workouts library and Mobility exercise catalogs already sorted alphabetically and retain that behaviour.

## Migration safety
- `forgeTrueGritLibraryV1`
- `forgeMitchTrueGritPlanV1`

The new workout library and Mitch plan are seeded idempotently. Existing history is not reset. Existing schedule entries outside the 20-week plan are retained; program workout entries are added to the plan dates. Existing mobility selections on those dates are preserved.

## Versioning
- Visible version: v0.47
- Manifest: `manifest_v0_47.json`
- Service worker: `sw_v0_47.js`
- Cache: `forge-v0.47`
