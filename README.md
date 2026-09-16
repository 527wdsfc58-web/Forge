# Forge V0.41 — Multi-Profile Support

Built on the confirmed-working V0.40 EMOM baseline.

## Multi-profile architecture
- Four initial profiles: Mitch, Profile 2, Profile 3, Profile 4.
- Stable profile IDs are separate from editable profile names.
- `activeProfileId` persists across navigation, refresh and PWA reopen.
- Profile-specific: goals, measurements/progress, plan/calendar, sessions/history and streaks derived from sessions.
- Shared: workout definitions, exercise library, Mobility definitions and saved/shared workout catalogue.
- Existing V0.40 personal data is migrated automatically into Profile 1 (Mitch) once, with an idempotent migration marker.
- Legacy storage keys are retained as a safety backup but are no longer the active data source after migration.
- Profile switching is blocked while an active workout is open so an in-progress session cannot be attributed to another profile.
- Profile names can be edited without changing profile IDs or personal data.

## UI
- Profile screen header is now the profile selector.
- Active profile name is shown in the main header without adding a new navigation item.
- Blank profiles use the existing empty-state patterns.

## Versioning
- Visible version: v0.41
- Manifest: manifest_v0_41.json
- Service worker: sw_v0_41.js
- Cache: forge-v0.41
