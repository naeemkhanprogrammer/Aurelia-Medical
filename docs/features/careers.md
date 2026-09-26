# Feature — Careers

**Route:** `/careers`
**Purpose:** attract staff; applications are handled by the external careers platform.

## Sections & components

Hero (anchor to openings) · benefits (`InfoCard`) · open positions (`PositionCard`: meta, summary, external **Apply now**, expandable details via native `<details>`) · general application CTA · equal-opportunity statement.

## Data

`data/careers.ts` (⚠️ placeholder openings) via `features/careers/api.ts`; copy in `data/pages/careers.ts`. Empty list → friendly empty state.

## Redirects

`externalLinks.careers` for every apply button. No application data touches this site.

## SEO

BreadcrumbList. `JobPosting` JSON-LD intentionally **not** added for placeholder jobs (Google penalises inaccurate postings) — add once real postings exist.

## TODO

Real openings; per-position apply URLs if the ATS supports them (add `applyUrl` to `CareerPosition`).
