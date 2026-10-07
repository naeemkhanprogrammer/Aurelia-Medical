import type { ImageAsset } from "@/types/common";

/**
 * Official brand assets. Swap a file here and every usage (header, footer,
 * mobile menu) updates. Source file: public/images/logo.png (cropped copy below).
 */
export const brandAssets = {
  logo: {
    src: "/images/brand/logo.png",
    alt: "Aurelia Medical Clinic",
    width: 860,
    height: 560,
  },
} as const satisfies Record<string, ImageAsset>;
