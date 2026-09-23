import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section, type SectionProps } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { SectionIntro } from "@/types/common";

export interface SplitSectionProps extends Pick<SectionProps, "tone" | "spacing"> {
  id: string;
  intro: SectionIntro;
  children: ReactNode;
  className?: string;
}

/**
 * The home page's signature layout: intro column on the left, content on the
 * right (stacks on small screens).
 */
export function SplitSection({ id, intro, children, tone, spacing, className }: SplitSectionProps) {
  const headingId = `${id}-heading`;
  return (
    <Section
      id={id}
      aria-labelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={className}
    >
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <SectionHeading
          intro={intro}
          headingId={headingId}
          className="lg:col-span-4 xl:col-span-3"
        />
        <div className="min-w-0 lg:col-span-8 xl:col-span-9">{children}</div>
      </Container>
    </Section>
  );
}
