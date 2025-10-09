'use client'

import { Hero } from "@/components/hero";
import { Leva } from "leva";

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <section id={id} className="container py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-sentient">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl font-mono text-foreground/70">{subtitle}</p>
      ) : null}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <SectionHeading
        id="demo"
        title="Proof of Concept: Wheelchair Control"
        subtitle="The Kinesia Armband translates EMG into control signals to drive a power wheelchair prototype."
      />
      <section className="container -mt-12">
        <div className="h-64 md:h-96 border rounded-xl flex items-center justify-center text-foreground/60 hover:shadow-[var(--shadow-glow)] transition-shadow">
          Video Embed Placeholder
        </div>
      </section>

      <section className="container py-20 md:py-32">
        <div className="rounded-xl bg-white text-black p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-sentient">Signal Intelligence</h2>
          <p className="mt-4 max-w-2xl font-mono text-black/70">Our pipeline performs denoising, artifact removal, and intent decoding in real time for precise, stable control.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="border p-6 rounded-xl transition-transform hover:-translate-y-1">
              <h3 className="font-sentient text-lg">Filtering & Denoising</h3>
              <p className="mt-2 text-black/70">EMG preprocessing to improve SNR.</p>
            </article>
            <article className="border p-6 rounded-xl transition-transform hover:-translate-y-1">
              <h3 className="font-sentient text-lg">Intent Decoding</h3>
              <p className="mt-2 text-black/70">Modeling muscle activation patterns to infer commands.</p>
            </article>
            <article className="border p-6 rounded-xl transition-transform hover:-translate-y-1">
              <h3 className="font-sentient text-lg">Real-time Control</h3>
              <p className="mt-2 text-black/70">Low-latency loop for smooth actuation.</p>
            </article>
          </div>
        </div>
      </section>

      <SectionHeading id="timeline" title="Development Timeline" />
      <section className="container -mt-12">
        <div className="border rounded-xl p-6">
          <ol className="relative border-l pl-6 space-y-8">
            <li>
              <div className="absolute -left-[6px] h-3 w-3 rounded-full bg-primary" />
              <h4 className="font-sentient">Phase 1 — Signal Capture</h4>
              <p className="text-foreground/70">Establish reliable invasive EMG acquisition.</p>
            </li>
            <li>
              <div className="absolute -left-[6px] h-3 w-3 rounded-full bg-primary" />
              <h4 className="mt-2 font-sentient">Phase 2 — Decoding & Control</h4>
              <p className="text-foreground/70">Real-time inference and wheelchair integration.</p>
            </li>
            <li>
              <div className="absolute -left-[6px] h-3 w-3 rounded-full bg-primary" />
              <h4 className="mt-2 font-sentient">Phase 3 — Generalization</h4>
              <p className="text-foreground/70">Extend to robotics and hardware interfaces.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="container py-20 md:py-32">
        <div className="rounded-xl bg-white text-black p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-sentient">Explore More</h2>
          <p className="mt-4 max-w-2xl font-mono text-black/70">Previews from other pages.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <a href="/about" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
              <h3 className="font-sentient text-lg">About Us</h3>
              <p className="mt-2 text-black/70">Mission, story, and team expertise.</p>
            </a>
            <a href="/industries" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
              <h3 className="font-sentient text-lg">Industries</h3>
              <p className="mt-2 text-black/70">Healthcare, defense, robotics, exoskeletons.</p>
            </a>
            <a href="/research" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
              <h3 className="font-sentient text-lg">Research</h3>
              <p className="mt-2 text-black/70">EMG to action, latency, and ethics.</p>
            </a>
            <a href="/faqs" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
              <h3 className="font-sentient text-lg">FAQs</h3>
              <p className="mt-2 text-black/70">Answers to common questions.</p>
            </a>
            <a href="/contact" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
              <h3 className="font-sentient text-lg">Contact</h3>
              <p className="mt-2 text-black/70">Lead form and social links.</p>
            </a>
          </div>
        </div>
      </section>
      <Leva hidden />
    </>
  );
}
