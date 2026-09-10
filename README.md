# Workout App V0.1

Mobile-first static prototype for GitHub Pages or Cloudflare Pages.

## Deploy with GitHub Pages

1. Create a new **public** GitHub repository, e.g. `workout-app`.
2. Upload `index.html`, `README.md`, and `.nojekyll` from this folder to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. GitHub will publish the site at a URL like `https://YOUR-USERNAME.github.io/workout-app/`.

GitHub Pages supports static HTML/CSS/JavaScript files. The top-level `index.html` is the entry point.

## Deploy with Cloudflare Pages

1. Create a GitHub repository and push these files.
2. In Cloudflare, go to **Workers & Pages → Create application → Pages → Import an existing Git repository**.
3. Production branch: `main`.
4. Build command: `exit 0`.
5. Build output directory: `.`
6. Deploy.

Cloudflare will provide a `*.pages.dev` URL.

## Local testing

You can open `index.html` directly, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` on the computer running the server.
