# Security & Data Integrity Policy

## 1. Zero-Cost, Zero-Secret Threat Model

The portfolio operates on an uncompromising zero-leak credential architecture designed for completely free static hosting on GitHub Pages.

### Strict Guarantees:
1. **No Embedded Secrets:** There are **zero** API keys, Personal Access Tokens, OAuth client secrets, or private keys committed to this repository or bundled into compiled frontend code.
2. **Static Asset Security:** GitHub Pages serves static files only. There is no active application server (Node.js/PHP/Python) on the live host to compromise, exploit, or crash.
3. **Admin Token Isolation:** When using the visual CMS at `/admin/`, your GitHub Fine-Grained Personal Access Token (PAT) resides strictly in your browser's private `localStorage`. It is communicated over TLS directly to GitHub's official REST API (`api.github.com`). It is never stored on disk, never sent to external third-party telemetry, and never visible to visitors.
4. **Least-Privilege Token Permissions:** The administrator PAT requires only repository-scoped `Contents: Read and write` access to `Trqc-Nam/truong-quoc-nam-portfolio`. It has no access to account settings, billing, or other repositories.

---

## 2. Threat Analysis & Mitigations

| Threat Vector | Severity | Mitigation Implemented |
| :--- | :--- | :--- |
| **Unauthorized write access to site** | High | `/admin/` contains no write credentials. Any commit request without a valid GitHub PAT with write permissions is rejected by GitHub with HTTP 401/403. |
| **Cross-Site Scripting (XSS) via Markdown** | Medium | Markdown files are parsed and sanitized at compile-time by Astro. Malicious raw scripts are neutralized before static HTML generation. |
| **Secret Exfiltration from Repo** | Critical | `.gitignore` explicitly excludes `.env`, `node_modules/`, `.tools/`, and local caches. GitHub secret scanning remains active on the repository. |
| **Build Tampering / Supply Chain** | Medium | Dependencies are strictly pinned in `package.json`. GitHub Actions runs in ephemeral Ubuntu virtual machines with read-only repository checkout. |
| **Broken Live Deployment** | Low | GitHub Actions employs `needs: build`. If tests, linting, or Astro compilation fails, the deployment step does not execute and the live site remains unchanged. |

---

## 3. Disaster Recovery & Rollback Procedure

Because all content is stored as Git commits in the repository, any accidental deletion or corruption can be reverted in seconds:

### Rollback via GitHub Web Interface:
1. Go to repository **Commits**: `https://github.com/Trqc-Nam/truong-quoc-nam-portfolio/commits/main`.
2. Find the last known good commit.
3. Click the three dots `...` next to the commit and select **Revert this commit** (or create a pull request reverting changes).
4. GitHub Actions will rebuild and deploy the reverted state automatically.

### Rollback via Git CLI:
```bash
# View recent commits
git log --oneline -n 5

# Revert the latest commit
git revert HEAD

# Push back to main
git push origin main
```
