import { Quote } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { InfoCard } from "@/components/shared/info-card";
import { JsonLd } from "@/components/shared/json-ld";
import { LogoMark } from "@/components/shared/logo";
import { ProseBlock } from "@/components/shared/prose-block";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { StepList } from "@/components/shared/step-list";
import { routes } from "@/config/routes";
import { aboutPageContent as content } from "@/data/pages/about";
import { homeContent } from "@/data/pages/home";
import { getDoctors } from "@/features/doctors/api";
import { FeaturedDoctors } from "@/features/home";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.about });

export default async function AboutPage() {
  const doctors = await getDoctors();
  const breadcrumbs = buildBreadcrumbs({ name: content.seo.title, path: routes.about });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs} />

      {/* Story */}
      <Section aria-labelledby="story-heading">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              intro={{ eyebrow: content.story.eyebrow, title: content.story.title }}
              headingId="story-heading"
            />
            <ProseBlock paragraphs={content.story.paragraphs} className="mt-6" />
          </div>
          <Reveal>
            <figure className="relative isolate overflow-hidden rounded-2xl bg-inverse-glow p-10 sm:p-12">
              <LogoMark className="absolute -right-10 -bottom-12 -z-10 size-64 opacity-10" />
              <Quote aria-hidden className="size-10 text-accent" />
              <blockquote className="mt-6 font-heading text-h3 text-inverse-foreground italic">
                <p>{content.story.quote}</p>
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-accent-soft">
                — {content.story.quoteAttribution}
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </Section>

      {/* Mission & vision */}
      <Section
        tone="surface"
        spacing="sm"
        aria-label={`${content.mission.title} & ${content.vision.title}`}
      >
        <Container className="grid gap-6 md:grid-cols-2">
          {[content.mission, content.vision].map((block) => (
            <div
              key={block.title}
              className="rounded-xl border border-border bg-canvas p-8 sm:p-10"
            >
              <h2 className="text-h3">{block.title}</h2>
              <p className="mt-4 text-lead text-muted-foreground">{block.description}</p>
            </div>
          ))}
        </Container>
      </Section>

      {/* Values */}
      <Section aria-labelledby="values-heading">
        <Container>
          <SectionHeading
            intro={{ eyebrow: content.values.eyebrow, title: content.values.title }}
            headingId="values-heading"
            align="center"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.values.items.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 0.05} className="h-full">
                  <InfoCard item={item} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Approach */}
      <Section tone="muted" aria-labelledby="approach-heading">
        <Container>
          <SectionHeading
            intro={{ eyebrow: content.approach.eyebrow, title: content.approach.title }}
            headingId="approach-heading"
          />
          <StepList steps={content.approach.steps} className="mt-10" />
        </Container>
      </Section>

      <FeaturedDoctors intro={content.team} doctors={doctors} />
      <CtaBand content={homeContent.ctaBand} />
    </>
  );
}
