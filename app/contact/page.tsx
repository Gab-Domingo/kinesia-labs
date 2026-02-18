import { PilotSignupForm } from "@/components/contact/pilot-signup-form";
import { Reveal } from "@/components/ux/Reveal";

export default function ContactPage() {
  return (
    <main>
      <section aria-labelledby="contact-heading" className="relative">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1
                id="contact-heading"
                className="text-4xl md:text-5xl font-sentient tracking-tight"
              >
                Join Our Early Wheelchair Pilot List
              </h1>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="mt-4 text-foreground/70 text-base md:text-lg">
                We're building a non-invasive EMG armband to control wheelchairs through muscle intent. 
                We're looking for wheelchair users interested in shaping what this becomes.
              </p>
            </Reveal>
            <Reveal delayMs={120}>
              <div className="mt-8 p-6 rounded-lg border border-primary/30 bg-primary/5">
                <h2 className="text-lg font-mono uppercase text-foreground/90 mb-3">
                  Why we're asking
                </h2>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Understand how you use your wheelchair in everyday life</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Learn where this technology could actually help (and where it wouldn't)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Show investors there's a real community asking for this</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delayMs={160}>
              <div className="mt-8 p-6 rounded-lg border border-border bg-background/30">
                <h2 className="text-lg font-mono uppercase text-foreground/90 mb-3">
                  What happens next
                </h2>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-primary">1.</span>
                    <span>You submit this form (2–3 minutes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-primary">2.</span>
                    <span>We review and tag your interest (location, wheelchair type, availability)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-primary">3.</span>
                    <span>When we're closer to pilots in your area, we email you first</span>
                  </li>
                </ol>
                <p className="mt-4 text-xs text-foreground/50">
                  No commitment today. We'll reach out before any studies or trials.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={200} className="mt-12">
              <PilotSignupForm />
            </Reveal>
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </section>
    </main>
  );
}
