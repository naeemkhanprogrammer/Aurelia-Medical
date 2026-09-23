"use client";

import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export interface RevealProps {
  children: ReactNode;
  /** Seconds. Use small staggers (0.05–0.1) for sibling cards. */
  delay?: number;
  className?: string;
}

/**
 * Subtle fade-up when the element scrolls into view. Uses LazyMotion + `m` so
 * only the DOM animation feature set ships (~15 kB instead of the full bundle).
 * Respects `prefers-reduced-motion`.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        data-reveal
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
