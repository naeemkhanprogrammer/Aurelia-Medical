# 09 — Deployment (Vercel)

## Setup

1. Push the repo to GitHub.
2. Vercel → **Add New Project** → import the repo. Framework preset: Next.js (auto). Package manager: pnpm (auto from `packageManager`).
3. Environment variables (Project → Settings → Environment Variables):
   | Name                   | Production                      | Preview                       | Notes          |
   | ---------------------- | ------------------------------- | ----------------------------- | -------------- |
   | `NEXT_PUBLIC_SITE_URL` | `https://<final-domain>`        | _(unset → uses `VERCEL_URL`)_ | canonical URLs |
   | `FEATURE_TESTIMONIALS` | `false` until CPSA confirmation | `true`                        |                |
   | `FEATURE_STATS`        | `false` until real figures      | `true`                        |                |
   | `FEATURE_MAP_EMBED`    | decide after privacy review     | `true`                        |                |
4. Add the custom domain; Vercel provisions SSL automatically.

## Previews

Every branch/PR gets a preview URL. Previews are **not indexable** (`robots.ts` disallows + `noindex` meta, driven by `VERCEL_ENV`).

## Release checklist

- [ ] `pnpm check` passes (typecheck, lint, format, unit tests)
- [ ] `pnpm test:e2e` against the preview (`PLAYWRIGHT_BASE_URL=<preview-url> pnpm test:e2e`)
- [ ] Lighthouse ≥ 90 on preview
- [ ] Placeholder inventory (docs/00) cleared
- [ ] CSP verified on the production domain (DevTools console shows no CSP violations)
