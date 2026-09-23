import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";
import type { IconName } from "@/types/common";

export interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  headingLevel?: "h3" | "h4";
  className?: string;
}

/**
 * Icon + title + description card with a single stretched link (the whole card
 * is clickable, but only one tab stop and one link is announced).
 */
export function FeatureCard({
  icon,
  title,
  description,
  href,
  linkLabel,
  headingLevel: Heading = "h3",
  className,
}: FeatureCardProps) {
  return (
    <Card interactive className={cn("group flex h-full flex-col", className)}>
      <span className="grid size-14 place-items-center rounded-full bg-accent-50 text-accent-ink ring-1 ring-accent-200 transition-colors group-hover:bg-accent-100">
        <Icon name={icon} className="size-7" />
      </span>
      <Heading className="mt-5 font-sans text-base font-semibold text-heading">{title}</Heading>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-heading after:absolute after:inset-0 after:rounded-xl after:content-['']"
      >
        {linkLabel}
        <span className="sr-only">: {title}</span>
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Card>
  );
}
