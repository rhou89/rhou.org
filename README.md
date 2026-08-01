# rhou.org

Professional website of Ryan Hou, Ph.D. — technology leader and interdisciplinary scientist working across large-scale AI systems and quantum technologies.

## Stack

- Astro 7 and TypeScript
- Tailwind CSS 4
- Astro Content Collections for work, publications, and writing
- GitHub Actions and GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run build
npm run format:check
```

## Content

- `src/content/work/` — selected technical and leadership case notes
- `src/content/publications/` — curated publication record
- `src/content/writing/` — selected external essays
- `src/site.config.ts` — identity, positioning, links, and navigation

## Deployment

Pushes to `main` build and deploy the static site through `.github/workflows/deploy.yml`. The production canonical URL is `https://rhou.org`.

## License and attribution

See `LICENSE` and `THIRD_PARTY_NOTICES.md`.
