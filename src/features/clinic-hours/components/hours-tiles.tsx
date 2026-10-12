"use client";

import { clinicHoursContent as t } from "@/data/clinic-hours";
import { uiStrings } from "@/data/common";
import { useCurrentMinute } from "@/hooks/use-current-minute";
import { cn } from "@/lib/cn";
import { formatTime } from "@/lib/format";
import { getZonedNow } from "@/lib/opening-hours";
import type { OpeningHours } from "@/types/site";

export interface HoursTilesProps {
  hours: readonly OpeningHours[];
  timeZone: string;
  className?: string;
}

/**
 * Opening hours as tiles. After hydration, today's tile is highlighted (in the
 * clinic's time zone). Only colours change, so there is no layout shift.
 */
export function HoursTiles({ hours, timeZone, className }: HoursTilesProps) {
  const now = useCurrentMinute();
  const today = now ? getZonedNow(now, timeZone).day : null;

  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4",
        className,
      )}
    >
      {hours.map((entry) => {
        const isToday = today !== null && entry.days.includes(today);
        const isOpenDay = Boolean(entry.opens && entry.closes);
        return (
          <li
            key={entry.label}
            aria-current={isToday ? "date" : undefined}
            className={cn(
              "relative flex flex-col rounded-lg border px-4 py-3.5 transition-colors duration-300",
              isToday
                ? "border-primary bg-primary text-primary-foreground shadow-raised"
                : "border-border bg-canvas",
            )}
          >
            {isToday && (
              <span className="absolute -top-2.5 right-3 rounded-full bg-accent px-2.5 py-0.5 text-[0.625rem] font-bold tracking-wider text-accent-foreground uppercase shadow-xs ring-2 ring-surface">
                {t.today}
              </span>
            )}
            <span
              className={cn(
                "text-xs font-semibold tracking-wide uppercase",
                isToday ? "text-accent-soft" : "text-accent-ink",
              )}
            >
              {entry.label}
            </span>
            {isOpenDay && entry.opens && entry.closes ? (
              <span
                className={cn(
                  "mt-1.5 text-sm font-semibold",
                  isToday ? "text-inverse-foreground" : "text-heading",
                )}
              >
                <span className="whitespace-nowrap">{formatTime(entry.opens)}</span>
                <span aria-hidden> – </span>
                <span className="sr-only"> to </span>
                <span className="whitespace-nowrap">{formatTime(entry.closes)}</span>
              </span>
            ) : (
              <span
                className={cn(
                  "mt-1.5 text-sm font-medium",
                  isToday ? "text-inverse-muted" : "text-muted-foreground",
                )}
              >
                {uiStrings.closed}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
