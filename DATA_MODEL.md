# Data Model & Schema Specification

## 1. Overview

Content in the portfolio is organized into two primary formats:
1. **Content Collections (Markdown with YAML Frontmatter):** For long-form narrative entities (Projects and Achievements).
2. **Structured JSON:** For single-record entities (Profile, Education, Skills, and Site Configuration).

---

## 2. Content Collections

### 2.1 Projects Collection (`src/content/projects/*.md`)

Validated by Zod in `src/content/config.ts`:

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | Yes | Unique project slug (e.g. `algo-vault-cp`). |
| `featured` | `boolean` | No (default: `false`) | Surfaces project on Home hero/showcase. |
| `published` | `boolean` | No (default: `true`) | Toggles visibility on the public site. |
| `category` | `enum` | Yes | `ai-ml`, `computer-vision`, `software-engineering`, `competitive-programming`, `academic-research`. |
| `title` | `object` | Yes | `{ vi: string, en: string }` |
| `description` | `object` | Yes | Short summary `{ vi: string, en: string }` |
| `thumbnail` | `string` | Yes | Relative path to image (e.g. `images/projects/...`). |
| `gallery` | `string[]` | No (default: `[]`) | Array of image paths. |
| `technologies`| `string[]` | Yes | Array of tech stack pills (e.g. `["C++", "STL"]`). |
| `links` | `object` | No (default: `{}`) | `{ github?: url, demo?: url, paper?: url }` |
| `timeline` | `object` | Yes | `{ startDate: "YYYY-MM", completionDate?: "YYYY-MM", status: "in-progress" \| "completed" \| "archived" }` |
| `academic` | `object` | Yes | Academic dossier containing contribution, methodology, results, and limitations. |
| `academic.individualContribution` | `object` | Yes | `{ vi: string, en: string }` |
| `academic.methodology` | `object` | No | `{ vi: string, en: string }` |
| `academic.results` | `object` | No | `{ vi: string, en: string }` |
| `academic.limitations` | `object` | No | `{ vi: string, en: string }` |
| **Markdown Body** | Markdown | Yes | Long-form technical explanation and architecture notes. |

#### Example Project File:
```markdown
---
id: "academic-portfolio-astro"
featured: true
published: true
category: "software-engineering"
title:
  vi: "Hệ thống Portfolio Học thuật & Quản trị Nội dung Không chi phí"
  en: "Zero-Cost Academic Portfolio & Content Management Architecture"
description:
  vi: "Kiến trúc website học thuật song ngữ tĩnh hiệu năng cao..."
  en: "A high-performance bilingual static academic portfolio..."
thumbnail: "images/projects/portfolio-thumb.svg"
technologies:
  - "Astro"
  - "TypeScript"
  - "Sveltia CMS"
links:
  github: "https://github.com/Trqc-Nam/truong-quoc-nam-portfolio"
timeline:
  startDate: "2026-11"
  status: "completed"
academic:
  individualContribution:
    vi: "Đảm nhận toàn bộ chu trình kỹ thuật..."
    en: "Single-handedly engineered the information architecture..."
---
### Detailed write-up here...
```

---

### 2.2 Achievements Collection (`src/content/achievements/*.md`)

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | Yes | Unique identifier. |
| `published` | `boolean` | No (default: `true`) | Visibility flag. |
| `category` | `enum` | Yes | `awards`, `scholarships`, `competitions`, `certificates`, `academic-activities`, `research-activities`. |
| `title` | `object` | Yes | `{ vi: string, en: string }` |
| `organization`| `string` | Yes | Issuing entity (e.g. UIT, VNU-HCM). |
| `date` | `string` | Yes | Date of issuance (`YYYY-MM`). |
| `description` | `object` | Yes | Context and criteria `{ vi: string, en: string }` |
| `verificationUrl` | `string (url)` | No | Public verification URL. |
| `evidenceImage` | `string` | No | Path to scanned certificate/decision. |

---

## 3. Structured JSON Models

### 3.1 Profile Data (`src/data/profile.json`)
Stores owner identity, UIT program affiliation, career directions, contact coordinates, portrait image references, and CV availability flags.

### 3.2 Education Timeline (`src/data/education.json`)
Stores array of educational qualifications:
```json
[
  {
    "id": "uit-cs-undergraduate",
    "institution": { "vi": "...", "en": "..." },
    "degree": { "vi": "...", "en": "..." },
    "major": { "vi": "...", "en": "..." },
    "period": { "vi": "2026 — Hiện tại", "en": "2026 — Present" },
    "status": { "vi": "Đang theo học", "en": "Undergraduate" },
    "description": { "vi": "...", "en": "..." },
    "relevantCoursework": [
      { "vi": "Cấu trúc Dữ liệu & Giải thuật nâng cao", "en": "Data Structures & Advanced Algorithms" }
    ]
  }
]
```

### 3.3 Skills Inventory (`src/data/skills.json`)
Organized by category, connecting skill entries to functional project IDs:
```json
[
  {
    "id": "cpp",
    "name": "C++",
    "category": "programming-languages",
    "description": { "vi": "...", "en": "..." },
    "evidenceProjectIds": ["algo-vault-cp"]
  }
]
```
