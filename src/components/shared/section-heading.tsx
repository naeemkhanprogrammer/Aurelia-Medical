import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import type { SectionIntro } from "@/types/common";

import { HighlightedText } from "./highlighted-text";

export interface SectionHeadingProps {
  intro: SectionIntro;
  /** Used for `aria-labelledby` on the parent section. */
  headingId?: string;
  as?: "h1" | "h2" | "h3";
  align?: "start" | "center";
  tone?: "default" | "inverse";
  size?: "display" | "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  intro,
  headingId,
  as: Heading = "h2",
  align = "start",
  tone = "default",
  size = "h2",
  className,
}: SectionHeadingProps) {
  const inverse = tone === "inverse";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {intro.eyebrow && <Eyebrow tone={tone}>{intro.eyebrow}</Eyebrow>}
      <Heading
        id={headingId}
        className={cn(
          size === "display" && "text-display",
          size === "h1" && "text-h1",
          size === "h2" && "text-h2",
          size === "h3" && "text-h3",
          inverse && "text-inverse-foreground",
        )}
      >
        <HighlightedText
          text={intro.title}
          highlight={intro.highlight}
          highlightClassName={inverse ? "text-accent" : undefined}
        />
      </Heading>
      {intro.description && (
        <p
          className={cn(
            "max-w-prose text-lead",
            inverse ? "text-inverse-muted" : "text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {intro.description}
        </p>
      )}
      {intro.cta && (
        <Link
          href={intro.cta.href}
          className={cn(
            "group mt-2 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
            inverse
              ? "bg-inverse-raised text-inverse-foreground hover:bg-inverse-border"
              : "bg-primary-100 text-heading hover:bg-primary-200",
          )}
        >
          {intro.cta.label}
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </div>
  );
}
