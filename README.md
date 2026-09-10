FORGE V0.16 DEPLOYMENT

GitHub Pages MUST have index.html at the repository root. Do not delete/rename it to index_v0_16.html for deployment.

Files included:
- index.html          -> required GitHub Pages entry point (same V0.16 app as index_v0_16.html)
- index_v0_16.html    -> version-labelled copy for identification
- manifest_v0_16.json -> version-labelled PWA manifest
- sw_v0_16.js         -> version-labelled service worker

The index.html registers sw_v0_16.js and references manifest_v0_16.json.

IMPORTANT: Replace the existing index.html in the repository. If an old V0.15 index.html remains in the repository and the V0.16 index is only present as index_v0_16.html, GitHub Pages will continue to serve V0.15.
