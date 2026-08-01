# Project log

This file records product-level decisions and release milestones. It is not a
substitute for Git history; use the listed commit hashes for the exact diff.

## Maintenance protocol

Every completed website task must leave the project record current:

- Append one row to **Ongoing task log**, even for a small content or
  maintenance change.
- Record only validation that actually ran.
- Use `local only` until changes have been pushed and the full Pages workflow
  has succeeded; then replace it with the commit and Actions run.
- Update **Current release state** only after a successful production deploy.
- Add or revise **Milestones**, **Deployment behavior and logs**, and **Known
  issue log** when the task changes those areas.
- Update `docs/SITE_CONTEXT.md` whenever the durable current state or working
  rules change.

This protocol is also required by the repository-wide `AGENTS.md`.

## Current release state

- Production: `https://rhou.org`
- Repository: `https://github.com/rhou89/rhou.org`
- Production branch: `main`
- Current consolidated baseline: `b48112c`
- Last verified Pages run before this documentation pass:
  `https://github.com/rhou89/rhou.org/actions/runs/30702660644`
- Working tree was clean before these documentation files were added.

## Ongoing task log

| Date       | Scope                                                                                                                                            | Validation                                                                                                                   | Release status                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 2026-08-01 | Established durable repository instructions, site context, project history, and future-task logging.                                             | Documentation formatting, Astro check, and production build.                                                                 | Local only; production remains `b48112c`. |
| 2026-08-01 | Reworked homepage publications into simple AI Systems and Quantum Technologies groups while retaining all seven papers and distinctions.         | Formatting; Astro diagnostics; production build; desktop and mobile light/dark layout, overflow, links, and metadata checks. | Local only; production remains `b48112c`. |
| 2026-08-01 | Refined homepage publication hierarchy so the section introduction stays on one desktop line and group headings remain distinct from paper rows. | Formatting; Astro diagnostics; production build; desktop and mobile light/dark typography and overflow checks.               | Local only; production remains `b48112c`. |

## Milestones

| Commit    | Decision or change                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| `7116b6a` | Launched the initial Astro professional website.                                                              |
| `d179db9` | Reworked the homepage from a loud portfolio hero into a quieter identity page.                                |
| `e5e9369` | Unified subpage typography, spacing, editorial rows, and detail-page hierarchy.                               |
| `6a1a935` | Removed all public Work/Writing entry points; added noindex and sitemap exclusions while retaining source.    |
| `e3d8a28` | Replaced public personal GitHub links with LinkedIn.                                                          |
| `ac3d032` | Renamed the Research concept to Publications.                                                                 |
| `d996dcd` | Moved the canonical route to `/publications/`; removed `/research/` without a redirect.                       |
| `d6fb6b4` | Simplified the homepage visual name to `Ryan Hou`.                                                            |
| `530a391` | Updated public identity to `Ryan (Junpeng) Hou` and `Interdisciplinary Researcher`; refined appointment copy. |
| `358f699` | Removed the internal design maxim from the public footer.                                                     |
| `c580e82` | Reframed the cross-domain narrative away from switching tracks.                                               |
| `0964f8d` | Settled on the objective `Across systems and science` framing.                                                |
| `262fe5c` | Removed the embargoed KDD distinction and featured three public editorial distinctions on the homepage.       |
| `b578f24` | Restored the KDD 2026 arXiv link.                                                                             |
| `b48112c` | Polished the final cross-domain copy punctuation and voice.                                                   |

## Current test baseline

At `b48112c`, the following were verified successfully:

- Astro diagnostics: 24 files, 0 errors, 0 warnings, 0 hints.
- Production static build: 11 generated pages.
- Public route desktop and mobile layout checks at 1365x768 and 390x844.
- No horizontal overflow on checked public routes.
- Public navigation contains only Publications, About, CV, and Contact.
- No public links to Work or Writing.
- `/publications/` is canonical; `/research/` is absent.
- Hidden Work/Writing routes have `noindex, nofollow` and are absent from the
  sitemap.
- Homepage shows seven featured publications and exactly three public editorial
  distinctions.
- `2nd Best Paper` is absent from the current source and rendered pages.
- KDD 2026 links to `https://arxiv.org/abs/2607.14161` on both the homepage and
  Publications page.

## Deployment behavior and logs

Every push to `main` triggers `.github/workflows/deploy.yml`:

1. checkout;
2. setup Node.js 22;
3. `npm ci`;
4. `npm run build`;
5. upload `dist` as the Pages artifact;
6. deploy to GitHub Pages.

GitHub currently emits non-blocking warnings that several pinned actions still
target the deprecated Node.js 20 action runtime and are being forced onto Node 24. Builds and deployments pass, but future maintenance should upgrade the
action versions when compatible releases are available.

## Known issue log

### Favicon differs between localhost and production

Observed behavior: localhost can show the intended favicon while some browsers
show a black block for `rhou.org`.

Verified facts:

- `rhou.org` returns the favicon assets with HTTP 200.
- Production SVG, PNG, and ICO files were byte-for-byte identical to the local
  files when checked.
- `favicon.svg` contains an `RH` mark with light/dark media styling.
- PNG and ICO fallbacks contain a different three-bar mark.
- Favicon caching is domain-specific and can outlive normal HTTP asset caching.

Likely cause: a combination of cached domain favicon state and browsers choosing
different icon candidates. The user chose to defer the issue and discarded an
experimental replacement icon set. Future work should unify all formats first,
then change filenames or add a version query to every icon and manifest URL.

### Embargoed KDD distinction in old history

The current source and live site do not contain `2nd Best Paper`. The original
public launch commit and old Pages/Actions history may still contain it. The
user explicitly accepted that residual history and chose not to rewrite Git
history or delete old Actions runs.
