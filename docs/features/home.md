# Feature — Home

**Purpose:** premium landing page that builds trust and drives booking.
**Route:** `/` → `src/app/(marketing)/page.tsx`

## Sections (top → bottom)

| Section                            | Component                                                        | Location                            |
| ---------------------------------- | ---------------------------------------------------------------- | ----------------------------------- |
| Hero                               | `HomeHero` + `HeroVisual`                                        | `features/home/components/`         |
| Clinic hours panel (overlaps hero) | `ClinicHoursPanel` → `OpenStatus` + `HoursTiles` (client leaves) | `features/clinic-hours/components/` |
| Services                           | `ServicesHighlight` → `SplitSection` + `FeatureCard`             |                                     |
| Stats (flag `stats`)               | `StatsBand` + `ProgressRing`                                     |                                     |
| Featured doctors                   | `FeaturedDoctors` → `Carousel` + `DoctorCard`                    |                                     |
| Patient resources                  | `ResourcesHighlight`                                             |                                     |
| Testimonials (flag `testimonials`) | `TestimonialsSection` + `TestimonialCard`                        |                                     |
| CTA band                           | `CtaBand`                                                        | `components/sections/`              |

## Data / config

`data/pages/home.ts` (all copy), `features/services/api.ts#getServices`, `features/doctors/api.ts#getFeaturedDoctors`, `data/testimonials.ts`, `config/features.ts`, `config/external-links.ts#booking`, `config/contact.ts` (phone).

## State

No global state. `OpenStatus` / `HoursTiles` read a shared minute clock (`hooks/use-current-minute.ts`, `useSyncExternalStore`, `null` on the server so static HTML has no time-dependent markup). `Carousel` keeps local edge state.

## UX decisions

- **Clinic hours panel** (client request, replaces the earlier quick-booking bar): live "Open now / Closed now" + next change, weekly hours as tiles with **today highlighted** (clinic time zone, America/Edmonton), Book Appointment + click-to-call, address with Get directions, urgent-care note. No form — the clinic will add its third-party booking / wait-time widget later; this card is the reserved slot for it.
- Status height is reserved (`min-h-7`) and today's highlight only changes colours, so hydration causes no layout shift (CLS 0).
- Hero uses a branded composition instead of stock doctor photos; set `hero.image` to use a real photo.
- Highlight word ("closer") in italic gold, matching the mock's accent word.

## Performance

Page is static. Client JS: clinic-hours status/tiles (tiny), carousels, reveal animations (LazyMotion). No images yet (SVG/CSS visuals).

## Accessibility

Single `h1` in hero; each section `aria-labelledby` its heading; stats use a `<dl>`; carousels labelled; booking link announces new tab.

## SEO

Absolute title with location keywords; `MedicalClinic` JSON-LD.

## External redirects

`booking` (hero, quick bar, CTA band, header).

## Open questions / TODO

- Real hero photo? Real stats or disable `FEATURE_STATS`.
- CPSA confirmation for testimonials.
