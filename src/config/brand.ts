import type { ImageAsset } from "@/types/common";

/**
 * Official brand assets. Swap a file here and every usage (header, footer,
 * mobile menu) updates. Source file: public/images/logo.jpeg (cropped copy below).
 */
export const brandAssets = {
  logo: {
    src: "/images/brand/logo.jpg",
    alt: "Aurelia Medical Clinic",
    width: 1340,
    height: 850,
  },
} as const satisfies Record<string, ImageAsset>;
