"use client";

import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";

import { ExternalLink } from "@/components/shared/external-link";
import { Button, buttonVariants } from "@/components/ui/button";
import { contactConfig } from "@/config/contact";
import { contactPageContent } from "@/data/pages/contact";
import { cn } from "@/lib/cn";
import { formatAddress } from "@/lib/format";

/**
 * Click-to-load Google Map ("facade" pattern):
 *  - Performance: no ~500 kB of Google JS until the visitor asks for it.
 *  - Privacy: Google receives nothing (no cookies/IP) until consent via click.
 * Directions always work without loading the map.
 */
export function MapEmbed({ enabled }: { enabled: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const t = contactPageContent.map;
  const { map, address } = contactConfig;

  if (loaded) {
    return (
      <iframe
        src={map.embedUrl}
        title={map.title}
        className="aspect-[4/3] w-full rounded-xl border border-border bg-surface-muted sm:aspect-[16/9]"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        allowFullScreen
      />
    );
  }

  return (
    <div className="relative isolate grid min-h-80 w-full place-items-center overflow-hidden rounded-xl border border-border bg-surface-muted px-6 py-10 text-center sm:aspect-[16/9] sm:py-6">
      {/* Decorative map-like grid, tokens only */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:2.5rem_2.5rem] opacity-60"
      />
      <div className="flex max-w-md flex-col items-center">
        <span className="grid size-14 place-items-center rounded-full bg-primary text-accent shadow-raised">
          <MapPin aria-hidden className="size-6" />
        </span>
        <p className="mt-4 font-semibold text-heading">{formatAddress(address)}</p>
        {enabled && (
          <>
            <p className="mt-3 text-sm font-semibold text-heading">{t.consentTitle}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t.consentDescription}</p>
          </>
        )}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {enabled && (
            <Button onClick={() => setLoaded(true)} size="sm">
              <MapPin aria-hidden />
              {t.loadLabel}
            </Button>
          )}
          <ExternalLink
            href={map.directionsUrl}
            className={cn(buttonVariants({ variant: enabled ? "outline" : "primary", size: "sm" }))}
          >
            <Navigation aria-hidden />
            {contactPageContent.visit.directionsLabel}
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}
