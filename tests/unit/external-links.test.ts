import { describe, expect, it } from "vitest";

import { externalLinks } from "@/config/external-links";
import { buildExternalUrl } from "@/lib/external-links";

describe("buildExternalUrl", () => {
  it("returns the configured base URL when no values are given", () => {
    expect(buildExternalUrl("booking")).toBe(new URL(externalLinks.booking.url).toString());
  });

  it("maps supported values onto the platform's query keys", () => {
    const url = new URL(
      buildExternalUrl("booking", { service: "respirology", visitType: "virtual" }),
    );
    expect(url.searchParams.get(externalLinks.booking.params.service)).toBe("respirology");
    expect(url.searchParams.get(externalLinks.booking.params.visitType)).toBe("virtual");
  });

  it("skips empty values", () => {
    const url = new URL(buildExternalUrl("booking", { service: "", visitType: undefined }));
    expect([...url.searchParams.keys()]).toHaveLength(0);
  });

  it("every external link is a valid https URL", () => {
    for (const link of Object.values(externalLinks)) {
      expect(new URL(link.url).protocol).toBe("https:");
    }
  });
});
