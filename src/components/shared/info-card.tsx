import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";
import type { InfoItem } from "@/types/content";

export interface InfoCardProps {
  item: InfoItem;
  tone?: "default" | "inverse";
  className?: string;
}

/** Icon + title + description (no link) — values, benefits, highlights. */
export function InfoCard({ item, tone = "default", className }: InfoCardProps) {
  const inverse = tone === "inverse";
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl p-6",
        inverse
          ? "border border-inverse-border bg-inverse-raised"
          : "border border-border bg-surface shadow-card",
        className,
      )}
    >
      <span
        className={cn(
          "grid size-12 place-items-center rounded-full",
          inverse
            ? "bg-accent text-accent-foreground"
            : "bg-accent-50 text-accent-ink ring-1 ring-accent-200",
        )}
      >
        <Icon name={item.icon} className="size-6" />
      </span>
      <h3
        className={cn(
          "mt-5 font-sans text-base font-semibold",
          inverse && "text-inverse-foreground",
        )}
      >
        {item.title}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed",
          inverse ? "text-inverse-muted" : "text-muted-foreground",
        )}
      >
        {item.description}
      </p>
    </div>
  );
}
