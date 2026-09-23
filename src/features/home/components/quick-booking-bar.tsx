"use client";

import { ArrowUpRight, CircleCheck, Lock } from "lucide-react";
import { useId, useState } from "react";

import { ExternalLink } from "@/components/shared/external-link";
import { buttonVariants } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { externalLinks } from "@/config/external-links";
import { cn } from "@/lib/cn";
import { buildExternalUrl } from "@/lib/external-links";
import type { QuickBookingContent } from "@/types/content";

export interface QuickBookingBarProps {
  content: QuickBookingContent;
  services: readonly { slug: string; name: string }[];
}

/**
 * Pre-selects a service/visit type, then hands off to the booking platform.
 * It's a link, not a form: nothing is submitted to or stored by this site, and
 * it still works (unfiltered) before hydration.
 */
export function QuickBookingBar({ content, services }: QuickBookingBarProps) {
  const [service, setService] = useState("");
  const [visitType, setVisitType] = useState("");
  const serviceId = useId();
  const visitTypeId = useId();

  const href = buildExternalUrl("booking", { service, visitType });

  return (
    <div className="relative z-10 -mt-16 lg:-mt-20">
      <div className="mx-auto max-w-6xl rounded-xl border border-border bg-surface p-5 shadow-floating sm:p-7">
        <div className="grid items-end gap-4 md:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_auto] lg:gap-5">
          <h2 className="text-h3 md:col-span-2 lg:col-span-1 lg:w-40 lg:self-center">
            {content.title}
          </h2>

          <div className="flex flex-col gap-2">
            <label htmlFor={serviceId} className="text-xs font-semibold text-muted-foreground">
              {content.serviceLabel}
            </label>
            <Select
              id={serviceId}
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              <option value="">{content.servicePlaceholder}</option>
              {services.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={visitTypeId} className="text-xs font-semibold text-muted-foreground">
              {content.visitTypeLabel}
            </label>
            <Select
              id={visitTypeId}
              value={visitType}
              onChange={(event) => setVisitType(event.target.value)}
            >
              <option value="">—</option>
              {content.visitTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </Select>
          </div>

          <ExternalLink
            href={href}
            isPlaceholder={externalLinks.booking.isPlaceholder}
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "md:col-span-2 lg:col-span-1",
            )}
          >
            {content.submitLabel}
            <ArrowUpRight aria-hidden />
          </ExternalLink>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-border pt-4 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {content.assurances.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <CircleCheck aria-hidden className="size-4 text-success" />
                {item}
              </li>
            ))}
          </ul>
          <p className="inline-flex items-start gap-1.5 lg:max-w-md">
            <Lock aria-hidden className="mt-px size-3.5 shrink-0" />
            {content.privacyNote}
          </p>
        </div>
      </div>
    </div>
  );
}
