import type { Metadata } from "next";

import { ProgressivePage } from "@/components/sections/progressive-page";
import { routes } from "@/config/routes";
import { newPatientsPageContent as content } from "@/data/pages/progressive";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  ...content.seo,
  path: routes.newPatients,
  noIndex: !content.published,
});

export default function NewPatientsPage() {
  const breadcrumbs = buildBreadcrumbs({ name: content.hero.title, path: routes.newPatients });
  return <ProgressivePage content={content} breadcrumbs={breadcrumbs} />;
}
