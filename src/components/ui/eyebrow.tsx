import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export interface EyebrowProps extends ComponentProps<"p"> {
  tone?: "default" | "inverse";
}

/** Small uppercase label that introduces a heading ("OUR SERVICES"). */
export function Eyebrow({ className, tone = "default", children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-eyebrow font-semibold uppercase",
        tone === "inverse" ? "text-accent" : "text-accent-ink",
        className,
      )}
      {...props}
    >
      <span aria-hidden className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}
