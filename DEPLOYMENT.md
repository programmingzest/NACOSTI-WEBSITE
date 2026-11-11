# Deployment

## Automatic deployment

The GitHub Actions workflow builds the site and deploys it to GitHub Pages whenever a commit reaches `main`. Pull requests targeting `main` run the build validation without deploying. A manual run is also available from the workflow page.

Pages CMS saves commit content changes directly to `main`, so those saves trigger the same build-and-deploy workflow automatically.

Before the first deployment, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

## Changing the deployment target

The build job produces the `build` artifact. To use Vercel, Netlify, or Cloudflare Pages, replace only the workflow's `deploy` job with that provider's deployment action and credentials. Keep the `build` job unchanged.

## Local checks

To build and serve the production output locally:

```bash
npm run local-deploy
```

To run the same dependency installation, lint, build, and artifact checks used for local validation:

```bash
./scripts/validate-build.sh
```
