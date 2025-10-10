export function CoreFocusGrid() {
  const items = [
    {
      title: "Biomedical Engineering",
      body:
        "Sensor integration, signal fidelity, and prosthetic control systems for dependable hardware links.",
    },
    {
      title: "AI Signal Processing",
      body:
        "Real-time EMG decoding with adaptive filtering to infer human intent robustly.",
    },
    {
      title: "Robotics",
      body:
        "Low-latency actuation and stability for responsive assistive mobility and manipulation.",
    },
  ];

  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-sentient">Core Focus Areas</h2>
      <div className="mt-8 grid gap-6 md:gap-8 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 p-6 md:p-8 bg-white/5">
            <h3 className="font-sentient text-xl">{item.title}</h3>
            <p className="mt-3 text-foreground/70">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


