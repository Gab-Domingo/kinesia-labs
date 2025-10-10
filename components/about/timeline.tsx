import Reveal from "@/components/ux/Reveal";
export function Timeline() {
  const milestones = [
    {
      year: "2025",
      title: "Lab prototype decoding EMG for assistive control",
      body:
        "Demonstrated real-time decoding from muscle activity for stable wheelchair actuation.",
    },
    {
      year: "2025",
      title: "Filtering breakthrough improves latency and precision",
      body:
        "Adaptive denoising and feature modeling reduce end-to-end latency and error variance.",
    },
  ];

  return (
    <section className="container py-16 md:py-24">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-sentient">Origin Story</h2>
      </Reveal>
      <div className="mt-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]" style={{ WebkitOverflowScrolling: "touch" }}>
        <ul className="flex gap-6 md:gap-8 snap-x snap-mandatory pr-6">
          {milestones.map((m, idx) => (
            <Reveal key={idx} delayMs={idx * 100}>
              <li className="min-w-[280px] md:min-w-[360px] snap-start">
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
                  <div className="font-mono text-primary">{m.year}</div>
                  <h3 className="mt-2 font-sentient text-xl leading-snug">{m.title}</h3>
                  <p className="mt-3 text-foreground/70">{m.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}


