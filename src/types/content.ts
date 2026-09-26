import type { CtaLink, IconName, ImageAsset, InternalLink, SectionIntro } from "./common";

/* ── Services ─────────────────────────────────────────────────────────────── */

/** schema.org MedicalSpecialty enumeration members used for structured data. */
export type SchemaMedicalSpecialty =
  | "PrimaryCare"
  | "Pulmonary"
  | "RespiratoryTherapy"
  | "Psychiatric"
  | "Pediatric"
  | "Cardiovascular"
  | "Endocrine"
  | "Renal"
  | "Physiotherapy"
  | "DietNutrition"
  | "Nursing"
  | "CommunityHealth";

export interface ServiceStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  icon: IconName;
  /** schema.org specialties for JSON-LD (SEO). */
  schemaSpecialties: readonly SchemaMedicalSpecialty[];
  /** One line for cards. */
  shortDescription: string;
  /** 1–2 sentences for listings & meta description. */
  summary: string;
  overview: readonly string[];
  conditions: readonly string[];
  whoItsFor: readonly string[];
  whatToExpect: readonly ServiceStep[];
  /** Shows a "Referral required" notice and links to referral info. */
  referralRequired: boolean;
  /** Priority services are highlighted first. */
  priority: boolean;
  order: number;
  image?: ImageAsset;
}

/* ── Doctors ──────────────────────────────────────────────────────────────── */

export interface Doctor {
  slug: string;
  name: string;
  /** Post-nominal letters, e.g. "MD, CCFP" */
  credentials: string;
  title: string;
  /** Slugs of services this doctor practises in. */
  serviceSlugs: readonly string[];
  yearsOfExperience: number;
  shortBio: string;
  bio: readonly string[];
  focusAreas: readonly string[];
  languages: readonly string[];
  education: readonly string[];
  acceptingNewPatients: boolean;
  photo?: ImageAsset;
  featured: boolean;
  order: number;
}

/* ── Testimonials ─────────────────────────────────────────────────────────── */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

/* ── Home page blocks ─────────────────────────────────────────────────────── */

export interface Stat {
  id: string;
  icon: IconName;
  value: number;
  /** Rendered after the value, e.g. "%", "+", "k+" */
  suffix?: string;
  /** Smaller unit shown beside the value, e.g. "Days" */
  unit?: string;
  label: string;
  /** 0–100, drives the progress ring. */
  progress: number;
}

export interface HighlightItem {
  icon: IconName;
  title: string;
  description: string;
  link: InternalLink;
}

export interface TrustPoint {
  icon: IconName;
  label: string;
}

export interface HeroContent {
  titleLines: readonly string[];
  highlight: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCta: InternalLink;
  trustPoints: readonly TrustPoint[];
  image?: ImageAsset;
  /** Floating cards shown on the decorative hero visual when no photo is provided. */
  visualBadges: readonly { icon: IconName; title: string; caption: string }[];
}

export interface QuickBookingContent {
  title: string;
  serviceLabel: string;
  servicePlaceholder: string;
  visitTypeLabel: string;
  visitTypes: readonly { value: string; label: string }[];
  submitLabel: string;
  assurances: readonly string[];
  privacyNote: string;
}

export interface CtaBandContent {
  title: string;
  description: string;
  primaryLabel: string;
  phoneLabel: string;
}

export interface HomeContent {
  hero: HeroContent;
  quickBooking: QuickBookingContent;
  services: SectionIntro;
  doctors: SectionIntro;
  resources: SectionIntro & { items: readonly HighlightItem[] };
  testimonials: SectionIntro;
  stats: { title: string; items: readonly Stat[] };
  ctaBand: CtaBandContent;
}

/* ── Generic content blocks ───────────────────────────────────────────────── */

/** Icon + title + description with no link (values, benefits, highlights). */
export interface InfoItem {
  icon: IconName;
  title: string;
  description: string;
}

/* ── FAQs ─────────────────────────────────────────────────────────────────── */

export interface FaqItem {
  id: string;
  question: string;
  /** Plain-text paragraphs. */
  answer: readonly string[];
}

export interface FaqCategory {
  id: string;
  title: string;
  items: readonly FaqItem[];
}

/* ── Careers ──────────────────────────────────────────────────────────────── */

export type EmploymentType = "Full-time" | "Part-time" | "Casual" | "Contract" | "Locum";

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  employmentType: EmploymentType;
  location: string;
  summary: string;
  responsibilities: readonly string[];
  requirements: readonly string[];
}

/* ── Patient resources ────────────────────────────────────────────────────── */

export interface ResourceDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  /** Path under /public (e.g. /documents/intake-form.pdf). Omit until the file is supplied. */
  file?: { href: string; format: "PDF" | "DOCX"; sizeLabel: string };
}

export interface ExternalResource {
  title: string;
  description: string;
  href: string;
  organization: string;
}

/* ── Insurance ────────────────────────────────────────────────────────────── */

export interface FeeItem {
  service: string;
  /** Display string so the clinic can write "$25", "From $40" or "Varies". */
  fee: string;
}

/* ── Legal ────────────────────────────────────────────────────────────────── */

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  list?: readonly string[];
}

/* ── Progressive ("coming soon") pages ────────────────────────────────────── */

export interface ProgressivePageContent {
  seo: { title: string; description: string };
  /** `false` → page is marked noindex and left out of the sitemap until real content ships. */
  published: boolean;
  hero: { eyebrow: string; title: string; highlight?: string; description: string };
  statusLabel: string;
  intro: readonly string[];
  highlights: readonly InfoItem[];
  actions: readonly CtaLink[];
  noticeTitle: string;
  notice: string;
}
