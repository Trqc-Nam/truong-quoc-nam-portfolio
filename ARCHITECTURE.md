# System Architecture Specification

## 1. Architectural Overview

The portfolio system is architected as an immutable, static, content-driven academic web application built upon **Astro**. The single source of truth is the GitHub Git repository (`Trqc-Nam/truong-quoc-nam-portfolio`).

```
+-------------------------------------------------------------+
|                      Git Repository                         |
|   (Markdown Collections, JSON Structured Data, Static Media)|
+-------------------------------------------------------------+
        |                                             ^
        | Git Push (main)                             | Commit via GitHub REST API
        v                                             |
+--------------------------+              +-------------------------+
| GitHub Actions CI Pipeline|              |   Client-side Git CMS   |
| 1. npm ci                |              |        (/admin/)        |
| 2. npm run check         |              | - Sveltia / Decap Engine|
| 3. npm run build         |              | - Fine-Grained PAT Auth |
| 4. deploy-pages          |              | - In-Browser LocalStorage
+--------------------------+              +-------------------------+
        |
        v
+-------------------------------------------------------------+
|               GitHub Pages Edge CDN                         |
|   - https://Trqc-Nam.github.io/truong-quoc-nam-portfolio/  |
|   - Pre-rendered HTML, Scoped CSS, Sub-1KB JS Chunks        |
+-------------------------------------------------------------+
```

---

## 2. Core Architectural Pillars

### 2.1 Pure Static Site Generation (SSG)
All 22 public pages are compiled at build time into pure HTML, CSS, and minimal vanilla JavaScript.
- **No SSR Server:** Eliminates server maintenance costs, database patching, cold starts, and backend vulnerability vectors.
- **Zero Client Hydration Overhead:** Interactive components (category filter buttons, live search, mobile menu) utilize native browser DOM APIs rather than heavy React or Vue runtimes.
- **Sub-1KB JS Footprint:** The entire client-side script payload for the home and listing pages is less than 1 kilobyte gzipped.

### 2.2 Dual-Language Architecture (i18n)
- **Directory Strategy:** Pure static folder separation (`/vi/` and `/en/`).
- **Synchronized Route Switching:** The `LanguageSwitcher` and `switchLanguage()` utility inspect the URL structure and transition the visitor to the identical page in the alternate language without bouncing back to root.
- **Root Redirection:** The root URL (`/`) serves a standards-compliant static redirect to `/vi/` (the owner's native language) using both `<meta http-equiv="refresh">` and client-side fallback.
- **Hreflang & Canonical Links:** Every compiled page embeds `<link rel="alternate" hreflang="...">` tags pointing to both localized versions, plus `x-default`.

### 2.3 Base Path Resiliency
Because the repository is hosted as a GitHub project site (`https://Trqc-Nam.github.io/truong-quoc-nam-portfolio/`), hardcoded absolute URLs (`/images/...`) would fail.
- All internal navigation links, image paths, stylesheet references, and metadata URLs use `import.meta.env.BASE_URL` or helper functions in `src/utils/paths.ts`.
- `astro.config.mjs` declares:
  ```js
  site: 'https://Trqc-Nam.github.io',
  base: '/truong-quoc-nam-portfolio/',
  trailingSlash: 'always',
  build: { format: 'directory' }
  ```

### 2.4 Content Decoupling & Zod Type Safety
Content is completely decoupled from presentation components:
- **Projects & Achievements:** Stored in `src/content/projects/*.md` and `src/content/achievements/*.md` with frontmatter validated against Zod schemas in `src/content/config.ts`.
- **Dynamic Ingestion:** Adding a new project markdown file automatically creates its detail page, inserts it into category filters, updates the project counter, and registers it in the search index without modifying any `.astro` page files.

---

## 3. Data Flow

### 3.1 Reader Request Flow
1. Visitor navigates to `https://Trqc-Nam.github.io/truong-quoc-nam-portfolio/`.
2. Static redirect lands on `/truong-quoc-nam-portfolio/vi/`.
3. GitHub Pages CDN delivers pre-rendered HTML and cached static assets.
4. Client executes tiny inline search/filtering scripts locally in memory.

### 3.2 Content Authoring Flow
1. Administrator navigates to `https://Trqc-Nam.github.io/truong-quoc-nam-portfolio/admin/`.
2. Sveltia CMS loads the SPA editor directly from unpkg CDN into the browser.
3. Administrator authorizes with a GitHub Personal Access Token (PAT).
4. Sveltia CMS fetches repository trees directly from `https://api.github.com`.
5. Administrator edits project frontmatter or uploads media.
6. On "Publish", Sveltia CMS generates a Git commit and pushes directly to `main`.
7. GitHub Actions detects the push, typechecks the codebase, builds the static bundle, and updates GitHub Pages within 60-90 seconds.
