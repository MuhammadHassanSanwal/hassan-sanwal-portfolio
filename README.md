# Hassan Sanwal — Portfolio

A brutalist-editorial personal portfolio for **Muhammad Hassan Naseem Sanwal** (Hassan Sanwal), built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Fully responsive, accessibility-aware, and ships nearly zero JavaScript.

![Portfolio screenshot placeholder](./public/favicon.svg)

---

## Design

- **Aesthetic:** "Field notes" / personal journal. Warm cream paper background, rust-ink accent, humanist sans with a handwritten script used for margin notes and signatures. Light by default; dark mode reads like candlelight on paper.
- **Type:** `Instrument Sans` (display + body, warm humanist), `Caveat` (handwritten accents, margin notes), `JetBrains Mono` (small technical labels).
- **Motion:** Intentionally restrained — a calm fade-in on scroll, a single pulsing "available" dot. No floating orbs, no gradient shifts, no marquee. Respects `prefers-reduced-motion`.
- **Layout:** Asymmetric journal pages. Each section has a left margin containing a page number (`p.02`) and/or a handwritten note (`things I think about`). Main content sits in a 10-col reading block. Projects read like numbered journal entries rather than a bento grid. Closing section uses a `P.S. —` salutation in handwriting.

All design tokens live in [`src/styles/global.css`](./src/styles/global.css) under `@theme`.

---

## Project structure

```
/
├── public/                 # Static assets (favicon, resume PDF, OG images)
├── src/
│   ├── components/         # Reusable section components (Hero, Projects, ...)
│   ├── data/
│   │   └── content.ts      # ★ SINGLE SOURCE OF TRUTH — edit site content here
│   ├── layouts/
│   │   └── Base.astro      # HTML shell, SEO, global scripts
│   ├── pages/
│   │   └── index.astro     # Composes the homepage
│   └── styles/
│       └── global.css      # Tailwind + design tokens + utilities
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Editing content

**Always start here:** [`src/data/content.ts`](./src/data/content.ts).

That one file drives every section — name, bio, projects, experience, education, skills, "now" page, contact info, socials, and the resume link. Changing the site is almost never about editing components; it's about editing that file.

Quick tasks:

| Task                          | What to edit                                        |
| ----------------------------- | --------------------------------------------------- |
| Add a project                 | Append to `projects` array                          |
| Add a job/role                | Append to `experience` array                        |
| Update "now" section          | Edit `now.items` and bump `now.updated`             |
| Add social links              | Uncomment / append to `site.socials`                |
| Hook up résumé download       | Drop a PDF in `/public` and set `site.resumeUrl`    |
| Change palette                | Edit `@theme` colors in `src/styles/global.css`     |

---

## Getting started

Requires **Node.js 20.10+** (you have 24.x — all good).

```bash
npm install          # install deps
npm run dev          # start dev server on http://localhost:4321
npm run build        # production build to ./dist
npm run preview      # preview the production build locally
```

---

## Deploying

### Vercel (recommended — zero config)

1. Push this repo to GitHub.
2. Import it on [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Astro. Accept defaults and deploy.

Custom domain: Vercel → Project → Settings → Domains.

### GitHub Pages

Astro builds to static HTML, so GitHub Pages works great. Two options:

**Option A — GitHub Action (recommended)**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then enable GitHub Pages in repo **Settings → Pages → Source: GitHub Actions**.

If you're deploying to `https://<user>.github.io/<repo>/` (a project page, not a user/org site), also add this to `astro.config.mjs`:

```js
export default defineConfig({
  site: "https://<user>.github.io",
  base: "/<repo>/",
  // ...
});
```

**Option B — manual**

```bash
npm run build
# commit the dist/ folder to a gh-pages branch, or use npx gh-pages -d dist
```

---

## Accessibility & performance

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `section`), skip-to-content link, aria-expanded on the mobile nav toggle.
- Respects `prefers-reduced-motion` — marquee, pulse and reveal animations turn off.
- Ships essentially no JavaScript (reveal observer, clock ticker, nav toggle — everything else is static HTML + CSS).
- Google Fonts are preconnected and loaded `display=swap`. For even faster loads, self-host the font files in `/public/fonts` and swap the `<link>` in `Base.astro`.

---

## License

Personal work — all rights reserved © Muhammad Hassan Naseem Sanwal.
