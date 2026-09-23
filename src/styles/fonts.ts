import { Cormorant_Garamond, Montserrat } from "next/font/google";

/**
 * Brand typography (Aurelia brand guide):
 *  - Headlines / logo: Cormorant Garamond SemiBold
 *  - Body / UI:        Montserrat Medium
 *
 * next/font self-hosts the files at build time — no runtime requests to Google,
 * which keeps visitor IPs private (see docs/08-accessibility.md & docs/00-overview.md).
 */
export const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const fontVariables = `${fontHeading.variable} ${fontSans.variable}`;
