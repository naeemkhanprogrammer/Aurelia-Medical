import { routes } from "@/config/routes";
import type { InfoItem } from "@/types/content";

/** About page copy. ⚠️ Placeholder copy — review with the clinic. */
export const aboutPageContent = {
  seo: {
    title: "About Us",
    description:
      "Aurelia Medical Group brings family medicine and specialist care together under one roof in Red Deer, Alberta — coordinated, compassionate, evidence-based care for every stage of life.",
  },
  hero: {
    eyebrow: "About Aurelia",
    title: "Exceptional care, for every stage of life",
    highlight: "every stage of life",
    description:
      "A multidisciplinary clinic built around one idea: patients deserve coordinated, unhurried, expert care — close to home.",
  },
  story: {
    eyebrow: "Our Story",
    title: "Why we built Aurelia",
    paragraphs: [
      "Too often, patients in central Alberta travel long distances or wait months to see a specialist, and their care is split across disconnected clinics.",
      "Aurelia Medical Group was founded to change that. By bringing family physicians, specialists and allied health professionals together in one modern facility in Red Deer, we make it easier for every member of your care team to work together — and for you to get the care you need, sooner.",
    ],
    quote:
      "Coordinated care is better care. When your physicians work together, you feel the difference.",
    quoteAttribution: "Aurelia Medical Group",
  },
  mission: {
    title: "Our mission",
    description:
      "To provide accessible, evidence-based and compassionate care that treats every patient as a whole person — coordinated across disciplines, under one roof.",
  },
  vision: {
    title: "Our vision",
    description:
      "To be central Alberta's most trusted destination for family and specialist care, recognised for clinical excellence and the warmth of our patient experience.",
  },
  values: {
    eyebrow: "Our Values",
    title: "What guides us",
    items: [
      {
        icon: "hand-heart",
        title: "Compassion",
        description: "We listen first and treat every patient with dignity, warmth and respect.",
      },
      {
        icon: "award",
        title: "Excellence",
        description: "Evidence-based care delivered by experienced, credentialed professionals.",
      },
      {
        icon: "handshake",
        title: "Collaboration",
        description: "Physicians, specialists and allied health working as one team around you.",
      },
      {
        icon: "shield-check",
        title: "Integrity & privacy",
        description: "Your trust and your health information are protected at every step.",
      },
      {
        icon: "accessibility",
        title: "Accessibility",
        description: "Timely, local, barrier-free care for patients of every age and ability.",
      },
      {
        icon: "sparkles",
        title: "Continuous improvement",
        description: "We learn, measure and refine so your care keeps getting better.",
      },
    ] satisfies InfoItem[],
  },
  approach: {
    eyebrow: "Our Approach",
    title: "How we care for you",
    steps: [
      {
        title: "Listen",
        description: "Unhurried appointments to understand your history, concerns and goals.",
      },
      {
        title: "Coordinate",
        description: "Your family physician and specialists share one plan, in one place.",
      },
      {
        title: "Support",
        description: "Allied health, education and follow-up that continue beyond the visit.",
      },
    ],
  },
  team: {
    eyebrow: "Our Physicians",
    title: "Meet the team",
    description: "Experienced family physicians and specialists committed to your health.",
    cta: { label: "View all doctors", href: routes.doctors },
  },
} as const;
