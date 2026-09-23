# Feature — Book Appointment (redirect)

**Purpose:** a clear, reassuring hand-off to the clinic's third-party booking platform. **No booking data is collected on this site.**
**Route:** `/book-appointment`

## How the hand-off works

- URL + supported query params: `config/external-links.ts → externalLinks.booking` (`params: { service, visitType }`).
- Built by `buildExternalUrl("booking", { service })` (`lib/external-links.ts`), rendered by `BookingLink` / `ExternalLink` (new tab, `rel="noopener noreferrer"`, strict referrer policy, SR "(opens in a new tab)").
- Placeholder links show a dev-only tooltip (`isPlaceholder: true`).

## Page structure

Hero with primary "Continue to secure booking" → privacy reassurance line → "How booking works" steps → "Book by service" list (badge: referral required / book directly; per-service CTA) → sidebar: call-to-book card with hours, new-patient card, emergency notice.

## Components

`PageHero`, `StepList`, `BookingLink`, `PhoneLink`, `EmergencyNotice`, `Badge`, `Card`, `Icon`.

## Data

`data/pages/booking.ts`, `features/services/api.ts`, `config/contact.ts` (hours, phone).

## State

None.

## Other booking entry points

Header CTA, mobile drawer, home hero, quick booking bar, CTA band, doctor profiles, service pages — all via `BookingLink`.

## TODO

Real platform URL & param names; confirm whether the platform supports service/visit-type pre-selection (otherwise remove `params`).
