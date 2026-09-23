import type { SVGProps } from "react";

import type { SocialPlatform } from "@/types/navigation";

/* Brand glyphs (lucide v1 no longer ships brand icons). Simplified, monochrome. */
const paths: Record<SocialPlatform, string> = {
  facebook:
    "M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6C16.7 2.6 15.7 2.5 14.6 2.5c-2.4 0-4 1.4-4 4.1v1.9H8v3.2h2.6v8.3H14v-8.3h2.6l.4-3.2H14Z",
  instagram:
    "M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.9-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 4.2c2.5 0 2.8 0 3.8.1 2.5.1 3.7 1.3 3.8 3.8.1 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.1 2.5-1.3 3.7-3.8 3.8-1 .1-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.5-.1-3.7-1.3-3.8-3.8-.1-1-.1-1.3-.1-3.8s0-2.8.1-3.8C4.5 5.6 5.7 4.4 8.2 4.3c1-.1 1.3-.1 3.8-.1Zm0-1.7c-2.6 0-2.9 0-3.9.1-3.4.2-5.3 2-5.5 5.5-.1 1-.1 1.3-.1 3.9s0 2.9.1 3.9c.2 3.4 2 5.3 5.5 5.5 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c3.4-.2 5.3-2 5.5-5.5.1-1 .1-1.3.1-3.9s0-2.9-.1-3.9c-.2-3.4-2-5.3-5.5-5.5-1-.1-1.3-.1-3.9-.1Z",
  linkedin:
    "M6.9 8.8H3.6V20h3.3V8.8ZM5.2 3.5a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.4 13.6c0-3-.6-5.1-4.1-5.1-1.7 0-2.8.9-3.2 1.8h-.1V8.8H9.9V20h3.3v-5.5c0-1.5.3-2.9 2.1-2.9s1.8 1.7 1.8 3V20h3.3v-6.4Z",
};

export function SocialIcon({
  platform,
  ...props
}: { platform: SocialPlatform } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d={paths[platform]} />
    </svg>
  );
}
