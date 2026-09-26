import { CreditCard, MapPinned } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { CheckList } from "@/components/shared/check-list";
import { JsonLd } from "@/components/shared/json-ld";
import { PhoneLink } from "@/components/shared/phone-link";
import { ProseBlock } from "@/components/shared/prose-block";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { routes } from "@/config/routes";
import { insurancePageContent as content } from "@/data/pages/insurance";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.insurance });

export default function InsurancePage() {
  const breadcrumbs = buildBreadcrumbs({ name: content.seo.title, path: routes.insurance });
  const { uninsured } = content;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs} />

      <Section aria-labelledby="covered-heading">
        <Container className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-start">
          <div>
            <SectionHeading
              intro={{ eyebrow: content.covered.eyebrow, title: content.covered.title }}
              headingId="covered-heading"
            />
            <ProseBlock paragraphs={content.covered.paragraphs} className="mt-6" />
          </div>
          <Card variant="inverse" padding="lg">
            <MapPinned aria-hidden className="size-7 text-accent" />
            <h2 className="mt-4 text-h3 text-inverse-foreground">{content.outOfProvince.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-inverse-muted">
              {content.outOfProvince.description}
            </p>
          </Card>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="uninsured-heading">
        <Container>
          <h2 id="uninsured-heading" className="text-h2">
            {uninsured.title}
          </h2>
          <p className="mt-4 max-w-prose text-muted-foreground">{uninsured.description}</p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <caption className="sr-only">{uninsured.title}</caption>
              <thead className="bg-surface-muted text-heading">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-semibold">
                    {uninsured.serviceHeader}
                  </th>
                  <th scope="col" className="px-5 py-3.5 text-right font-semibold">
                    {uninsured.feeHeader}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-surface">
                {uninsured.items.map((item) => (
                  <tr key={item.service}>
                    <th scope="row" className="px-5 py-4 font-normal text-foreground">
                      {item.service}
                    </th>
                    <td className="px-5 py-4 text-right font-semibold text-heading">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{uninsured.footnote}</p>
        </Container>
      </Section>

      <Section aria-labelledby="bring-heading">
        <Container className="grid gap-6 lg:grid-cols-3">
          <Card padding="lg" className="lg:col-span-2">
            <h2 id="bring-heading" className="text-h3">
              {content.bring.title}
            </h2>
            <CheckList items={content.bring.items} columns={2} className="mt-6" />
          </Card>
          <div className="flex flex-col gap-6">
            <Card>
              <CreditCard aria-hidden className="size-6 text-accent-ink" />
              <h2 className="mt-3 text-h4">{content.payment.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{content.payment.description}</p>
            </Card>
            <Card>
              <h2 className="text-h4">{content.questions.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{content.questions.description}</p>
              <PhoneLink className={`${buttonVariants({ variant: "outline", size: "sm" })} mt-4`} />
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
