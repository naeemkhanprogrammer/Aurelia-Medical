import "server-only";

import { galleryCategories, galleryImages } from "@/data/gallery";
import type { GalleryCategory, GalleryImage } from "@/types/content";

/** Gallery data access — swap for a CMS / media library later without touching callers. */
export async function getGalleryImages(): Promise<readonly GalleryImage[]> {
  return galleryImages;
}

/** Only categories that currently contain at least one image. */
export async function getGalleryCategories(): Promise<readonly GalleryCategory[]> {
  return galleryCategories.filter((category) =>
    galleryImages.some((image) => image.categoryId === category.id),
  );
}
