# Forge v0.27

GitHub Pages deployment package.

Upload the contents of this folder to the root of the GitHub Pages branch/repository. Keep `index.html`, `manifest_v0_27.json`, and `sw_v0_27.js` together.

This release is a cache/deployment fix based on Forge v0.26. The application functionality and stored workout/Mobility data architecture are unchanged. The service worker uses the `/Forge/`-safe relative registration path, a network-first fetch strategy, a versioned v0.27 cache, immediate activation/control, and removal of older Forge caches.
