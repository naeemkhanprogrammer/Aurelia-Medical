import type { Testimonial } from "@/types/content";

/**
 * ⚠️ PLACEHOLDER testimonials for layout only. Rendering is gated by
 * `features.testimonials` — CPSA advertising standards restrict physician
 * testimonials; confirm with the clinic before enabling in production.
 */
export const testimonials: readonly Testimonial[] = [
  {
    id: "t1",
    quote:
      "Aurelia Medical Group has completely changed my experience with healthcare. The doctors truly listen and care.",
    author: "Sarah T.",
    context: "Family Medicine patient",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "The team is professional, kind and welcoming. The clinic is beautiful and I always feel in good hands.",
    author: "Mark R.",
    context: "Respirology patient",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Exceptional care for my child. The child psychiatry team is incredible and so supportive of our family.",
    author: "Emily L.",
    context: "Parent",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Everything was coordinated for me — from my family doctor to my specialist. It made a stressful time much easier.",
    author: "James P.",
    context: "Internal Medicine patient",
    rating: 5,
  },
];
