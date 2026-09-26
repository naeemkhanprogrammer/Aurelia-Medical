import type { OpeningHours, Weekday } from "@/types/site";

export type OpenStatus =
  | { state: "open"; closes: string }
  | { state: "closed"; nextOpen?: { day: Weekday; opens: string; isToday: boolean } };

const WEEKDAYS: readonly Weekday[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/** Current weekday + "HH:mm" in the clinic's time zone (independent of the visitor's). */
export function getZonedNow(date: Date, timeZone: string): { day: Weekday; time: string } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return { day: get("weekday") as Weekday, time: `${get("hour")}:${get("minute")}` };
}

const hoursFor = (hours: readonly OpeningHours[], day: Weekday) =>
  hours.find((entry) => entry.days.includes(day));

/** Pure function: is the clinic open at `date`, and when does it next open? */
export function getOpenStatus(
  hours: readonly OpeningHours[],
  date: Date,
  timeZone: string,
): OpenStatus {
  const { day, time } = getZonedNow(date, timeZone);
  const today = hoursFor(hours, day);

  if (today?.opens && today.closes) {
    if (time >= today.opens && time < today.closes) return { state: "open", closes: today.closes };
    if (time < today.opens)
      return { state: "closed", nextOpen: { day, opens: today.opens, isToday: true } };
  }

  const start = WEEKDAYS.indexOf(day);
  for (let offset = 1; offset <= 7; offset += 1) {
    const nextDay = WEEKDAYS[(start + offset) % 7];
    if (!nextDay) continue;
    const entry = hoursFor(hours, nextDay);
    if (entry?.opens)
      return { state: "closed", nextOpen: { day: nextDay, opens: entry.opens, isToday: false } };
  }
  return { state: "closed" };
}
