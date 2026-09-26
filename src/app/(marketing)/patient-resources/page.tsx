import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureCard } from "@/components/shared/feature-card";
import { JsonLd } from "@/components/shared/json-ld";
import { SectionHeading } from "@/components/shared/section-heading";
import { routes } from "@/config/routes";
import { patientResourcesPageContent as content } from "@/data/pages/patient-resources";
import { getExternalResources, getResourceDocuments } from "@/features/resources/api";
import { DocumentList } from "@/features/resources/components/document-list";
import { ExternalResourceList } from "@/features/resources/components/external-resource-list";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.patientResources });

export default async function PatientResourcesPage() {
  const [documents, external] = await Promise.all([getResourceDocuments(), getExternalResources()]);
  const breadcrumbs = buildBreadcrumbs({ name: content.seo.title, path: routes.patientResources });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs} />

      <Section aria-labelledby="quick-links-heading" spacing="sm">
        <Container>
          <h2 id="quick-links-heading" className="text-h2">
            {content.quickLinks.title}
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {content.quickLinks.items.map((item) => (
              <li key={item.title}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  href={item.link.href}
                  linkLabel={item.link.label}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="documents-heading" spacing="sm">
        <Container>
          <SectionHeading
            intro={{ title: content.documents.title, description: content.documents.description }}
            headingId="documents-heading"
          />
          <div className="mt-8">
            <DocumentList
              documents={documents}
              downloadLabel={content.documents.downloadLabel}
              comingSoonLabel={content.documents.comingSoonLabel}
            />
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="external-heading" spacing="sm">
        <Container>
          <SectionHeading
            intro={{ title: content.external.title, description: content.external.description }}
            headingId="external-heading"
          />
          <div className="mt-8">
            <ExternalResourceList resources={external} />
          </div>
        </Container>
      </Section>
    </>
  );
}
