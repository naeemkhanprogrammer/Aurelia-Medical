import { SplitSection } from "@/components/sections/split-section";
import { FeatureCard } from "@/components/shared/feature-card";
import { Reveal } from "@/components/shared/reveal";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";
import type { SectionIntro } from "@/types/common";
import type { Service } from "@/types/content";

export interface ServicesHighlightProps {
  intro: SectionIntro;
  services: readonly Service[];
}

export function ServicesHighlight({ intro, services }: ServicesHighlightProps) {
  return (
    <SplitSection id="services" intro={intro}>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
        {services.map((service, index) => (
          <li key={service.slug}>
            <Reveal delay={index * 0.06} className="h-full">
              <FeatureCard
                icon={service.icon}
                title={service.name}
                description={service.shortDescription}
                href={routes.service(service.slug)}
                linkLabel={uiStrings.learnMore}
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </SplitSection>
  );
}
