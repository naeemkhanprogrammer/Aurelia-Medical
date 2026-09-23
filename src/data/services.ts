import type { Service } from "@/types/content";

/**
 * Medical services. ⚠️ PLACEHOLDER COPY — to be reviewed/approved by the clinic's physicians.
 * Order controls display; `priority` services are highlighted first.
 */
export const services: readonly Service[] = [
  {
    slug: "family-medicine",
    name: "Family Medicine",
    icon: "family",
    schemaSpecialties: ["PrimaryCare"],
    shortDescription: "Complete primary care for all ages.",
    summary:
      "Comprehensive, continuous primary care for individuals and families — from preventive check-ups to managing chronic conditions.",
    overview: [
      "Our family physicians are your first point of contact for health concerns at every stage of life. We focus on building long-term relationships so your care is consistent, coordinated and personal.",
      "From routine check-ups and immunizations to chronic disease management and mental-health support, we coordinate with our in-house specialists and allied health team so you get the right care, in one place.",
    ],
    conditions: [
      "Preventive care & annual physicals",
      "Chronic disease management (diabetes, hypertension)",
      "Women's and men's health",
      "Well-baby and child visits",
      "Immunizations",
      "Minor procedures",
      "Mental-health support",
      "Care coordination & referrals",
    ],
    whoItsFor: [
      "Individuals and families of all ages",
      "New residents of Red Deer looking for a family doctor",
    ],
    whatToExpect: [
      {
        title: "Register",
        description: "Complete registration through our secure patient platform.",
      },
      {
        title: "First visit",
        description: "A comprehensive intake appointment to understand your history and goals.",
      },
      {
        title: "Ongoing care",
        description:
          "A personalised care plan with follow-ups and specialist coordination when needed.",
      },
    ],
    referralRequired: false,
    priority: true,
    order: 1,
  },
  {
    slug: "respirology",
    name: "Respirology",
    icon: "lungs",
    schemaSpecialties: ["Pulmonary"],
    shortDescription: "Expert care for lung and breathing conditions.",
    summary:
      "Specialist assessment and management of lung and breathing disorders, including asthma, COPD and sleep-related breathing conditions.",
    overview: [
      "Our respirologists diagnose and treat conditions affecting the lungs and airways. We combine thorough assessment with clear explanations, so you understand your condition and your options.",
      "Care plans are developed together with you and your family physician, with an emphasis on improving day-to-day breathing and quality of life.",
    ],
    conditions: [
      "Asthma",
      "Chronic obstructive pulmonary disease (COPD)",
      "Chronic cough",
      "Shortness of breath",
      "Interstitial lung disease",
      "Sleep-related breathing disorders",
      "Pulmonary function assessment",
      "Post-infection lung recovery",
    ],
    whoItsFor: ["Adults referred by a physician or nurse practitioner for breathing concerns"],
    whatToExpect: [
      {
        title: "Referral",
        description: "Your provider sends a referral through our secure referral platform.",
      },
      {
        title: "Consultation",
        description: "A detailed assessment, which may include breathing tests.",
      },
      {
        title: "Care plan",
        description: "A clear treatment plan shared with you and your family physician.",
      },
    ],
    referralRequired: true,
    priority: true,
    order: 2,
  },
  {
    slug: "child-psychiatry",
    name: "Child Psychiatry",
    icon: "brain",
    schemaSpecialties: ["Psychiatric", "Pediatric"],
    shortDescription: "Compassionate mental health care for children & teens.",
    summary:
      "Specialist mental-health assessment and treatment for children and adolescents, delivered with warmth and in partnership with families.",
    overview: [
      "Our child and adolescent psychiatry service offers thoughtful, family-centred assessment and treatment for young people experiencing emotional, behavioural or developmental challenges.",
      "We work closely with parents, caregivers, schools and family physicians to create a supportive plan that helps children and teens thrive.",
    ],
    conditions: [
      "Anxiety",
      "Depression and mood concerns",
      "ADHD",
      "Autism spectrum assessment support",
      "Behavioural challenges",
      "Trauma-related concerns",
      "Sleep difficulties",
      "Family and school adjustment",
    ],
    whoItsFor: [
      "Children and adolescents (up to 18) referred by a physician or nurse practitioner",
    ],
    whatToExpect: [
      {
        title: "Referral",
        description: "Your child's provider submits a referral through our secure platform.",
      },
      {
        title: "Family assessment",
        description: "An unhurried first appointment with your child and family.",
      },
      {
        title: "Collaborative plan",
        description:
          "A plan shared with your family physician and, with consent, your child's school.",
      },
    ],
    referralRequired: true,
    priority: true,
    order: 3,
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    icon: "heart-pulse",
    schemaSpecialties: ["Cardiovascular", "Endocrine", "Renal"],
    shortDescription: "Diagnosis and management of complex conditions.",
    summary:
      "Specialist care for adults with complex, multi-system or hard-to-diagnose medical conditions.",
    overview: [
      "Our internists specialise in the diagnosis and management of complex adult illnesses, particularly when several conditions interact.",
      "We provide comprehensive consultations and ongoing co-management with your family physician.",
    ],
    conditions: [
      "Complex chronic disease",
      "Cardiovascular risk management",
      "Diabetes and metabolic conditions",
      "Kidney and liver conditions",
      "Pre-operative assessment",
      "Unexplained symptoms",
    ],
    whoItsFor: ["Adults referred by a physician or nurse practitioner"],
    whatToExpect: [
      {
        title: "Referral",
        description: "Your provider sends a referral through our secure platform.",
      },
      {
        title: "Consultation",
        description: "A comprehensive review of your history, medications and test results.",
      },
      {
        title: "Co-management",
        description: "Recommendations and follow-up coordinated with your family physician.",
      },
    ],
    referralRequired: true,
    priority: false,
    order: 4,
  },
  {
    slug: "allied-health",
    name: "Allied Health Services",
    icon: "hand-heart",
    schemaSpecialties: ["Physiotherapy", "DietNutrition", "Nursing"],
    shortDescription: "Physiotherapy, nursing, nutrition & more.",
    summary:
      "A multidisciplinary team supporting your physician's care plan — including nursing, physiotherapy, nutrition and counselling.",
    overview: [
      "Our allied health professionals work alongside our physicians to support recovery, prevention and everyday wellbeing.",
      "Services are coordinated within your care plan, so every member of your care team is working toward the same goals.",
    ],
    conditions: [
      "Physiotherapy",
      "Nursing care & education",
      "Nutrition counselling",
      "Mental-health counselling",
      "Chronic disease education",
      "Respiratory therapy",
    ],
    whoItsFor: [
      "Patients of the clinic and community members (some services may require a referral)",
    ],
    whatToExpect: [
      {
        title: "Get connected",
        description: "Your physician recommends the right allied health service for you.",
      },
      {
        title: "Assessment",
        description: "An initial session to understand your needs and goals.",
      },
      { title: "Support", description: "A tailored programme that complements your medical care." },
    ],
    referralRequired: false,
    priority: false,
    order: 5,
  },
];
