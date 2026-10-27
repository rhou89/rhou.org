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
- Current consolidated baseline: `3961f4a`
- Last verified Pages run:
  `https://github.com/rhou89/rhou.org/actions/runs/40002628017`

## Ongoing task log

| Date       | Scope                                                                                                                                                                       | Validation                                                                                                                                                                                                                            | Release status                                              |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 2026-08-01 | Established durable repository instructions, site context, project history, and future-task logging.                                                                        | Documentation formatting, Astro check, and production build.                                                                                                                                                                          | Deployed in `ccacbca`; Pages run `30707479929`.             |
| 2026-08-01 | Reworked homepage publications into simple AI Systems and Quantum Technologies groups while retaining all seven papers and distinctions.                                    | Formatting; Astro diagnostics; production build; desktop and mobile light/dark layout, overflow, links, and metadata checks.                                                                                                          | Deployed in `ccacbca`; Pages run `30707479929`.             |
| 2026-08-01 | Refined homepage publication hierarchy so the section introduction stays on one desktop line and group headings remain distinct from paper rows.                            | Formatting; Astro diagnostics; production build; desktop and mobile light/dark typography and overflow checks.                                                                                                                        | Deployed in `ccacbca`; Pages run `30707479929`.             |
| 2026-08-01 | Added a data-driven News page with eight sourced updates, chronological year groups, category filters, stable anchors, and desktop/mobile navigation.                       | Formatting; Astro diagnostics; production build; desktop and mobile light/dark layout, filter, query-state, overflow, navigation, links, and metadata checks.                                                                         | Deployed in `fa6cbbb`; Pages run `30711387984`.             |
| 2026-08-01 | Added concise manual local-test, deployment, and future-agent handoff instructions to the README.                                                                           | Documentation formatting and diff check.                                                                                                                                                                                              | Deployed in `fa6cbbb`; Pages run `30711387984`.             |
| 2026-08-01 | Added four News updates covering KDD and RecSys oral selections, the David Daniel Thesis Award, and the 2021 realization of phase-driven Josephson dynamics.                | Formatting; Astro diagnostics; production build; chronological order, category filtering, links, and rendered content checks.                                                                                                         | Deployed in `fa6cbbb`; Pages run `30711387984`.             |
| 2026-08-01 | Added Q2B Studio’s coverage of the causal retrieval work to the News timeline.                                                                                              | Formatting; Astro diagnostics; production build; chronological order, source link, and rendered content checks.                                                                                                                       | Deployed in `fa6cbbb`; Pages run `30711387984`.             |
| 2026-08-01 | Added a compact homepage News summary showing the four most recent updates after Publications, with stable links into the full timeline.                                    | Formatting; Astro diagnostics; production build; desktop and mobile light/dark layout, overflow, content order, links, and metadata checks.                                                                                           | Deployed in `fa6cbbb`; Pages run `30711387984`.             |
| 2026-08-01 | Added the KDD 2026 Oral Presentation label and replaced the 2023 PRL homepage entry with the 2025 Physical Review E paper at the requested DOI.                             | Formatting; Astro diagnostics; production build; desktop and mobile light/dark content, link, and overflow checks.                                                                                                                    | Deployed in `fa6cbbb`; Pages run `30711387984`.             |
| 2026-08-01 | Added the public Research overview with four themed illustrations, restored Research navigation and homepage entry points, and expanded the curated publication collection. | GitHub Pages build and deploy jobs completed successfully.                                                                                                                                                                            | Deployed in `c9223f7`; Pages run `30724113571`.             |
| 2026-08-01 | Refined featured-publication ordering and updated homepage and Publications copy.                                                                                           | GitHub Pages build and deploy jobs completed successfully for both follow-up pushes.                                                                                                                                                  | Deployed through `956c55c`; latest Pages run `30724933085`. |
| 2026-08-15 | Rechecked the current `main` baseline and synchronized durable project documentation with the Research release and subsequent user changes.                                 | Diff and formatting checks; Astro diagnostics; production build with eight self-hosted font files; desktop/mobile light/dark layout, navigation, overflow, metadata, image-loading, hidden-route, sitemap, and Pages workflow checks. | Deployed in `91bd6b5`; Pages run `31971335535`.             |
| 2026-08-16 | Replaced the KDD causal-retrieval preprint links with its ACM version of record and added the official ACM link for PinEqualizer.                                           | Formatting; Astro diagnostics; production build; source, rendered-link, and production-link checks.                                                                                                                                   | Deployed in `769ee60`; Pages run `31973201155`.             |
| 2026-08-16 | Added the OptiDiff Optics Express paper to Publications and featured it on the homepage between causal retrieval and Pin-SCALE.                                             | Formatting; Astro diagnostics; production build; desktop/mobile layout, ordering, overflow, rendered-link, and production-link checks.                                                                                                | Deployed in `769ee60`; Pages run `31973201155`.             |
| 2026-08-26 | Added the public KDD 2026 Best Paper Runner-Up distinction for the causal-retrieval paper and a sourced News update with three announcement links.                          | Formatting; Astro diagnostics; production build with eight self-hosted font files; rendered homepage, Publications, News copy, stable anchor, and external-link checks.                                                               | Deployed in `f1f066d`; Pages run `33045603832`.             |
| 2026-08-26 | Simplified the causal-retrieval publication distinction to the official `Best Paper Runner-Up` wording and released the complete award update.                              | Formatting; Astro diagnostics; production build with eight self-hosted font files; rendered homepage, Publications, and News wording checks; GitHub Pages build and deploy jobs succeeded.                                            | Deployed in `f1f066d`; Pages run `33045603832`.             |
| 2026-10-20 | Added the official KDD 2026 Awards link to the award announcement and changed the homepage heading to `Ryan (Junpeng) Hou`.                                                 | Formatting; Astro diagnostics; production build with eight fonts; desktop/mobile light/dark Home and News, zero overflow, exact hrefs, titles, canonicals, and robots.                                                                | Deployed in `bce5ea1`; Pages run `39500245030`.             |
| 2026-10-22 | Added one Pin-SCALE Media update with the supplied WeChat article and English GitHub explainer links; the homepage includes it automatically.                               | Formatting; Astro diagnostics; 13-page build (Google Fonts unavailable); generated copy, dates, anchors, exact hrefs, metadata, and hidden-route checks. Full-font build and browser QA blocked by local-listener permissions.        | Deployed in `3961f4a`; Pages run `40002628017`.             |
| 2026-10-23 | Prepared the isolated Pin-SCALE preview checkout with cached fonts and a manual startup command.                                                                            | Astro dev exited before readiness; an explicit localhost static-server attempt failed with a port-binding permission error. Browser file previews are also blocked; no running preview was verified.                                  | local only                                                  |
| 2026-10-23 | Published the Pin-SCALE Media entry and verified the live News timeline and homepage summary.                                                                               | Formatting; CI Astro diagnostics and 13-page build with eight fonts; Pages build/deploy success; live content, hrefs, anchors, metadata, Media filter, News light/dark views, and desktop/mobile overflow checks.                     | Deployed in `3961f4a`; Pages run `40002628017`.             |
| 2026-10-23 | Added configurable Highlights to Home and News for the KDD award and two PRL Editors’ Suggestions, preserving the original chronology.                                      | Formatting; 30-file Astro check; 13-page build with local font-fetch warnings; generated highlight anchors, exact copy, heading levels, metadata, chronology, latest-update, hidden-route, and sitemap checks.                        | local only                                                  |
| 2026-10-27 | Added the November 5 virtual Pinterest ML Day talk announcement on causal retrieval policy optimization at scale, with the official registration link.                      | Formatting; Astro check; 13-page build (font-fetch warnings); generated Home/News copy, dates, categories, anchors, hrefs, metadata, and hidden-route/sitemap checks. Browser QA blocked by listener/launch restrictions.             | local only                                                  |
| 2026-10-27 | Attempted the authorized ML Day news release; remote main matches the validated source before adding the announcement.                                                      | Remote tree comparison and source audit; GitHub writes require unavailable approval, CLI cannot resolve GitHub, and browser is signed out. No commit or deployment was created.                                                       | local only; release blocked                                 |

## Milestones

| Commit    | Decision or change                                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------------------------- |
| `7116b6a` | Launched the initial Astro professional website.                                                                       |
| `d179db9` | Reworked the homepage from a loud portfolio hero into a quieter identity page.                                         |
| `e5e9369` | Unified subpage typography, spacing, editorial rows, and detail-page hierarchy.                                        |
| `6a1a935` | Removed all public Work/Writing entry points; added noindex and sitemap exclusions while retaining source.             |
| `e3d8a28` | Replaced public personal GitHub links with LinkedIn.                                                                   |
| `ac3d032` | Renamed the Research concept to Publications.                                                                          |
| `d996dcd` | Moved the canonical route to `/publications/`; removed `/research/` without a redirect.                                |
| `d6fb6b4` | Simplified the homepage visual name to `Ryan Hou`.                                                                     |
| `530a391` | Updated public identity to `Ryan (Junpeng) Hou` and `Interdisciplinary Researcher`; refined appointment copy.          |
| `358f699` | Removed the internal design maxim from the public footer.                                                              |
| `c580e82` | Reframed the cross-domain narrative away from switching tracks.                                                        |
| `0964f8d` | Settled on the objective `Across systems and science` framing.                                                         |
| `262fe5c` | Removed the embargoed KDD distinction and featured three public editorial distinctions on the homepage.                |
| `b578f24` | Restored the KDD 2026 arXiv link.                                                                                      |
| `b48112c` | Polished the final cross-domain copy punctuation and voice.                                                            |
| `ccacbca` | Grouped homepage publications into distinct AI Systems and Quantum Technologies editorial columns.                     |
| `fa6cbbb` | Launched the News timeline and homepage summary, then refreshed featured publication details.                          |
| `c9223f7` | Launched the four-area Research overview, restored its public navigation, and expanded the curated publication record. |
| `956c55c` | Completed the Research follow-up ordering and homepage/Publications copy refinements.                                  |
| `769ee60` | Published the official ACM links for two KDD papers and added OptiDiff to Publications and the homepage.               |
| `f1f066d` | Published the KDD 2026 Best Paper Runner-Up distinction and its sourced News announcement.                             |
| `bce5ea1` | Updated the homepage display name and added the official KDD 2026 awards source.                                       |
| `3961f4a` | Published third-party Pin-SCALE coverage with Chinese WeChat and English GitHub source links.                          |

## Current test baseline

The `3961f4a` content update was verified on 2026-10-23:

- Formatting passed; CI Astro diagnostics reported 29 files with zero errors,
  warnings, or hints; the production build generated 13 pages and eight fonts.
- Live News was visually checked at 1365x768 and 390x844 in light and dark
  themes. Home and News had zero horizontal overflow at both widths. Exact
  source-link targets, page titles, canonical URLs, and robots metadata were
  checked.
- News contains fifteen entries, including the new Pin-SCALE Media update and
  its supplied WeChat and GitHub source links. The Media filter shows four
  entries. The homepage includes the new summary and its stable News anchor.
- Both build and deploy succeeded in Pages run `40002628017`.

### Earlier full-site baseline

At `f1f066d`, the following were verified successfully on 2026-08-26:

- Astro diagnostics: 29 files, 0 errors, 0 warnings, 0 hints.
- Production static build: 13 generated pages and eight self-hosted font files.
- Public route desktop and mobile layout checks at 1365x768 and 390x844.
- No horizontal overflow on checked public routes.
- Public navigation contains only Research, Publications, News, About, CV, and
  Contact.
- No public links to Work or Writing.
- `/research/` and `/publications/` are distinct canonical public routes.
- Research presents four areas with complete alt text; all four 2:1
  illustrations load successfully in responsive light and dark layouts.
- Hidden Work/Writing routes have `noindex, nofollow` and are absent from the
  sitemap.
- `/news/` shows fourteen chronological entries with working category filters,
  shareable query state, and stable anchors; the homepage shows the four newest.
- Homepage shows all eleven featured publications in AI Systems and Quantum
  Technologies groups, with one Best Paper Runner-Up label and three editorial
  distinctions.
- The KDD causal-retrieval award News entry includes the official public
  distinction and links to Pinterest Engineering, Xianxing Zhang, and Sai Xiao.
- KDD 2026 causal retrieval links to
  `https://dl.acm.org/doi/10.1145/3770855.3818355` on both the homepage and
  Publications page; PinEqualizer links to
  `https://dl.acm.org/doi/10.1145/3770855.3818461`; and the 2025 Physical
  Review E feature links to
  `https://doi.org/10.1103/9vbb-h73q`.
- That release's verified Pages run was `33045603832`; both `build` and `deploy`
  completed successfully for `f1f066d`, and the updated content was verified on
  `https://rhou.org`.

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

### Local Astro caches are owned by root

The checkout's `.astro`, `node_modules/.astro`, and `node_modules/.vite`
directories are currently owned by `root`. A normal user process can therefore
fail with `EACCES` while Astro refreshes content or Vite dependency caches. The
2026-08-15 sanity check avoided changing those existing directories by running
diagnostics and the production build from an isolated copy. This is a local
filesystem-ownership issue, not a source or production-build failure; restore
the cache-directory ownership or recreate those disposable caches before
relying on in-place checks from a normal shell.

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

### Resolved KDD distinction embargo

The KDD 2026 causal-retrieval distinction was publicly announced in August
2026 as `Best Paper Runner-Up` in the Applied Data Science Track. Current public
copy uses that wording. The former internal wording `2nd Best Paper` remains
superseded; old commit and Actions history were not rewritten.
