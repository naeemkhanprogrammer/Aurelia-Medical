import type { InfoItem } from "@/types/content";

export const careersPageContent = {
  seo: {
    title: "Careers",
    description:
      "Join Aurelia Medical Group in Red Deer, Alberta. Explore career opportunities for physicians, nurses, allied health and patient-services professionals.",
  },
  hero: {
    eyebrow: "Careers",
    title: "Build your career with Aurelia",
    highlight: "with Aurelia",
    description:
      "Join a collaborative team delivering exceptional, coordinated care in a brand-new, modern clinic.",
  },
  benefits: {
    eyebrow: "Why Aurelia",
    title: "A better place to practise",
    items: [
      {
        icon: "handshake",
        title: "Collaborative team",
        description: "Family physicians, specialists and allied health under one roof.",
      },
      {
        icon: "building",
        title: "Modern facility",
        description: "A new, purpose-built clinic with modern equipment and EMR.",
      },
      {
        icon: "graduation-cap",
        title: "Professional growth",
        description: "Support for continuing education and professional development.",
      },
      {
        icon: "heart-pulse",
        title: "Balanced workload",
        description: "Scheduling that respects your time and your patients' needs.",
      },
    ] satisfies InfoItem[],
  },
  openings: {
    title: "Open positions",
    applyLabel: "Apply now",
    responsibilitiesLabel: "Responsibilities",
    requirementsLabel: "Requirements",
    detailsLabel: "View details",
    emptyState:
      "There are no open positions right now. You're welcome to send a general application.",
  },
  general: {
    title: "Don't see the right role?",
    description:
      "We're always interested in hearing from talented healthcare professionals. Send a general application.",
    actionLabel: "Send a general application",
  },
  applyNote: "Applications are handled securely by our careers platform.",
  equalOpportunity:
    "Aurelia Medical Group is an equal-opportunity employer committed to an inclusive, accessible workplace. Accommodations are available on request throughout the hiring process.",
} as const;
