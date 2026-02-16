"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AboutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("About page error:", error);
  }, [error]);

  return (
    <main className="container py-28 md:py-40">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-sentient">Something went wrong</h1>
        <p className="mt-4 font-mono text-foreground/70">
          We couldn’t load this page. Please try again or head back to the home page.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={reset}
            className="border border-white/30 px-6 py-3 font-mono uppercase text-foreground hover:bg-white/10 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-primary px-6 py-3 font-mono uppercase text-primary hover:bg-primary/10 transition-colors inline-block"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
