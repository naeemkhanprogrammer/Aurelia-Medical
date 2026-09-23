# 10 — Conventions

## Code

- TypeScript strict; no `any` (lint error). Prefer `interface` for props, `type` for unions.
- `import type` for type-only imports (lint-enforced).
- Components: small, single-responsibility, typed props, no content literals (use `data/`/`config/`).
- Styling: Tailwind semantic utilities only; compose with `cn()`; variants with `cva`. No hex values outside `tokens.css` / `config/theme.ts`.
- Server Components by default; `"use client"` only for interactivity.
- Accessibility requirements in docs/08 are part of "done".

## Scripts

| Command                             | Purpose                  |
| ----------------------------------- | ------------------------ |
| `pnpm dev`                          | local dev (Turbopack)    |
| `pnpm build` / `pnpm start`         | production build / serve |
| `pnpm typecheck`                    | `next typegen` + `tsc`   |
| `pnpm lint` / `pnpm lint:fix`       | ESLint                   |
| `pnpm format` / `pnpm format:check` | Prettier                 |
| `pnpm test` / `pnpm test:e2e`       | Vitest / Playwright      |
| `pnpm check`                        | everything except e2e    |

## Git

- Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`, `style:`, `perf:`.
- Pre-commit: Husky → lint-staged (ESLint --fix + Prettier on staged files).
- Never commit `.env*` (except `.env.example`).

## Definition of done (per feature)

Doc in `docs/features/` accurate · reusable typed components · zero hardcoded copy · responsive & accessible · metadata set · `pnpm check` green · verified on a Vercel preview.
