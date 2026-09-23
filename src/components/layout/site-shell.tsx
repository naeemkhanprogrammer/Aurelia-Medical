import type { ReactNode } from "react";

import { Footer } from "./footer";
import { Header } from "./header";
import { MAIN_CONTENT_ID, SkipLink } from "./skip-link";

/** Public-site chrome: skip link, header, main landmark, footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id={MAIN_CONTENT_ID} tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
