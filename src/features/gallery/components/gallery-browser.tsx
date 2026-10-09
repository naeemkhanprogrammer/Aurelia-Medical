"use client";

import { useState } from "react";

import { FilterChips } from "@/components/shared/filter-chips";
import { galleryPageContent as t } from "@/data/pages/gallery";
import type { GalleryCategory, GalleryImage } from "@/types/content";

import { GalleryGrid } from "./gallery-grid";
import { GalleryLightbox } from "./gallery-lightbox";

export interface GalleryBrowserProps {
  images: readonly GalleryImage[];
  categories: readonly GalleryCategory[];
}

const ALL = "all";

/** Filter + masonry grid + lightbox. All state is local to this component. */
export function GalleryBrowser({ images, categories }: GalleryBrowserProps) {
  const [category, setCategory] = useState<string>(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible =
    category === ALL ? images : images.filter((image) => image.categoryId === category);
  const categoryLabels = Object.fromEntries(categories.map((c) => [c.id, c.label]));
  const options = [
    { value: ALL, label: t.allLabel },
    ...categories.map((c) => ({ value: c.id, label: c.label })),
  ];

  const changeCategory = (value: string) => {
    setOpenIndex(null);
    setCategory(value);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FilterChips
          label={t.filterLabel}
          options={options}
          value={category}
          onChange={changeCategory}
        />
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {t.resultsLabel(visible.length)}
        </p>
      </div>

      <div className="mt-8">
        {visible.length > 0 ? (
          <GalleryGrid images={visible} categoryLabels={categoryLabels} onOpen={setOpenIndex} />
        ) : (
          <p className="rounded-xl border border-dashed border-border-strong p-10 text-center text-muted-foreground">
            {t.emptyState}
          </p>
        )}
      </div>

      <GalleryLightbox
        images={visible}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </div>
  );
}
