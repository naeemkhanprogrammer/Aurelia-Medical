import { ArrowUpRight, Briefcase, ChevronDown, Clock, MapPin } from "lucide-react";

import { ExternalLink } from "@/components/shared/external-link";
import { CheckList } from "@/components/shared/check-list";
import { buttonVariants } from "@/components/ui/button";
import { externalLinks } from "@/config/external-links";
import { careersPageContent } from "@/data/pages/careers";
import type { CareerPosition } from "@/types/content";

/** Job opening with expandable details (native <details>) and an external apply link. */
export function PositionCard({ position }: { position: CareerPosition }) {
  const t = careersPageContent.openings;
  return (
    <article className="rounded-xl border border-border bg-surface p-6 shadow-card sm:p-7">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-h3">{position.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <Briefcase aria-hidden className="size-4 text-accent-ink" />
              {position.department}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Clock aria-hidden className="size-4 text-accent-ink" />
              {position.employmentType}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden className="size-4 text-accent-ink" />
              {position.location}
            </li>
          </ul>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{position.summary}</p>
        </div>
        <ExternalLink
          href={externalLinks.careers.url}
          isPlaceholder={externalLinks.careers.isPlaceholder}
          className={buttonVariants({ variant: "primary" })}
        >
          {t.applyLabel}
          <span className="sr-only">: {position.title}</span>
          <ArrowUpRight aria-hidden />
        </ExternalLink>
      </div>

      <details className="group mt-5 border-t border-border pt-4">
        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-sm text-sm font-semibold text-heading [&::-webkit-details-marker]:hidden">
          {t.detailsLabel}
          <span className="sr-only">: {position.title}</span>
          <ChevronDown aria-hidden className="size-4 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-5 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="font-sans text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {t.responsibilitiesLabel}
            </h4>
            <CheckList items={position.responsibilities} className="mt-3 text-sm" />
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {t.requirementsLabel}
            </h4>
            <CheckList items={position.requirements} className="mt-3 text-sm" />
          </div>
        </div>
      </details>
    </article>
  );
}
