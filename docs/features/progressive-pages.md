# Feature — Progressive ("coming soon") pages

**Routes:** `/referrals`, `/new-patients`, `/telemedicine`, `/community-programs`
**Purpose:** ship the essentials now (what it is + the action patients/providers need), with full content later.

## Template

`ProgressivePage` (`components/sections/progressive-page.tsx`): hero with primary/secondary CTAs (`CtaButton` renders internal, external-platform or phone CTAs from data) → status badge → intro → 3 highlight cards → notice → emergency notice.

## Data model

`ProgressivePageContent` (`types/content.ts`), instances in `data/pages/progressive.ts`:
`seo`, `published`, `hero`, `statusLabel`, `intro[]`, `highlights[]`, `actions: CtaLink[]`, `noticeTitle`, `notice`.

## SEO behaviour

`published: false` ⇒ page has `noindex` and is excluded from the sitemap (thin content shouldn't be indexed). Flip to `true` when final copy is in — sitemap and robots update automatically.

## Redirects

| Page               | Primary action                               |
| ------------------ | -------------------------------------------- |
| Referrals          | `externalLinks.referral` (eReferral) + phone |
| New Patients       | `externalLinks.patientRegistration`          |
| Telemedicine       | `externalLinks.telemedicine` + booking       |
| Community Programs | `externalLinks.newsletter`                   |

## Out of scope

Blog / News & Announcements — future CMS phase (not scaffolded, per client).
