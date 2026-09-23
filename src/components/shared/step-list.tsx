import { cn } from "@/lib/cn";

export interface Step {
  title: string;
  description: string;
}

/** Numbered process steps ("What to expect", "How booking works"). */
export function StepList({ steps, className }: { steps: readonly Step[]; className?: string }) {
  return (
    <ol className={cn("grid gap-4 md:grid-cols-3", className)}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative rounded-xl border border-border bg-surface p-6 shadow-card"
        >
          <span
            aria-hidden
            className="grid size-11 place-items-center rounded-full bg-primary font-heading text-h4 font-semibold text-accent-soft"
          >
            {index + 1}
          </span>
          <h3 className="mt-5 font-sans text-base font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
