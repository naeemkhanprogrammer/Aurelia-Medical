import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold [&_svg]:size-3.5",
  {
    variants: {
      variant: {
        accent: "bg-accent-100 text-accent-800",
        primary: "bg-primary-100 text-heading",
        success: "bg-primary-50 text-success ring-1 ring-success/25",
        inverse: "bg-inverse-raised text-accent-soft ring-1 ring-inverse-border",
        neutral: "bg-surface-muted text-muted-foreground",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export interface BadgeProps extends ComponentProps<"span">, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
