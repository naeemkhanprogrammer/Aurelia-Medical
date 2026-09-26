import { describe, expect, it } from "vitest";

import { getOpenStatus } from "@/lib/opening-hours";
import type { OpeningHours } from "@/types/site";

const hours: OpeningHours[] = [
  {
    label: "Mon – Thu",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "18:00",
  },
  { label: "Friday", days: ["Friday"], opens: "08:00", closes: "16:00" },
  { label: "Saturday", days: ["Saturday"] },
  { label: "Sunday", days: ["Sunday"] },
];
const TZ = "America/Edmonton";
// Edmonton is UTC-6 in September (MDT).
const at = (iso: string) => new Date(iso);

describe("getOpenStatus", () => {
  it("is open during weekday hours", () => {
    expect(getOpenStatus(hours, at("2026-09-23T16:00:00Z"), TZ)).toEqual({
      state: "open",
      closes: "18:00",
    });
  });

  it("opens later today when before opening time", () => {
    expect(getOpenStatus(hours, at("2026-09-23T12:00:00Z"), TZ)).toEqual({
      state: "closed",
      nextOpen: { day: "Wednesday", opens: "08:00", isToday: true },
    });
  });

  it("rolls over the weekend to Monday", () => {
    expect(getOpenStatus(hours, at("2026-09-26T18:00:00Z"), TZ)).toEqual({
      state: "closed",
      nextOpen: { day: "Monday", opens: "08:00", isToday: false },
    });
  });

  it("uses the clinic time zone, not UTC (Fri 5 p.m. Edmonton = Sat UTC)", () => {
    const status = getOpenStatus(hours, at("2026-09-26T00:30:00Z"), TZ);
    expect(status).toEqual({
      state: "closed",
      nextOpen: { day: "Monday", opens: "08:00", isToday: false },
    });
  });
});
