"use client";

import { useState } from "react";

import { doctorsPageContent } from "@/data/pages/doctors";
import { cn } from "@/lib/cn";
import type { Doctor } from "@/types/content";

import { DoctorCard } from "./doctor-card";

export interface DoctorDirectoryProps {
  doctors: readonly Doctor[];
  specialties: readonly { slug: string; name: string }[];
}

const ALL = "all";

/**
 * Doctor grid with a specialty filter. Filter state is LOCAL (only this
 * component reads it) — it does not belong in the global store. The page stays
 * statically rendered; filtering happens instantly on the client.
 */
export function DoctorDirectory({ doctors, specialties }: DoctorDirectoryProps) {
  // Copy is imported directly (not passed as props) because it includes formatter functions,
  // which cannot cross the Server → Client boundary.
  const t = doctorsPageContent;
  const [active, setActive] = useState<string>(ALL);

  // React Compiler memoises this derivation automatically.
  const visible =
    active === ALL ? doctors : doctors.filter((doctor) => doctor.serviceSlugs.includes(active));
  const options = [{ slug: ALL, name: t.allSpecialtiesLabel }, ...specialties];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label={t.filterLabel} className="flex flex-wrap gap-2">
          {options.map((option) => {
            const pressed = option.slug === active;
            return (
              <button
                key={option.slug}
                type="button"
                aria-pressed={pressed}
                onClick={() => setActive(option.slug)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  pressed
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border-strong bg-surface text-muted-foreground hover:border-primary hover:text-heading",
                )}
              >
                {option.name}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {t.resultsLabel(visible.length)}
        </p>
      </div>

      {visible.length > 0 ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((doctor) => (
            <li key={doctor.slug} className="flex">
              <DoctorCard doctor={doctor} headingLevel="h2" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 rounded-xl border border-dashed border-border-strong p-10 text-center text-muted-foreground">
          {t.emptyState}
        </p>
      )}
    </div>
  );
}
