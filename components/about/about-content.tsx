"use client";

import { useEffect, useState } from "react";
import { AboutHero } from "@/components/about/about-hero";
import { ResearchPhilosophy } from "@/components/about/research-philosophy";
import { TeamSection } from "@/components/about/team-section";
import { Timeline } from "@/components/about/timeline";
import { FAQSection } from "@/components/about/faq-section";

/**
 * Renders About page sections only after client mount.
 * Avoids hydration/SSR issues with ModelViewer (Three.js), Lottie, and ChromaGrid (GSAP).
 */
export function AboutContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main>
        <div className="container pt-28 md:pt-40 pb-16 md:pb-24 min-h-[60vh] flex items-center justify-center" aria-busy="true" aria-label="Loading">
          <span className="font-mono text-foreground/50">Loading…</span>
        </div>
      </main>
    );
  }

  return (
    <main>
      <AboutHero />
      <ResearchPhilosophy />
      <TeamSection />
      <Timeline />
      <FAQSection />
    </main>
  );
}
