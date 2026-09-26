import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { ExternalLink } from "@/components/shared/external-link";
import { InfoCard } from "@/components/shared/info-card";
import { JsonLd } from "@/components/shared/json-ld";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { externalLinks } from "@/config/external-links";
import { routes } from "@/config/routes";
import { careersPageContent as content } from "@/data/pages/careers";
import { getOpenPositions } from "@/features/careers/api";
import { PositionCard } from "@/features/careers/components/position-card";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.careers });

export default async function CareersPage() {
  const positions = await getOpenPositions();
  const breadcrumbs = buildBreadcrumbs({ name: content.seo.title, path: routes.careers });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs}>
        <a href="#openings" className={buttonVariants({ variant: "accent", size: "lg" })}>
          {content.openings.title}
          <ArrowDown aria-hidden />
        </a>
      </PageHero>

      <Section aria-labelledby="benefits-heading">
        <Container>
          <SectionHeading
            intro={{ eyebrow: content.benefits.eyebrow, title: content.benefits.title }}
            headingId="benefits-heading"
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.benefits.items.map((item) => (
              <li key={item.title}>
                <InfoCard item={item} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section
        id="openings"
        tone="surface"
        aria-labelledby="openings-heading"
        className="scroll-mt-20"
      >
        <Container className="flex flex-col gap-8">
          <div>
            <h2 id="openings-heading" className="text-h2">
              {content.openings.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{content.applyNote}</p>
          </div>
          {positions.length > 0 ? (
            <ul className="flex flex-col gap-5">
              {positions.map((position) => (
                <li key={position.id}>
                  <PositionCard position={position} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-xl border border-dashed border-border-strong p-10 text-center text-muted-foreground">
              {content.openings.emptyState}
            </p>
          )}

          <div className="flex flex-col gap-5 rounded-xl bg-inverse-glow p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-h3 text-inverse-foreground">{content.general.title}</h2>
              <p className="mt-2 text-sm text-inverse-muted">{content.general.description}</p>
            </div>
            <ExternalLink
              href={externalLinks.careers.url}
              isPlaceholder={externalLinks.careers.isPlaceholder}
              className={buttonVariants({ variant: "accent" })}
            >
              {content.general.actionLabel}
              <ArrowUpRight aria-hidden />
            </ExternalLink>
          </div>
          <p className="text-xs text-muted-foreground">{content.equalOpportunity}</p>
        </Container>
      </Section>
    </>
  );
}
