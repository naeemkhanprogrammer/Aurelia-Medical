# Feature — About Us

**Purpose:** build trust — story, mission, vision, values and approach to care.
**Route:** `/about` → `src/app/(marketing)/about/page.tsx`

## Sections & components

| Section            | Components                                           |
| ------------------ | ---------------------------------------------------- |
| Hero               | `PageHero`                                           |
| Story + pull quote | `SectionHeading`, `ProseBlock`, `Reveal`, `LogoMark` |
| Mission & vision   | two plain cards                                      |
| Values (6)         | `InfoCard` grid                                      |
| Approach (3 steps) | `StepList`                                           |
| Meet the team      | `FeaturedDoctors` (reused from home)                 |
| CTA                | `CtaBand`                                            |

## Data

`data/pages/about.ts` · doctors via `features/doctors/api.ts#getDoctors` · CTA copy from `data/pages/home.ts#ctaBand`.

## State / performance

No state. Static. Client JS only for the doctors carousel + reveal.

## Accessibility / SEO

`aria-labelledby` per section, `figure/blockquote/figcaption` quote, BreadcrumbList JSON-LD.

## TODO

Clinic-approved story, mission, vision and values; optional team/facility photography.
