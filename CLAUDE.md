@AGENTS.md

# Project notes

- Read `docs/` before changing a feature; update the matching `docs/features/*.md` with every change (doc first, then code).
- No hardcoded copy/links/colours in components: content → `src/data`, links/menus/contact → `src/config`, colours → `src/styles/tokens.css`.
- Never add forms that collect patient data, analytics, or third-party embeds without explicit approval — patient actions link out via `src/config/external-links.ts`.
- Blog/News is out of scope for Phase 1.
- React Compiler is on: don't hand-write `useMemo`/`useCallback`/`memo`.
- `pnpm check` must pass before committing.
