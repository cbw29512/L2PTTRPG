# L2PTTRPG Project Status

Last updated: 2026-08-03

This file is the repository source of truth for what exists, what is only a prototype, what has been decided, and what remains. Update it whenever scope, priority, status, or a release materially changes.

## Product goal

Build an accessible, SEO-friendly, multi-system tabletop roleplaying game learning and community hub that:

- helps a visitor choose a game;
- teaches the player fundamentals thoroughly;
- provides a matching “So You Want to GM?” curriculum;
- clearly separates editions and systems;
- uses only original or properly licensed content;
- publishes useful educational articles;
- eventually helps vetted users find safer tables without exposing private contact information.

## Current public release

Current `main` release commit: `2d57d6ffd2b7d43f835d6c8c8559949d17169385`

Deployment model: GitHub Pages workflow triggered by pushes to `main` after the repository test command passes.

### Implemented

- Standalone `L2PTTRPG` repository, separate from Dungeon Cards.
- Landing hero: “So you want to play a tabletop roleplaying game?”
- Six launch choices:
  - D&D Fifth Edition — 2014 / SRD 5.1
  - D&D Fifth Edition — 2024 / SRD 5.2.1
  - Pathfinder Second Edition Remaster
  - Call of Cthulhu Seventh Edition
  - Daggerheart
  - Vampire: The Masquerade Fifth Edition
- D&D 2014 and 2024 are separate records and routes.
- Player-orientation and GM-orientation cards for every launch system.
- Licensing center, official source links, prohibited-content notes, and review dates.
- Four launch blog articles.
- Community discovery prototype with filters, coarse locations, accessibility notes, safety tools, and example trust markers.
- Public contact is disabled.
- Original inline SVG system badges.
- Basic responsive styling, skip navigation, visible focus, reduced-motion support, semantic page structure, and route-focus handling.
- Basic tests for system records, editions, sources, route parsing, blog/listing presence, and unique SVG badges.

## Prototype or partial

- **System guides:** useful orientation, not yet the thorough step-by-step curriculum originally requested.
- **System badges:** original and distinct, but the latest visual direction is not fully implemented. Pathfinder should read clearly as `3A`; Call of Cthulhu should use an original eldritch/Cthulhu silhouette instead of the current eye; Vampire should use clearer fangs.
- **Blog:** four short launch posts, not yet a full editorial program.
- **Licensing:** good boundary summaries, but no source-level citation/reviewer/status workflow and no professional legal review.
- **SEO:** one generic HTML document and metadata record; hash-routed system/blog content is not yet a complete indexable page architecture.
- **Accessibility:** accessibility-conscious foundation, not a completed WCAG/ADA audit.
- **Testing:** data-shape tests exist, but no browser rendering, accessibility, visual regression, broken-link, metadata, or public-deployment smoke tests.
- **Community:** demonstration listings and trust concepts only; no accounts, real vetting, private messages, reporting, blocking, moderation, or youth protections.

## Not implemented

- Dedicated crawlable page/subpage structure for character creation, rules, combat, magic/powers, equipment, advancement, first-session references, GM preparation, encounter/mystery design, adversaries, and items/artifacts.
- Printable player and GM first-session checklists.
- Sitemap, robots file, canonical URLs, page-specific Open Graph metadata, article/breadcrumb schema, favicon/manifest, or social image.
- Search, tags, article categories, related content, or editorial calendar.
- Visible `Coming soon` cards or future-system request/voting process.
- Secure authenticated community backend.
- Production analytics/privacy decision.
- Formal release notes/changelog and version tags.

## Current decisions

1. Keep L2PTTRPG separate from Dungeon Cards.
2. Deploy the public website only from `main` after tests pass.
3. Use original recognition badges rather than official publisher logos unless a specific compatibility license is deliberately adopted.
4. Keep D&D 2014 and D&D 2024 mechanically and editorially separated.
5. Treat Call of Cthulhu and Vampire pages as original educational commentary unless an authorized publishing route is deliberately used.
6. Do not expose public contact information or claim real vetting until the secure community work is complete.
7. Do not claim full ADA/WCAG compliance until the documented accessibility audit is complete.
8. Do not monetize rules downloads or compatibility products until the research/licensing release gate is complete.

## Workstreams

| Priority | Workstream | Status | Tracking |
|---|---|---|---|
| P0 | Secure community accounts, messaging, reports, moderation, and youth safety | Blocked / future backend | #1 |
| P1 | Original badge refinement: d20, Pathfinder `3A`, eldritch Cthulhu, vampire fangs | Open | #4 |
| P1 | Thorough player and GM curricula for every system | Open | #5 |
| P1 | Crawlable SEO/static-page architecture and per-page metadata | Open | #6 |
| P1 | Accessibility, responsive UX, and performance QA | Open | #7 |
| P1 | Research, source citations, review status, and licensing release workflow | Open | #8 |
| P2 | Blog pipeline, content calendar, coming-soon cards, and future-system intake | Open | #9 |
| P1 | Maintainability refactor, readable files, schemas, and broader automated tests | Open | #10 |
| Master | Ordered production roadmap and non-negotiable decisions | Open | #11 |

## Recommended sequence

### Phase 1 — Make the foundation auditable

1. #10 Refactor readable modules and expand tests.
2. #8 Add source/reviewer/status/licensing workflow.
3. #4 Finish the approved original badge direction.

### Phase 2 — Build the learning product

4. #5 Expand every player and GM curriculum.
5. #6 Generate crawlable, page-specific SEO architecture.
6. #9 Build the article pipeline and future-system intake.

### Phase 3 — Validate and safely grow

7. #7 Complete accessibility, responsive, and performance audits.
8. #1 Build the secure community backend only after its safety architecture is ready.

## Feature Definition of Done

A feature is complete only when:

- the implementation is merged;
- automated checks pass;
- accessibility impact is reviewed;
- content sources and licensing status are recorded;
- documentation and this status file are updated;
- remaining work is filed as an issue;
- the deployed result is smoke-tested when the public site changes.
