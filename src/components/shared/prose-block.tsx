import { cn } from "@/lib/cn";

/** Plain-text paragraphs from content data, with comfortable reading rhythm. */
export function ProseBlock({
  paragraphs,
  className,
}: {
  paragraphs: readonly string[];
  className?: string;
}) {
  return (
    <div
      className={cn("flex max-w-prose flex-col gap-4 text-lead text-muted-foreground", className)}
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
