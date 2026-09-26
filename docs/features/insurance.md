# Feature — Insurance & Billing

**Route:** `/insurance`
**Purpose:** explain AHCIP coverage, uninsured services/fees, what to bring and payment methods.

## Sections

AHCIP coverage (prose) + out-of-province card · uninsured-services **table** (`<caption>`, `scope` headers, horizontal scroll wrapper on small screens) · what-to-bring checklist · payment methods · billing questions (click-to-call).

## Data

`data/pages/insurance.ts` (`uninsured.items: FeeItem[]` — fee is a display string so the clinic can write "$25", "From $40", "Varies").

## State

None; fully static, no client JS.

## TODO

Confirm fee schedule, accepted payment methods and out-of-province policy.
