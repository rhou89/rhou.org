# rhou.org

Professional website of Ryan (Junpeng) Hou — technology leader and interdisciplinary researcher working across large-scale AI systems and quantum technologies.

## Stack

- Astro 7 and TypeScript
- Tailwind CSS 4
- Astro Content Collections for news, publications, work, and writing
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

For an existing checkout, `npm ci` is only needed when dependencies are missing
or `package-lock.json` changes. Open the development server at
`http://localhost:4321` and use browser responsive mode for desktop and mobile
checks.

Before committing a change, inspect the scope and run the production checks:

```bash
git status -sb
git diff
npm run format:check
npm run check
npm run build
```

When a live update is intended, commit only the relevant files and push `main`.
The push triggers the `Deploy to GitHub Pages` workflow; the task is not
released until both its build and deploy jobs succeed.

## Content

- `src/content/work/` — retained technical and leadership case notes, hidden at launch
- `src/content/publications/` — curated publication record
- `src/content/news/` — dated professional updates with categories and source links
- `src/content/writing/` — retained external essays, hidden at launch
- `src/site.config.ts` — identity, positioning, links, and navigation

## Project documentation

- `AGENTS.md` — repository-wide instructions for future Codex tasks
- `docs/SITE_CONTEXT.md` — product, design, content, architecture, and testing context
- `docs/PROJECT_LOG.md` — ongoing task, milestone, validation, deployment, and known-issue log; update it after every task

Future agents should begin with `AGENTS.md`; it directs them to the two context
documents and defines the required task-closing and release workflow. Keep these
files committed so a new thread or fresh checkout can inherit the context
without relying on chat history.

## Deployment

Pushes to `main` build and deploy the static site through `.github/workflows/deploy.yml`. The production canonical URL is `https://rhou.org`.

## License and attribution

See `LICENSE` and `THIRD_PARTY_NOTICES.md`.
