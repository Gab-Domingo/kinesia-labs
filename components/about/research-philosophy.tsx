// @ts-nocheck
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IntentDecodingDiagram } from "@/components/about/intent-decoding-diagram";

export function ResearchPhilosophy() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid gap-10 md:gap-12 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-sentient">Research Philosophy</h2>
          <p className="mt-4 font-mono text-foreground/70 max-w-2xl">
            Our research closes the loop between biology and computation. We study EMG signal
            acquisition, adaptive filtering, and intent decoding to achieve low-latency, precise
            control for real-world assistive systems.
          </p>
          <Link href="/research" className="contents">
            <Button className="mt-8">Read the Approach</Button>
          </Link>
        </div>

        <div className="order-1 md:order-2">
          <IntentDecodingDiagram />
        </div>
      </div>
    </section>
  );
}


