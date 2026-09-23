"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useEffect, useRef, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { uiStrings } from "@/data/common";
import { cn } from "@/lib/cn";

export interface CarouselProps {
  /** Accessible name for the carousel region. */
  label: string;
  children: ReactNode;
  /** Width of each slide, e.g. "basis-[80%] sm:basis-1/2". */
  itemClassName?: string;
  className?: string;
}

/**
 * Lightweight, dependency-free carousel: native CSS scroll-snap does the heavy
 * lifting (touch, momentum, keyboard scroll); JS only drives the prev/next
 * buttons. Children render on the server and are passed through untouched.
 */
export function Carousel({ label, children, itemClassName, className }: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const tolerance = 4;
      setEdges({
        atStart: track.scrollLeft <= tolerance,
        atEnd: track.scrollLeft + track.clientWidth >= track.scrollWidth - tolerance,
      });
    };

    // ResizeObserver fires once on observe, giving us the initial state.
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, []);

  const scrollByItem = (direction: 1 | -1) => {
    const track = trackRef.current;
    const firstItem = track?.firstElementChild;
    if (!track || !firstItem) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = firstItem.getBoundingClientRect().width + gap;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * step, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const hasOverflow = !(edges.atStart && edges.atEnd);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className={cn("relative", className)}
    >
      <ul
        ref={trackRef}
        // Focusable so keyboard users can scroll slides that contain no links.
        tabIndex={0}
        className={cn(
          "-my-4 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain py-4",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "rounded-xl focus-visible:outline-offset-4",
        )}
      >
        {Children.map(children, (child, index) => (
          <li
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${Children.count(children)}`}
            className={cn("flex shrink-0 snap-start", itemClassName)}
          >
            {child}
          </li>
        ))}
      </ul>

      {hasOverflow && (
        <div className="mt-6 flex justify-end gap-2 lg:pointer-events-none lg:absolute lg:inset-x-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:justify-between">
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => scrollByItem(-1)}
            disabled={edges.atStart}
            aria-label={uiStrings.previous}
            className="shadow-card lg:pointer-events-auto lg:-ml-5"
          >
            <ChevronLeft aria-hidden />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => scrollByItem(1)}
            disabled={edges.atEnd}
            aria-label={uiStrings.next}
            className="shadow-card lg:pointer-events-auto lg:-mr-5"
          >
            <ChevronRight aria-hidden />
          </Button>
        </div>
      )}
    </section>
  );
}
