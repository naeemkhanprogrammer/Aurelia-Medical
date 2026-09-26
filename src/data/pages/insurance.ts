import type { FeeItem } from "@/types/content";

/** ⚠️ Placeholder fees & wording — must be confirmed by the clinic. */
export const insurancePageContent = {
  seo: {
    title: "Insurance & Billing",
    description:
      "Alberta Health Care coverage, uninsured services, fees and billing information for patients of Aurelia Medical Group in Red Deer.",
  },
  hero: {
    eyebrow: "Insurance & Billing",
    title: "Clear, simple billing",
    highlight: "simple",
    description:
      "Most physician services are covered by Alberta Health Care. Here's what's covered, what isn't, and what to bring.",
  },
  covered: {
    eyebrow: "Covered services",
    title: "Alberta Health Care Insurance Plan (AHCIP)",
    paragraphs: [
      "Medically necessary physician and specialist services are covered by AHCIP for Alberta residents with a valid Alberta Personal Health Card.",
      "Please bring your health card to every visit and let us know if your address or coverage changes.",
    ],
  },
  outOfProvince: {
    title: "Visiting from another province?",
    description:
      "Most provincial health plans are accepted through reciprocal billing (Québec excluded). Please bring your provincial health card. Visitors without coverage are billed privately.",
  },
  uninsured: {
    title: "Uninsured services",
    description:
      "The following services are not covered by AHCIP. Some may be reimbursed by private or employer insurance — check with your provider.",
    serviceHeader: "Service",
    feeHeader: "Fee",
    items: [
      { service: "Sick notes & return-to-work notes", fee: "TBC" },
      { service: "Insurance, employer & school forms", fee: "TBC" },
      { service: "Driver's medical examination", fee: "TBC" },
      { service: "Transfer of medical records", fee: "TBC" },
      { service: "Missed appointment (without 24 hours' notice)", fee: "TBC" },
    ] satisfies FeeItem[],
    footnote:
      "Fees follow the Alberta Medical Association's recommended schedule where applicable.",
  },
  bring: {
    title: "What to bring",
    items: [
      "Alberta Personal Health Card (or provincial health card)",
      "Government-issued photo ID",
      "List of current medications and allergies",
      "Private or employer insurance details (for uninsured services)",
    ],
  },
  payment: {
    title: "Payment methods",
    description: "Debit, Visa and Mastercard are accepted for uninsured services.",
  },
  questions: {
    title: "Billing questions?",
    description: "Our billing team can help with coverage, receipts and fees.",
  },
} as const;
