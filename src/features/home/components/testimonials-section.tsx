import { SplitSection } from "@/components/sections/split-section";
import { Carousel } from "@/components/shared/carousel";
import type { SectionIntro } from "@/types/common";
import type { Testimonial } from "@/types/content";

import { TestimonialCard } from "./testimonial-card";

export interface TestimonialsSectionProps {
  intro: SectionIntro;
  testimonials: readonly Testimonial[];
}

/** Rendered only when `features.testimonials` is on (see the home page). */
export function TestimonialsSection({ intro, testimonials }: TestimonialsSectionProps) {
  return (
    <SplitSection id="testimonials" intro={intro} tone="surface">
      <Carousel
        label={intro.title}
        itemClassName="basis-[85%] sm:basis-[calc((100%-1.25rem)/2)] xl:basis-[calc((100%-2.5rem)/3)]"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Carousel>
    </SplitSection>
  );
}
