import { routes } from "@/config/routes";
import type { HomeContent } from "@/types/content";

/** Home page copy. ⚠️ Placeholder copy — review with the clinic. */
export const homeContent: HomeContent = {
  hero: {
    titleLines: ["Advanced care,", "closer to home"],
    highlight: "closer",
    description:
      "Premium, evidence-based, patient-centred care for you and your family in Red Deer, Alberta.",
    primaryCtaLabel: "Book Appointment",
    secondaryCta: { label: "Find a Doctor", href: routes.doctors },
    trustPoints: [
      { icon: "users", label: "Multidisciplinary team" },
      { icon: "hand-heart", label: "Compassionate care" },
      { icon: "map-pin", label: "Conveniently local" },
    ],
    visualBadges: [
      {
        icon: "calendar-check",
        title: "New patients welcome",
        caption: "Family practice now registering",
      },
      {
        icon: "stethoscope",
        title: "Specialists under one roof",
        caption: "Respirology · Child Psychiatry · Internal Medicine",
      },
    ],
  },
  quickBooking: {
    title: "Book your appointment",
    serviceLabel: "Select a service",
    servicePlaceholder: "Choose a service",
    visitTypeLabel: "Visit type",
    visitTypes: [
      { value: "in-person", label: "In-person visit" },
      { value: "virtual", label: "Virtual visit" },
    ],
    submitLabel: "Book Appointment",
    assurances: [
      "New patients welcome",
      "Referral-based specialist care",
      "Secure & confidential booking",
    ],
    privacyNote:
      "You'll continue to our secure booking partner. We never store your health information on this website.",
  },
  services: {
    eyebrow: "Our Services",
    title: "See what we provide",
    description: "Comprehensive medical care across multiple specialties — all under one roof.",
    cta: { label: "View all services", href: routes.services },
  },
  stats: {
    title: "Aurelia at a glance",
    items: [
      {
        id: "satisfaction",
        icon: "thumbs-up",
        value: 98,
        suffix: "%",
        label: "Patient Satisfaction",
        progress: 98,
      },
      {
        id: "physicians",
        icon: "users",
        value: 25,
        suffix: "+",
        label: "Experienced Physicians",
        progress: 72,
      },
      {
        id: "patients",
        icon: "map-pin",
        value: 10,
        suffix: "k+",
        label: "Patients Served Locally",
        progress: 84,
      },
      {
        id: "wait",
        icon: "clock",
        value: 2.8,
        unit: "Days",
        label: "Average Wait for Appointment",
        progress: 64,
      },
    ],
  },
  doctors: {
    eyebrow: "Our Physicians",
    title: "Meet our specialists",
    description: "A team of dedicated professionals committed to your health.",
    cta: { label: "View all doctors", href: routes.doctors },
  },
  resources: {
    eyebrow: "Patient Resources",
    title: "We're here to help",
    description: "Access the information and tools you need for your care.",
    cta: { label: "All resources", href: routes.patientResources },
    items: [
      {
        icon: "clipboard",
        title: "Referrals",
        description: "For physicians and healthcare providers.",
        link: { label: "Learn more", href: routes.referrals },
      },
      {
        icon: "file-text",
        title: "Forms & Documents",
        description: "Download patient forms and paperwork.",
        link: { label: "Learn more", href: routes.patientResources },
      },
      {
        icon: "video",
        title: "Telemedicine",
        description: "Virtual visits from the comfort of home.",
        link: { label: "Learn more", href: routes.telemedicine },
      },
      {
        icon: "user-plus",
        title: "New Patients",
        description: "Everything you need to get started.",
        link: { label: "Learn more", href: routes.newPatients },
      },
      {
        icon: "shield-check",
        title: "Insurance & Billing",
        description: "Coverage info and billing assistance.",
        link: { label: "Learn more", href: routes.insurance },
      },
    ],
  },
  testimonials: {
    eyebrow: "Patients Trust Us",
    title: "What our patients say",
  },
  ctaBand: {
    title: "Your health. Our priority.",
    description: "Book an appointment today and experience compassionate care close to home.",
    primaryLabel: "Book Appointment",
    phoneLabel: "Or call",
  },
};
