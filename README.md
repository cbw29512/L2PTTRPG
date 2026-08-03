# Learn to Play TTRPG

An accessible, multi-system learning and community hub for tabletop roleplaying games.

## Project tracking

- [Living project status and ordered roadmap](PROJECT_STATUS.md)
- [Current product audit — 2026-08-03](docs/AUDIT_2026-08-03.md)
- [Master roadmap issue](https://github.com/cbw29512/L2PTTRPG/issues/11)
- [Open issues](https://github.com/cbw29512/L2PTTRPG/issues)

`PROJECT_STATUS.md` is the repository source of truth. Update it whenever scope, priority, status, or a release materially changes.

## Definition of Done

- A clear “So you want to play a tabletop roleplaying game?” landing experience.
- Separate, original player and GM learning paths for every supported system.
- D&D 2014 and D&D 2024 are treated as distinct editions.
- Every system records its official sources, publication boundary, attribution needs, and last review date.
- A blog supports search-friendly educational content.
- A table finder demonstrates safe discovery without exposing personal contact information.
- Keyboard navigation, visible focus, responsive layouts, reduced motion, and semantic landmarks are included.
- Automated tests validate required content and routing.
- Feature status, remaining work, and follow-up issues are recorded before work is considered complete.

## Data schema

System records contain identity, edition, summary, player lessons, GM lessons, official sources, legal boundary, and review metadata. Community listings contain system, role, schedule, coarse region, age band, accessibility notes, safety tools, and trust checks—never public email, phone, or precise home address.

## Run locally

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Test

```bash
node tests/site.test.mjs
```

## Publishing note

This project uses original educational prose. It is not a substitute for the official rulebooks and does not imply endorsement by any publisher. Review `THIRD_PARTY_LICENSES.md` and the current licensing workflow issue before monetizing or adding downloadable rules content.
