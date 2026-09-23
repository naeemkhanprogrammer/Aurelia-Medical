"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { uiStrings } from "@/data/common";
import { selectIsMobileNavOpen, selectOpenMobileNav, useUiStore } from "@/store/ui-store";

export const MOBILE_NAV_ID = "mobile-navigation";

export function MobileNavToggle() {
  const isOpen = useUiStore(selectIsMobileNavOpen);
  const open = useUiStore(selectOpenMobileNav);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="lg:hidden"
      aria-label={uiStrings.openMenu}
      aria-expanded={isOpen}
      aria-controls={MOBILE_NAV_ID}
      onClick={open}
    >
      <Menu aria-hidden className="size-6!" />
    </Button>
  );
}
