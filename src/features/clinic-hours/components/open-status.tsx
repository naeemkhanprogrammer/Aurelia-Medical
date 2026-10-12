"use client";

import { contactConfig } from "@/config/contact";
import { clinicHoursContent as t } from "@/data/clinic-hours";
import { useCurrentMinute } from "@/hooks/use-current-minute";
import { cn } from "@/lib/cn";
import { formatTime } from "@/lib/format";
import { getOpenStatus } from "@/lib/opening-hours";

export interface OpenStatusProps {
  size?: "sm" | "md";
  className?: string;
}

/**
 * Live "Open now / Closed now" status in the clinic's time zone.
 * Nothing renders on the server; reserve height with `className` (e.g. `min-h-7`)
 * where the status sits in flowing layout, so it appears without a layout shift.
 */
export function OpenStatus({ size = "sm", className }: OpenStatusProps) {
  const now = useCurrentMinute();
  if (!now) return <p aria-hidden className={className} />;

  const status = getOpenStatus(contactConfig.hours, now, contactConfig.timeZone);
  const isOpen = status.state === "open";
  const detail = isOpen
    ? t.closesAt(formatTime(status.closes))
    : status.nextOpen
      ? t.opensAt(
          `${status.nextOpen.isToday ? "" : `${status.nextOpen.day} `}${formatTime(status.nextOpen.opens)}`,
        )
      : undefined;

  return (
    <p
      role="status"
      className={cn(
        "inline-flex flex-wrap items-center gap-x-2.5 gap-y-1",
        size === "md" ? "text-base" : "text-sm",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full font-semibold",
          size === "md" ? "px-3 py-1 text-sm" : "px-2.5 py-0.5 text-xs",
          isOpen
            ? "bg-primary-50 text-success ring-1 ring-success/30"
            : "bg-surface-muted text-muted-foreground ring-1 ring-border",
        )}
      >
        <span aria-hidden className="relative flex size-2">
          {isOpen && (
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
          )}
          <span
            className={cn(
              "relative inline-flex size-2 rounded-full",
              isOpen ? "bg-success" : "bg-muted-foreground",
            )}
          />
        </span>
        {isOpen ? t.openNow : t.closedNow}
      </span>
      {detail && <span className="text-muted-foreground">{detail}</span>}
    </p>
  );
}
