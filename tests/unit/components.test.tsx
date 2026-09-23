import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BookingLink } from "@/components/shared/booking-link";
import { ExternalLink } from "@/components/shared/external-link";
import { Accordion } from "@/components/ui/accordion";
import { externalLinks } from "@/config/external-links";

describe("ExternalLink", () => {
  it("opens in a new tab with a safe rel and announces it", () => {
    render(<ExternalLink href="https://example.com">Go</ExternalLink>);
    const link = screen.getByRole("link", { name: /go.*new tab/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});

describe("BookingLink", () => {
  it("links to the configured booking platform with the pre-selected service", () => {
    render(<BookingLink serviceSlug="respirology" />);
    const href = screen.getByRole("link").getAttribute("href") ?? "";
    expect(href.startsWith(externalLinks.booking.url)).toBe(true);
    expect(href).toContain("service=respirology");
  });
});

describe("Accordion", () => {
  it("renders native disclosure widgets", () => {
    render(<Accordion items={[{ id: "a", title: "Question?", content: "Answer." }]} />);
    expect(screen.getByText("Question?").tagName).toBe("SUMMARY");
  });
});
