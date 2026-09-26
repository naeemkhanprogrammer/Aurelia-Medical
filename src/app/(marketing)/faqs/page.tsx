import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/shared/json-ld";
import { PhoneLink } from "@/components/shared/phone-link";
import { ButtonLink, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { routes } from "@/config/routes";
import { faqsPageContent as content } from "@/data/pages/faqs";
import { getFaqCategories } from "@/features/faqs/api";
import { FaqList } from "@/features/faqs/components/faq-list";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.faqs });

export default async function FaqsPage() {
  const categories = await getFaqCategories();
  const breadcrumbs = buildBreadcrumbs({ name: "FAQs", path: routes.faqs });

  return (
    <>
      <JsonLd data={[faqPageJsonLd(categories), breadcrumbJsonLd(breadcrumbs)]} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs} />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[16rem_1fr]">
          <nav aria-label={content.jumpToLabel} className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {content.jumpToLabel}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col">
              {categories.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className={buttonVariants({ variant: "soft", size: "sm" })}
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex min-w-0 flex-col gap-12">
            <FaqList categories={categories} />
            <Card
              variant="inverse"
              padding="lg"
              className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h2 className="text-h3 text-inverse-foreground">{content.stillQuestions.title}</h2>
                <p className="mt-2 text-sm text-inverse-muted">
                  {content.stillQuestions.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={routes.contact} variant="accent">
                  {content.stillQuestions.contactLabel}
                </ButtonLink>
                <PhoneLink className={buttonVariants({ variant: "outline-inverse" })} />
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
