/**
 * Brand colours for contexts that cannot read CSS variables (browser theme-color
 * meta, generated OG images, favicons). ⚠️ Keep in sync with the brand
 * primitives in src/styles/tokens.css — those remain the source of truth for UI.
 */
export const themeMeta = {
  primary: "#0B2346",
  accent: "#C9A14A",
  accentSoft: "#E6D3A3",
  canvas: "#F8F7F3",
} as const;
