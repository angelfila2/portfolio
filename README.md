# Personal Portfolio Website

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222222?logo=github-pages&logoColor=white)](https://angelfila2.github.io/portfolio/)

This repository contains my personal portfolio website, built to introduce myself as an aspiring software engineer / backend developer and to showcase my projects, technical skills, and continuous learning journey.

🔗 **Live Website:** [angelfila2.github.io/portfolio](https://angelfila2.github.io/portfolio/)

---

## Table of Contents

- [Getting Started & Installation](#getting-started--installation)
  - [Prerequisites](#prerequisites)
  - [Installation & Running Locally](#installation--running-locally)
  - [Available Scripts](#available-scripts)
- [Purpose & Vision](#purpose--vision)
- [Design & Development Process](#design--development-process)
- [Tech Stack](#tech-stack)
- [Learning Journey](#learning-journey)
- [Contact](#contact)

---

## Getting Started & Installation

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and npm installed:

```bash
node -v
npm -v
```


## Project case studies

Project cards now open `/portfolio/#/projects/<slug>`. React Router's HashRouter
keeps direct links and refreshes compatible with GitHub Pages static hosting.
The Vite base remains `/portfolio/`.

- `src/data/projects.js`: project descriptions, technology lists, gallery assets,
  key features and repository links.
- `src/pages/ProjectPage.jsx`: the reusable case-study layout.
- `src/components/ScreenshotGallery.jsx`: manual arrows, keyboard navigation,
  thumbnails, captions and full-size image links; no automatic playback.
- `src/pages/HomePage.jsx`: homepage content and section scroll restoration.
- `src/project-pages.css`: case-study and gallery styling, including mobile layouts.
- `public/projects/supportflow/`: real screenshots captured from a local instance
  using an isolated synthetic ticket database, plus the corgi mascot.

SupportFlow is the featured case study. Other projects share the detail layout;
product screenshots can be added to their `gallery` arrays when available. No
screenshots or live deployment claims were invented for those projects. The room
booking stack and future calendar scope were corrected against its public README.
The ShopMore repository is not publicly accessible, so its entry retains only the
existing portfolio summary. Detailed engineering/evaluation notes remain in the project repositories.

### Local checks and publishing

```powershell
npm ci
npm run dev
npm run build
npm run lint
npm run deploy
```

The existing Pages source is the `gh-pages` branch. `npm run deploy` publishes the
built `dist/` directory there; commit source changes to `main` separately. New
assets use `import.meta.env.BASE_URL` so images resolve under `/portfolio/`.
GitHub Pages serves this portfolio; it does not run SupportFlow's FastAPI/Ollama
backend.


Project detail pages follow a short format: project photos, an overview, key
features and technologies used. SupportFlow has a four-image gallery. Other
projects show a short availability note until real screenshots are supplied;
workflow illustrations on homepage cards are not presented as product photos.
