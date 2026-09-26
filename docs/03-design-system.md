# 03 — Design system

Visual direction: layout skeleton from the approved homepage mock (split intro/grid sections, rounded hero panel, overlapping booking bar, stats rings, doctor carousel, CTA band, navy footer), colours & type from the **Aurelia brand guide**.

## Colour — one place to re-theme

`src/styles/tokens.css` has three layers:

1. **Brand primitives** (the only hex values in the codebase)
   | Token                 | Value     | Brand name     |
   | --------------------- | --------- | -------------- |
   | `--brand-primary`     | `#0B2346` | Midnight Navy  |
   | `--brand-accent`      | `#C9A14A` | Royal Gold     |
   | `--brand-accent-soft` | `#E6D3A3` | Champagne Gold |
   | `--brand-canvas`      | `#F8F7F3` | Soft Ivory     |
2. **Derived scales** — `--primary-50…950`, `--accent-50…800` computed with `color-mix(in oklab, …)`.
3. **Semantic tokens** — `canvas`, `surface`, `surface-muted`, `foreground`, `heading`, `muted-foreground`, `primary`, `accent`, `accent-ink`, `inverse*`, `border`, `ring`…

**Change `--brand-primary` and the whole site (buttons, hero, footer, borders, shadows, focus rings) updates.** Components only use semantic utilities (`bg-primary`, `text-muted-foreground`), never hex values. The default Tailwind palette is removed (`--color-*: initial`) so off-brand colours can't creep in.

Multiple themes later: add `[data-theme="x"] { --brand-primary: …; }` overriding layer 1 only.

`src/config/theme.ts` mirrors the primitives for places CSS can't reach (browser `theme-color`, favicon). Keep in sync.

### Contrast rules (WCAG AA)

- Gold (`accent`) on ivory is only ~2.1:1 → **never use for text on light backgrounds.** Use `text-accent-ink` (darkened gold, ≥4.5:1).
- Gold on navy ≈ 6.7:1 ✓ — fine for text/buttons on inverse surfaces.
- Button pairs: `primary` (navy/ivory), `accent` (gold/navy).

## Typography

| Role            | Font                   | Utility                               |
| --------------- | ---------------------- | ------------------------------------- |
| Headings / logo | Cormorant Garamond 600 | automatic on h1–h4, or `font-heading` |
| Body / UI       | Montserrat             | `font-sans` (default)                 |

Fluid scale (`clamp`): `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-h4`, `text-lead`, `text-eyebrow`. Highlight words render in italic accent (`<HighlightedText>`).

## Spacing, radii, elevation, layout

- Spacing: Tailwind's 0.25rem scale. Section rhythm: `section-y`, `section-y-sm` utilities.
- Container: `container-site` (max 80rem, fluid gutters).
- Radii: `rounded-sm/md/lg/xl/2xl` (0.5 → 2rem). Cards `xl`, hero panels `2xl`, buttons `full`.
- Shadows (navy-tinted): `shadow-xs`, `shadow-card`, `shadow-raised`, `shadow-floating`.
- Decorative navy backdrop: `bg-inverse-glow`.

## Components

| Primitive                              | File               | Variants                                                                     |
| -------------------------------------- | ------------------ | ---------------------------------------------------------------------------- |
| Button / ButtonLink / `buttonVariants` | `ui/button.tsx`    | primary, accent, outline, outline-inverse, soft, ghost, link · sm/md/lg/icon |
| Card                                   | `ui/card.tsx`      | default, flat, muted, inverse · interactive · padding                        |
| Badge                                  | `ui/badge.tsx`     | accent, primary, success, inverse, neutral                                   |
| Eyebrow                                | `ui/eyebrow.tsx`   | default, inverse                                                             |
| Select                                 | `ui/select.tsx`    | native select, styled                                                        |
| Accordion                              | `ui/accordion.tsx` | native `<details>`, optional exclusive group                                 |
| Icon                                   | `ui/icon.tsx`      | name-based registry (`constants/icons.ts`)                                   |

Shared: `Logo`/`LogoMark` (placeholder), `ExternalLink`, `BookingLink`, `PhoneLink`, `SectionHeading`, `FeatureCard`, `Carousel`, `Reveal`, `ProgressRing`, `Breadcrumbs`, `StepList`, `CheckList`, `EmergencyNotice`, `ProseBlock`, `JsonLd`.
Also: `CtaButton` (renders a content-defined `CtaLink`), `InfoCard`.
Sections: `PageHero`, `SplitSection`, `CtaBand`, `ProgressivePage`, `LegalDocument`.

## Imagery

No stock photos of fictional doctors ship. Until real photography arrives: branded hero composition (`HeroVisual`) and monogram avatars (`DoctorAvatar`). Supplying `hero.image` or `doctor.photo` in data switches to `next/image` automatically.
