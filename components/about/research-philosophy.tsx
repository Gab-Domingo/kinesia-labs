// @ts-nocheck
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ux/Reveal";

export function ResearchPhilosophy() {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-3xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-sentient">Research Philosophy</h2>
        </Reveal>
        <Reveal delayMs={70}>
          <p className="mt-4 font-mono text-foreground/70">
            Our research closes the loop between biology and computation. We study EMG signal
            acquisition, adaptive filtering, and intent decoding to achieve low-latency, precise
            control for real-world assistive systems.
          </p>
        </Reveal>
        <Link href="/research" className="contents">
          <Reveal delayMs={120}>
            <Button className="mt-8">Read the Approach</Button>
          </Reveal>
        </Link>
      </div>
    </section>
  );
}


