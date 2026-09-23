# 07 — Performance & memoisation

## Decisions

- **Static prerendering** for all routes → CDN-served HTML.
- **Server Components by default.** Client JS is limited to: nav active state, mobile drawer, carousel buttons, reveal animation, quick-booking selects, doctor filter.
- **Fonts:** `next/font` (self-hosted, `display: swap`, subset latin, CSS variables).
- **Images:** `next/image` with AVIF/WebP, explicit `sizes`; hero/profile use `preload`. Placeholders are SVG/CSS (zero image bytes).
- **Motion:** `LazyMotion` + `m` + `domAnimation` (~15 kB instead of full bundle), `strict` mode; honours `prefers-reduced-motion`; `<noscript>` fallback keeps content visible without JS.
- **Carousel:** CSS scroll-snap, no carousel library.
- **Accordion:** native `<details>` — zero JS.
- **Icons:** named imports only (tree-shaken); icon registry only includes listed icons.

## Memoisation strategy

**React Compiler is enabled** (`reactCompiler: true`), which memoises components, values and callbacks automatically at build time. Therefore we **do not hand-write `React.memo` / `useMemo` / `useCallback`** — doing so would be redundant noise. Exceptions will be documented inline if profiling ever shows the compiler can't handle a case.

- Zustand selectors are atomic so subscribers re-render only on their slice.
- Derived data (e.g. filtered doctors) is computed inline; the compiler caches it.

## Security headers (next.config.ts)

`X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, HSTS, `poweredByHeader: false`.
**TODO before launch:** nonce-based Content-Security-Policy (must allow the Google Maps frame if the embed stays enabled).

## Budget

Lighthouse ≥ 90 in all four categories (mobile). Run on the Vercel preview before each release.
