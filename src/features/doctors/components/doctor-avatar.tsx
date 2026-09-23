import Image from "next/image";

import { LogoMark } from "@/components/shared/logo";
import { cn } from "@/lib/cn";
import { getInitials } from "@/lib/format";
import type { Doctor } from "@/types/content";

export interface DoctorAvatarProps {
  doctor: Pick<Doctor, "name" | "photo">;
  sizes: string;
  className?: string;
  preload?: boolean;
}

/**
 * Doctor portrait. Until real photos are supplied, renders a branded monogram
 * (initials on navy with the brand mark) — never a stock photo of a stranger.
 */
export function DoctorAvatar({ doctor, sizes, className, preload }: DoctorAvatarProps) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-inverse-glow", className)}>
      {doctor.photo ? (
        <Image
          src={doctor.photo.src}
          alt={doctor.photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover object-top"
        />
      ) : (
        <div
          className="absolute inset-0 grid place-items-center"
          role="img"
          aria-label={doctor.name}
        >
          <LogoMark className="absolute -right-6 -bottom-8 -z-10 size-40 opacity-10" />
          <span className="font-heading text-[clamp(2.5rem,6vw,3.5rem)] font-semibold tracking-wider text-accent-soft">
            {getInitials(doctor.name)}
          </span>
        </div>
      )}
    </div>
  );
}
