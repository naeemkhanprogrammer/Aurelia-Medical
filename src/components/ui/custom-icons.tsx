import type { LucideProps } from "lucide-react";

/**
 * Icons not available in lucide-react, drawn on the same 24×24 grid with the
 * same stroke conventions so they sit seamlessly alongside lucide icons.
 */
function IconBase({ size = 24, strokeWidth = 2, children, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function LungsIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3v8" />
      <path d="M12 11l-2.5 2.5" />
      <path d="M12 11l2.5 2.5" />
      <path d="M8.5 6.5C6 7.5 3.5 11 3.5 16c0 2.5 1 4 3 4 2.5 0 3.5-1.5 3.5-4V9.5c0-1.5-.5-3-1.5-3Z" />
      <path d="M15.5 6.5C18 7.5 20.5 11 20.5 16c0 2.5-1 4-3 4-2.5 0-3.5-1.5-3.5-4V9.5c0-1.5.5-3 1.5-3Z" />
    </IconBase>
  );
}

export function FamilyIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <circle cx="7" cy="5" r="2" />
      <circle cx="17" cy="5" r="2" />
      <circle cx="12" cy="12" r="1.75" />
      <path d="M4 20v-6.5A2.5 2.5 0 0 1 6.5 11h1A2.5 2.5 0 0 1 9 12" />
      <path d="M20 20v-6.5a2.5 2.5 0 0 0-2.5-2.5h-1A2.5 2.5 0 0 0 15 12" />
      <path d="M9.5 20v-2.5a2.5 2.5 0 0 1 5 0V20" />
    </IconBase>
  );
}
