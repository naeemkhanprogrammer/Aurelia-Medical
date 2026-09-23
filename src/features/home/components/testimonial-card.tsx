import { Quote, Star } from "lucide-react";

import { uiStrings } from "@/data/common";
import { getInitials } from "@/lib/format";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex w-full flex-col rounded-xl border border-border bg-surface p-6 shadow-card">
      <Quote aria-hidden className="size-8 fill-accent-100 text-accent" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden
          className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-heading text-sm font-semibold text-accent-soft"
        >
          {getInitials(testimonial.author)}
        </span>
        <span className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-heading">{testimonial.author}</span>
          {testimonial.context && (
            <span className="text-xs text-muted-foreground">{testimonial.context}</span>
          )}
        </span>
        <span
          className="ml-auto flex gap-0.5"
          role="img"
          aria-label={uiStrings.ratingLabel(testimonial.rating)}
        >
          {Array.from({ length: testimonial.rating }, (_, index) => (
            <Star key={index} aria-hidden className="size-3.5 fill-accent text-accent" />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
