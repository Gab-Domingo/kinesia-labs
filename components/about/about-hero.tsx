// @ts-nocheck
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModelViewer from "@/components/ModelViewer";

export function AboutHero() {
  return (
    <section className="container pt-28 md:pt-40 pb-16 md:pb-24 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(235,184,0,0.10),transparent_60%)]" />
      </div>

      <div className="grid gap-10 md:gap-12 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-sentient tracking-tight">
            Redefining Human–AI Interaction Through Muscle Intent Decoding
          </h1>
          {/* subheading removed per request */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/research" className="contents">
              <Button>Explore Our Research</Button>
            </Link>
            <Link href="/contact" className="contents">
              <Button className="border-foreground/30 text-foreground/80 bg-transparent hover:text-foreground hover:border-foreground/60">
                Collaborate with Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl overflow-hidden border border-white/10">
            <ModelViewer
              url="/assets/models/armband.glb"
              height={420}
              environmentPreset="studio"
              defaultRotationX={0}
              defaultRotationY={0}
              defaultZoom={1.2}
              minZoomDistance={0.8}
              maxZoomDistance={4.0}
              autoFrame
              enableManualZoom
              fadeIn
            />
          </div>
          <div className="md:block hidden absolute -inset-6 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(235,184,0,0.10),transparent_60%)] blur-2xl" />
        </div>
      </div>
    </section>
  );
}


