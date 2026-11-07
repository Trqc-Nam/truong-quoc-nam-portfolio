# Trương Quốc Nam — Personal Academic & Professional Portfolio

[![Deploy Portfolio to GitHub Pages](https://github.com/Trqc-Nam/truong-quoc-nam-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Trqc-Nam/truong-quoc-nam-portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-2563EB.svg)](https://Trqc-Nam.github.io/truong-quoc-nam-portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Cost](https://img.shields.io/badge/Operational_Cost-0_VND-success.svg)](SECURITY.md)

Production-quality, bilingual (Vietnamese/English) academic and professional portfolio website for **Truong Quoc Nam (Trương Quốc Nam)**, First-year Computer Science undergraduate at the **University of Information Technology, Vietnam National University Ho Chi Minh City (UIT – VNU-HCM)**.

---

## 🏛️ Academic & Engineering Highlights

- **Astro SSG Engine:** Zero runtime JavaScript overhead for page content. Maximum speed, security, and battery efficiency.
- **Academic Minimalism:** White background with Deep Academic Navy (`#0F172A`) palette, structured typography, generous whitespace, and zero intrusive animations.
- **Strict Evidence Standard:** Skills are connected to functional project repositories rather than arbitrary percentage bars.
- **Dual-Language Routing:** Native Vietnamese (`/vi/`) and English (`/en/`) routes with synchronized page switching, localized metadata, and full `hreflang` / `canonical` SEO compliance.
- **Zero-Cost Administration:** Integrated client-side Git CMS ([Sveltia CMS](https://github.com/sveltia/sveltia-cms) compatible with Decap CMS) operating directly over the GitHub REST API. No backend, database, or paid OAuth gateway required (0 VND operational cost).
- **Subpath Resilient:** Engineered specifically for GitHub Pages project subpaths (`/truong-quoc-nam-portfolio/`).

---

## 🌐 Site Structure & Routes

| Section | Vietnamese Route | English Route | Content Model |
| :--- | :--- | :--- | :--- |
| **Home** | `/vi/` | `/en/` | Profile bio, featured projects, academic interests, CV download |
| **About & Education** | `/vi/about/` | `/en/about/` | UIT coursework, education timeline, career directions, goals |
| **Projects** | `/vi/projects/` | `/en/projects/` | AI/ML, Computer Vision, Software Eng., CP case studies & filters |
| **Achievements** | `/vi/achievements/` | `/en/achievements/` | Verifiable awards, scholarships, competitions (evidence-based) |
| **Skills** | `/vi/skills/` | `/en/skills/` | Evidence-linked languages, frameworks, AI/ML tools |
| **Contact & CV** | `/vi/contact/` | `/en/contact/` | Verified academic email, GitHub profile, CV PDF download |
| **Admin Dashboard** | `/admin/` | `/admin/` | Visual content editor committing directly to GitHub |

Root route (`/`) automatically redirects to `/vi/` (default language).

---

## 🛠️ Technology Stack

- **Framework:** [Astro 4](https://astro.build/) (Static Site Generation)
- **Language:** TypeScript 5 (Strict Mode)
- **Validation:** Zod (Type-safe Content Collections)
- **Styling:** Vanilla CSS Variables & Modern CSS Reset (Academic Design System)
- **Icons:** Lucide SVG icons
- **CMS:** Sveltia CMS (Decap-compatible Git CMS)
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages (Static CDN)

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v20+ LTS recommended)
- npm or pnpm
- Git

### Installation
```bash
# Clone repository
git clone https://github.com/Trqc-Nam/truong-quoc-nam-portfolio.git
cd truong-quoc-nam-portfolio

# Install dependencies
npm install

# Start local dev server
npm run dev
```
Open `http://localhost:4321/truong-quoc-nam-portfolio/` in your browser.

### Typecheck and Build
```bash
# Verify TypeScript types
npm run check

# Compile production static distribution
npm run build

# Preview static distribution locally
npm run preview
```

---

## 📚 Technical Documentation Index

For in-depth architecture and operational guides, consult:
- [**ARCHITECTURE.md**](ARCHITECTURE.md) — System design, data flow, bilingual architecture, and base-path engineering.
- [**DATA_MODEL.md**](DATA_MODEL.md) — TypeScript interfaces, Zod schemas, and content file structures.
- [**DEPLOYMENT.md**](DEPLOYMENT.md) — GitHub Actions CI/CD setup, Pages deployment configuration, and DNS.
- [**ADMIN_GUIDE.md**](ADMIN_GUIDE.md) — How to use `/admin/`, GitHub PAT authorization, and adding projects/achievements.
- [**SECURITY.md**](SECURITY.md) — Zero-leak credentials policy, threat modeling, and disaster recovery.
- [**DEVELOPMENT.md**](DEVELOPMENT.md) — Developer setup, styling conventions, and extending components.

---

## 📜 Academic Integrity & License

Created and maintained by **Trương Quốc Nam**.  
Source code released under the [MIT License](LICENSE). Academic content, research writings, and profile representations are copyrighted © 2026 Trương Quốc Nam.
