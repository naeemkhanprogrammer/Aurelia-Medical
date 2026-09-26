import { routes } from "@/config/routes";
import type { HighlightItem } from "@/types/content";

export const patientResourcesPageContent = {
  seo: {
    title: "Patient Resources",
    description:
      "Forms, guides and trusted health resources for patients of Aurelia Medical Group in Red Deer, Alberta.",
  },
  hero: {
    eyebrow: "Patient Resources",
    title: "Everything you need for your care",
    highlight: "your care",
    description:
      "Forms, guides and trusted links to help you prepare for your visit and manage your health.",
  },
  quickLinks: {
    title: "Quick links",
    items: [
      {
        icon: "user-plus",
        title: "New Patients",
        description: "Register and prepare for your first visit.",
        link: { label: "Learn more", href: routes.newPatients },
      },
      {
        icon: "clipboard",
        title: "Referrals",
        description: "Information for healthcare providers.",
        link: { label: "Learn more", href: routes.referrals },
      },
      {
        icon: "video",
        title: "Telemedicine",
        description: "How virtual visits work.",
        link: { label: "Learn more", href: routes.telemedicine },
      },
      {
        icon: "receipt",
        title: "Insurance & Billing",
        description: "Coverage, fees and payment.",
        link: { label: "Learn more", href: routes.insurance },
      },
      {
        icon: "help-circle",
        title: "FAQs",
        description: "Answers to common questions.",
        link: { label: "Learn more", href: routes.faqs },
      },
    ] satisfies HighlightItem[],
  },
  documents: {
    title: "Forms & documents",
    description: "Download, complete and bring these to your appointment where applicable.",
    downloadLabel: "Download",
    comingSoonLabel: "Coming soon",
  },
  external: {
    title: "Trusted health resources",
    description: "Reliable information and support services outside the clinic.",
  },
} as const;
