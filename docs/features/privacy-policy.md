# Feature — Privacy Policy

**Route:** `/privacy-policy`
**Purpose:** plain-language explanation of what the site does (and doesn't) collect.

## Components

`PageHero` + `LegalDocument` (`components/sections`): sticky table of contents, `<time>` last-updated date, sectioned content with optional lists. Reusable for a future Terms / Accessibility statement.

## Data

`data/pages/privacy-policy.ts` — sections array; contact details are pulled from `config/contact.ts` so they never drift.

## ⚠️ Legal

Content is a **template**. It must be reviewed by the clinic's privacy officer / counsel (HIA, PIPEDA, PIPA) before launch. Keep it accurate as features change — e.g. if analytics are ever added, this page must be updated first.
