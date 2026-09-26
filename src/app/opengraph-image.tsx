import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { themeMeta } from "@/config/theme";

/** Default social-share image (1200×630), generated once at build time. */
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 64,
        padding: "0 96px",
        background: `radial-gradient(900px 500px at 85% 0%, ${themeMeta.accent}33, transparent 60%), ${themeMeta.primary}`,
        color: themeMeta.canvas,
      }}
    >
      <svg width="220" height="220" viewBox="0 0 64 64" fill="none">
        <path
          d="M13 40A21 21 0 1 1 51 40"
          stroke={themeMeta.accent}
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <path d="M32 13 45.5 50H41l-9-25.5L23 50h-4.5L32 13Z" fill={themeMeta.accent} />
        <path
          d="M15 50h11M38 50h11"
          stroke={themeMeta.accent}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 38h17.5l2.5-5 2.5 10 3-14 2.5 12 2-3h20"
          stroke={themeMeta.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, letterSpacing: 10, fontWeight: 600 }}>AURELIA</div>
        <div style={{ fontSize: 26, letterSpacing: 12, color: themeMeta.accentSoft, marginTop: 8 }}>
          MEDICAL GROUP
        </div>
        <div style={{ fontSize: 30, marginTop: 40, color: themeMeta.canvas, opacity: 0.85 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 24, marginTop: 12, color: themeMeta.accentSoft }}>
          Red Deer, Alberta
        </div>
      </div>
    </div>,
    size,
  );
}
