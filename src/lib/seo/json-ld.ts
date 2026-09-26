import "server-only";

import type { BreadcrumbList, FAQPage, MedicalClinic, Physician, WithContext } from "schema-dts";

import { contactConfig } from "@/config/contact";
import { env } from "@/config/env";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import type { Doctor, FaqCategory, Service } from "@/types/content";

const absolute = (path: string) => new URL(path, env.siteUrl).toString();

const specialties = (services: readonly Service[]) => [
  ...new Set(
    services.flatMap((s) =>
      s.schemaSpecialties.map((name) => `https://schema.org/${name}` as const),
    ),
  ),
];
const ORG_ID = () => `${absolute(routes.home)}#organization`;

const DAY_MAP = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
} as const;

export function medicalClinicJsonLd(services: readonly Service[]): WithContext<MedicalClinic> {
  const { address, geo, phone, email, hours } = contactConfig;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": ORG_ID(),
    name: siteConfig.name,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    url: absolute(routes.home),
    logo: absolute("/icon.svg"),
    telephone: phone.e164,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.regionCode,
      postalCode: address.postalCode,
      addressCountry: address.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: geo.latitude, longitude: geo.longitude },
    openingHoursSpecification: hours
      .filter((h) => h.opens && h.closes)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days.map((d) => DAY_MAP[d]),
        opens: h.opens,
        closes: h.closes,
      })),
    medicalSpecialty: specialties(services),
    availableService: services.map((s) => ({
      "@type": "MedicalTherapy",
      name: s.name,
      url: absolute(routes.service(s.slug)),
    })),
    areaServed: { "@type": "City", name: address.city },
    isAcceptingNewPatients: true,
  };
}

export function physicianJsonLd(
  doctor: Doctor,
  services: readonly Service[],
): WithContext<Physician> {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.name}, ${doctor.credentials}`,
    description: doctor.shortBio,
    url: absolute(routes.doctor(doctor.slug)),
    medicalSpecialty: specialties(services),
    knowsLanguage: [...doctor.languages],
    isAcceptingNewPatients: doctor.acceptingNewPatients,
    ...(doctor.photo && { image: absolute(doctor.photo.src) }),
    parentOrganization: { "@id": ORG_ID() },
  };
}

export function breadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqPageJsonLd(categories: readonly FaqCategory[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question" as const,
        name: item.question,
        acceptedAnswer: { "@type": "Answer" as const, text: item.answer.join(" ") },
      })),
    ),
  };
}
