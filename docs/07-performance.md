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

## Security (next.config.ts)

**Content-Security-Policy** (header, static): `default-src 'self'` · `script-src 'self' 'unsafe-inline'` · `style-src 'self' 'unsafe-inline'` · `img-src 'self' data: blob:` · `font-src 'self'` · `connect-src 'self'` · `frame-src https://www.google.com https://maps.google.com` · `object-src 'none'` · `base-uri 'self'` · `form-action 'self'` · `frame-ancestors 'none'` · `upgrade-insecure-requests`.

Why not nonces: a nonce forces every page to render per request (no static HTML / CDN cache). `'unsafe-inline'` scripts is the documented Next.js trade-off for static sites; risk is low because the site has **no user-generated content, no forms and no third-party scripts**. Revisit (nonce or experimental SRI) if dynamic/user content is ever added.

Other headers: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera/mic/geo/payment/usb off), HSTS (2 years, preload), `Cross-Origin-Opener-Policy: same-origin`, `poweredByHeader: false`. Verified by an e2e test.

Other measures: external links `rel="noopener noreferrer"` + strict referrer policy; JSON-LD escapes `<`; `server-only` guards on env/data modules; map iframe sandboxed and click-to-load.

## Measured results (Lighthouse mobile, local production build, 2026-09-26)

| Page                               | Perf  | A11y | Best practices | SEO | CLS |
| ---------------------------------- | ----- | ---- | -------------- | --- | --- |
| Home                               | 94    | 100  | 100            | 100 | 0   |
| About / Contact / FAQs / Resources | 94–95 | 100  | 100            | 100 | 0   |
| Doctors / Service detail / Booking | 94    | 100  | 100            | 100 | 0   |

Fixes that got us there:

1. **Removed `(marketing)/loading.tsx`** → CLS 0.30 → 0 (see 05-routing).
2. **Font subsetting:** Cormorant limited to weight 600 (+ italic) → font transfer 113 kB → 84 kB, LCP −0.7 s.
3. Map facade, native `<details>`, CSS scroll-snap carousel, LazyMotion.

Remaining LCP (~3 s on simulated slow 4G) is the web-font swap of hero text — acceptable for brand fidelity. If needed: `display: "optional"` on Montserrat.

## Budget

Lighthouse ≥ 90 in all four categories (mobile). Run on the Vercel preview before each release.
