# Aurelia Medical Group — Website

Production-grade Next.js 16 (App Router) site for Aurelia Medical Group, Red Deer, Alberta.

> 📚 **Start with [`docs/`](./docs)** — architecture, design system and a doc per feature.

## Quick start

```bash
pnpm install
cp .env.example .env.local
pnpm dev            # http://localhost:3000
```

## Scripts

`pnpm build` · `pnpm start` · `pnpm typecheck` · `pnpm lint` · `pnpm format` · `pnpm test` · `pnpm test:e2e` · `pnpm check`

## Where things live

| What                                             | Where                               |
| ------------------------------------------------ | ----------------------------------- |
| Brand colours (re-theme here)                    | `src/styles/tokens.css`             |
| Contact details, hours, map                      | `src/config/contact.ts`             |
| Third-party links (booking, referrals, careers…) | `src/config/external-links.ts`      |
| Navigation                                       | `src/config/navigation.ts`          |
| Feature flags                                    | `src/config/features.ts` / env vars |
| Content (doctors, services, page copy)           | `src/data/`                         |

## Privacy

This site never collects patient data — every patient action links out to the clinic's designated platform. See [`docs/00-overview.md`](./docs/00-overview.md).
