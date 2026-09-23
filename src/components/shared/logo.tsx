import { cn } from "@/lib/cn";

/**
 * ⚠️ PLACEHOLDER LOGO — a web approximation of the Aurelia brand mark (gold arc,
 * serif "A" with heartbeat crossbar). Replace with the official SVG from the
 * brand handoff (AI/EPS/SVG) when supplied. Colours come from design tokens,
 * so the logo follows any re-theme automatically.
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
  tone?: "default" | "inverse";
  /** Hide the wordmark on very small spaces. */
  variant?: "full" | "mark";
  className?: string;
}

export function Logo({ tone = "default", variant = "full", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className="size-11 shrink-0 sm:size-12" />
      {variant === "full" && (
        <span className="flex flex-col items-center leading-none">
          {/* Wordmark letter-spacing mirrors the brand guide lockup. */}
          <span
            className={cn(
              "font-heading text-[1.65rem] font-semibold tracking-[0.14em] uppercase",
              tone === "inverse" ? "text-inverse-foreground" : "text-heading",
            )}
          >
            Aurelia
          </span>
          <span
            className={cn(
              "mt-1 flex items-center gap-1.5 text-[0.5rem] font-semibold tracking-[0.32em] uppercase",
              tone === "inverse" ? "text-accent-soft" : "text-accent-ink",
            )}
          >
            <span aria-hidden className="h-px w-3 bg-current" />
            Medical Group
            <span aria-hidden className="h-px w-3 bg-current" />
          </span>
        </span>
      )}
    </span>
  );
}
