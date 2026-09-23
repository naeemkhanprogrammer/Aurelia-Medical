import { Info } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { BookingLink } from "@/components/shared/booking-link";
import { CheckList } from "@/components/shared/check-list";
import { EmergencyNotice } from "@/components/shared/emergency-notice";
import { JsonLd } from "@/components/shared/json-ld";
import { PhoneLink } from "@/components/shared/phone-link";
import { ProseBlock } from "@/components/shared/prose-block";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";
import { doctorsPageContent } from "@/data/pages/doctors";
import { getDoctorBySlug, getDoctorSlugs } from "@/features/doctors/api";
import { DoctorAvatar } from "@/features/doctors/components/doctor-avatar";
import { getServicesBySlugs } from "@/features/services/api";
import { breadcrumbJsonLd, physicianJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

/** Unknown slugs 404 instead of rendering on demand. */
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getDoctorSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/doctors/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const doctor = await getDoctorBySlug(slug);
  if (!doctor) return {};
  return buildMetadata({
    title: `${doctor.name}, ${doctor.credentials} — ${doctor.title}`,
    description: doctor.shortBio,
    path: routes.doctor(doctor.slug),
    image: doctor.photo && { src: doctor.photo.src, alt: doctor.photo.alt },
  });
}

export default async function DoctorProfilePage({ params }: PageProps<"/doctors/[slug]">) {
  const { slug } = await params;
  const doctor = await getDoctorBySlug(slug);
  if (!doctor) notFound();

  const services = await getServicesBySlugs(doctor.serviceSlugs);
  const t = doctorsPageContent.profile;
  const needsReferral = services.some((service) => service.referralRequired);
  const breadcrumbs = [
    { name: uiStrings.breadcrumbHome, path: routes.home },
    { name: doctorsPageContent.seo.title, path: routes.doctors },
    { name: doctor.name, path: routes.doctor(doctor.slug) },
  ];

  return (
    <>
      <JsonLd data={[physicianJsonLd(doctor, services), breadcrumbJsonLd(breadcrumbs)]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        intro={{ eyebrow: doctor.title, title: doctor.name, description: doctor.shortBio }}
        aside={
          <DoctorAvatar
            doctor={doctor}
            preload
            sizes="(min-width: 1024px) 18rem, 14rem"
            className="size-56 rounded-xl ring-1 ring-inverse-border lg:size-72"
          />
        }
      >
        <Badge variant="inverse">{doctor.credentials}</Badge>
        <Badge variant="inverse">{uiStrings.yearsExperience(doctor.yearsOfExperience)}</Badge>
        <Badge variant="inverse">
          {doctor.acceptingNewPatients
            ? uiStrings.acceptingPatients
            : uiStrings.notAcceptingPatients}
        </Badge>
      </PageHero>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="flex flex-col gap-12">
            <section aria-labelledby="about-heading">
              <h2 id="about-heading" className="text-h2">
                {t.aboutTitle}
              </h2>
              <ProseBlock paragraphs={doctor.bio} className="mt-5" />
            </section>

            <section aria-labelledby="focus-heading">
              <h2 id="focus-heading" className="text-h3">
                {t.focusTitle}
              </h2>
              <CheckList items={doctor.focusAreas} columns={2} className="mt-5" />
            </section>

            <section aria-labelledby="education-heading">
              <h2 id="education-heading" className="text-h3">
                {t.educationTitle}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {doctor.education.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon
                      name="graduation-cap"
                      className="mt-0.5 size-5 shrink-0 text-accent-ink"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="flex flex-col gap-6">
            <Card>
              <h2 className="font-sans text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {t.servicesTitle}
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={routes.service(service.slug)}
                      className="inline-flex items-center gap-2 font-semibold text-heading underline-offset-4 hover:underline"
                    >
                      <Icon name={service.icon} className="size-5 text-accent-ink" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h2 className="mt-6 font-sans text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {t.languagesTitle}
              </h2>
              <p className="mt-2">{doctor.languages.join(", ")}</p>
            </Card>

            <Card variant="inverse" padding="lg">
              <h2 className="text-h3 text-inverse-foreground">{t.bookTitle}</h2>
              <p className="mt-2 text-sm text-inverse-muted">{t.bookDescription}</p>
              <div className="mt-6 flex flex-col gap-3">
                <BookingLink variant="accent" serviceSlug={services[0]?.slug} className="w-full" />
                <PhoneLink className={`${buttonVariants({ variant: "outline-inverse" })} w-full`} />
              </div>
              {needsReferral && (
                <p className="mt-5 flex gap-2 text-xs text-inverse-muted">
                  <Info aria-hidden className="size-4 shrink-0 text-accent" />
                  <span>
                    {t.referralNote}{" "}
                    <Link
                      href={t.referralHref}
                      className="text-accent-soft underline underline-offset-2"
                    >
                      {t.referralLinkLabel}
                    </Link>
                  </span>
                </p>
              )}
            </Card>
            <EmergencyNotice />
          </aside>
        </Container>
      </Section>
    </>
  );
}
