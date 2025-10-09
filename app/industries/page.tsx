export default function IndustriesPage() {
  const items = [
    { title: "Healthcare & Accessibility", desc: "Wheelchair and prosthetic control." },
    { title: "Defense & Military", desc: "Neural intent decoding for high-precision control." },
    { title: "Industrial Robotics", desc: "Human–AI collaborative machine interfaces." },
    { title: "Exoskeleton & Hardware Integration", desc: "Movement amplification and rehabilitation." },
  ];

  return (
    <main className="container py-28 md:py-40">
      <h1 className="text-4xl md:text-5xl font-sentient">Industries</h1>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((i) => (
          <article key={i.title} className="border p-6 rounded-xl">
            <h2 className="text-xl font-sentient">{i.title}</h2>
            <p className="mt-3 text-foreground/70">{i.desc}</p>
          </article>
        ))}
      </div>
    </main>
  );
}


