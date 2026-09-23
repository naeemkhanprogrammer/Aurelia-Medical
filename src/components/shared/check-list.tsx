import { Check } from "lucide-react";

import { cn } from "@/lib/cn";

export interface CheckListProps {
  items: readonly string[];
  columns?: 1 | 2;
  className?: string;
}

export function CheckList({ items, columns = 1, className }: CheckListProps) {
  return (
    <ul className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-foreground">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-800">
            <Check aria-hidden className="size-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
