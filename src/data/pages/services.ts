import { routes } from "@/config/routes";

export const servicesPageContent = {
  seo: {
    title: "Medical Services",
    description:
      "Family medicine, respirology, internal medicine, child psychiatry and allied health services at Aurelia Medical Group in Red Deer, Alberta.",
  },
  hero: {
    eyebrow: "Our Services",
    title: "Specialist and family care, under one roof",
    highlight: "under one roof",
    description:
      "From everyday family medicine to specialist consultations, our multidisciplinary team coordinates your care so nothing falls through the cracks.",
  },
  detail: {
    backLabel: "All services",
    overviewTitle: "Overview",
    conditionsTitle: "What we help with",
    whoTitle: "Who this service is for",
    stepsTitle: "What to expect",
    teamTitle: "Your care team",
    otherServicesTitle: "Other services",
    referralTitle: "Referral required",
    referralDescription:
      "This is a specialist service. Please ask your family physician or nurse practitioner to send a referral.",
    referralLinkLabel: "Information for referring providers",
    referralHref: routes.referrals,
    noReferralTitle: "No referral needed",
    noReferralDescription: "You can book directly through our secure booking partner.",
  },
} as const;
