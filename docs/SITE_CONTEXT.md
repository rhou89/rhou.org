# rhou.org site context

Last consolidated: 2026-08-01

## Purpose and positioning

rhou.org is a durable professional identity site for Ryan Hou. Its job is to
provide a credible, low-maintenance destination that can be linked from a CV,
resume, LinkedIn profile, conference agenda, event biography, or introduction.

The site is intentionally broader than a single current job. It should support
several credible future directions without requiring a rebrand:

- senior technical or engineering leadership;
- academic research and a possible faculty path;
- deep-technology entrepreneurship.

The central positioning is the combination of large-scale AI systems and
quantum technologies, with interdisciplinary research, engineering excellence,
and technical leadership as the connecting capabilities.

This is not a blog. Writing content and case studies exist in source, but the
public product is an identity, publication, selected-news, background, and
contact site.

## Current public narrative

Identity:

- Visual homepage name: **Ryan Hou**
- SEO/site name: **Ryan (Junpeng) Hou**
- CV name: **Ryan Hou, Ph.D.**
- Role: **Technology Leader & Interdisciplinary Researcher**

Homepage introduction:

> My work spans large-scale AI systems and quantum technologies, combining
> interdisciplinary research, engineering excellence, and technical leadership
> to create measurable impact.

Standing tagline:

> From first principles to real-world impact.

Cross-domain framing:

- Label: **Across systems and science**
- Statement: **A continuous thread through computer science, quantum physics,
  and production AI.**
- Explanation: **My approach remains consistent across domains: start from
  first principles, connect ideas across fields, and carry them through to
  real-world systems.**

This language was chosen to avoid suggesting that Ryan jumps between unrelated
tracks. AI engineering and quantum research advance as connected parts of one
practice, with a consistent method and mutually reinforcing perspectives.

Do not return to phrases such as `a nonlinear path`, `and back to production
AI`, or `an evolving focus`; they imply switching tracks or loss of focus.

## Current appointments and links

Homepage/About summaries:

- Pinterest — Tech Lead, Machine Learning; Closeup retrieval & multi-modal
  search.
- Washington University in St. Louis — Visiting Researcher; Quantum sensing &
  engineering.

Contact/profile links:

- Email: `ryanhou94@gmail.com`
- Google Scholar: `https://scholar.google.com/citations?user=mJJxP8EAAAAJ`
- LinkedIn: `https://www.linkedin.com/in/ryanjhou/`

The personal GitHub profile was intentionally replaced by LinkedIn in all
public UI. Repository metadata still correctly points to GitHub.

## Information architecture

### Public launch routes

| Route            | Purpose                                                             |
| ---------------- | ------------------------------------------------------------------- |
| `/`              | Identity, appointments, featured publications, positioning, contact |
| `/publications/` | Full AI and Quantum publication record                              |
| `/news/`         | Selected recognition, talks, media, and research developments       |
| `/about/`        | Professional narrative, appointments, principles, education         |
| `/cv/`           | Concise web CV                                                      |
| `/404.html`      | Branded not-found page                                              |

Header navigation is `Publications`, `News`, `About`, and `CV`, with `Contact`
linking to the homepage contact section. The footer contains copyright, Google
Scholar, LinkedIn, and a back-to-top link. It deliberately has no promotional
slogan.

### Preserved but hidden routes

- `/work/`
- `/work/*`
- `/writing/`

These pages remain generated so their content can be polished later, but they
are not part of the launch. They are absent from public entry points, excluded
from the sitemap, and marked `noindex, nofollow`.

The former `/research/` route was renamed to `/publications/` and then removed.
There is deliberately no redirect because the site was still in its first
release phase.

## News policy

`/news/` is a compact chronological record rather than a blog. Entries are
grouped by year, ordered newest first, and limited to a date, one or two factual
sentences, one category, and optional source links. The current categories are
`Recognition`, `Talks`, `Media`, and `Adoption`; the page displays only
categories in use.

Filtering happens in place with accessible buttons and a shareable `type` query
parameter. Every entry also receives a stable anchor derived from its content
filename. With JavaScript unavailable, the complete chronology remains visible.

The homepage shows the four most recent entries automatically, immediately
after Publications and before the closing positioning/contact section. These
compact rows include only the date, summary, and category, and link to the
entry's stable anchor on `/news/`; filters and external source links remain on
the full News page. Do not create individual news-detail routes, category
colors, social-sharing controls, or promotional cards without a clear need.

The record currently contains thirteen updates from 2018–2026: two invited
talks, six recognitions, three media-coverage entries, and two experimental
realizations of previously proposed momentum-space Josephson dynamics. The
WashU Physics Theory Seminar shown as `29 February` in the source screenshot is
recorded as February 29, 2024; 2023 was not a leap year.

## Publication policy

Homepage publications are controlled by `featured: true` and ordered by the
`order` field. The homepage currently shows all seven featured publications in
two editorial groups derived from their topics:

- `AI Systems` — retrieval, recommendation, and content distribution at
  production scale;
- `Quantum Technologies` — quantum dynamics, matter, and topological
  photonics.

The groups appear as two columns on desktop and stack on mobile. They use only
the domain names as labels: there are no sequence numbers, counts,
`Representative Work`, or `More in This Area` headings. The first entry in each
group receives slightly stronger typographic emphasis, while every paper,
authorship line, link, and public distinction remains visible.

The publication-section introduction remains on one line at the standard
desktop viewport. Group names use bold monospaced headings and their short
descriptions use smaller, muted body text, keeping the section hierarchy
visually distinct from the Fraunces publication titles below.

Public distinctions included on the homepage:

- `Deep-learning causal retrieval optimization for efficient e-commerce
distribution in Pinterest` — Oral Presentation.
- `Nonlinear dynamics in a synthetic momentum state lattice` — Editors'
  Suggestion.
- `Momentum Space Josephson Effects` — Editors' Suggestion.
- `Experimental realization of a non-magnetic one-way spin switch` — Editors'
  Highlight.

KDD 2026 causal-retrieval publication:

- arXiv link: `https://arxiv.org/abs/2607.14161`
- `2nd Best Paper` is embargoed/not public and must not appear in the current
  site or source.
- Old public commit history and old Actions artifacts may contain the phrase.
  The user explicitly chose not to purge them.

The former 2023 `Topological Microlaser with a Non-Hermitian Topological Bulk`
homepage entry was replaced by the 2025 Physical Review E paper `Direct
comparison of stochastic driven nonlinear dynamical systems for combinatorial
optimization`, linked through `https://doi.org/10.1103/9vbb-h73q`.

## Design language

The design began from a dark, technical palette but was deliberately softened
after the first prototype felt too loud. The current reference point is the
quiet identity hierarchy of `sbryngelson/academic-website-template`, adapted to
Ryan's broader professional positioning.

### Desired qualities

- quiet confidence rather than attention seeking;
- editorial hierarchy rather than marketing modules;
- generous whitespace and measured line lengths;
- small monospaced labels and metadata;
- restrained signal blue used mainly for links and active states;
- light and dark modes with the same hierarchy;
- compact, durable typography that will age well.

### Anti-patterns

- giant hero slogans;
- KPI or achievement tiles;
- cyber/neon visual effects, grids, glows, or orbit graphics;
- bright solid CTA buttons without a strong functional need;
- rounded filled card grids for ordinary prose;
- copy that sounds like job-seeking promotion;
- broad claims such as `emerging technologies` when `AI and Quantum` is more
  accurate.

### Typography and color

- Display: Fraunces, weights 400/500/600, including italic.
- Body: Inter, weights 400/500/600.
- Labels/metadata: Space Mono, weights 400/700.

Color tokens live in `src/styles/global.css` and should be used through existing
Tailwind token classes (`paper`, `ink`, `ink-soft`, `signal`, `line`, `surface`).
Do not introduce arbitrary component hex values when a token already exists.

## Technical architecture

- Astro 7 static site with TypeScript.
- Tailwind CSS 4 through the Vite plugin.
- Astro Content Collections for news, work, publications, and writing.
- Astro Fonts API self-hosts Fraunces, Inter, and Space Mono at build time.
- Astro sitemap integration with explicit launch-scope exclusions.
- Astro ClientRouter for view transitions.
- GitHub Pages hosting with a custom domain, `https://rhou.org`.
- GitHub Actions builds on Node.js 22 after `npm ci`.

Content is data-driven. Publication labels, distinctions, links, featured state,
and order belong in `src/content/publications/*.md`, not hardcoded in page
templates. News dates, categories, summaries, and source links belong in
`src/content/news/*.md`. Identity and navigation belong in `src/site.config.ts`.

## Validation baseline

For every release:

1. Review `git status -sb`, the full diff, and `git diff --check`.
2. Run `npm run format:check`.
3. Run `npm run check`.
4. Run `npm run build`.
5. For visual changes, inspect affected routes at roughly 1365x768 and 390x844.
6. Check horizontal overflow, exact link targets, page titles, canonical URLs,
   robots metadata, and sitemap membership when relevant.
7. After pushing `main`, monitor the complete GitHub Pages workflow; both build
   and deploy jobs must pass.

The local/runtime environment must use Node.js 22 or newer. A system Node 18
will not satisfy the repository engine requirement.

## Deferred work

- Polish and eventually reintroduce Work/case studies.
- Polish and eventually reintroduce Writing.
- Unify favicon SVG, PNG, ICO, Apple, and manifest assets, then cache-bust their
  URLs. Current production/local differences are believed to be favicon caching
  plus inconsistent fallback designs; the issue is intentionally deferred.
- Update GitHub Actions dependencies when convenient to eliminate the current
  Node.js 20 action-runtime deprecation warnings.
