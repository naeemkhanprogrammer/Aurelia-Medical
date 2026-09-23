import type { IconName, ImageAsset, InternalLink, SectionIntro } from "./common";

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
