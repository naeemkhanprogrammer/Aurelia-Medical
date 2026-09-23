import type { ExternalLinkKey } from "@/types/common";

export interface ExternalLinkConfig {
  url: string;
  /** Name of the third-party platform (shown in "You're leaving this site" copy & docs). */
  provider: string;
  description: string;
  /** Query-string keys the platform accepts for pre-selection (optional). */
  params?: Readonly<Record<string, string>>;
  /** True until the clinic supplies the real URL — surfaces a warning in development. */
  isPlaceholder: boolean;
}

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ALL outbound patient actions live here. We never collect patient data on our
 * own infrastructure — every booking, registration, referral, application and
 * enquiry is handed off to the clinic's designated third-party platform.
 *
 * ⚠️ URLs below are PLACEHOLDERS. Replace `url`, set `isPlaceholder: false`.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const externalLinks = {
  booking: {
    url: "https://booking.example.com/aurelia-medical",
    provider: "Online booking platform (TBC)",
    description: "Book, reschedule or cancel an appointment.",
    params: { service: "service", visitType: "visit_type" },
    isPlaceholder: true,
  },
  patientRegistration: {
    url: "https://register.example.com/aurelia-medical",
    provider: "Patient registration platform (TBC)",
    description: "Register as a new patient.",
    isPlaceholder: true,
  },
  referral: {
    url: "https://referrals.example.com/aurelia-medical",
    provider: "eReferral platform (TBC)",
    description: "Secure referral submission for healthcare providers.",
    isPlaceholder: true,
  },
  careers: {
    url: "https://careers.example.com/aurelia-medical",
    provider: "Careers / applicant tracking platform (TBC)",
    description: "Apply for open positions.",
    isPlaceholder: true,
  },
  enquiries: {
    url: "https://contact.example.com/aurelia-medical",
    provider: "Secure enquiry form (TBC)",
    description: "Send a general, non-urgent enquiry.",
    isPlaceholder: true,
  },
  newsletter: {
    url: "https://newsletter.example.com/aurelia-medical",
    provider: "Newsletter platform (TBC)",
    description: "Subscribe to clinic updates and health tips.",
    isPlaceholder: true,
  },
  telemedicine: {
    url: "https://virtual.example.com/aurelia-medical",
    provider: "Virtual care platform (TBC)",
    description: "Join a scheduled virtual appointment.",
    isPlaceholder: true,
  },
} as const satisfies Record<ExternalLinkKey, ExternalLinkConfig>;
