import type { SiteConfig } from "@/types/site";

export const siteConfig = {
  name: "Aurelia Medical Group",
  shortName: "Aurelia",
  legalName: "Aurelia Medical Group", // PLACEHOLDER — confirm registered legal name
  tagline: "Exceptional care. For every stage of life.",
  description:
    "Aurelia Medical Group is a multidisciplinary specialty and family-practice clinic in Red Deer, Alberta, offering family medicine, respirology, internal medicine, child psychiatry and allied health services.",
  locale: "en_CA",
  language: "en-CA",
  foundingYear: 2026,
  keywords: [
    "Red Deer clinic",
    "family doctor Red Deer",
    "respirologist Red Deer",
    "child psychiatrist Red Deer",
    "internal medicine Red Deer",
    "medical clinic Alberta",
  ],
} as const satisfies SiteConfig;
