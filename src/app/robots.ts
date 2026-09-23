import type { MetadataRoute } from "next";

import { env } from "@/config/env";

/** Only production is crawlable; preview deployments are fully disallowed. */
export default function robots(): MetadataRoute.Robots {
  if (!env.isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${env.siteUrl}/sitemap.xml`,
    host: env.siteUrl,
  };
}
