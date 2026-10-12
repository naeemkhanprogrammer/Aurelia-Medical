import { ArrowUpRight, Clock, MapPin } from "lucide-react";

import { BookingLink } from "@/components/shared/booking-link";
import { ExternalLink } from "@/components/shared/external-link";
import { PhoneLink } from "@/components/shared/phone-link";
import { buttonVariants } from "@/components/ui/button";
import { contactConfig } from "@/config/contact";
import { cn } from "@/lib/cn";
import { formatAddressLines } from "@/lib/format";
import type { ClinicHoursPanelContent } from "@/types/content";

import { HoursTiles } from "./hours-tiles";
import { OpenStatus } from "./open-status";

/**
 * Home-page clinic-hours card that overlaps the hero: live open/closed status,
 * weekly hours (today highlighted) and the primary actions.
 * Reserved as the future slot for the clinic's third-party booking / wait-time widget.
 */
export function ClinicHoursPanel({ content }: { content: ClinicHoursPanelContent }) {
  const { hours, timeZone, hoursNote, address, map } = contactConfig;
  const [street, city] = formatAddressLines(address);

  return (
    <section aria-labelledby="clinic-hours-heading" className="relative z-10 -mt-16 lg:-mt-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-border bg-surface shadow-floating">
        {/* Gold accent rule */}
        <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-accent" />

        <div className="grid gap-6 p-6 pt-7 sm:p-8 sm:pt-9 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-accent">
                <Clock aria-hidden className="size-5" />
              </span>
              <h2 id="clinic-hours-heading" className="text-h3">
                {content.title}
              </h2>
            </div>
            <OpenStatus className="mt-4 min-h-7" />
          </div>

          <HoursTiles hours={hours} timeZone={timeZone} />

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <BookingLink size="lg" label={content.bookLabel} className="w-full" />
            <PhoneLink
              prefix={content.callPrefix}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border bg-surface-muted px-6 py-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="flex items-start gap-2 text-muted-foreground">
            <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-accent-ink" />
            <span>
              {street}, {city}
              <span className="mx-2 text-border-strong" aria-hidden>
                ·
              </span>
              <ExternalLink
                href={map.directionsUrl}
                className="inline-flex items-center gap-1 font-semibold text-heading underline-offset-4 hover:underline"
              >
                {content.directionsLabel}
                <ArrowUpRight aria-hidden className="size-3.5" />
              </ExternalLink>
            </span>
          </p>
          <p className="text-muted-foreground">{hoursNote}</p>
        </div>
      </div>
    </section>
  );
}
