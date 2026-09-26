import { contactConfig } from "@/config/contact";
import type { LegalSection } from "@/types/content";

/**
 * ⚠️ TEMPLATE — must be reviewed and approved by the clinic's privacy officer /
 * legal counsel before launch (PIPEDA, Alberta HIA, PIPA).
 */
export const privacyPolicyContent = {
  seo: {
    title: "Privacy Policy",
    description:
      "How Aurelia Medical Group protects your privacy and handles information on this website.",
  },
  hero: {
    eyebrow: "Legal",
    title: "Privacy policy",
    description:
      "Your privacy matters to us. This policy explains what information this website handles and how.",
  },
  lastUpdatedLabel: "Last updated",
  lastUpdated: "2026-09-26",
  tocLabel: "On this page",
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Aurelia Medical Group (“we”, “us”) is committed to protecting the privacy of our patients and website visitors. Health information collected in the course of care is protected under Alberta's Health Information Act (HIA). Other personal information is handled in accordance with applicable privacy legislation, including PIPEDA and Alberta's PIPA.",
      ],
    },
    {
      id: "website",
      title: "Information this website collects",
      paragraphs: [
        "This website is informational. It does not ask for, collect or store personal health information, and it has no user accounts or forms that submit data to us.",
        "Like most websites, our hosting provider automatically processes limited technical information (such as IP address, browser type and pages requested) to deliver and secure the site. These logs are not used to identify you.",
      ],
    },
    {
      id: "third-parties",
      title: "Third-party platforms",
      paragraphs: [
        "When you book an appointment, register as a patient, submit a referral, apply for a job or send an enquiry, you are taken to a secure platform operated for the clinic by a third-party provider. Information you provide there is governed by that platform's privacy policy and by our agreements with the provider.",
      ],
      list: [
        "Online booking platform",
        "Patient registration platform",
        "eReferral platform (for healthcare providers)",
        "Careers / applicant platform",
        "Secure enquiry platform",
      ],
    },
    {
      id: "cookies",
      title: "Cookies & analytics",
      paragraphs: [
        "This website does not use advertising or analytics cookies and does not track you across other sites.",
        "Our Contact page offers an optional Google Map. The map is only loaded if you choose to load it; Google may then set cookies and receive your IP address under its own privacy policy.",
      ],
    },
    {
      id: "email",
      title: "Email and phone",
      paragraphs: [
        "Email is not a secure channel. Please do not send personal health information by email. For medical matters, call the clinic or use our secure platforms.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      paragraphs: [
        "You may request access to, or correction of, the personal and health information we hold about you. Requests can be made to our Privacy Officer using the contact details below.",
      ],
    },
    {
      id: "contact",
      title: "Contact our Privacy Officer",
      paragraphs: [
        `Privacy Officer, Aurelia Medical Group — ${contactConfig.address.street}, ${contactConfig.address.city}, ${contactConfig.address.regionCode} ${contactConfig.address.postalCode}. Phone ${contactConfig.phone.display}.`,
        "If you are not satisfied with our response, you may contact the Office of the Information and Privacy Commissioner of Alberta.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The “Last updated” date above shows when it was last revised.",
      ],
    },
  ] satisfies LegalSection[],
} as const;
