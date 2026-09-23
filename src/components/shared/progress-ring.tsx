import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface ProgressRingProps {
  /** 0–100 */
  progress: number;
  children?: ReactNode;
  className?: string;
}

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Decorative SVG ring (the value itself is rendered as text by the parent). */
export function ProgressRing({ progress, children, className }: ProgressRingProps) {
  const clamped = Math.min(100, Math.max(0, progress));
  const offset = CIRCUMFERENCE * (1 - clamped / 100);

  return (
    <div className={cn("relative grid aspect-square place-items-center", className)}>
      <svg
        viewBox="0 0 100 100"
        aria-hidden
        focusable="false"
        className="absolute inset-0 -rotate-90"
      >
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          strokeWidth="3"
          className="stroke-primary-100"
        />
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="stroke-accent"
        />
      </svg>
      <div className="relative flex flex-col items-center text-center">{children}</div>
    </div>
  );
}
