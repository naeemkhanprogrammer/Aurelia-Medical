import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/shared/json-ld";
import { routes } from "@/config/routes";
import { homeContent } from "@/data/pages/home";
import { doctorsPageContent as content } from "@/data/pages/doctors";
import { getDoctors } from "@/features/doctors/api";
import { DoctorDirectory } from "@/features/doctors/components/doctor-directory";
import { getServices } from "@/features/services/api";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.doctors });

export default async function DoctorsPage() {
  const [doctors, services] = await Promise.all([getDoctors(), getServices()]);
  // Only offer filters for specialties that currently have a doctor.
  const specialties = services
    .filter((service) => doctors.some((doctor) => doctor.serviceSlugs.includes(service.slug)))
    .map(({ slug, name }) => ({ slug, name }));

  const breadcrumbs = buildBreadcrumbs({ name: content.seo.title, path: routes.doctors });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs} />
      <Section aria-label={content.seo.title}>
        <Container>
          <DoctorDirectory doctors={doctors} specialties={specialties} />
        </Container>
      </Section>
      <CtaBand content={homeContent.ctaBand} />
    </>
  );
}
