import { describe, expect, it } from "vitest";

import { isActivePath } from "@/components/layout/nav-link";

describe("isActivePath", () => {
  it("matches home only exactly", () => {
    expect(isActivePath("/", { label: "Home", href: "/" })).toBe(true);
    expect(isActivePath("/doctors", { label: "Home", href: "/" })).toBe(false);
  });

  it("matches nested routes only when enabled", () => {
    const item = { label: "Doctors", href: "/doctors", matchNested: true };
    expect(isActivePath("/doctors/priya-sharma", item)).toBe(true);
    expect(isActivePath("/doctors-x", item)).toBe(false);
    expect(isActivePath("/about/team", { label: "About", href: "/about" })).toBe(false);
  });
});
