import { ArrowUpRight } from "lucide-react";

import { ExternalLink } from "@/components/shared/external-link";
import type { ExternalResource } from "@/types/content";

export function ExternalResourceList({ resources }: { resources: readonly ExternalResource[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {resources.map((resource) => (
        <li key={resource.title}>
          <ExternalLink
            href={resource.href}
            className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-card transition-[border-color,box-shadow] hover:border-accent-300 hover:shadow-raised"
          >
            <span className="text-xs font-semibold tracking-wide text-accent-ink uppercase">
              {resource.organization}
            </span>
            <span className="mt-2 inline-flex items-center gap-1.5 font-semibold text-heading">
              {resource.title}
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
            <span className="mt-2 text-sm text-muted-foreground">{resource.description}</span>
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
