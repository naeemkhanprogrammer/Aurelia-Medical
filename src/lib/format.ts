import type { OpeningHours, PostalAddress } from "@/types/site";

const timeFormatter = new Intl.DateTimeFormat("en-CA", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "UTC",
});

/** "08:00" → "8:00 a.m." */
export function formatTime(hhmm: string): string {
  const [h = "0", m = "0"] = hhmm.split(":");
  const date = new Date(Date.UTC(1970, 0, 1, Number(h), Number(m)));
  return timeFormatter.format(date);
}

export function formatHours(entry: OpeningHours, closedLabel: string): string {
  if (!entry.opens || !entry.closes) return closedLabel;
  return `${formatTime(entry.opens)} – ${formatTime(entry.closes)}`;
}

export function formatAddressLines(address: PostalAddress): [string, string] {
  return [address.street, `${address.city}, ${address.regionCode} ${address.postalCode}`];
}

export function formatAddress(address: PostalAddress): string {
  return `${address.street}, ${address.city}, ${address.regionCode} ${address.postalCode}, ${address.country}`;
}

/** Initials for monogram avatars: "Dr. Priya Sharma" → "PS" */
export function getInitials(name: string): string {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/** Split `text` around the first occurrence of `highlight` for accent styling. */
export function splitHighlight(text: string, highlight?: string): [string, string, string] {
  if (!highlight) return [text, "", ""];
  const index = text.indexOf(highlight);
  if (index === -1) return [text, "", ""];
  return [text.slice(0, index), highlight, text.slice(index + highlight.length)];
}
