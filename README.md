# Forge V0.44 — Strength Progressive Overload

Built on the confirmed-working V0.41 multi-profile baseline.

## Strength progression
- Double progression is available for Strength exercises only.
- Built-in progressive strength exercises use centrally maintained defaults.
- Custom Strength exercises can configure minimum reps, maximum reps, progression type and weight increment.
- Progression targets are stored separately from actual completed workout results.
- The first completed result establishes the next target when no prior progression state exists.
- Successful targets increase reps within the configured range; reaching the maximum for every set increases weight and resets reps to the minimum.
- Failed targets are held for another attempt. Manual weight changes are retained as the working weight rather than silently reverting.
- Progression is isolated by profile and workout/exercise context.
- Configuration changes use a configuration signature so old progression state does not override newly changed exercise settings.

## History and compatibility
- Existing completed workout records are preserved.
- Existing strength history can establish a baseline when sufficient completed reps/weight data exists.
- Existing exercises without a progressive configuration remain non-progressive.
- AMRAP, EMOM, Circuit, Run/Conditioning and Mobility behaviour is unchanged.

## Versioning
- Visible version: v0.44
- Manifest: manifest_v0_42.json
- Service worker: sw_v0_42.js
- Cache: forge-v0.44


V0.44 bug fix: restored the standard strength/normal workout tracking renderer removed during V0.42 progression integration, and added progression-target prefill to that renderer.
