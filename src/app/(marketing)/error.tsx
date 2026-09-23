"use client";

import { RotateCcw } from "lucide-react";
import { useEffect } from "react";

import { Container } from "@/components/layout/container";
import { PhoneLink } from "@/components/shared/phone-link";
import { Button, buttonVariants } from "@/components/ui/button";
import { uiStrings } from "@/data/common";

export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hook for a future error-reporting service (must be privacy-reviewed first).
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center section-y text-center">
      <h1 className="text-h2">{uiStrings.error.title}</h1>
      <p className="mt-4 max-w-md text-muted-foreground">{uiStrings.error.description}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button onClick={reset}>
          <RotateCcw aria-hidden />
          {uiStrings.error.retry}
        </Button>
        <PhoneLink className={buttonVariants({ variant: "outline" })} />
      </div>
    </Container>
  );
}
