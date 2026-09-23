import { SplitSection } from "@/components/sections/split-section";
import { Carousel } from "@/components/shared/carousel";
import { DoctorCard } from "@/features/doctors/components/doctor-card";
import type { SectionIntro } from "@/types/common";
import type { Doctor } from "@/types/content";

export interface FeaturedDoctorsProps {
  intro: SectionIntro;
  doctors: readonly Doctor[];
}

export function FeaturedDoctors({ intro, doctors }: FeaturedDoctorsProps) {
  return (
    <SplitSection id="doctors" intro={intro} tone="surface">
      <Carousel
        label={intro.title}
        itemClassName="basis-[80%] sm:basis-[calc((100%-1.25rem)/2)] md:basis-[calc((100%-2.5rem)/3)] xl:basis-[calc((100%-3.75rem)/4)]"
      >
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.slug} doctor={doctor} />
        ))}
      </Carousel>
    </SplitSection>
  );
}
