# 02 — Folder structure & conventions

```
aurelia-medical/
├── docs/                    # this documentation (source of truth)
├── public/images/           # static images (real photos go here)
├── src/
│   ├── app/
│   │   ├── (marketing)/     # public site route group — layout adds header/footer
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx     # Home ("/")
│   │   │   ├── about/ contact/ doctors/ services/ faqs/ careers/ … (one folder per route)
│   │   │   ├── error.tsx   (no loading.tsx — see 05-routing)
│   │   ├── layout.tsx       # root: <html>, fonts, global metadata
│   │   ├── not-found.tsx  global-error.tsx
│   │   ├── sitemap.ts  robots.ts  icon.svg
│   ├── components/
│   │   ├── ui/              # primitives: Button, Card, Badge, Eyebrow, Select, Accordion, Icon
│   │   ├── layout/          # Container, Section, Header, Footer, nav, SiteShell, SkipLink
│   │   ├── sections/        # composed sections reused across pages: PageHero, SplitSection, CtaBand
│   │   └── shared/          # cross-cutting: Logo, ExternalLink, BookingLink, Carousel, Reveal, JsonLd…
│   ├── features/<feature>/  # api.ts (data access) + components/ local to the feature
│   ├── hooks/               # reusable hooks (none yet)
│   ├── store/               # Zustand stores
│   ├── lib/                 # cn, formatters, external-link builder, seo/
│   ├── config/              # site, contact, routes, navigation, external-links, features, env, theme
│   ├── data/                # typed content (services, doctors, testimonials, pages/*, common)
│   ├── constants/           # icon names, link constants
│   ├── types/               # shared TS types
│   └── styles/              # globals.css, tokens.css, fonts.ts
├── tests/unit  tests/e2e
```

> **Deviation from the brief:** the brief lists both `app/page.tsx` and `app/(marketing)/`. A route group cannot coexist with a root `page.tsx` for the same URL, so Home lives at `app/(marketing)/page.tsx`.

## Rules

- Content → `data/`. Links, menus, redirects, contact → `config/`. Types → `types/`.
- Routes are never hardcoded: use `routes.*` from `config/routes.ts`.
- Absolute imports via `@/…`.
- A component used by one feature lives in `features/<feature>/components`; used by 2+ features → `components/shared` or `components/sections`.
- `server-only` is imported in modules that read env or data access (`config/env.ts`, `config/features.ts`, `features/*/api.ts`, `lib/seo/json-ld.ts`).
- Client components are marked `"use client"` and kept as small leaves.

## Naming

- Files: `kebab-case.tsx`. Components: `PascalCase`. Hooks: `useX`. Stores: `x-store.ts` exporting `useXStore` + selectors.
- Data constants: `camelCase` (`doctors`, `homeContent`). Page copy: `<page>PageContent`.
