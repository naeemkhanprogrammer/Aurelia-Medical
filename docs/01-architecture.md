# 01 — Architecture

## Stack

| Concern             | Choice                                                                  | Notes                                                   |
| ------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------- |
| Framework           | **Next.js 16.3** (App Router, Turbopack) + **React 19**                 | Server Components by default                            |
| Language            | **TypeScript 5 strict** (+ `noUncheckedIndexedAccess`)                  |                                                         |
| Styling             | **Tailwind CSS v4** (CSS-first `@theme`)                                | Tokens in `src/styles/tokens.css`                       |
| Memoisation         | **React Compiler** (`reactCompiler: true`)                              | Automatic memo — see 07-performance                     |
| Global client state | **Zustand 5**                                                           | `src/store/`                                            |
| Server/async state  | **TanStack Query** — _deferred_                                         | Added when the first API-backed feature arrives         |
| Forms               | React Hook Form + Zod — _deferred_                                      | Only for client-only inputs; patient forms redirect out |
| Animation           | **Motion** (`motion/react`, formerly Framer Motion) via `LazyMotion`    | Used sparingly                                          |
| Icons               | lucide-react + custom icons (`src/components/ui/custom-icons.tsx`)      |                                                         |
| Structured data     | schema-dts (typed JSON-LD)                                              |                                                         |
| Testing             | Vitest + RTL (unit), Playwright (e2e)                                   | `tests/`                                                |
| Quality             | ESLint 9 flat config, Prettier (+ Tailwind plugin), Husky + lint-staged |                                                         |
| Hosting             | Vercel                                                                  | See 09-deployment-vercel                                |

## Layers & data flow

```
data/ (typed content)  ─┐
config/ (site, routes,  ├─► features/<x>/api.ts (async, server-only) ─► app/ routes (RSC)
  nav, external links)  ┘                                                     │
                                                                              ▼
                                         components/sections + features/<x>/components
                                                                              │
                                                                              ▼
                                                   components/ui (primitives) + shared
```

- **Content never lives in components.** Pages pull from `data/` and `config/`, then pass props down.
- **Data access is async and `server-only`** (`features/doctors/api.ts`, `features/services/api.ts`). Today they read static modules; later they can call a CMS/API with no caller changes.
- **Client components are leaves**: `NavLink`, `MobileNav`, `MobileNavToggle`, `Carousel`, `Reveal`, `QuickBookingBar`, `DoctorDirectory`. Everything else renders on the server.
- **Outbound hand-off**: every patient action goes through `ExternalLink` / `BookingLink` using `buildExternalUrl()` (`src/lib/external-links.ts`). Only non-identifying values (service slug, visit type) may be passed as query params.

## Rendering

All Phase 1 routes are **statically prerendered** (`○` / `●` in the build output). Dynamic segments use `generateStaticParams` + `dynamicParams = false` (unknown slugs → 404).

## Feature flags

`src/config/features.ts` (server-only), overridable via env vars: `FEATURE_TESTIMONIALS`, `FEATURE_STATS`, `FEATURE_MAP_EMBED`.

## i18n readiness

All UI microcopy is in `src/data/common.ts` (`uiStrings`) and page copy in `src/data/pages/*`. To localise: move these into `data/<locale>/`, add a `[locale]` segment (or next-intl), and select content by locale in the page. Components need no changes.

## Future back-end

- API routes: `src/app/api/*` (Route Handlers) or Server Actions.
- Server state in client components: TanStack Query provider in a client `providers.tsx` under the root layout.
- Any feature that could touch personal data requires a privacy review first (see 00-overview).
