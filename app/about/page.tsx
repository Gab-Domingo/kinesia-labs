export default function AboutPage() {
  return (
    <main className="container py-28 md:py-40">
      <section className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-sentient">About Kinesia Labs</h1>
        <p className="mt-6 font-mono text-foreground/70">
          Our mission is to redefine how people interact with AI through muscle intent decoding.
        </p>
      </section>

      <section className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-sentient">Research Story</h2>
          <p className="mt-4 text-foreground/70">
            We build invasive EMG systems that translate muscle signals into real-time control actions, with a focus on accessibility and human–AI synergy.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-sentient">Team Expertise</h2>
          <ul className="mt-4 space-y-2 text-foreground/70">
            <li>Biomedical Engineering</li>
            <li>AI Signal Processing</li>
            <li>Robotics</li>
          </ul>
        </div>
      </section>
    </main>
  );
}


