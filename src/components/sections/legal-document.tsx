import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { LegalSection } from "@/types/content";

export interface LegalDocumentProps {
  sections: readonly LegalSection[];
  tocLabel: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
}

const dateFormatter = new Intl.DateTimeFormat("en-CA", { dateStyle: "long", timeZone: "UTC" });

/** Long-form legal page: sticky table of contents + readable sections. */
export function LegalDocument({
  sections,
  tocLabel,
  lastUpdatedLabel,
  lastUpdated,
}: LegalDocumentProps) {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[16rem_1fr]">
        <nav aria-label={tocLabel} className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {tocLabel}
          </p>
          <ol className="mt-4 flex flex-col gap-2 border-l border-border text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="-ml-px block border-l border-transparent py-1 pl-4 text-muted-foreground transition-colors hover:border-accent hover:text-heading"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="max-w-prose">
          <p className="text-sm text-muted-foreground">
            {lastUpdatedLabel}:{" "}
            <time dateTime={lastUpdated}>{dateFormatter.format(new Date(lastUpdated))}</time>
          </p>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="mt-10 scroll-mt-28"
            >
              <h2 id={`${section.id}-heading`} className="text-h3">
                {section.title}
              </h2>
              <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-4 list-disc pl-6 text-muted-foreground marker:text-accent-ink">
                  {section.list.map((item) => (
                    <li key={item} className="mt-1.5">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </Container>
    </Section>
  );
}
