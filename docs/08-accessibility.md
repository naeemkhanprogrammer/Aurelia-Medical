# 08 — Accessibility (WCAG 2.1 AA)

## Patterns in place

- **Landmarks:** `header` (banner), `nav` with distinct `aria-label`s (Main, Mobile, Footer, Patients, Breadcrumb), `main#main-content`, `footer`.
- **Skip link** as first focusable element.
- **Focus:** global `:focus-visible` gold outline; never removed without a replacement.
- **Mobile nav:** native `<dialog>` + `showModal()` → focus trap, Escape to close, inert background; toggle has `aria-expanded`/`aria-controls`; body scroll locked.
- **Active nav:** `aria-current="page"`.
- **External links:** visually hidden “(opens in a new tab)” suffix.
- **Cards:** single stretched link per card (one tab stop, meaningful name).
- **Carousel:** `aria-roledescription="carousel"`/`"slide"`, labelled prev/next buttons, focusable scroll track, disabled buttons at the edges.
- **Filter chips:** `role="group"` + `aria-pressed`; result count in an `aria-live` region.
- **Icons:** decorative by default (`aria-hidden`); ratings expose `role="img"` + label.
- **Forms/inputs:** every select has a `<label>`.
- **Colour contrast:** see docs/03 (gold text only via `accent-ink` on light surfaces).
- **Motion:** reduced-motion respected globally and in `Reveal`/`Carousel`.
- **Emergency notice** on action pages.

## Checklist per page

- [ ] One `h1`, no skipped heading levels
- [ ] Keyboard-only walkthrough (Tab/Shift+Tab/Enter/Escape)
- [ ] Screen reader spot check (VoiceOver)
- [ ] axe / Lighthouse a11y ≥ 90
- [ ] 200% zoom & 320px width without horizontal scroll
