import { describe, expect, it } from "vitest";

import { formatHours, formatTime, getInitials, splitHighlight } from "@/lib/format";

describe("format helpers", () => {
  it("formats 24h times for en-CA", () => {
    expect(formatTime("08:00")).toMatch(/^8:00\sa\.m\.$/);
    expect(formatTime("18:30")).toMatch(/^6:30\sp\.m\.$/);
  });

  it("formats closed days with the provided label", () => {
    expect(formatHours({ label: "Sunday", days: ["Sunday"] }, "Closed")).toBe("Closed");
  });

  it("builds initials without the Dr. prefix", () => {
    expect(getInitials("Dr. Priya Sharma")).toBe("PS");
    expect(getInitials("Sarah T.")).toBe("ST");
  });

  it("splits text around a highlight", () => {
    expect(splitHighlight("closer to home", "closer")).toEqual(["", "closer", " to home"]);
    expect(splitHighlight("no match", "zzz")).toEqual(["no match", "", ""]);
  });
});
