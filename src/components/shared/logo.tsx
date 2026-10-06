import Image from "next/image";

import { brandAssets } from "@/config/brand";
import { cn } from "@/lib/cn";

/**
 * `LogoMark` — simplified vector of the brand mark, used ONLY for decorative
 * watermarks (hero/CTA backgrounds, avatars, 404). Follows design tokens.
 * The real logo (`Logo`) is the official raster asset from config/brand.ts.
 */

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
      className={cn("text-accent", className)}
    >
      <path
        d="M13 40A21 21 0 1 1 51 40"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <path d="M32 13 45.5 50H41l-9-25.5L23 50h-4.5L32 13Z" fill="currentColor" />
      <path d="M15 50h11M38 50h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M7 38h17.5l2.5-5 2.5 10 3-14 2.5 12 2-3h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface LogoProps {
  /** Visual size; the image keeps its aspect ratio. */
  size?: "sm" | "md" | "lg";
  /** Load eagerly (use for the above-the-fold header logo only). */
  preload?: boolean;
  className?: string;
}

/** Height classes + matching `sizes` hints (rendered width = height × aspect ratio 1.58). */
const sizeConfig: Record<NonNullable<LogoProps["size"]>, { className: string; sizes: string }> = {
  sm: { className: "h-12", sizes: "76px" },
  md: { className: "h-14 sm:h-16", sizes: "(min-width: 640px) 101px, 88px" },
  lg: { className: "h-20", sizes: "126px" },
};

/**
 * Official logo (raster, navy background). Rendered with next/image so it is
 * served as AVIF/WebP at the exact size needed. Rounded to sit cleanly as a
 * badge on light surfaces; blends seamlessly on navy surfaces.
 */
export function Logo({ size = "md", preload, className }: LogoProps) {
  const { logo } = brandAssets;
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      preload={preload}
      sizes={sizeConfig[size].sizes}
      className={cn("w-auto rounded-md", sizeConfig[size].className, className)}
    />
  );
}
