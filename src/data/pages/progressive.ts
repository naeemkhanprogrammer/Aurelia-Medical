import { routes } from "@/config/routes";
import type { ProgressivePageContent } from "@/types/content";

/**
 * Progressive pages: live routes with useful essentials now, full content later.
 * Set `published: true` once final copy is in to make the page indexable.
 */
export const referralsPageContent: ProgressivePageContent = {
  seo: {
    title: "Referral Information for Providers",
    description:
      "How healthcare providers can refer patients to specialists at Aurelia Medical Group in Red Deer, Alberta.",
  },
  published: false,
  hero: {
    eyebrow: "For Healthcare Providers",
    title: "Referring a patient",
    highlight: "a patient",
    description:
      "Refer patients to our respirology, internal medicine and child psychiatry services securely and quickly.",
  },
  statusLabel: "Full referral guidelines coming soon",
  intro: [
    "We accept referrals from physicians and nurse practitioners. Referrals are triaged by our specialists and patients are contacted directly with an appointment.",
  ],
  highlights: [
    {
      icon: "lungs",
      title: "Respirology",
      description: "Asthma, COPD, chronic cough, interstitial lung disease and more.",
    },
    {
      icon: "heart-pulse",
      title: "Internal Medicine",
      description: "Complex and multi-system adult conditions, pre-operative assessment.",
    },
    {
      icon: "brain",
      title: "Child Psychiatry",
      description: "Children and adolescents up to 18 with mental-health concerns.",
    },
  ],
  actions: [
    { kind: "external", label: "Submit a secure referral", linkKey: "referral" },
    { kind: "phone", label: "Call the clinic" },
  ],
  noticeTitle: "Please include",
  notice:
    "Reason for referral, relevant history, current medications, recent investigations and the patient's contact details. Detailed referral criteria per specialty will be published here soon.",
};

export const newPatientsPageContent: ProgressivePageContent = {
  seo: {
    title: "New Patient Information",
    description:
      "How to register as a new patient at Aurelia Medical Group in Red Deer, Alberta, and what to expect at your first visit.",
  },
  published: false,
  hero: {
    eyebrow: "New Patients",
    title: "Welcome to Aurelia",
    highlight: "Aurelia",
    description: "Our family practice is welcoming new patients. Here's how to get started.",
  },
  statusLabel: "Detailed new-patient guide coming soon",
  intro: [
    "Registration takes just a few minutes through our secure registration platform. Once registered, our team will contact you to book your first comprehensive visit.",
  ],
  highlights: [
    {
      icon: "user-plus",
      title: "1. Register online",
      description: "Complete the secure registration form.",
    },
    {
      icon: "calendar-check",
      title: "2. Book your first visit",
      description: "We'll contact you to schedule an intake appointment.",
    },
    {
      icon: "clipboard",
      title: "3. Bring your essentials",
      description: "Health card, photo ID and your medication list.",
    },
  ],
  actions: [
    { kind: "external", label: "Register as a new patient", linkKey: "patientRegistration" },
    { kind: "internal", label: "Read the FAQs", href: routes.faqs },
  ],
  noticeTitle: "Specialist care",
  notice:
    "Respirology, Internal Medicine and Child Psychiatry require a referral from your physician or nurse practitioner.",
};

export const telemedicinePageContent: ProgressivePageContent = {
  seo: {
    title: "Telemedicine & Virtual Visits",
    description:
      "Virtual appointments with Aurelia Medical Group — secure video and phone visits from the comfort of home.",
  },
  published: false,
  hero: {
    eyebrow: "Telemedicine",
    title: "Care from the comfort of home",
    highlight: "comfort of home",
    description: "Secure video and phone appointments for follow-ups and many consultations.",
  },
  statusLabel: "Full virtual-care guide coming soon",
  intro: [
    "When booking, choose “Virtual visit”. You'll receive a secure link before your appointment.",
  ],
  highlights: [
    {
      icon: "video",
      title: "Secure video",
      description: "Encrypted visits through our virtual care platform.",
    },
    {
      icon: "phone",
      title: "Phone appointments",
      description: "Available when video isn't practical.",
    },
    {
      icon: "lock",
      title: "Private & confidential",
      description: "Join from a quiet, private space.",
    },
  ],
  actions: [
    { kind: "external", label: "Join a virtual visit", linkKey: "telemedicine" },
    { kind: "external", label: "Book a virtual visit", linkKey: "booking" },
  ],
  noticeTitle: "Is a virtual visit right for me?",
  notice:
    "Virtual visits are not suitable for emergencies or for concerns that need a physical examination. Our team will advise when booking.",
};

export const communityProgramsPageContent: ProgressivePageContent = {
  seo: {
    title: "Community Programs",
    description:
      "Health education and community programs from Aurelia Medical Group in Red Deer, Alberta.",
  },
  published: false,
  hero: {
    eyebrow: "Community",
    title: "Community health programs",
    highlight: "Community",
    description:
      "Education and support programs for patients, families and the wider Red Deer community.",
  },
  statusLabel: "Programs launching soon",
  intro: [
    "We're developing a series of workshops and support programs. Subscribe to clinic updates to hear when registration opens.",
  ],
  highlights: [
    { icon: "lungs", title: "Breathe Well", description: "Living well with asthma and COPD." },
    {
      icon: "family",
      title: "Healthy Families",
      description: "Parenting, nutrition and child development.",
    },
    {
      icon: "brain",
      title: "Youth Mental Health",
      description: "Resources for parents, caregivers and teens.",
    },
  ],
  actions: [
    { kind: "external", label: "Subscribe to updates", linkKey: "newsletter" },
    { kind: "internal", label: "Contact us", href: routes.contact },
  ],
  noticeTitle: "Have an idea for a program?",
  notice: "We'd love to hear from community organizations interested in partnering with us.",
};
