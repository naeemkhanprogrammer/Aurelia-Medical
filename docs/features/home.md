# Feature — Home

**Purpose:** premium landing page that builds trust and drives booking.
**Route:** `/` → `src/app/(marketing)/page.tsx`

## Sections (top → bottom)

| Section                            | Component                                            | Location                    |
| ---------------------------------- | ---------------------------------------------------- | --------------------------- |
| Hero                               | `HomeHero` + `HeroVisual`                            | `features/home/components/` |
| Quick booking bar                  | `QuickBookingBar` (client)                           | `features/home/components/` |
| Services                           | `ServicesHighlight` → `SplitSection` + `FeatureCard` |                             |
| Stats (flag `stats`)               | `StatsBand` + `ProgressRing`                         |                             |
| Featured doctors                   | `FeaturedDoctors` → `Carousel` + `DoctorCard`        |                             |
| Patient resources                  | `ResourcesHighlight`                                 |                             |
| Testimonials (flag `testimonials`) | `TestimonialsSection` + `TestimonialCard`            |                             |
| CTA band                           | `CtaBand`                                            | `components/sections/`      |

## Data / config

`data/pages/home.ts` (all copy), `features/services/api.ts#getServices`, `features/doctors/api.ts#getFeaturedDoctors`, `data/testimonials.ts`, `config/features.ts`, `config/external-links.ts#booking`, `config/contact.ts` (phone).

## State

Local only: `QuickBookingBar` (service, visit type), `Carousel` (edge state). No global state.

## UX decisions

- The mock's booking bar had "date" and "phone/email" inputs. **Replaced** with service + visit-type selectors, because collecting contact details would mean handling personal data on our site. The bar is a _link_ (not a form) to the booking platform with pre-selection params.
- Hero uses a branded composition instead of stock doctor photos; set `hero.image` to use a real photo.
- Highlight word ("closer") in italic gold, matching the mock's accent word.

## Performance

Page is static. Client JS: quick booking bar, carousels, reveal animations (LazyMotion). No images yet (SVG/CSS visuals).

## Accessibility

Single `h1` in hero; each section `aria-labelledby` its heading; stats use a `<dl>`; carousels labelled; booking link announces new tab.

## SEO

Absolute title with location keywords; `MedicalClinic` JSON-LD.

## External redirects

`booking` (hero, quick bar, CTA band, header).

## Open questions / TODO

- Real hero photo? Real stats or disable `FEATURE_STATS`.
- CPSA confirmation for testimonials.
