# Feature — Contact Us

**Purpose:** every way to reach and find the clinic, with privacy-safe enquiry options.
**Route:** `/contact`

## Sections & components

| Section         | Components                     | Notes                                                    |
| --------------- | ------------------------------ | -------------------------------------------------------- |
| Contact methods | local `ContactMethod` card     | click-to-call, `mailto:`, fax, secure enquiry (external) |
| Clinic hours    | `OpenStatus` (client) + `<dl>` | live Open/Closed in **America/Edmonton** time            |
| Visit info      | inverse card                   | address, parking, accessibility, transit                 |
| Map             | `MapEmbed` (client)            | click-to-load facade, behind `FEATURE_MAP_EMBED`         |
| Emergency       | `EmergencyNotice`              |                                                          |

Source order is methods → hours/visit → map (the mobile order); on desktop the sidebar spans both rows.

## Data / config

`config/contact.ts` (phone, fax, email, address, `timeZone`, hours, `visitInfo`, `map.embedUrl`, `map.directionsUrl`), `config/external-links.ts#enquiries`, `data/pages/contact.ts`.

## State

- `MapEmbed`: local `loaded` flag.
- `OpenStatus`: `useSyncExternalStore` with a 1-minute clock. Server snapshot is `null`, so the static HTML has no time-dependent markup (no hydration mismatch); the pill appears after hydration. Logic is a pure function in `lib/opening-hours.ts` (unit tested, incl. time-zone edge cases).

## Performance & privacy decisions

- **Map facade:** the Google iframe (~0.5 MB+ of third-party JS, cookies, IP disclosure) loads **only after the visitor clicks "Load map"**. "Get directions" works without it. The iframe is sandboxed and lazy.
- CSP `frame-src` allows only `https://www.google.com` and `https://maps.google.com`.
- Email card warns not to send health information by email.

## SEO

BreadcrumbList; NAP matches `MedicalClinic` JSON-LD (single source: `config/contact.ts`).

## TODO

Real address/phone/fax/email, confirmed hours, real Google Maps embed URL (Place ID), parking/transit details.
