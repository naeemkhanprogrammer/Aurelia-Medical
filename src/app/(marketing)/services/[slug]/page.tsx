import { ArrowRight, CircleCheck, Info } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { BookingLink } from "@/components/shared/booking-link";
import { CheckList } from "@/components/shared/check-list";
import { EmergencyNotice } from "@/components/shared/emergency-notice";
import { FeatureCard } from "@/components/shared/feature-card";
import { JsonLd } from "@/components/shared/json-ld";
import { PhoneLink } from "@/components/shared/phone-link";
import { ProseBlock } from "@/components/shared/prose-block";
import { StepList } from "@/components/shared/step-list";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";
import { homeContent } from "@/data/pages/home";
import { servicesPageContent } from "@/data/pages/services";
import { getDoctorsByService } from "@/features/doctors/api";
import { DoctorCard } from "@/features/doctors/components/doctor-card";
import { getServiceBySlug, getServices, getServiceSlugs } from "@/features/services/api";
import { cn } from "@/lib/cn";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} in Red Deer`,
    description: service.summary,
    path: routes.service(service.slug),
  });
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const [team, allServices] = await Promise.all([getDoctorsByService(service.slug), getServices()]);
  const otherServices = allServices.filter((item) => item.slug !== service.slug);
  const t = servicesPageContent.detail;
  const breadcrumbs = buildBreadcrumbs(
    { name: servicesPageContent.seo.title, path: routes.services },
    { name: service.name, path: routes.service(service.slug) },
  );

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero
        breadcrumbs={breadcrumbs}
        intro={{
          eyebrow: servicesPageContent.hero.eyebrow,
          title: service.name,
          description: service.summary,
        }}
        aside={
          <span className="hidden size-40 place-items-center rounded-full border border-inverse-border bg-inverse-raised text-accent lg:grid">
            <Icon name={service.icon} className="size-20" strokeWidth={1.1} />
          </span>
        }
      >
        <BookingLink variant="accent" size="lg" serviceSlug={service.slug} />
      </PageHero>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="flex flex-col gap-14">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-h2">
                {t.overviewTitle}
              </h2>
              <ProseBlock paragraphs={service.overview} className="mt-5" />
            </section>

            <section aria-labelledby="conditions-heading">
              <h2 id="conditions-heading" className="text-h3">
                {t.conditionsTitle}
              </h2>
              <CheckList items={service.conditions} columns={2} className="mt-6" />
            </section>

            <section aria-labelledby="steps-heading">
              <h2 id="steps-heading" className="text-h3">
                {t.stepsTitle}
              </h2>
              <StepList steps={service.whatToExpect} className="mt-6" />
            </section>
          </div>

          <aside className="flex flex-col gap-6">
            <Card>
              <h2 className="font-sans text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {t.whoTitle}
              </h2>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                {service.whoItsFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>

            <Card variant="inverse" padding="lg">
              <span className="flex items-center gap-2 text-sm font-semibold text-accent">
                {service.referralRequired ? (
                  <Info aria-hidden className="size-4" />
                ) : (
                  <CircleCheck aria-hidden className="size-4" />
                )}
                {service.referralRequired ? t.referralTitle : t.noReferralTitle}
              </span>
              <p className="mt-3 text-sm text-inverse-muted">
                {service.referralRequired ? t.referralDescription : t.noReferralDescription}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <BookingLink variant="accent" serviceSlug={service.slug} className="w-full" />
                <PhoneLink
                  className={cn(buttonVariants({ variant: "outline-inverse" }), "w-full")}
                />
              </div>
              {service.referralRequired && (
                <Link
                  href={t.referralHref}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-soft underline-offset-4 hover:underline"
                >
                  {t.referralLinkLabel}
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              )}
            </Card>
            <EmergencyNotice />
          </aside>
        </Container>
      </Section>

      {team.length > 0 && (
        <Section tone="surface" aria-labelledby="team-heading">
          <Container>
            <h2 id="team-heading" className="text-h2">
              {t.teamTitle}
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((doctor) => (
                <li key={doctor.slug} className="flex">
                  <DoctorCard doctor={doctor} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <Section aria-labelledby="other-services-heading" spacing="sm">
        <Container>
          <h2 id="other-services-heading" className="text-h2">
            {t.otherServicesTitle}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((item) => (
              <li key={item.slug}>
                <FeatureCard
                  icon={item.icon}
                  title={item.name}
                  description={item.shortDescription}
                  href={routes.service(item.slug)}
                  linkLabel={uiStrings.learnMore}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand content={homeContent.ctaBand} />
    </>
  );
}
