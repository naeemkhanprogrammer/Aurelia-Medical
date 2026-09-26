import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { themeMeta } from "@/config/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: themeMeta.canvas,
    theme_color: themeMeta.primary,
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
