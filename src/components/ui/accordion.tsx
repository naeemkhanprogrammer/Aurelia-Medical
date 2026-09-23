import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: readonly AccordionItemData[];
  /** When set, only one item in the group can be open at a time (native `name` grouping). */
  exclusiveGroup?: string;
  className?: string;
}

/**
 * Zero-JS accordion built on native <details>/<summary>: keyboard, screen-reader
 * and find-in-page support come for free, and it works before hydration.
 */
export function Accordion({ items, exclusiveGroup, className }: AccordionProps) {
  return (
    <div
      className={cn("divide-y divide-border rounded-xl border border-border bg-surface", className)}
    >
      {items.map((item) => (
        <details key={item.id} name={exclusiveGroup} className="group">
          <summary
            className={cn(
              "flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-left sm:px-6",
              "font-heading text-h4 font-semibold text-heading [&::-webkit-details-marker]:hidden",
              "rounded-xl focus-visible:outline-offset-[-2px]",
            )}
          >
            {item.title}
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary-100 text-heading transition-transform duration-300 group-open:rotate-180">
              <ChevronDown aria-hidden className="size-4" />
            </span>
          </summary>
          <div className="px-5 pb-6 text-muted-foreground sm:px-6">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
