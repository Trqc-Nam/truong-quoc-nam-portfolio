# Content Management System (CMS) & Administration Guide

## 1. Administration Model

The portfolio supports two administration workflows:
1. **Visual Admin Dashboard (`/admin/`):** Best for fast content creation, uploading project thumbnails, editing text, and publishing without writing code.
2. **Direct Git Editing (`github.dev` or Local Git):** Best for bulk operations, advanced Markdown editing, and structural changes.

Both workflows commit directly to the repository's `main` branch, triggering GitHub Actions to build and deploy.

---

## 2. Using the Visual Admin Dashboard

### Step 1: Open the Dashboard
Navigate to:  
👉 **`https://Trqc-Nam.github.io/truong-quoc-nam-portfolio/admin/`**  
*(Or during local development: `http://localhost:4321/truong-quoc-nam-portfolio/admin/`)*

### Step 2: Create a GitHub Fine-Grained Personal Access Token (PAT)
Because GitHub Pages is a static host with no paid backend server, Sveltia CMS uses a secure client-side GitHub PAT flow:
1. Go to your GitHub account: **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens**.
2. Click **Generate new token**.
3. Fill in:
   - **Token name:** `Portfolio CMS Editor`
   - **Expiration:** Select preferred duration (e.g. 90 days or 1 year).
   - **Repository access:** Choose **Only select repositories** → select `Trqc-Nam/truong-quoc-nam-portfolio`.
   - **Permissions:** Under **Repository permissions**, find **Contents** and select **Read and write**.
4. Click **Generate token** and copy the resulting `github_pat_...` string.

### Step 3: Login
1. On the `/admin/` login screen, choose **GitHub Personal Access Token**.
2. Paste your token and click **Sign In**.
3. The token is stored solely in your browser's private `localStorage` and sent over HTTPS directly to `api.github.com`. It is **never** sent to any third-party server or written to the repository.

---

## 3. How to Manage Content

### 3.1 Adding a New Project
1. In the CMS sidebar, select **Dự án / Projects**.
2. Click **New Dự án / Project**.
3. Fill in the fields:
   - **ID:** URL slug in kebab-case (e.g. `medical-segmentation-unet`).
   - **Featured:** Check if you want it spotlighted on the homepage.
   - **Category:** Select AI/ML, Computer Vision, Software Engineering, etc.
   - **Title (Tiêu đề):** Provide both Vietnamese and English titles.
   - **Description (Mô tả ngắn):** Provide 2-3 sentences summarizing the project.
   - **Thumbnail (Ảnh đại diện):** Upload a 16:9 banner or screenshot.
   - **Technologies:** Add technologies used (e.g. `PyTorch`, `Python`, `Docker`).
   - **Academic Dossier (Thông tin Học thuật):** Detail your individual contribution, methodology, results, and limitations in both languages.
   - **Markdown Body:** Write your detailed technical case study.
4. Click **Save** / **Publish**.
5. Sveltia CMS pushes a Git commit. GitHub Actions automatically builds and publishes the live site in ~60-90 seconds.

### 3.2 Adding an Achievement
1. Select **Thành tích / Achievements** in the CMS sidebar.
2. Click **New Thành tích / Achievement**.
3. Fill in the title, issuing organization (e.g. `UIT – VNU-HCM`), date, category, and upload a scan or add a verification URL.
4. Click **Publish**.

### 3.3 Updating Your Academic CV
When your new CV PDF is ready:
1. Name the file: `Truong-Quoc-Nam-Academic-CV.pdf`.
2. Place it in `public/documents/`.
3. In `/admin/` under **Dữ liệu Cấu hình / Settings** → **Profile**:
   - Set **Available** to `true`.
   - Set **File Name** to `Truong-Quoc-Nam-Academic-CV.pdf`.
   - Update **Last Updated** to the current year.
4. Publish the change. The download button on the Home and Contact pages will immediately become active.

### 3.4 Updating Profile Photo
1. Place your new portrait photo (SVG, PNG, or JPG) in `public/images/profile/portrait.jpg`.
2. In `src/data/profile.json` (or via `/admin/` settings), update:
   `"portrait": { "src": "images/profile/portrait.jpg" }`.

---

## 4. Fallback Workflow: GitHub Web Editor

If you do not wish to use the `/admin/` dashboard:
1. Visit `https://github.com/Trqc-Nam/truong-quoc-nam-portfolio`.
2. Press the **`.`** (period) key on your keyboard to open **github.dev** (Visual Studio Code in the browser).
3. To add a project, create a new file in `src/content/projects/your-project.md` copying the frontmatter structure from `src/content/projects/academic-portfolio-astro.md`.
4. Commit your changes directly to the `main` branch.
