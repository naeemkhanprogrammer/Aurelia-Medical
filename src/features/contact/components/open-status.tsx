"use client";

import { useSyncExternalStore } from "react";

import { contactConfig } from "@/config/contact";
import { contactPageContent } from "@/data/pages/contact";
import { cn } from "@/lib/cn";
import { formatTime } from "@/lib/format";
import { getOpenStatus } from "@/lib/opening-hours";

const MINUTE = 60_000;
const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, MINUTE);
  return () => window.clearInterval(id);
};
/** Snapshot changes once per minute, so the component re-renders at most once a minute. */
const getMinute = () => Math.floor(Date.now() / MINUTE);
const getServerMinute = () => null;

/**
 * Live "Open now / Closed now" pill, computed in the clinic's time zone.
 * Renders nothing on the server (the page stays static and no hydration
 * mismatch is possible), then appears after hydration.
 */
export function OpenStatus({ className }: { className?: string }) {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute);
  if (minute === null) return null;

  const t = contactPageContent.hours;
  const status = getOpenStatus(
    contactConfig.hours,
    new Date(minute * MINUTE),
    contactConfig.timeZone,
  );
  const isOpen = status.state === "open";
  const detail = isOpen
    ? t.closesAt(formatTime(status.closes))
    : status.nextOpen
      ? t.opensAt(
          `${status.nextOpen.isToday ? "" : `${status.nextOpen.day} `}${formatTime(status.nextOpen.opens)}`,
        )
      : undefined;

  return (
    <p role="status" className={cn("inline-flex flex-wrap items-center gap-2 text-sm", className)}>
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold",
          isOpen
            ? "bg-primary-50 text-success ring-1 ring-success/30"
            : "bg-surface-muted text-muted-foreground",
        )}
      >
        <span
          aria-hidden
          className={cn("size-1.5 rounded-full", isOpen ? "bg-success" : "bg-muted-foreground")}
        />
        {isOpen ? t.openNow : t.closedNow}
      </span>
      {detail && <span className="text-muted-foreground">{detail}</span>}
    </p>
  );
}
