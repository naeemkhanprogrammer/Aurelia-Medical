import { TriangleAlert } from "lucide-react";

import { uiStrings } from "@/data/common";
import { cn } from "@/lib/cn";

/** Standard emergency disclaimer — shown wherever patients take action. */
export function EmergencyNotice({ className }: { className?: string }) {
  return (
    <aside
      aria-label={uiStrings.emergencyLabel}
      className={cn(
        "flex items-start gap-3 rounded-lg border border-danger/25 bg-surface p-4 text-sm",
        className,
      )}
    >
      <TriangleAlert aria-hidden className="mt-0.5 size-5 shrink-0 text-danger" />
      <p>
        <strong className="font-semibold text-heading">{uiStrings.emergencyLabel}</strong>{" "}
        <span className="text-muted-foreground">{uiStrings.emergencyNotice}</span>
      </p>
    </aside>
  );
}
