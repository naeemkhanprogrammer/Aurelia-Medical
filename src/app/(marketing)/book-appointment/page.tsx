import { ArrowRight, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { BookingLink } from "@/components/shared/booking-link";
import { EmergencyNotice } from "@/components/shared/emergency-notice";
import { JsonLd } from "@/components/shared/json-ld";
import { PhoneLink } from "@/components/shared/phone-link";
import { StepList } from "@/components/shared/step-list";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { contactConfig } from "@/config/contact";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";
import { bookingPageContent as content } from "@/data/pages/booking";
import { getServices } from "@/features/services/api";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatHours } from "@/lib/format";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.bookAppointment });

export default async function BookAppointmentPage() {
  const services = await getServices();
  const breadcrumbs = buildBreadcrumbs({ name: content.seo.title, path: routes.bookAppointment });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs}>
        <BookingLink variant="accent" size="lg" label={content.continueLabel} />
      </PageHero>

      <Container className="mt-6">
        <p className="mx-auto flex max-w-3xl items-start justify-center gap-2 text-center text-sm text-muted-foreground">
          <ShieldCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-success" />
          {content.leavingNotice}
        </p>
      </Container>

      <Section aria-labelledby="steps-heading" spacing="sm">
        <Container>
          <h2 id="steps-heading" className="text-h2">
            {content.steps.title}
          </h2>
          <StepList steps={content.steps.items} className="mt-8" />
        </Container>
      </Section>

      <Section aria-labelledby="by-service-heading" tone="surface" spacing="sm">
        <Container className="grid gap-10 lg:grid-cols-[1fr_22rem]">
          <div>
            <h2 id="by-service-heading" className="text-h2">
              {content.byServiceTitle}
            </h2>
            <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-surface">
              {services.map((service) => (
                <li
                  key={service.slug}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent-50 text-accent-ink ring-1 ring-accent-200">
                    <Icon name={service.icon} className="size-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-sans text-base font-semibold">{service.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{service.shortDescription}</p>
                  </div>
                  <Badge
                    variant={service.referralRequired ? "accent" : "success"}
                    className="w-fit"
                  >
                    {service.referralRequired ? content.referralBadge : content.directBadge}
                  </Badge>
                  <BookingLink
                    serviceSlug={service.slug}
                    variant="outline"
                    size="sm"
                    showIcon={false}
                    label={`${uiStrings.bookAppointment}`}
                    className="w-fit"
                  />
                </li>
              ))}
            </ul>
          </div>

          <aside className="flex flex-col gap-6">
            <Card variant="inverse" padding="lg">
              <h2 className="text-h3 text-inverse-foreground">{content.phone.title}</h2>
              <p className="mt-2 text-sm text-inverse-muted">{content.phone.description}</p>
              <PhoneLink className={`${buttonVariants({ variant: "accent" })} mt-6 w-full`} />
              <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm text-inverse-muted">
                {contactConfig.hours.map((entry) => (
                  <div key={entry.label} className="contents">
                    <dt className="text-inverse-foreground">{entry.label}</dt>
                    <dd>{formatHours(entry, uiStrings.closed)}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <Card>
              <h2 className="text-h4">{content.newPatients.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {content.newPatients.description}
              </p>
              <Link
                href={content.newPatients.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-heading underline-offset-4 hover:underline"
              >
                {content.newPatients.linkLabel}
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </Card>
            <EmergencyNotice />
          </aside>
        </Container>
      </Section>
    </>
  );
}
