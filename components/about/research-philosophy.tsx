// @ts-nocheck
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ux/Reveal";
import { IntentDecodingDiagram } from "./intent-decoding-diagram";

export function ResearchPhilosophy() {
  return (
    <section className="container py-16 md:py-24 relative">
      {/* subtle research backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[conic-gradient(from_200deg_at_70%_30%,rgba(235,184,0,0.10),transparent_60%)]" />
      </div>

      <div className="grid gap-10 md:gap-12 md:grid-cols-2 items-start">
        {/* Left: Diagram */}
        <Reveal>
          <div className="md:sticky md:top-28">
            <IntentDecodingDiagram compact />
          </div>
        </Reveal>

        {/* Right: Copy and principles */}
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-sentient">Research Philosophy</h2>
          </Reveal>
          <Reveal delayMs={70}>
            <p className="mt-4 font-mono text-foreground/70">
              We bridge biology and computation to translate muscle activity into reliable control.
              Our work spans EMG acquisition, adaptive filtering, and real‑time intent decoding for
              low‑latency assistive systems that perform beyond the lab.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            <Reveal>
              <div className="border border-white/10 rounded-lg p-5 bg-white/5 transition-transform duration-200 hover:-translate-y-0.5">
                <h3 className="font-sentient text-lg">Adaptive Filtering</h3>
                <p className="mt-2 font-mono text-foreground/70">Artifact suppression and dynamic denoising to maximize SNR.</p>
              </div>
            </Reveal>
            <Reveal delayMs={60}>
              <div className="border border-white/10 rounded-lg p-5 bg-white/5 transition-transform duration-200 hover:-translate-y-0.5">
                <h3 className="font-sentient text-lg">Real‑Time Inference</h3>
                <p className="mt-2 font-mono text-foreground/70">Low‑latency intent decoding optimized for assistive control loops.</p>
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <div className="border border-white/10 rounded-lg p-5 bg-white/5 transition-transform duration-200 hover:-translate-y-0.5">
                <h3 className="font-sentient text-lg">Robust in the Wild</h3>
                <p className="mt-2 font-mono text-foreground/70">Designed for noisy, ambulatory use beyond the lab.</p>
              </div>
            </Reveal>
          </div>

          <Link href="/research" className="contents">
            <Reveal delayMs={160}>
              <Button className="mt-8">Read the Approach</Button>
            </Reveal>
          </Link>
        </div>
      </div>
    </section>
  );
}


