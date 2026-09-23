import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { LogoMark } from "@/components/shared/logo";
import { cn } from "@/lib/cn";
import type { SectionIntro } from "@/types/common";

export interface PageHeroProps {
  intro: Omit<SectionIntro, "cta">;
  breadcrumbs: readonly BreadcrumbItem[];
  children?: ReactNode;
  /** Optional right-hand visual (e.g. doctor avatar). */
  aside?: ReactNode;
  className?: string;
}

/** Hero banner for inner pages — navy panel with breadcrumbs and the page H1. */
export function PageHero({ intro, breadcrumbs, children, aside, className }: PageHeroProps) {
  return (
    <div className={cn("pt-4 sm:pt-6", className)}>
      <Container>
        <div className="relative isolate overflow-hidden rounded-2xl bg-inverse-glow px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <LogoMark className="pointer-events-none absolute -right-16 -bottom-24 -z-10 size-96 opacity-[0.07]" />
          <div className={cn("grid items-center gap-10", aside && "lg:grid-cols-[1fr_auto]")}>
            <div>
              <Breadcrumbs items={breadcrumbs} tone="inverse" className="mb-8" />
              <SectionHeading intro={intro} as="h1" size="h1" tone="inverse" />
              {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            </div>
            {aside}
          </div>
        </div>
      </Container>
    </div>
  );
}
