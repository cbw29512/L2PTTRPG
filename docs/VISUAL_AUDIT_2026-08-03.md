# Visual Audit — System Recognition Badges

Date: 2026-08-03

## Audit method

The current `main` SVG markup and badge styling were reconstructed and rendered as a six-icon comparison sheet. This review checked whether each badge visually communicated the design decision recorded in the product discussion, rather than merely checking that unique SVG markup existed.

## Findings

| System | Current result | Decision |
|---|---|---|
| D&D 2014 | Faceted polygon contained an abstract arrow/mountain mark instead of a readable d20 face | Fail — replace with a clearly faceted d20 and visible `20` |
| D&D 2024 | Faceted polygon and spark, but the central d20 identity was still unclear | Fail — use the same clear d20 language plus a distinct revision spark |
| Pathfinder 2E | Tactical hex existed, but the center shape did not read as `3A` | Fail — render a large literal `3A` |
| Call of Cthulhu | Eye symbol | Fail — replace with an original winged/tentacled eldritch head |
| Daggerheart | Heart/duality concept | Pass with refinement — retain original heart, blade, circle, and diamond language |
| Vampire V5 | Blood-drop form with ambiguous decorative shapes | Fail — replace with unmistakable twin fangs and a separate blood drop |

## Root cause

The previous audit validated implementation structure and uniqueness, not visual acceptance criteria. The tests could confirm that an SVG existed for each system while still allowing artwork that did not match the approved concept.

## Corrective actions

- Replace semantic icon IDs so the source code records the intended concept rather than obsolete names such as `eye` and `blood`.
- Add visual-direction documentation.
- Add regression assertions for the approved IDs and visible glyph content (`20`, `3A`).
- Render and inspect the entire badge set before merging.
- Update the project status and close the badge issue only after the corrected set is deployed.
