import { Container } from "@/components/layout/container";
import { BookingLink } from "@/components/shared/booking-link";
import { LogoMark } from "@/components/shared/logo";
import { PhoneLink } from "@/components/shared/phone-link";
import { buttonVariants } from "@/components/ui/button";
import type { CtaBandContent } from "@/types/content";

/** Closing call-to-action panel: book online or call. */
export function CtaBand({ content }: { content: CtaBandContent }) {
  return (
    <section aria-labelledby="cta-band-heading" className="section-y-sm">
      <Container>
        <div className="relative isolate overflow-hidden rounded-2xl bg-inverse-glow px-6 py-12 sm:px-12 lg:px-16 lg:py-14">
          <LogoMark className="pointer-events-none absolute top-1/2 -left-20 -z-10 size-80 -translate-y-1/2 opacity-[0.06]" />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 id="cta-band-heading" className="text-h2 text-inverse-foreground">
                {content.title}
              </h2>
              <p className="mt-3 text-lead text-inverse-muted">{content.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <BookingLink variant="accent" size="lg" label={content.primaryLabel} />
              <PhoneLink
                prefix={content.phoneLabel}
                className={buttonVariants({ variant: "outline-inverse", size: "lg" })}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
