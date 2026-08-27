# Repository instructions

These instructions apply to the entire repository. Read
`docs/SITE_CONTEXT.md` and `docs/PROJECT_LOG.md` before making material product,
content, design, routing, or deployment changes.

## Product invariants

- This is Ryan Hou's durable professional website, not a blog, job-seeking
  landing page, or growth-marketing site.
- It should work as the link used on a resume/CV, LinkedIn, event biography, or
  speaker page, while leaving room for future positioning as a senior technical
  leader, professor, or founder.
- The visual voice is quiet, editorial, precise, and credible. Avoid oversized
  hero statements, KPI tiles, neon/cyber styling, loud gradients, dense card
  grids, and aggressive calls to action.
- Breadth should read as a connected practice across systems and science, not as
  frequent switching between unrelated tracks.

## Launch information architecture

Public navigation is intentionally limited to:

- `/` — home
- `/research/` — research themes and connected research program
- `/publications/` — publication record
- `/news/` — selected recognition, talks, media, and research developments
- `/about/` — background and working style
- `/cv/` — concise web CV

`/work/`, `/work/*`, and `/writing/` are retained in source for future polish,
but are not part of the initial public product. They must remain absent from
desktop navigation, mobile navigation, homepage links, CV links, and the
sitemap. They must retain `noindex, nofollow`. Do not delete their content and
do not re-expose them without explicit user approval.

`/research/` and `/publications/` have distinct purposes. Research synthesizes
the major areas and intellectual through-lines; Publications remains the
canonical paper record. Do not collapse one into the other without explicit
user approval.

## Content and confidentiality rules

- Homepage visual name: `Ryan Hou`.
- Site/SEO name: `Ryan (Junpeng) Hou`.
- CV heading: `Ryan Hou, Ph.D.`.
- Role: `Technology Leader & Interdisciplinary Researcher`.
- External profile links are Google Scholar and LinkedIn. Do not add a personal
  GitHub profile link unless requested.
- The KDD 2026 causal-retrieval paper's `Best Paper Runner-Up` distinction in
  the Applied Data Science Track is public and may be featured in the site.
- Use the official public wording `Best Paper Runner-Up`; do not revive the
  superseded internal wording `2nd Best Paper` in public copy.
- The KDD 2026 causal-retrieval paper links to its ACM version of record at
  `https://dl.acm.org/doi/10.1145/3770855.3818355`.
- Publication distinctions that are public include one `Best Paper Runner-Up`,
  two `Editors' Suggestion`, and one `Editors' Highlight` entry. These are
  intentionally featured on the homepage.

Before publishing content changes, search the entire current source for stale,
embargoed, or superseded wording. Do not assume that hiding a navigation link
also removes the content from generated routes.

## Design system

- Fonts: Fraunces for display, Inter for body, Space Mono for labels and small
  metadata.
- Light tokens: paper `#f7f8f6`, ink `#111724`, soft ink `#5c6472`, signal
  `#2457f5`, line `#dfe3e6`, surface `#eef1f1`.
- Dark tokens: paper `#0b0f17`, ink `#f1f4f5`, soft ink `#98a2b1`, signal
  `#6f92ff`, line `#242b38`, surface `#121923`.
- Use typography, whitespace, fine rules, and restrained blue links to create
  hierarchy. Prefer editorial rows over filled cards.
- Standard subpage intros use `src/components/PageIntro.astro`: 44px desktop
  H1, 36px mobile H1, max-width copy, and a bottom rule.
- Preserve both light and dark themes and the current responsive header/menu.

## Source map

- `src/site.config.ts` — identity, role, contact links, and public navigation.
- `src/pages/index.astro` — homepage and featured publication selection.
- `src/pages/research.astro` — visual overview of the major research areas.
- `src/pages/publications.astro` — curated publication record.
- `src/pages/news.astro` — selected professional and research developments.
- `src/pages/about.astro` — narrative, appointments, principles, education.
- `src/pages/cv.astro` — web CV.
- `src/assets/images/research/*` — generated research-area illustrations.
- `src/content/publications/*.md` — publication metadata and homepage
  `featured` flags.
- `src/content/work/*.md` and `src/content/writing/*.md` — preserved future
  content, currently hidden from launch navigation and indexing.
- `src/styles/global.css` — design tokens, typography, and theme behavior.
- `astro.config.mjs` — canonical site URL, fonts, sitemap exclusions.
- `.github/workflows/deploy.yml` — GitHub Pages production deployment.

## Engineering workflow

- Require Node.js 22 or newer. If the system Node is older in Codex Desktop,
  use the bundled workspace runtime discovered by the dependency loader.
- Inspect `git status -sb` and the full diff before editing or staging. Preserve
  unrelated user changes.
- Use explicit file paths when staging.
- Run formatting only on files in scope; do not rewrite the whole repository
  unnecessarily.

## Documentation maintenance

Maintaining the project record is part of completing every task, including
small content or maintenance tasks. Before the final response:

1. Review `docs/SITE_CONTEXT.md` and update it whenever the current product,
   copy, information architecture, design language, technical architecture,
   testing expectations, or deferred-work list has changed.
2. Append a concise entry to the ongoing task log in `docs/PROJECT_LOG.md` for
   every completed task. Record the date, scope, validation performed, and
   release status. Use `local only` when the change has not been pushed.
3. If a release succeeds, update the current production baseline, Pages run,
   milestone list when appropriate, and any relevant deployment or known-issue
   notes in `docs/PROJECT_LOG.md`.
4. Update `README.md` when setup, commands, repository structure, or onboarding
   instructions change.
5. Check the documentation diff for stale statements before declaring the task
   complete.

Do not fabricate a commit hash, Actions URL, test result, or production state.
Do not mark a task as deployed until the complete GitHub Pages workflow has
succeeded. Keep task-log entries factual and compact; use Git history for
line-by-line implementation detail.

Minimum validation for content-only changes:

```bash
npm run format:check
npm run check
npm run build
```

For layout, navigation, link, route, or theme changes, also inspect the rendered
site at desktop (approximately 1365x768) and mobile (390x844). Check every
affected public route, confirm zero horizontal overflow, and verify actual hrefs
and metadata—not only source strings.

For hidden-scope changes, verify that public pages contain no `/work` or
`/writing` links, the generated sitemap excludes them, and hidden pages carry
`noindex, nofollow`.

## Publishing

- Publishing is authorized only when the user explicitly asks to publish,
  deploy, or otherwise clearly requests the live update.
- This personal site currently uses a direct production flow: commit the scoped
  files to `main`, push `origin main`, then monitor the `Deploy to GitHub Pages`
  Actions run through completion. Do not create a PR unless the user requests
  one.
- Report the commit hash, validation performed, and Actions run URL.
- A successful local build is not a successful release; confirm both the build
  and deploy jobs.

## Known deferred issue

The favicon currently has inconsistent source designs: `favicon.svg` is an `RH`
mark, while PNG/ICO fallbacks use a three-bar mark. Some browsers show a black
block on `rhou.org` while localhost looks correct. Production assets have been
verified byte-for-byte against local assets, so the likely causes are
domain-specific favicon caching plus browser selection among conflicting icon
formats. The user chose to defer this issue. Do not resurrect the discarded
abstract blue/ink favicon experiment. A future fix should unify all formats and
cache-bust the icon URLs.
