import type { IconName } from "@/constants/icons";

export type { IconName };

/** A static or remote image with the metadata `next/image` needs. */
export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Internal link to a route in this app. */
export interface InternalLink {
  label: string;
  href: string;
}

/** A call-to-action. `external` links point to a third-party platform (see config/external-links). */
export type CtaLink =
  | { kind: "internal"; label: string; href: string }
  | { kind: "external"; label: string; linkKey: ExternalLinkKey }
  | { kind: "phone"; label: string };

/** Keys of `externalLinks` in src/config/external-links.ts. */
export type ExternalLinkKey =
  | "booking"
  | "patientRegistration"
  | "referral"
  | "careers"
  | "enquiries"
  | "newsletter"
  | "telemedicine";

/** Eyebrow + title + description block that introduces a section. */
export interface SectionIntro {
  eyebrow?: string;
  title: string;
  /** Portion of `title` to highlight in the accent colour (must be a substring of `title`). */
  highlight?: string;
  description?: string;
  cta?: InternalLink;
}

export interface Paragraphs {
  /** Plain-text paragraphs; rendered as <p> elements. */
  paragraphs: readonly string[];
}
