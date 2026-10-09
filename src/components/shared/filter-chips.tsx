"use client";

import { cn } from "@/lib/cn";

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterChipsProps {
  options: readonly FilterOption[];
  value: string;
  onChange: (value: string) => void;
  /** Accessible name for the group. */
  label: string;
  className?: string;
}

/** Single-select toggle chips (`aria-pressed`) — used by the doctor directory and gallery. */
export function FilterChips({ options, value, onChange, label, className }: FilterChipsProps) {
  return (
    <div role="group" aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => {
        const pressed = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={pressed}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              pressed
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border-strong bg-surface text-muted-foreground hover:border-primary hover:text-heading",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
