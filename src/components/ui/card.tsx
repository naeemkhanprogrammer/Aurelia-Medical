import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export const cardVariants = cva("relative rounded-xl", {
  variants: {
    variant: {
      default: "border border-border bg-surface shadow-card",
      flat: "border border-border bg-surface",
      muted: "bg-surface-muted",
      inverse: "border border-inverse-border bg-inverse-raised text-inverse-foreground",
    },
    interactive: {
      true: "transition-[translate,box-shadow,border-color] duration-300 ease-out-soft focus-within:border-accent-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-raised",
      false: "",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-5 sm:p-6",
      lg: "p-6 sm:p-8",
    },
  },
  defaultVariants: { variant: "default", interactive: false, padding: "md" },
});

export interface CardProps extends ComponentProps<"div">, VariantProps<typeof cardVariants> {}

export function Card({ className, variant, interactive, padding, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, interactive, padding }), className)} {...props} />
  );
}
