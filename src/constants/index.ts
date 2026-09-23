export * from "./icons";

/** Where external (third-party) links open. Centralised so behaviour is consistent site-wide. */
export const EXTERNAL_LINK_TARGET = "_blank" as const;
export const EXTERNAL_LINK_REL = "noopener noreferrer" as const;

/** Breakpoints mirrored from Tailwind defaults — used only for `next/image` `sizes` hints. */
export const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280 } as const;
