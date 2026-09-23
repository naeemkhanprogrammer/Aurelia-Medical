"use client";

/** Last-resort boundary (root layout failed). Keep dependency-free. */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-CA">
      <body
        style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem", textAlign: "center" }}
      >
        <h1>Something went wrong</h1>
        <p>Please try again, or contact the clinic by phone.</p>
        <button
          type="button"
          onClick={reset}
          style={{ marginTop: "1.5rem", padding: "0.75rem 1.5rem" }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
