# Feature — Medical Services

**Purpose:** explain each specialty, what it treats, and how to access it.
**Routes:** `/services` (overview), `/services/[slug]` (detail, statically generated).

## Components

| Component                                                | Location                        |
| -------------------------------------------------------- | ------------------------------- |
| `ServiceCard` (overview card)                            | `features/services/components/` |
| `FeatureCard` (compact card, home & "other services")    | `components/shared/`            |
| `StepList`, `CheckList`, `ProseBlock`, `EmergencyNotice` | `components/shared/`            |
| `PageHero`, `CtaBand`                                    | `components/sections/`          |
| `DoctorCard` (care team)                                 | `features/doctors/components/`  |

## Data

`data/services.ts` via `features/services/api.ts`. Each service has: `summary`, `overview[]`, `conditions[]`, `whoItsFor[]`, `whatToExpect[]`, `referralRequired`, `priority`, `order`, `icon`, `schemaSpecialties`. Copy: `data/pages/services.ts`.

Adding a service = add one object to `data/services.ts` (+ an icon name if new). Route, sitemap, nav cards, JSON-LD and booking options update automatically.

## State

None (fully server-rendered).

## UX

Detail page: hero with icon + booking CTA; overview; conditions checklist; 3-step "What to expect"; sidebar with audience, referral status card (referral-required vs book directly), emergency notice; care team; other services; CTA band.

## Accessibility / SEO

Section headings labelled; `BreadcrumbList` JSON-LD; title `<Service> in Red Deer`; description = summary.

## Redirects

`booking` with `service=<slug>`; referral info links to `/referrals` (coming soon page).

## TODO

Physician-approved copy; service photos (optional `image`).
