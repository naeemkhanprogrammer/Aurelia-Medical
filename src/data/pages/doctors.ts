import { routes } from "@/config/routes";

export const doctorsPageContent = {
  seo: {
    title: "Meet Our Doctors",
    description:
      "Meet the family physicians and specialists at Aurelia Medical Group in Red Deer, Alberta — family medicine, respirology, internal medicine and child psychiatry.",
  },
  hero: {
    eyebrow: "Our Physicians",
    title: "Meet our doctors",
    highlight: "doctors",
    description:
      "Experienced, compassionate physicians and specialists working together to provide coordinated care for you and your family.",
  },
  filterLabel: "Filter by specialty",
  allSpecialtiesLabel: "All specialties",
  resultsLabel: (count: number) => `${count} ${count === 1 ? "physician" : "physicians"}`,
  emptyState: "No physicians match this specialty yet. Please check back soon.",
  profile: {
    backLabel: "All doctors",
    aboutTitle: "About",
    focusTitle: "Areas of focus",
    languagesTitle: "Languages",
    educationTitle: "Education & training",
    servicesTitle: "Services",
    bookTitle: "Book with our team",
    bookDescription: "Appointments are booked through our secure booking partner.",
    referralNote:
      "Specialist appointments require a referral from your physician or nurse practitioner.",
    referralLinkLabel: "Referral information",
    referralHref: routes.referrals,
  },
} as const;
