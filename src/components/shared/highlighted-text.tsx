import { cn } from "@/lib/cn";
import { splitHighlight } from "@/lib/format";

export interface HighlightedTextProps {
  text: string;
  highlight?: string;
  highlightClassName?: string;
}

/** Renders `text` with the `highlight` substring emphasised in the accent colour. */
export function HighlightedText({ text, highlight, highlightClassName }: HighlightedTextProps) {
  const [before, match, after] = splitHighlight(text, highlight);
  if (!match) return <>{text}</>;
  return (
    <>
      {before}
      <span className={cn("text-accent-ink italic", highlightClassName)}>{match}</span>
      {after}
    </>
  );
}
