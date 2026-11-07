# GitHub Pages Deployment & CI/CD Guide

## 1. Prerequisites on GitHub

To deploy this portfolio to GitHub Pages:
1. Ensure the repository name is `truong-quoc-nam-portfolio` under your GitHub account (`Trqc-Nam`).
2. Navigate to your repository on GitHub:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - (Do NOT select "Deploy from a branch").

---

## 2. GitHub Actions Workflow Architecture

The automated deployment pipeline is defined in `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    name: Build & Verify
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Typecheck and Build Astro site
        run: npm run check && npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    name: Deploy to GitHub Pages
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Safety Guarantees:
- **Build Isolation:** If TypeScript fails typecheck or Astro fails to compile, the job fails immediately.
- **Atomic Deployment:** The `deploy` step depends on `needs: build`. A broken build will **never** replace the last working deployment on GitHub Pages.
- **Built-in GitHub Tokens:** Uses GitHub Actions native OIDC tokens (`permissions: pages: write, id-token: write`). No Personal Access Tokens or secret keys need to be added to repository secrets for deployment.

---

## 3. Initial Push to GitHub

To push your repository to GitHub for the first time:

```bash
# Check status
git status

# Stage all files
git add .

# Create initial production commit
git commit -m "feat: initial production-ready academic portfolio"

# Push to main branch
git branch -M main
git push -u origin main
```

Within approximately 60 to 90 seconds, your site will be live at:  
👉 **`https://Trqc-Nam.github.io/truong-quoc-nam-portfolio/`**

---

## 4. Custom Domain Setup (Optional, 0 VND)

If you acquire a personal domain in the future (e.g. `truongquocnam.com`):
1. Add a `CNAME` file in `public/CNAME` with your domain name.
2. In `astro.config.mjs`, update:
   - `site: 'https://truongquocnam.com'`
   - `base: '/'`
3. Configure your DNS provider with GitHub Pages IP addresses (`185.199.108.153`, etc.).
