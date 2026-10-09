"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, type KeyboardEvent, type TouchEvent } from "react";

import { galleryPageContent } from "@/data/pages/gallery";
import { cn } from "@/lib/cn";
import type { GalleryImage } from "@/types/content";

export interface GalleryLightboxProps {
  images: readonly GalleryImage[];
  /** Index of the open image, or `null` when closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const SWIPE_THRESHOLD_PX = 50;

const controlClass =
  "grid size-11 place-items-center rounded-full bg-surface/10 text-inverse-foreground ring-1 ring-inverse-border backdrop-blur transition-colors hover:bg-surface/20";

/**
 * Fullscreen viewer on native <dialog>: focus trap, Escape, inert background and
 * focus restoration come from the platform. Arrow keys + swipe navigate.
 */
export function GalleryLightbox({ images, index, onClose, onNavigate }: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const t = galleryPageContent.lightbox;
  const image = index === null ? undefined : images[index];
  const total = images.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const go = (direction: 1 | -1) => {
    if (index === null || total === 0) return;
    onNavigate((index + direction + total) % total);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") go(1);
    if (event.key === "ArrowLeft") go(-1);
  };

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (event: TouchEvent) => {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start === null || end === undefined) return;
    const delta = end - start;
    if (Math.abs(delta) > SWIPE_THRESHOLD_PX) go(delta < 0 ? 1 : -1);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={t.label}
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={cn(
        "fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-primary-950 p-0 text-inverse-foreground",
        "opacity-0 transition-[opacity,overlay,display] transition-discrete duration-300 open:opacity-100 starting:open:opacity-0",
        "backdrop:bg-transparent",
      )}
    >
      {image && (
        <div
          className="flex h-full flex-col"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <div className="flex items-center justify-between gap-4 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-2 sm:px-6">
            <p className="text-sm font-medium text-inverse-muted tabular-nums" aria-live="polite">
              {t.counter((index ?? 0) + 1, total)}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.close}
              className={controlClass}
              autoFocus
            >
              <X aria-hidden className="size-5" />
            </button>
          </div>

          <figure
            className="relative flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-4 pb-6 sm:px-20"
            onClick={(event) => {
              if (event.target === event.currentTarget) onClose();
            }}
          >
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="100vw"
              className="max-h-[calc(100dvh-11rem)] w-auto max-w-full rounded-lg object-contain shadow-floating"
            />
            <figcaption className="text-center font-heading text-h4 font-semibold">
              {image.caption}
            </figcaption>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={t.previous}
                  className={cn(
                    controlClass,
                    "absolute top-1/2 left-3 hidden -translate-y-1/2 sm:grid",
                  )}
                >
                  <ChevronLeft aria-hidden className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={t.next}
                  className={cn(
                    controlClass,
                    "absolute top-1/2 right-3 hidden -translate-y-1/2 sm:grid",
                  )}
                >
                  <ChevronRight aria-hidden className="size-6" />
                </button>
              </>
            )}
          </figure>

          {/* Mobile: thumb-reachable controls at the bottom (swipe also works). */}
          {total > 1 && (
            <div className="flex justify-center gap-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:hidden">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t.previous}
                className={controlClass}
              >
                <ChevronLeft aria-hidden className="size-6" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t.next}
                className={controlClass}
              >
                <ChevronRight aria-hidden className="size-6" />
              </button>
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
