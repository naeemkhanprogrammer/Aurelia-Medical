import type { NavGroup, NavItem, SocialLink } from "@/types/navigation";

import { routes } from "./routes";

export const mainNav: readonly NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About Us", href: routes.about },
  { label: "Doctors", href: routes.doctors, matchNested: true },
  { label: "Services", href: routes.services, matchNested: true },
  { label: "Referrals", href: routes.referrals },
  { label: "Resources", href: routes.patientResources },
  { label: "Contact", href: routes.contact },
];

/** Extra links shown only in the mobile menu, below the main items. */
export const mobileSecondaryNav: readonly NavItem[] = [
  { label: "New Patients", href: routes.newPatients },
  { label: "Insurance & Billing", href: routes.insurance },
  { label: "FAQs", href: routes.faqs },
  { label: "Careers", href: routes.careers },
];

export const footerNav: readonly NavGroup[] = [
  {
    title: "Quick Links",
    items: [
      { label: "About Us", href: routes.about },
      { label: "Our Doctors", href: routes.doctors },
      { label: "Services", href: routes.services },
      { label: "Referrals", href: routes.referrals },
      { label: "Patient Resources", href: routes.patientResources },
      { label: "Contact", href: routes.contact },
    ],
  },
  {
    title: "Patients",
    items: [
      { label: "New Patients", href: routes.newPatients },
      { label: "Book Appointment", href: routes.bookAppointment },
      { label: "Insurance & Billing", href: routes.insurance },
      { label: "Telemedicine", href: routes.telemedicine },
      { label: "FAQs", href: routes.faqs },
      { label: "Careers", href: routes.careers },
    ],
  },
];

export const legalNav: readonly NavItem[] = [
  { label: "Privacy Policy", href: routes.privacyPolicy },
  { label: "FAQs", href: routes.faqs },
];

/** PLACEHOLDER profiles — replace with the clinic's real accounts. */
export const socialLinks: readonly SocialLink[] = [
  {
    platform: "facebook",
    label: "Aurelia Medical Group on Facebook",
    href: "https://www.facebook.com/",
  },
  {
    platform: "instagram",
    label: "Aurelia Medical Group on Instagram",
    href: "https://www.instagram.com/",
  },
  {
    platform: "linkedin",
    label: "Aurelia Medical Group on LinkedIn",
    href: "https://www.linkedin.com/",
  },
];
