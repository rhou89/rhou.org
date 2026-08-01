# rhou.org

Professional website of Ryan (Junpeng) Hou — technology leader and interdisciplinary researcher working across large-scale AI systems and quantum technologies.

## Stack

- Astro 7 and TypeScript
- Tailwind CSS 4
- Astro Content Collections for work, publications, and writing
- GitHub Actions and GitHub Pages

## Local development

```bash
npm ci
npm run dev
```

Production checks:

```bash
npm run format:check
npm run check
npm run build
```

Node.js 22 or newer is required.

## Content

- `src/content/work/` — retained technical and leadership case notes, hidden at launch
- `src/content/publications/` — curated publication record
- `src/content/writing/` — retained external essays, hidden at launch
- `src/site.config.ts` — identity, positioning, links, and navigation

## Project documentation

- `AGENTS.md` — repository-wide instructions for future Codex tasks
- `docs/SITE_CONTEXT.md` — product, design, content, architecture, and testing context
- `docs/PROJECT_LOG.md` — ongoing task, milestone, validation, deployment, and known-issue log; update it after every task

## Deployment

Pushes to `main` build and deploy the static site through `.github/workflows/deploy.yml`. The production canonical URL is `https://rhou.org`.

## License and attribution

See `LICENSE` and `THIRD_PARTY_NOTICES.md`.
