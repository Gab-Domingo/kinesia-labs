// @ts-nocheck
'use client'

import React, { type JSX } from "react";
import { Hero } from "@/components/hero";
import { Leva } from "leva";
import Reveal from "@/components/ux/Reveal";
import { SignalIntelligenceSection } from "@/components/signal-intelligence-section";
import { CoreFocusGrid } from "@/components/about/core-focus-grid";

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <section id={id} className="container py-20 md:py-32">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-sentient">{title}</h2>
      </Reveal>
      {subtitle ? (
        <Reveal delayMs={80}>
          <p className="mt-4 max-w-2xl font-mono text-foreground/70">{subtitle}</p>
        </Reveal>
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
        <Reveal>
          <div className="h-64 md:h-96 border rounded-xl flex items-center justify-center text-foreground/60 hover:shadow-[var(--shadow-glow)] transition-shadow">
            Video Embed Placeholder
          </div>
        </Reveal>
      </section>

      <SignalIntelligenceSection />
      <CoreFocusGrid />
      <section className="container py-20 md:py-32">
        <div className="rounded-xl bg-white text-black p-8 md:p-10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-sentient">Explore More</h2>
          </Reveal>
          <Reveal delayMs={70}>
            <p className="mt-4 max-w-2xl font-mono text-black/70">Previews from other pages.</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Reveal>
              <a href="/about" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
                <h3 className="font-sentient text-lg">About Us</h3>
                <p className="mt-2 text-black/70">Mission, story, and team expertise.</p>
              </a>
            </Reveal>
            <Reveal delayMs={60}>
              <a href="/industries" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
                <h3 className="font-sentient text-lg">Industries</h3>
                <p className="mt-2 text-black/70">Healthcare, defense, robotics, exoskeletons.</p>
              </a>
            </Reveal>
            <Reveal delayMs={120}>
              <a href="/research" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
                <h3 className="font-sentient text-lg">Research</h3>
                <p className="mt-2 text-black/70">EMG to action, latency, and ethics.</p>
              </a>
            </Reveal>
            <Reveal delayMs={180}>
              <a href="/faqs" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
                <h3 className="font-sentient text-lg">FAQs</h3>
                <p className="mt-2 text-black/70">Answers to common questions.</p>
              </a>
            </Reveal>
            <Reveal delayMs={240}>
              <a href="/contact" className="border p-6 rounded-xl block transition-transform hover:-translate-y-1">
                <h3 className="font-sentient text-lg">Contact</h3>
                <p className="mt-2 text-black/70">Lead form and social links.</p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
      <Leva hidden />
    </>
  );
}
