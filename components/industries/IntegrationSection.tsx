import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ux/Reveal";

export function IntegrationSection() {
  return (
    <section aria-labelledby="integration-heading" className="relative">
      <div className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 id="integration-heading" className="text-3xl md:text-4xl font-sentient tracking-tight">
              Engineered for Seamless Integration
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-6 text-foreground/70 text-base md:text-lg">
              Our EMG armband system provides a high-fidelity, integration-ready interface for hardware and AI frameworks. Modular hardware, machine-learning-ready pipelines, and adaptive noise filtering ensure robust real-world performance.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          <Reveal className="rounded-xl border border-border p-6">
            <h3 className="font-sentient text-lg">Hardware Compatibility</h3>
            <p className="mt-2 text-foreground/70">ESP32, Raspberry Pi, and embedded ecosystems.</p>
          </Reveal>
          <Reveal delayMs={75} className="rounded-xl border border-border p-6">
            <h3 className="font-sentient text-lg">Software Flexibility</h3>
            <p className="mt-2 text-foreground/70">ML pipelines, control systems, and APIs.</p>
          </Reveal>
          <Reveal delayMs={150} className="rounded-xl border border-border p-6">
            <h3 className="font-sentient text-lg">Signal Precision</h3>
            <p className="mt-2 text-foreground/70">Adaptive filtering and low-latency capture.</p>
          </Reveal>
        </div>

        <Reveal delayMs={200}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button asChild>
              <Link href="/about#faqs">Contact Our Team</Link>
            </Button>
            <Button asChild>
              <Link href="/research">View Integration Guide</Link>
            </Button>
          </div>
        </Reveal>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}

export default IntegrationSection;


