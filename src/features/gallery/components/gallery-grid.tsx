"use client";

import { Expand } from "lucide-react";
import Image from "next/image";

import { galleryPageContent } from "@/data/pages/gallery";
import { distributeIntoColumns } from "@/lib/masonry";
import type { GalleryImage } from "@/types/content";

export interface GalleryGridProps {
  images: readonly GalleryImage[];
  categoryLabels: Readonly<Record<string, string>>;
  onOpen: (index: number) => void;
}

/** Column layouts, each shown only at its breakpoint (CSS), so there is no layout shift. */
const LAYOUTS = [
  { columns: 1, className: "flex sm:hidden" },
  { columns: 2, className: "hidden sm:flex lg:hidden" },
  { columns: 3, className: "hidden lg:flex" },
] as const;

/**
 * Balanced masonry: images keep their natural aspect ratio (real photos of any
 * orientation drop in without cropping) and are placed into the shortest column.
 * Hidden layouts are `display: none`, so their lazy images never download.
 */
export function GalleryGrid({ images, categoryLabels, onOpen }: GalleryGridProps) {
  return (
    <>
      {LAYOUTS.map((layout) => (
        <div key={layout.columns} className={`${layout.className} gap-4 lg:gap-5`}>
          {distributeIntoColumns(images, layout.columns).map((column, columnIndex) => (
            <ul key={columnIndex} className="flex min-w-0 flex-1 flex-col gap-4 lg:gap-5">
              {column.map((index) => {
                const image = images[index];
                return image ? (
                  <li key={image.id}>
                    <GalleryTile
                      image={image}
                      category={categoryLabels[image.categoryId]}
                      onOpen={() => onOpen(index)}
                      priority={index === 0}
                    />
                  </li>
                ) : null;
              })}
            </ul>
          ))}
        </div>
      ))}
    </>
  );
}

interface GalleryTileProps {
  image: GalleryImage;
  category?: string;
  onOpen: () => void;
  /**
   * First image is usually the LCP element on mobile → load eagerly with high priority.
   * It has the same URL in every layout, so the browser fetches it once.
   */
  priority?: boolean;
}

function GalleryTile({ image, category, onOpen, priority = false }: GalleryTileProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={galleryPageContent.openImageLabel(image.caption)}
      className="group relative block w-full overflow-hidden rounded-xl bg-surface-muted shadow-card focus-visible:outline-offset-4"
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="h-auto w-full transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
      />
      {/* Caption: always visible on touch screens, revealed on hover/focus with a pointer. */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent p-4 pt-12 text-left transition-opacity duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:opacity-100">
        <span>
          {category && (
            <span className="block text-xs font-semibold tracking-wide text-accent-soft uppercase">
              {category}
            </span>
          )}
          <span className="mt-1 block font-heading text-h4 font-semibold text-inverse-foreground">
            {image.caption}
          </span>
        </span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-surface/15 text-inverse-foreground backdrop-blur">
          <Expand aria-hidden className="size-4" />
        </span>
      </span>
    </button>
  );
}
