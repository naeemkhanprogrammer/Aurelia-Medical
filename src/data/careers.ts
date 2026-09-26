import type { CareerPosition } from "@/types/content";

/** ⚠️ Placeholder openings for layout only. Applications go to the external careers platform. */
export const careerPositions: readonly CareerPosition[] = [
  {
    id: "family-physician",
    title: "Family Physician",
    department: "Family Medicine",
    employmentType: "Full-time",
    location: "Red Deer, AB",
    summary:
      "Join a collaborative, multidisciplinary practice with a growing patient panel and full allied-health support.",
    responsibilities: [
      "Provide comprehensive primary care to patients of all ages",
      "Collaborate with in-house specialists",
      "Participate in quality-improvement initiatives",
    ],
    requirements: [
      "Eligible for licensure with CPSA",
      "CCFP or equivalent",
      "Commitment to patient-centred care",
    ],
  },
  {
    id: "registered-nurse",
    title: "Registered Nurse",
    department: "Nursing",
    employmentType: "Full-time",
    location: "Red Deer, AB",
    summary:
      "Support physicians across specialties with patient education, chronic disease management and procedures.",
    responsibilities: [
      "Patient assessment and education",
      "Chronic disease management programs",
      "Clinical procedures and immunizations",
    ],
    requirements: [
      "Active registration with CRNA",
      "2+ years of clinical experience",
      "Excellent communication skills",
    ],
  },
  {
    id: "medical-office-assistant",
    title: "Medical Office Assistant",
    department: "Patient Services",
    employmentType: "Part-time",
    location: "Red Deer, AB",
    summary:
      "Be the welcoming first point of contact for patients, managing bookings, referrals and the front desk.",
    responsibilities: [
      "Reception and scheduling",
      "Referral and records management",
      "Billing support",
    ],
    requirements: [
      "MOA certificate or equivalent experience",
      "EMR experience an asset",
      "Warm, professional manner",
    ],
  },
];
