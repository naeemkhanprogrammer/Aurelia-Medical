import { SplitSection } from "@/components/sections/split-section";
import { FeatureCard } from "@/components/shared/feature-card";
import { Reveal } from "@/components/shared/reveal";
import type { SectionIntro } from "@/types/common";
import type { HighlightItem } from "@/types/content";

export interface ResourcesHighlightProps {
  intro: SectionIntro;
  items: readonly HighlightItem[];
}

export function ResourcesHighlight({ intro, items }: ResourcesHighlightProps) {
  return (
    <SplitSection id="resources" intro={intro}>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
        {items.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={index * 0.06} className="h-full">
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={item.link.href}
                linkLabel={item.link.label}
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </SplitSection>
  );
}
