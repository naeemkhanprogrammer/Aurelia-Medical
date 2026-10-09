# Feature — Gallery

**Purpose:** showcase the clinic (facility, reception, treatment rooms, team, community) to build trust before a first visit.
**Route:** `/gallery` → `src/app/(marketing)/gallery/page.tsx`

## Components

| Component                                         | Location                       | Type                             |
| ------------------------------------------------- | ------------------------------ | -------------------------------- |
| `GalleryBrowser` (filter + grid + lightbox state) | `features/gallery/components/` | client                           |
| `GalleryGrid` + `GalleryTile` (balanced masonry)  | `features/gallery/components/` | client (rendered inside browser) |
| `GalleryLightbox` (native `<dialog>`)             | `features/gallery/components/` | client                           |
| `FilterChips` (shared with the doctors directory) | `components/shared/`           | client                           |
| `PageHero`, `CtaBand`                             | `components/sections/`         | server                           |

## Data

- `data/gallery.ts` → `galleryCategories` + `galleryImages` (`GalleryImage`: `id`, `src`, `alt`, `caption`, `categoryId`, `width`, `height`).
- Accessed through `features/gallery/api.ts` (async, server-only) so a CMS/media library can replace it later.
- Page copy: `data/pages/gallery.ts`.

### ⚠️ Placeholder images

`public/images/gallery/*.jpg` are **generated, branded placeholders** (no stock photos, no external requests). To use real photos:

1. Drop the photo into `public/images/gallery/` (JPG/WebP, ≥ 1600 px on the long edge).
2. Update the matching entry in `data/gallery.ts` — `src`, real `width`/`height`, and a descriptive `alt`.
   Mixed orientations are fine — the masonry layout adapts.

**Privacy:** only publish photos of patients/staff with written consent. Avoid identifiable patients entirely.

## State

Local only (category filter, open image index) — no global store needed (docs/04).

## UX

- **Balanced masonry:** 1 column (phone), 2 (tablet), 3 (desktop). `lib/masonry.ts#distributeIntoColumns` places each image in the shortest column (unit-tested); one layout per breakpoint is rendered and toggled with CSS, so there is no layout shift and hidden layouts' lazy images never download. Images keep their natural aspect ratio (no cropping).
- Category chips filter instantly; result count announced politely.
- Click/tap opens a fullscreen lightbox: caption, "3 / 12" counter, prev/next buttons, **arrow keys**, **swipe** on touch, Escape/close button/backdrop to close. Focus returns to the image you opened.
- Hover: subtle zoom + caption reveal (desktop); captions always visible on touch devices.

## Performance

- `next/image` with per-column `sizes` (AVIF/WebP), all thumbnails lazy-loaded except the first, which is the mobile LCP element (`loading="eager"` + `fetchPriority="high"`; same URL in every layout so it downloads once). Lighthouse mobile measured after the fix.
- No carousel/lightbox library — native `<dialog>` + a few lines of state.
- Lightbox loads only the current image at full width.

## Accessibility

Each thumbnail is a `<button>` with an `aria-label` ("Open image: …"); lightbox is a modal dialog with labelled controls; filter chips use `aria-pressed`.

## SEO

Metadata, BreadcrumbList + `ImageGallery` JSON-LD, listed in the sitemap.

## TODO

Real photography (facility exterior/interior, reception, consult rooms, team).

## Navigation

Added to the main nav (and footer quick links). With 8 items the desktop menu now starts at **`xl` (1280 px)**; below that the hamburger menu is used, so links never wrap or overflow.
