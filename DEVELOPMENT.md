# Developer Contribution & Maintenance Guide

## 1. Local Development Environment

### 1.1 Requirements
- Node.js version 20 LTS or higher
- Git
- Modern web browser

### 1.2 Commands
```bash
# Install packages
npm install

# Start local Astro server (supports hot-module reloading)
npm run dev

# Run TypeScript typechecks
npm run check

# Compile production static distribution
npm run build

# Preview the compiled static distribution
npm run preview
```

---

## 2. Codebase Organization

```
src/
├── components/          # Reusable UI components
│   ├── cards/           # ProjectCard, AchievementCard, SkillGroup
│   ├── common/          # Navigation, Header, Footer, LanguageSwitcher, EmptyState
│   └── timeline/        # EducationTimeline
├── content/             # Astro content collections
│   ├── config.ts        # Zod collection schemas
│   ├── projects/        # Project markdown case studies
│   └── achievements/    # Verified achievements
├── data/                # JSON singletons
│   ├── profile.json     # Owner identity & bio
│   ├── education.json   # Coursework & university program
│   ├── skills.json      # Structured skill items linked to project IDs
│   └── site-settings.json # Navigation items and global titles
├── layouts/             # PageLayout, BaseLayout, ProjectDetailLayout
├── styles/              # reset.css, variables.css, global.css
├── types/               # Shared TypeScript interfaces
├── utils/               # i18n dictionaries, URL helpers
└── pages/               # File-based routing (/vi/ and /en/)
```

---

## 3. Styling & Design Token Standards

The styling architecture uses **CSS Custom Properties** (variables) defined in `src/styles/variables.css`.

### Principles:
- **Never hardcode hex color codes** inside Astro components. Use `var(--color-primary)`, `var(--color-accent)`, `var(--color-bg-subtle)`, etc.
- **Academic Palette:** Deep Academic Navy (`#0F172A`) for dominant elements, Clean White (`#FFFFFF`) background, Slate (`#E2E8F0`) borders, and Royal Blue (`#2563EB`) accents.
- **Accessibility:** Maintain minimum WCAG AA contrast ratio (4.5:1 for body copy).
- **Reduced Motion:** All transitions must honor the `prefers-reduced-motion` media query configured in `src/styles/global.css`.

---

## 4. Bilingual Translation Workflow

When adding new UI text:
1. Open `src/utils/i18n.ts`.
2. Add the key and its translations under both `UI_TRANSLATIONS.vi` and `UI_TRANSLATIONS.en`.
3. Reference it in your component using `const ui = getUi(currentLocale)`.
4. Ensure both language variants maintain the same informational depth.
