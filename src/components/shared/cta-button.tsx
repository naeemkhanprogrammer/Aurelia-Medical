import { ArrowUpRight } from "lucide-react";

import { buttonVariants, ButtonLink, type ButtonVariantProps } from "@/components/ui/button";
import { externalLinks } from "@/config/external-links";
import { cn } from "@/lib/cn";
import type { CtaLink } from "@/types/common";

import { ExternalLink } from "./external-link";
import { PhoneLink } from "./phone-link";

export interface CtaButtonProps extends ButtonVariantProps {
  cta: CtaLink;
  className?: string;
}

/** Renders any content-defined CTA (internal page, external platform, or phone). */
export function CtaButton({ cta, variant, size, className }: CtaButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  switch (cta.kind) {
    case "internal":
      return (
        <ButtonLink href={cta.href} variant={variant} size={size} className={className}>
          {cta.label}
        </ButtonLink>
      );
    case "external": {
      const link = externalLinks[cta.linkKey];
      return (
        <ExternalLink href={link.url} isPlaceholder={link.isPlaceholder} className={classes}>
          {cta.label}
          <ArrowUpRight aria-hidden />
        </ExternalLink>
      );
    }
    case "phone":
      return <PhoneLink className={classes}>{cta.label}</PhoneLink>;
  }
}
