import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { LogoMark } from "@/components/shared/logo";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { mainNav } from "@/config/navigation";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";

export const metadata: Metadata = {
  title: uiStrings.notFound.title,
  robots: { index: false },
};

export default function NotFound() {
  const t = uiStrings.notFound;
  return (
    <SiteShell>
      <Container className="flex flex-col items-center section-y text-center">
        <LogoMark className="size-16" />
        <Eyebrow className="mt-8">{t.eyebrow}</Eyebrow>
        <h1 className="mt-4 text-h1">{t.title}</h1>
        <p className="mt-4 max-w-md text-muted-foreground">{t.description}</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {mainNav
            .filter((item) => item.href !== routes.home)
            .map((item) => (
              <li key={item.href}>
                <ButtonLink href={item.href} variant="soft" size="sm">
                  {item.label}
                </ButtonLink>
              </li>
            ))}
        </ul>
        <ButtonLink href={routes.home} className="mt-8">
          {t.homeLabel}
        </ButtonLink>
      </Container>
    </SiteShell>
  );
}
