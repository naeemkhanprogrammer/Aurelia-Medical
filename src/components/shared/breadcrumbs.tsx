import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { uiStrings } from "@/data/common";
import { cn } from "@/lib/cn";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface BreadcrumbsProps {
  items: readonly BreadcrumbItem[];
  tone?: "default" | "inverse";
  className?: string;
}

/** Visual breadcrumb trail. Pair with `breadcrumbJsonLd` for search engines. */
export function Breadcrumbs({ items, tone = "default", className }: BreadcrumbsProps) {
  return (
    <nav aria-label={uiStrings.breadcrumbLabel} className={className}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1.5 text-sm",
          tone === "inverse" ? "text-inverse-muted" : "text-muted-foreground",
        )}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-1.5">
              {isLast ? (
                <span
                  aria-current="page"
                  className={tone === "inverse" ? "text-accent-soft" : "text-heading"}
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="underline-offset-4 hover:underline">
                    {item.name}
                  </Link>
                  <ChevronRight aria-hidden className="size-3.5 opacity-60" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
