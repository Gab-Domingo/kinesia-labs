// @ts-nocheck
import Reveal from "@/components/ux/Reveal";
export function CoreFocusGrid() {
  const items = [
    {
      title: "Biomedical Engineering",
      body:
        "Sensor integration, signal fidelity, and prosthetic control systems for dependable hardware links.",
      image: "/assets/core/healthcare.png",
    },
    {
      title: "AI Signal Processing",
      body:
        "Real-time EMG decoding with adaptive filtering to infer human intent robustly.",
      image: "/assets/core/ai.png",
    },
    {
      title: "Industrial Robotics",
      body:
        "Low-latency actuation and stability for responsive assistive mobility and manipulation.",
      image: "/assets/core/Industrial.png",
    },
  ];

  return (
    <section className="container py-16 md:py-24">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-sentient">Core Focus Areas</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 md:gap-8 md:grid-cols-3">
        {items.map((item, idx) => (
          <Reveal key={item.title} delayMs={idx * 80}>
            <div className="h-full">
              <div className="rounded-xl border border-white/10 p-6 md:p-8 bg-white/5 h-full flex flex-col">
                <div className="rounded-lg overflow-hidden mb-4 bg-white/10 p-4 flex items-center justify-center h-32">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-sentient text-xl">{item.title}</h3>
                <p className="mt-3 text-foreground/70 flex-grow">{item.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


