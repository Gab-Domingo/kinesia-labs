import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/ux/Reveal";

export default function ContactPage() {
  return (
    <main>
      <section aria-labelledby="contact-heading" className="relative">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <h1
                id="contact-heading"
                className="text-4xl md:text-5xl font-sentient tracking-tight"
              >
                Get in Touch
              </h1>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="mt-4 text-foreground/70 text-base md:text-lg">
                Share your email and message. We&apos;ll use it to respond and add you to our signups.
              </p>
            </Reveal>
            <Reveal delayMs={160} className="mt-10">
              <ContactForm />
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
