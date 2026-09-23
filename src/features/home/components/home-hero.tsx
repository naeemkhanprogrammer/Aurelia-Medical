import { UserRound } from "lucide-react";

import { Container } from "@/components/layout/container";
import { BookingLink } from "@/components/shared/booking-link";
import { HighlightedText } from "@/components/shared/highlighted-text";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import type { HeroContent } from "@/types/content";

import { HeroVisual } from "./hero-visual";

export function HomeHero({ hero }: { hero: HeroContent }) {
  return (
    <section aria-labelledby="hero-heading" className="pt-4 sm:pt-6">
      <Container>
        <div className="relative isolate overflow-hidden rounded-2xl bg-inverse-glow px-6 pt-12 pb-24 sm:px-12 sm:pt-16 lg:px-16 lg:pt-20 lg:pb-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h1 id="hero-heading" className="text-display text-inverse-foreground">
                {hero.titleLines.map((line) => (
                  <span key={line} className="block">
                    <HighlightedText
                      text={line}
                      highlight={hero.highlight}
                      highlightClassName="text-accent"
                    />
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-lg text-lead text-inverse-muted">{hero.description}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <BookingLink variant="accent" size="lg" label={hero.primaryCtaLabel} />
                <ButtonLink href={hero.secondaryCta.href} variant="outline-inverse" size="lg">
                  <UserRound aria-hidden />
                  {hero.secondaryCta.label}
                </ButtonLink>
              </div>

              <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-inverse-muted">
                {hero.trustPoints.map((point) => (
                  <li key={point.label} className="inline-flex items-center gap-2">
                    <Icon name={point.icon} className="size-4.5 text-accent" />
                    {point.label}
                  </li>
                ))}
              </ul>
            </div>

            <HeroVisual hero={hero} />
          </div>
        </div>
      </Container>
    </section>
  );
}
