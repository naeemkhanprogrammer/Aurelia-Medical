import type { ComponentProps } from "react";

import { EXTERNAL_LINK_REL, EXTERNAL_LINK_TARGET } from "@/constants";
import { uiStrings } from "@/data/common";

export interface ExternalLinkProps extends Omit<ComponentProps<"a">, "target" | "rel"> {
  href: string;
  /** Marks links whose destination is still a placeholder (dev-only hint). */
  isPlaceholder?: boolean;
}

/**
 * Anchor for every third-party destination: opens in a new tab with a safe
 * `rel`, and announces the new tab to screen-reader users.
 */
export function ExternalLink({ children, isPlaceholder, ...props }: ExternalLinkProps) {
  const devHint =
    isPlaceholder && process.env.NODE_ENV === "development"
      ? uiStrings.placeholderLinkWarning
      : undefined;

  return (
    <a
      target={EXTERNAL_LINK_TARGET}
      rel={EXTERNAL_LINK_REL}
      referrerPolicy="strict-origin-when-cross-origin"
      title={devHint}
      data-placeholder={isPlaceholder || undefined}
      {...props}
    >
      {children}
      <span className="sr-only"> {uiStrings.opensInNewTab}</span>
    </a>
  );
}
