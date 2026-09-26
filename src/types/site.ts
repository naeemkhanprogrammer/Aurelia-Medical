export interface PostalAddress {
  street: string;
  city: string;
  region: string;
  regionCode: string;
  postalCode: string;
  country: string;
  countryCode: string;
}

export interface PhoneNumber {
  /** Human-readable, e.g. (403) 555-1234 */
  display: string;
  /** E.164, used for tel: links and structured data, e.g. +14035551234 */
  e164: string;
}

export type Weekday =
  "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export interface OpeningHours {
  /** Label shown to users, e.g. "Mon – Thu" */
  label: string;
  days: readonly Weekday[];
  /** 24h "HH:mm"; omit both for closed days */
  opens?: string;
  closes?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  legalName: string;
  tagline: string;
  description: string;
  locale: string;
  language: string;
  foundingYear: number;
  keywords: readonly string[];
}

export interface ContactConfig {
  phone: PhoneNumber;
  fax: PhoneNumber;
  email: string;
  address: PostalAddress;
  geo: { latitude: number; longitude: number };
  /** IANA time zone of the clinic, used for the live "Open now" indicator. */
  timeZone: string;
  hours: readonly OpeningHours[];
  hoursNote: string;
  /** Practical visit information (parking, accessibility, transit). */
  visitInfo: readonly { title: string; description: string }[];
  map: {
    /** Google Maps embed URL (iframe src). Placeholder until the clinic confirms its listing. */
    embedUrl: string;
    /** Opens directions in the visitor's maps app. */
    directionsUrl: string;
    title: string;
  };
}
