import type { Doctor } from "@/types/content";

/**
 * Physician profiles. ⚠️ DUMMY DATA — names, credentials and bios are placeholders
 * for layout only and must be replaced with the clinic's approved profiles.
 * `photo` is optional; a branded monogram is shown until real photos are supplied.
 */
export const doctors: readonly Doctor[] = [
  {
    slug: "michael-turner",
    name: "Dr. Michael Turner",
    credentials: "MD, CCFP",
    title: "Family Physician",
    serviceSlugs: ["family-medicine"],
    yearsOfExperience: 15,
    shortBio:
      "A family physician focused on preventive care and long-term relationships with patients of all ages.",
    bio: [
      "Dr. Turner has practised family medicine for more than fifteen years, caring for patients from infancy to their senior years.",
      "He believes in unhurried appointments, clear explanations and shared decision-making, and has a special interest in chronic disease prevention.",
    ],
    focusAreas: [
      "Preventive care",
      "Chronic disease management",
      "Men's health",
      "Care coordination",
    ],
    languages: ["English"],
    education: ["MD — University of Alberta", "Family Medicine Residency — University of Calgary"],
    acceptingNewPatients: true,
    featured: true,
    order: 1,
  },
  {
    slug: "priya-sharma",
    name: "Dr. Priya Sharma",
    credentials: "MD, FRCPC",
    title: "Respirologist",
    serviceSlugs: ["respirology"],
    yearsOfExperience: 12,
    shortBio: "A respirologist dedicated to helping patients breathe easier and live more fully.",
    bio: [
      "Dr. Sharma is a Royal College–certified respirologist with over twelve years of experience in asthma, COPD and interstitial lung disease.",
      "She is passionate about patient education and works closely with family physicians to provide seamless, coordinated care.",
    ],
    focusAreas: ["Asthma", "COPD", "Interstitial lung disease", "Pulmonary function testing"],
    languages: ["English", "Hindi", "Punjabi"],
    education: [
      "MD — University of Toronto",
      "Internal Medicine & Respirology — McGill University",
    ],
    acceptingNewPatients: true,
    featured: true,
    order: 2,
  },
  {
    slug: "jennifer-lee",
    name: "Dr. Jennifer Lee",
    credentials: "MD, FRCPC",
    title: "Child Psychiatrist",
    serviceSlugs: ["child-psychiatry"],
    yearsOfExperience: 10,
    shortBio:
      "A child and adolescent psychiatrist who partners with families to help young people thrive.",
    bio: [
      "Dr. Lee has a decade of experience supporting children and teens with anxiety, mood, attention and developmental concerns.",
      "Her approach is warm, collaborative and family-centred, bringing together parents, schools and family physicians.",
    ],
    focusAreas: ["Anxiety", "ADHD", "Mood disorders", "Family-centred care"],
    languages: ["English", "Mandarin"],
    education: [
      "MD — University of British Columbia",
      "Psychiatry Residency — University of Alberta",
    ],
    acceptingNewPatients: true,
    featured: true,
    order: 3,
  },
  {
    slug: "david-nguyen",
    name: "Dr. David Nguyen",
    credentials: "MD, FRCPC",
    title: "Internist",
    serviceSlugs: ["internal-medicine"],
    yearsOfExperience: 14,
    shortBio: "An internist who brings clarity to complex, multi-system medical conditions.",
    bio: [
      "Dr. Nguyen has fourteen years of experience in general internal medicine, with a focus on complex chronic disease.",
      "He values thorough assessment and clear communication, and co-manages care closely with referring physicians.",
    ],
    focusAreas: [
      "Complex chronic disease",
      "Diabetes",
      "Cardiovascular risk",
      "Pre-operative assessment",
    ],
    languages: ["English", "Vietnamese", "French"],
    education: ["MD — Western University", "Internal Medicine Residency — University of Calgary"],
    acceptingNewPatients: false,
    featured: true,
    order: 4,
  },
];
