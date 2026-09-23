# Feature — Meet Our Doctors

**Purpose:** showcase physicians; let patients find the right specialist.
**Routes:** `/doctors` (directory), `/doctors/[slug]` (profile, statically generated).

## Components

| Component                                                           | Location                       | Type              |
| ------------------------------------------------------------------- | ------------------------------ | ----------------- |
| `DoctorDirectory` (filter + grid)                                   | `features/doctors/components/` | client            |
| `DoctorCard`                                                        | `features/doctors/components/` | server-compatible |
| `DoctorAvatar` (photo or monogram)                                  | `features/doctors/components/` | server-compatible |
| `PageHero`, `CtaBand`, `CheckList`, `ProseBlock`, `EmergencyNotice` | shared/sections                | server            |

## Data

`data/doctors.ts` (⚠️ dummy profiles) via `features/doctors/api.ts` (`getDoctors`, `getDoctorBySlug`, `getDoctorsByService`, `getDoctorSlugs`, `getFeaturedDoctors`). Copy: `data/pages/doctors.ts`. Doctor ↔ service link via `doctor.serviceSlugs`.

## State

Specialty filter = local `useState` in `DoctorDirectory` (see docs/04). Filter options only include specialties that have at least one doctor.

## UX

- Profile: hero with monogram/photo + credential badges; main column (About, Areas of focus, Education); sidebar (services, languages, booking card, referral note for specialists, emergency notice).
- "Accepting new patients" badge driven by data.

## Performance

Static; profile avatar uses `preload`. The directory copy is imported inside the client component because it contains a formatter function (functions can't be passed from Server to Client Components).

## Accessibility

Filter chips `aria-pressed` in a labelled group; live result count; card = single stretched link; monogram has `role="img"` + name.

## SEO

Per-doctor title `Name, Credentials — Title`; `Physician` + `BreadcrumbList` JSON-LD; all profiles in sitemap.

## Redirects

`booking` (pre-selects the doctor's first service).

## TODO

Real profiles & photos (`photo: { src: "/images/doctors/<slug>.jpg", alt, width, height }`), CPSA registration numbers if desired, booking deep-link per physician if the platform supports it.
