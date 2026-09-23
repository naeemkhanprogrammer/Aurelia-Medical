import { CalendarDays } from "lucide-react";

import { buttonVariants, type ButtonVariantProps } from "@/components/ui/button";
import { externalLinks } from "@/config/external-links";
import { uiStrings } from "@/data/common";
import { cn } from "@/lib/cn";
import { buildExternalUrl } from "@/lib/external-links";

import { ExternalLink } from "./external-link";

export interface BookingLinkProps extends ButtonVariantProps {
  label?: string;
  /** Pre-select a service on the booking platform (slug). */
  serviceSlug?: string;
  className?: string;
  showIcon?: boolean;
}

/** The single, config-driven "Book Appointment" hand-off used across the site. */
export function BookingLink({
  label = uiStrings.bookAppointment,
  serviceSlug,
  variant = "primary",
  size,
  className,
  showIcon = true,
}: BookingLinkProps) {
  return (
    <ExternalLink
      href={buildExternalUrl("booking", { service: serviceSlug })}
      isPlaceholder={externalLinks.booking.isPlaceholder}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {showIcon && <CalendarDays aria-hidden />}
      {label}
    </ExternalLink>
  );
}
