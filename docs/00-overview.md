# 00 — Product overview

## Summary

Marketing / informational website for **Aurelia Medical Group**, a multidisciplinary specialty & family-practice clinic in **Red Deer, Alberta** (opening soon). Built as a scalable **Next.js 16 (App Router) full-stack app** so back-end features can be added later without refactoring.

**Positioning:** premium, modern, compassionate, trustworthy.
**Priority services:** Family Practice, Respirology, Child Psychiatry (plus Internal Medicine, Allied Health).

## Business goals

Build trust & credibility · strong local SEO · showcase doctors & services · drive appointment requests · educate patients.

## Phases

| Phase  | Scope                                                                                                                                                                                                                                             | Status                                  |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 1      | Presentation site: Home, About, Doctors, Services, Book Appointment (redirect), Insurance, Patient Resources, Careers (redirect), Contact, FAQs, Privacy Policy + "coming soon" pages (Referrals, New Patients, Telemedicine, Community Programs) | **Done** (content placeholders pending) |
| Future | **Blog / News & Announcements** (CMS-driven dynamic content) — intentionally _not_ built in Phase 1 per client direction. The data-access layer (`src/features/*/api.ts`) is already async so a CMS can plug in.                                  | Planned                                 |
| Future | Back-end features (TanStack Query for server state, authenticated portals, etc.)                                                                                                                                                                  | Planned                                 |

## Critical constraints

1. **No patient health data is collected or stored on our infrastructure.** Booking, registration, referrals, careers applications and enquiries **link out** to the clinic's third-party platforms.
2. All outbound destinations live in **one config file**: `src/config/external-links.ts` (placeholders flagged `isPlaceholder: true`).
3. **No analytics, tracking, or data-capturing third-party embeds** without explicit sign-off (PIPEDA / Alberta HIA context).
   - Fonts are self-hosted via `next/font` (no runtime Google requests).
   - The Google Maps embed (Contact page) is the only third-party embed. It is **click-to-load** (nothing is sent to Google until the visitor opts in) and behind the `FEATURE_MAP_EMBED` flag.

## Compliance notes (to confirm with the clinic)

- **Testimonials:** CPSA advertising standards restrict physician testimonials. The section is behind `FEATURE_TESTIMONIALS` (on in development for design review) — **must be confirmed before production**.
- **Statistics band** (98% satisfaction etc.) uses placeholder figures for a clinic that has not opened — behind `FEATURE_STATS`; replace with verifiable numbers or disable.
- Avoid superlatives ("best", "leading") in copy.

## Placeholder inventory (replace before launch)

| Item                                           | Location                                                                                                                           |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Favicon / OG mark (vector approximation)       | `src/app/icon.svg`, `src/components/shared/logo.tsx` (`LogoMark`) — header/footer use the official logo from `src/config/brand.ts` |
| Contact details, hours, map                    | `src/config/contact.ts`                                                                                                            |
| Third-party URLs                               | `src/config/external-links.ts`                                                                                                     |
| Social profiles                                | `src/config/navigation.ts` (`socialLinks`)                                                                                         |
| Doctor profiles (dummy)                        | `src/data/doctors.ts`                                                                                                              |
| Service copy                                   | `src/data/services.ts`                                                                                                             |
| Testimonials                                   | `src/data/testimonials.ts`                                                                                                         |
| Stats                                          | `src/data/pages/home.ts`                                                                                                           |
| FAQs, fees, careers, resources, privacy policy | `src/data/faqs.ts`, `src/data/pages/*`, `src/data/careers.ts`, `src/data/resources.ts`                                             |
| Downloadable forms (PDFs)                      | `public/documents/` + `file` field in `src/data/resources.ts`                                                                      |
| Legal name, domain                             | `src/config/site.ts`, `NEXT_PUBLIC_SITE_URL`                                                                                       |
