import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ux/Reveal";
import Threads from "@/components/visuals/Threads";

export function HeroSection() {
  return (
    <section aria-labelledby="industries-hero-heading" className="relative">
      <div className="absolute inset-0 -z-10 opacity-60">
        <Threads amplitude={1.9} distance={0.2} enableMouseInteraction={true} />
      </div>
      <div className="container py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 id="industries-hero-heading" className="text-4xl md:text-5xl font-sentient tracking-tight">
              Seamless EMG Integration for Real-World Systems
            </h1>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-6 text-foreground/70 text-base md:text-lg">
              Low-latency, integration-ready control for clinical devices, exosuits, industrial robots, and more.
            </p>
          </Reveal>
          <Reveal delayMs={200}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button asChild>
                <Link href="#industries" aria-label="Scroll to industries grid">
                  Discover Applications
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}

export default HeroSection;


