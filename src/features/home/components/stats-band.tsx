import { Container } from "@/components/layout/container";
import { ProgressRing } from "@/components/shared/progress-ring";
import { Icon } from "@/components/ui/icon";
import type { Stat } from "@/types/content";

export interface StatsBandProps {
  title: string;
  stats: readonly Stat[];
}

const numberFormatter = new Intl.NumberFormat("en-CA", { maximumFractionDigits: 1 });

/** Key figures. ⚠️ Values are placeholders — gated by `features.stats`. */
export function StatsBand({ title, stats }: StatsBandProps) {
  return (
    <section aria-labelledby="stats-heading" className="section-y-sm">
      <Container>
        <div className="rounded-2xl border border-accent-100 bg-surface-accent px-6 py-10 sm:px-10 lg:py-12">
          <h2 id="stats-heading" className="sr-only">
            {title}
          </h2>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                {/* dt precedes dd in the DOM (valid <dl>); CSS reorders it visually below the ring. */}
                <dt className="order-last mt-3 max-w-[12rem] text-center text-sm font-medium text-muted-foreground">
                  {stat.label}
                </dt>
                <dd>
                  <ProgressRing progress={stat.progress} className="w-36 sm:w-40">
                    <Icon name={stat.icon} className="mb-1 size-5 text-accent-ink" />
                    <span className="font-heading text-h2 leading-none font-semibold text-heading">
                      {numberFormatter.format(stat.value)}
                      {stat.suffix}
                      {stat.unit && (
                        <span className="ml-1 font-sans text-sm font-semibold">{stat.unit}</span>
                      )}
                    </span>
                  </ProgressRing>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
