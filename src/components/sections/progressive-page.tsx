import { Info, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { type BreadcrumbItem } from "@/components/shared/breadcrumbs";
import { CtaButton } from "@/components/shared/cta-button";
import { EmergencyNotice } from "@/components/shared/emergency-notice";
import { InfoCard } from "@/components/shared/info-card";
import { JsonLd } from "@/components/shared/json-ld";
import { ProseBlock } from "@/components/shared/prose-block";
import { Badge } from "@/components/ui/badge";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import type { ProgressivePageContent } from "@/types/content";

import { PageHero } from "./page-hero";

export interface ProgressivePageProps {
  content: ProgressivePageContent;
  breadcrumbs: readonly BreadcrumbItem[];
}

/**
 * Template for pages whose full content isn't ready: ships the essentials
 * (what it is + the action patients need) with a clear "more coming soon" status.
 */
export function ProgressivePage({ content, breadcrumbs }: ProgressivePageProps) {
  const [primary, ...secondary] = content.actions;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs}>
        {primary && <CtaButton cta={primary} variant="accent" size="lg" />}
        {secondary.map((cta) => (
          <CtaButton key={cta.label} cta={cta} variant="outline-inverse" size="lg" />
        ))}
      </PageHero>

      <Section>
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <Badge variant="accent" className="w-fit">
              <Sparkles aria-hidden />
              {content.statusLabel}
            </Badge>
            <ProseBlock paragraphs={content.intro} />
          </div>

          <ul className="grid gap-4 md:grid-cols-3">
            {content.highlights.map((item) => (
              <li key={item.title}>
                <InfoCard item={item} />
              </li>
            ))}
          </ul>

          <aside
            aria-label={content.noticeTitle}
            className="flex gap-4 rounded-xl border border-accent-200 bg-surface-accent p-6"
          >
            <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-accent-ink" />
            <div>
              <p className="font-semibold text-heading">{content.noticeTitle}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{content.notice}</p>
            </div>
          </aside>

          <EmergencyNotice />
        </Container>
      </Section>
    </>
  );
}
