// @ts-nocheck
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignalViz } from "@/components/signal-viz";

export function SignalIntelligenceSection() {
  return (
    <section className="container py-20 md:py-32">
      <div className="rounded-xl bg-white text-black p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Left: Visualization placeholder */}
          <div>
            <SignalViz />
          </div>

          {/* Right: Copy and steps */}
          <div>
            <h2 className="text-3xl md:text-4xl font-sentient">Signal Intelligence</h2>
            <p className="mt-4 font-mono text-black/70 max-w-2xl">
              Kinesia’s AI decodes EMG signals in real time to understand human intent for seamless wheelchair control.
            </p>

            <div className="mt-8 space-y-6">
              <div className="border rounded-lg p-5">
                <h3 className="font-sentient text-lg">Signal Acquisition</h3>
                <p className="mt-2 text-black/70">High-fidelity EMG capture from targeted muscle groups.</p>
              </div>
              <div className="border rounded-lg p-5">
                <h3 className="font-sentient text-lg">Filtering & Denoising</h3>
                <p className="mt-2 text-black/70">Artifact removal and noise suppression to maximize SNR.</p>
              </div>
              <div className="border rounded-lg p-5">
                <h3 className="font-sentient text-lg">AI Inference</h3>
                <p className="mt-2 text-black/70">Modeling muscle activation patterns to infer control intent.</p>
              </div>
              <div className="border rounded-lg p-5">
                <h3 className="font-sentient text-lg">Hardware Control</h3>
                <p className="mt-2 text-black/70">Low-latency output for smooth and stable wheelchair actuation.</p>
              </div>
            </div>

            <Link href="/research" className="contents">
              <Button className="mt-10">Explore the Tech</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


