# Community Safety Definition of Done

The public discovery prototype must not enable direct contact until all safeguards below are implemented and tested.

## Required data model
- Account: ID, display name, verified email, age band, coarse region, accessibility preferences, conduct acceptance version.
- Listing: system, role sought, format, schedule, coarse region, age band, safety tools, accessibility notes, status.
- Trust check: type, provider, outcome, issued date, expiration, revocation reason.
- Report: reporter, subject, category, evidence references, status, moderator history, appeal state.

## Release gate
- Verified-email accounts and secure sessions.
- Private in-platform contact requests and messaging.
- No public phone, email, identity documents, or precise home address.
- Block, report, moderation queue, sanctions, appeals, and badge revocation.
- Youth participation controls and guardian/organization-managed options.
- Public-venue preference and delayed release of precise event locations.
- Abuse, authorization, privacy, accessibility, retention, and deletion tests.
- Human moderation and incident-response policy.
