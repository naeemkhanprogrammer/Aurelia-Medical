# Feature — FAQs

**Route:** `/faqs`
**Purpose:** answer common questions (booking, new patients, referrals, billing, privacy).

## Components

`FaqList` (`features/faqs/components`) → `Accordion` (`components/ui`, native `<details>` with `name` grouping so one answer per category is open at a time). Sticky "Jump to a topic" nav (anchor links, zero JS). "Still have questions?" CTA card.

## Data

`data/faqs.ts` (categories → items; answers are paragraph arrays) via `features/faqs/api.ts`. Page copy: `data/pages/faqs.ts`.

## State / performance

Zero client JS on this page besides global chrome.

## SEO

`FAQPage` JSON-LD (health sites are eligible for FAQ rich results) + BreadcrumbList.

## Accessibility

Native disclosure semantics, headings per category, `scroll-mt` so anchored headings clear the sticky header.

## TODO

Clinic-approved answers.
