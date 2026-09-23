import Image from "next/image";

import { LogoMark } from "@/components/shared/logo";
import { Icon } from "@/components/ui/icon";
import type { HeroContent } from "@/types/content";

/**
 * Right-hand hero visual. Shows the configured photo when provided; until then a
 * branded composition (brand mark + concentric rings + info cards) is used, so
 * no stock photography of fake doctors ships.
 */
export function HeroVisual({ hero }: { hero: HeroContent }) {
  if (hero.image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-[5/4]">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  const [first, second] = hero.visualBadges;

  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full border border-inverse-border" />
      <div className="absolute inset-[11%] rounded-full border border-inverse-border" />
      <div className="absolute inset-[22%] rounded-full border border-accent/30 bg-inverse-raised/40" />
      <div className="absolute inset-[30%] grid place-items-center">
        <LogoMark className="size-full drop-shadow-[0_0_40px_color-mix(in_srgb,var(--brand-accent)_35%,transparent)]" />
      </div>

      {first && (
        <div className="absolute top-[8%] -left-2 flex max-w-[15rem] items-center gap-3 rounded-lg border border-inverse-border bg-inverse-raised/80 p-3.5 shadow-floating backdrop-blur sm:-left-6">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
            <Icon name={first.icon} className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-inverse-foreground">
              {first.title}
            </span>
            <span className="block text-xs text-inverse-muted">{first.caption}</span>
          </span>
        </div>
      )}
      {second && (
        <div className="absolute -right-2 bottom-[10%] flex max-w-[16rem] items-center gap-3 rounded-lg border border-inverse-border bg-inverse-raised/80 p-3.5 shadow-floating backdrop-blur sm:-right-6">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-foreground">
            <Icon name={second.icon} className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-inverse-foreground">
              {second.title}
            </span>
            <span className="block text-xs text-inverse-muted">{second.caption}</span>
          </span>
        </div>
      )}
    </div>
  );
}
