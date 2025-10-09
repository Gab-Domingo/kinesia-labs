export default function ResearchPage() {
  return (
    <main className="container py-28 md:py-40">
      <h1 className="text-4xl md:text-5xl font-sentient">Research & Technology</h1>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-sentient">How EMG Becomes Action</h2>
        <p className="mt-4 text-foreground/70">
          EMG captures muscle activity; our pipeline filters, denoises, and decodes intent in real-time to drive control signals.
        </p>
        <div className="mt-6 h-48 border rounded-xl flex items-center justify-center text-foreground/60">
          Diagram Placeholder
        </div>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-sentient text-lg">Real-time Responsiveness</h3>
          <p className="mt-2 text-foreground/70">Low-latency inference for smooth control.</p>
        </div>
        <div>
          <h3 className="font-sentient text-lg">Signal Precision</h3>
          <p className="mt-2 text-foreground/70">Robust filtering and intent decoding.</p>
        </div>
        <div>
          <h3 className="font-sentient text-lg">Ethical AI</h3>
          <p className="mt-2 text-foreground/70">Assistive-first design and privacy by default.</p>
        </div>
      </section>
    </main>
  );
}


