import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export interface PageMetadataInput {
  title: string;
  description: string;
  /** Route path, e.g. "/doctors". Used for canonical & OG url. */
  path: string;
  image?: { src: string; alt: string };
  noIndex?: boolean;
}

/**
 * Consistent per-route metadata: title (templated in the root layout),
 * canonical URL, Open Graph and Twitter cards. `metadataBase` (root layout)
 * turns relative URLs into absolute ones.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex,
}: PageMetadataInput): Metadata {
  const images = image ? [{ url: image.src, alt: image.alt }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title,
      description,
      url: path,
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images && { images }),
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}
