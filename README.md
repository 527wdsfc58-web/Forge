Forge V0.19
GitHub Pages deployment package.
Keep index.html at the root of the selected Pages source.

V0.19 adds the AI Workout Generator UI and secure endpoint contract.
The browser never contains an OpenAI API key. By default it calls /api/generate-workout.
For GitHub Pages, deploy the included worker/generate-workout.js to a secure Cloudflare Worker and set the Forge AI endpoint accordingly.
