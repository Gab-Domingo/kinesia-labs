// @ts-nocheck
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignalViz } from "@/components/signal-viz";
import Reveal from "@/components/ux/Reveal";

export function SignalIntelligenceSection() {
  return (
    <section className="container py-20 md:py-32">
      <div className="rounded-xl bg-white text-black p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Left: Visualization placeholder */}
          <Reveal>
            <div>
              <SignalViz />
            </div>
          </Reveal>

          {/* Right: Copy and steps */}
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient">Signal Intelligence</h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="mt-4 font-mono text-black/70 max-w-2xl">
                Kinesia’s AI decodes EMG signals in real time to understand human intent for seamless wheelchair control.
              </p>
            </Reveal>

            <div className="mt-8 space-y-6">
              <Reveal>
                <div className="border rounded-lg p-5">
                  <h3 className="font-sentient text-lg">Signal Acquisition</h3>
                  <p className="mt-2 text-black/70">High-fidelity EMG capture from targeted muscle groups.</p>
                </div>
              </Reveal>
              <Reveal delayMs={60}>
                <div className="border rounded-lg p-5">
                  <h3 className="font-sentient text-lg">Filtering & Denoising</h3>
                  <p className="mt-2 text-black/70">Artifact removal and noise suppression to maximize SNR.</p>
                </div>
              </Reveal>
              <Reveal delayMs={120}>
                <div className="border rounded-lg p-5">
                  <h3 className="font-sentient text-lg">AI Inference</h3>
                  <p className="mt-2 text-black/70">Modeling muscle activation patterns to infer control intent.</p>
                </div>
              </Reveal>
              <Reveal delayMs={180}>
                <div className="border rounded-lg p-5">
                  <h3 className="font-sentient text-lg">Hardware Control</h3>
                  <p className="mt-2 text-black/70">Low-latency output for smooth and stable wheelchair actuation.</p>
                </div>
              </Reveal>
            </div>

            <Link href="/research" className="contents">
              <Reveal delayMs={120}>
                <Button className="mt-10">Explore the Tech</Button>
              </Reveal>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


