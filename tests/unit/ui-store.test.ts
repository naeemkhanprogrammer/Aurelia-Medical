import { beforeEach, describe, expect, it } from "vitest";

import { useUiStore } from "@/store/ui-store";

describe("ui store", () => {
  beforeEach(() => useUiStore.setState({ isMobileNavOpen: false }));

  it("opens, toggles and closes the mobile nav", () => {
    const { openMobileNav, toggleMobileNav, closeMobileNav } = useUiStore.getState();
    openMobileNav();
    expect(useUiStore.getState().isMobileNavOpen).toBe(true);
    toggleMobileNav();
    expect(useUiStore.getState().isMobileNavOpen).toBe(false);
    toggleMobileNav();
    closeMobileNav();
    expect(useUiStore.getState().isMobileNavOpen).toBe(false);
  });
});
