import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";
import { cn } from "@/lib/cn";
import type { Doctor } from "@/types/content";

import { DoctorAvatar } from "./doctor-avatar";

export interface DoctorCardProps {
  doctor: Doctor;
  headingLevel?: "h3" | "h2";
  className?: string;
}

export function DoctorCard({ doctor, headingLevel: Heading = "h3", className }: DoctorCardProps) {
  return (
    <article
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card",
        "transition-[translate,box-shadow,border-color] duration-300 ease-out-soft focus-within:border-accent-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-raised",
        className,
      )}
    >
      <DoctorAvatar
        doctor={doctor}
        sizes="(min-width: 1280px) 20vw, (min-width: 640px) 40vw, 80vw"
        className="aspect-[4/3.6]"
      />
      <div className="flex flex-1 flex-col p-5">
        <Heading className="font-heading text-h4 font-semibold">
          <Link
            href={routes.doctor(doctor.slug)}
            className="after:absolute after:inset-0 after:rounded-xl after:content-[''] focus-visible:outline-none"
          >
            {doctor.name}
          </Link>
        </Heading>
        <p className="mt-1 text-sm font-semibold text-accent-ink">{doctor.title}</p>
        <p className="mt-3 text-xs text-muted-foreground">{doctor.credentials}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {uiStrings.yearsExperience(doctor.yearsOfExperience)}
        </p>
        {doctor.acceptingNewPatients && (
          <Badge variant="success" className="mt-4 w-fit whitespace-nowrap">
            {uiStrings.acceptingPatients}
          </Badge>
        )}
      </div>
    </article>
  );
}
