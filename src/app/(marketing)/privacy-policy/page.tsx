import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/legal-document";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/shared/json-ld";
import { routes } from "@/config/routes";
import { privacyPolicyContent as content } from "@/data/pages/privacy-policy";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.privacyPolicy });

export default function PrivacyPolicyPage() {
  const breadcrumbs = buildBreadcrumbs({ name: content.seo.title, path: routes.privacyPolicy });
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs} />
      <LegalDocument
        sections={content.sections}
        tocLabel={content.tocLabel}
        lastUpdatedLabel={content.lastUpdatedLabel}
        lastUpdated={content.lastUpdated}
      />
    </>
  );
}
