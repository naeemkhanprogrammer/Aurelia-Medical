import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const sectionVariants = cva("relative", {
  variants: {
    tone: {
      canvas: "bg-canvas",
      surface: "bg-surface",
      muted: "bg-surface-muted",
      inverse: "bg-inverse text-inverse-foreground",
    },
    spacing: {
      default: "section-y",
      sm: "section-y-sm",
      none: "",
    },
  },
  defaultVariants: { tone: "canvas", spacing: "default" },
});

export interface SectionProps
  extends ComponentProps<"section">, VariantProps<typeof sectionVariants> {}

/** Page section with consistent vertical rhythm and background tone. */
export function Section({ className, tone, spacing, ...props }: SectionProps) {
  return <section className={cn(sectionVariants({ tone, spacing }), className)} {...props} />;
}
