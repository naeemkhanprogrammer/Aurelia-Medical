import "server-only";

import { env } from "./env";

/**
 * Feature flags — switch sections on/off without code changes.
 * Override per environment with env vars (see .env.example / Vercel project settings).
 */
export const features = {
  /**
   * Patient testimonials. ⚠️ CPSA (College of Physicians & Surgeons of Alberta) advertising
   * standards restrict testimonials — confirm with the clinic before enabling in production.
   */
  testimonials: env.readFlag(process.env.FEATURE_TESTIMONIALS, true),
  /** Home-page statistics band. Figures are placeholders until the clinic supplies verified numbers. */
  stats: env.readFlag(process.env.FEATURE_STATS, true),
  /** Google Maps iframe on the Contact page (third-party; sets cookies). */
  mapEmbed: env.readFlag(process.env.FEATURE_MAP_EMBED, true),
} as const;

export type FeatureFlag = keyof typeof features;
