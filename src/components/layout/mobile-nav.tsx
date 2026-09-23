"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { BookingLink } from "@/components/shared/booking-link";
import { Logo } from "@/components/shared/logo";
import { PhoneLink } from "@/components/shared/phone-link";
import { Button, buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";
import { cn } from "@/lib/cn";
import { selectCloseMobileNav, selectIsMobileNavOpen, useUiStore } from "@/store/ui-store";
import type { NavItem } from "@/types/navigation";

import { MOBILE_NAV_ID } from "./mobile-nav-toggle";
import { NavLink } from "./nav-link";

export interface MobileNavProps {
  items: readonly NavItem[];
  secondaryItems: readonly NavItem[];
}

/**
 * Slide-in drawer built on the native <dialog> element: `showModal()` gives us
 * focus trapping, Escape-to-close and an inert background for free.
 * Open state lives in the global UI store so the header toggle can control it.
 */
export function MobileNav({ items, secondaryItems }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = useUiStore(selectIsMobileNavOpen);
  const close = useUiStore(selectCloseMobileNav);
  const pathname = usePathname();

  // Sync store → native dialog.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // Close when the route changes (e.g. after tapping a link).
  useEffect(() => {
    close();
  }, [pathname, close]);

  return (
    <dialog
      ref={dialogRef}
      id={MOBILE_NAV_ID}
      aria-label={uiStrings.mobileNavLabel}
      onClose={close}
      onClick={(event) => {
        // Clicking the backdrop (the dialog element itself) closes the drawer.
        if (event.target === event.currentTarget) close();
      }}
      className={cn(
        "fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-full max-w-sm bg-surface p-0 text-foreground shadow-floating",
        "translate-x-full transition-[translate,overlay,display] transition-discrete duration-300 ease-out-soft open:translate-x-0 starting:open:translate-x-full",
        "backdrop:bg-primary/60 backdrop:backdrop-blur-sm",
        "lg:hidden",
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Link href={routes.home} aria-label={uiStrings.homeLinkLabel} onClick={close}>
            <Logo />
          </Link>
          <Button variant="ghost" size="icon" aria-label={uiStrings.closeMenu} onClick={close}>
            <X aria-hidden className="size-6!" />
          </Button>
        </div>

        <nav aria-label={uiStrings.mobileNavLabel} className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  item={item}
                  onNavigate={close}
                  className="flex items-center rounded-md px-4 py-3 font-heading text-h4 font-semibold text-heading transition-colors hover:bg-primary-50"
                  activeClassName="bg-accent-50 text-accent-ink"
                />
              </li>
            ))}
          </ul>
          <ul className="mt-6 grid grid-cols-2 gap-2 border-t border-border pt-6">
            {secondaryItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  item={item}
                  onNavigate={close}
                  className="block rounded-md px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary-50 hover:text-heading"
                  activeClassName="text-heading"
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-border p-5">
          <BookingLink variant="primary" size="lg" className="w-full" />
          <PhoneLink
            prefix={uiStrings.callUs}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}
          />
        </div>
      </div>
    </dialog>
  );
}
