import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal } from "@/components/shared/reveal";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";
import { homeContent } from "@/data/pages/home";
import { servicesPageContent as content } from "@/data/pages/services";
import { getServices } from "@/features/services/api";
import { ServiceCard } from "@/features/services/components/service-card";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.services });

export default async function ServicesPage() {
  const services = await getServices();
  const breadcrumbs = [
    { name: uiStrings.breadcrumbHome, path: routes.home },
    { name: content.seo.title, path: routes.services },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs} />
      <Section aria-label={content.seo.title}>
        <Container>
          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Reveal delay={index * 0.05} className="h-full">
                  <ServiceCard service={service} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand content={homeContent.ctaBand} />
    </>
  );
}
