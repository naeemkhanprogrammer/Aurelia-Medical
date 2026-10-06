import Link from "next/link";

import { BookingLink } from "@/components/shared/booking-link";
import { Logo } from "@/components/shared/logo";
import { mainNav, mobileSecondaryNav } from "@/config/navigation";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";

import { Container } from "./container";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { MobileNavToggle } from "./mobile-nav-toggle";

/** Site header (Server Component). Only the nav links & menu toggle hydrate. */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/85 backdrop-blur-md supports-[backdrop-filter]:bg-surface/75">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href={routes.home}
          aria-label={uiStrings.homeLinkLabel}
          className="shrink-0 rounded-md"
        >
          <Logo preload />
        </Link>
        <DesktopNav items={mainNav} />
        <div className="flex items-center gap-2">
          <BookingLink size="md" className="hidden sm:inline-flex" />
          <MobileNavToggle />
        </div>
      </Container>
      <MobileNav items={mainNav} secondaryItems={mobileSecondaryNav} />
    </header>
  );
}
