import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/shared/json-ld";
import { features } from "@/config/features";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/data/pages/home";
import { testimonials } from "@/data/testimonials";
import { getFeaturedDoctors } from "@/features/doctors/api";
import {
  FeaturedDoctors,
  HomeHero,
  QuickBookingBar,
  ResourcesHighlight,
  ServicesHighlight,
  StatsBand,
  TestimonialsSection,
} from "@/features/home";
import { getServices } from "@/features/services/api";
import { buildMetadata } from "@/lib/seo/metadata";
import { medicalClinicJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${siteConfig.name} | Family & Specialty Care in Red Deer, AB`,
    description: siteConfig.description,
    path: routes.home,
  }),
  // Home uses the full title (not the "%s | Aurelia" template).
  title: { absolute: `${siteConfig.name} | Family & Specialty Care in Red Deer, AB` },
};

export default async function HomePage() {
  const [services, doctors] = await Promise.all([getServices(), getFeaturedDoctors()]);
  const content = homeContent;

  return (
    <>
      <JsonLd data={medicalClinicJsonLd(services)} />
      <HomeHero hero={content.hero} />
      <Container>
        <QuickBookingBar
          content={content.quickBooking}
          services={services.map(({ slug, name }) => ({ slug, name }))}
        />
      </Container>
      <ServicesHighlight intro={content.services} services={services} />
      {features.stats && <StatsBand title={content.stats.title} stats={content.stats.items} />}
      <FeaturedDoctors intro={content.doctors} doctors={doctors} />
      <ResourcesHighlight intro={content.resources} items={content.resources.items} />
      {features.testimonials && (
        <TestimonialsSection intro={content.testimonials} testimonials={testimonials} />
      )}
      <CtaBand content={content.ctaBand} />
    </>
  );
}
