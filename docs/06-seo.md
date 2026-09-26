# 06 — SEO

- **Metadata API** per route via `buildMetadata()`; canonical URLs resolved against `metadataBase` (`NEXT_PUBLIC_SITE_URL` → Vercel URL fallback, `src/config/env.ts`).
- **Title template:** `%s | Aurelia Medical Group`; home uses an absolute title with location keywords.
- **Sitemap:** `app/sitemap.ts` — static pages + every service & doctor slug + progressive pages once `published: true`.
- **Progressive pages** are `noindex` until published (see features/progressive-pages.md).
- **OG image:** `app/opengraph-image.tsx` (brand colours from `config/theme.ts`).
- **Robots:** `app/robots.ts` — only production (`VERCEL_ENV=production`) is indexable; previews send `Disallow: /` _and_ `noindex` meta.
- **Structured data** (`src/lib/seo/json-ld.ts`, typed with schema-dts, rendered by `<JsonLd>` with `<` escaping):
  - Home: `MedicalClinic` (address, geo, hours, specialties, services, `@id` anchor).
  - Doctor profile: `Physician` (+ `parentOrganization` → clinic `@id`), `BreadcrumbList`.
  - FAQs: `FAQPage`.
  - All inner pages: `BreadcrumbList` (built with `lib/breadcrumbs.ts` so visual + structured breadcrumbs match).
  - Specialties use schema.org's `MedicalSpecialty` enumeration (`service.schemaSpecialties`).
- **Semantics:** one `h1` per page, logical heading order, landmarks, descriptive link text.
- **Local SEO TODO:** confirm Google Business Profile, NAP consistency (name/address/phone identical to `config/contact.ts`), add OG image once branding is final.
