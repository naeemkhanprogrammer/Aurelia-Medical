import type { Metadata } from "next";

import { ProgressivePage } from "@/components/sections/progressive-page";
import { routes } from "@/config/routes";
import { telemedicinePageContent as content } from "@/data/pages/progressive";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  ...content.seo,
  path: routes.telemedicine,
  noIndex: !content.published,
});

export default function TelemedicinePage() {
  const breadcrumbs = buildBreadcrumbs({ name: content.hero.title, path: routes.telemedicine });
  return <ProgressivePage content={content} breadcrumbs={breadcrumbs} />;
}
