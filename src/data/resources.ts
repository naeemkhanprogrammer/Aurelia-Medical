import type { ExternalResource, ResourceDocument } from "@/types/content";

/**
 * Downloadable documents. ⚠️ Files not yet supplied — add a `file` entry (and the
 * PDF under /public/documents) to make each one downloadable.
 */
export const resourceDocuments: readonly ResourceDocument[] = [
  {
    id: "new-patient-guide",
    title: "New patient guide",
    description: "What to expect at your first visit and how our clinic works.",
    category: "Getting started",
  },
  {
    id: "medical-history-form",
    title: "Medical history form",
    description: "Complete before your first family medicine appointment.",
    category: "Forms",
  },
  {
    id: "records-release",
    title: "Records release authorization",
    description: "Request a transfer of your medical records to or from Aurelia.",
    category: "Forms",
  },
  {
    id: "child-psychiatry-intake",
    title: "Child psychiatry parent questionnaire",
    description: "Helps our team prepare for your child's first assessment.",
    category: "Forms",
  },
  {
    id: "asthma-action-plan",
    title: "Asthma action plan",
    description: "A printable plan to manage asthma day to day.",
    category: "Patient education",
  },
];

/** Trusted public health resources (⚠️ verify URLs with the clinic before launch). */
export const externalResources: readonly ExternalResource[] = [
  {
    title: "Health Link 811",
    description: "24/7 nurse advice and health information for Albertans.",
    href: "https://www.albertahealthservices.ca/",
    organization: "Alberta Health Services",
  },
  {
    title: "MyHealth Records",
    description: "View your lab results, immunizations and medications online.",
    href: "https://myhealth.alberta.ca/",
    organization: "Government of Alberta",
  },
  {
    title: "Kids Help Phone",
    description: "24/7 support for young people — call 1-800-668-6868 or text CONNECT to 686868.",
    href: "https://kidshelpphone.ca/",
    organization: "Kids Help Phone",
  },
  {
    title: "9-8-8 Suicide Crisis Helpline",
    description: "Call or text 9-8-8, any time, for mental-health crisis support.",
    href: "https://988.ca/",
    organization: "9-8-8",
  },
];
