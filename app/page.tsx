'use client'

import { Hero } from "@/components/hero";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Hero />
<<<<<<< HEAD
=======
      <SectionHeading
        id="demo"
        title="Proof of Concept: Wheelchair Control"
        subtitle="The Kinesia Armband translates EMG into control signals to drive a power wheelchair prototype."
      />
      <div className="container -mt-8"><div className="section-divider" /></div>
      <section className="container -mt-12">
        <div className="h-64 md:h-96 border rounded-xl flex items-center justify-center text-foreground/60 hover:shadow-[var(--shadow-glow)] transition-shadow">
          Video Embed Placeholder
        </div>
      </section>

      <SectionHeading
        id="research-insight"
        title="Signal Intelligence"
        subtitle="Our pipeline performs denoising, artifact removal, and intent decoding in real time for precise, stable control."
      />
      <div className="container -mt-8"><div className="section-divider" /></div>
      <section className="container -mt-12 grid gap-6 md:grid-cols-3">
        <article className="border p-6 rounded-xl transition-transform hover:-translate-y-1">
          <h3 className="font-sentient text-lg">Filtering & Denoising</h3>
          <p className="mt-2 text-foreground/70">EMG preprocessing to improve SNR.</p>
        </article>
        <article className="border p-6 rounded-xl transition-transform hover:-translate-y-1">
          <h3 className="font-sentient text-lg">Intent Decoding</h3>
          <p className="mt-2 text-foreground/70">Modeling muscle activation patterns to infer commands.</p>
        </article>
        <article className="border p-6 rounded-xl transition-transform hover:-translate-y-1">
          <h3 className="font-sentient text-lg">Real-time Control</h3>
          <p className="mt-2 text-foreground/70">Low-latency loop for smooth actuation.</p>
        </article>
      </section>

      <SectionHeading id="timeline" title="Development Timeline" />
      <div className="container -mt-8"><div className="section-divider" /></div>
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
      <SectionHeading id="previews" title="Explore More" subtitle="Previews from other pages." />
      <div className="container -mt-8"><div className="section-divider" /></div>
      <section className="container -mt-12 grid gap-6 md:grid-cols-3">
        <a href="/about" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
          <h3 className="font-sentient text-lg">About Us</h3>
          <p className="mt-2 text-foreground/70">Mission, story, and team expertise.</p>
        </a>
        <a href="/industries" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
          <h3 className="font-sentient text-lg">Industries</h3>
          <p className="mt-2 text-foreground/70">Healthcare, defense, robotics, exoskeletons.</p>
        </a>
        <a href="/research" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
          <h3 className="font-sentient text-lg">Research</h3>
          <p className="mt-2 text-foreground/70">EMG to action, latency, and ethics.</p>
        </a>
        <a href="/faqs" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
          <h3 className="font-sentient text-lg">FAQs</h3>
          <p className="mt-2 text-foreground/70">Answers to common questions.</p>
        </a>
        <a href="/contact" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
          <h3 className="font-sentient text-lg">Contact</h3>
          <p className="mt-2 text-foreground/70">Lead form and social links.</p>
        </a>
      </section>
>>>>>>> d006b36 (Fixing hero section)
      <Leva hidden />
    </>
  );
}
