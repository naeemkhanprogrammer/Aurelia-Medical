import { ArrowUpRight, Mail, Phone, Printer, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { EmergencyNotice } from "@/components/shared/emergency-notice";
import { ExternalLink } from "@/components/shared/external-link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { contactConfig } from "@/config/contact";
import { externalLinks } from "@/config/external-links";
import { features } from "@/config/features";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";
import { contactPageContent as content } from "@/data/pages/contact";
import { MapEmbed } from "@/features/contact/components/map-embed";
import { OpenStatus } from "@/features/contact/components/open-status";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { formatAddressLines, formatHours } from "@/lib/format";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.contact });

function ContactMethod({
  icon,
  label,
  description,
  children,
}: {
  icon: ReactNode;
  label: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Card className="flex h-full flex-col">
      <span className="grid size-12 place-items-center rounded-full bg-accent-50 text-accent-ink ring-1 ring-accent-200 [&_svg]:size-5">
        {icon}
      </span>
      <h3 className="mt-5 font-sans text-base font-semibold">{label}</h3>
      <p className="mt-1 flex-1 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4">{children}</div>
    </Card>
  );
}

const valueLink =
  "text-lg font-semibold text-heading underline-offset-4 hover:underline break-words";

export default function ContactPage() {
  const { phone, fax, email, address, hours, hoursNote, visitInfo } = contactConfig;
  const [line1, line2] = formatAddressLines(address);
  const m = content.methods;
  const breadcrumbs = buildBreadcrumbs({ name: content.seo.title, path: routes.contact });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs} />

      <Section>
        {/* Source order (methods → hours → map) is the mobile order; on desktop the aside spans both rows. */}
        <Container className="grid gap-10 lg:grid-cols-[1fr_22rem]">
          <section aria-labelledby="methods-heading">
            <h2 id="methods-heading" className="text-h2">
              {m.title}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              <li>
                <ContactMethod
                  icon={<Phone aria-hidden />}
                  label={m.phone.label}
                  description={m.phone.description}
                >
                  <a href={`tel:${phone.e164}`} className={valueLink}>
                    {phone.display}
                  </a>
                </ContactMethod>
              </li>
              <li>
                <ContactMethod
                  icon={<ShieldCheck aria-hidden />}
                  label={m.enquiry.label}
                  description={m.enquiry.description}
                >
                  <ExternalLink
                    href={externalLinks.enquiries.url}
                    isPlaceholder={externalLinks.enquiries.isPlaceholder}
                    className={buttonVariants({ variant: "primary", size: "sm" })}
                  >
                    {m.enquiry.action}
                    <ArrowUpRight aria-hidden />
                  </ExternalLink>
                </ContactMethod>
              </li>
              <li>
                <ContactMethod
                  icon={<Mail aria-hidden />}
                  label={m.email.label}
                  description={m.email.description}
                >
                  <a href={`mailto:${email}`} className={valueLink}>
                    {email}
                  </a>
                </ContactMethod>
              </li>
              <li>
                <ContactMethod
                  icon={<Printer aria-hidden />}
                  label={m.fax.label}
                  description={m.fax.description}
                >
                  <p className="text-lg font-semibold text-heading">{fax.display}</p>
                </ContactMethod>
              </li>
            </ul>
            <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
              <ShieldCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-success" />
              {content.privacyNote}
            </p>
          </section>

          <aside className="flex flex-col gap-6 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Card padding="lg">
              <h2 className="text-h3">{content.hours.title}</h2>
              <OpenStatus className="mt-3" />
              <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 text-sm">
                {hours.map((entry) => (
                  <div key={entry.label} className="contents">
                    <dt className="font-medium text-heading">{entry.label}</dt>
                    <dd className="text-muted-foreground">
                      {formatHours(entry, uiStrings.closed)}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-muted-foreground">{hoursNote}</p>
            </Card>

            <Card variant="inverse" padding="lg">
              <h2 className="text-h3 text-inverse-foreground">{content.visit.title}</h2>
              <address className="mt-3 text-sm text-inverse-muted not-italic">
                {line1}
                <br />
                {line2}
              </address>
              <dl className="mt-6 flex flex-col gap-4 text-sm">
                {visitInfo.map((item) => (
                  <div key={item.title}>
                    <dt className="font-semibold text-accent-soft">{item.title}</dt>
                    <dd className="mt-1 text-inverse-muted">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <EmergencyNotice />
          </aside>

          <section aria-labelledby="map-heading" className="lg:col-start-1">
            <h2 id="map-heading" className="text-h2">
              {content.map.title}
            </h2>
            <div className="mt-8">
              <MapEmbed enabled={features.mapEmbed} />
            </div>
          </section>
        </Container>
      </Section>
    </>
  );
}
