/** Shared copy for clinic-hours UI (home panel + contact page). */
export const clinicHoursContent = {
  openNow: "Open now",
  closedNow: "Closed now",
  opensAt: (time: string) => `Opens ${time}`,
  closesAt: (time: string) => `Closes ${time}`,
  today: "Today",
  timeZoneNote: "Times shown in Mountain Time (Red Deer).",
} as const;
