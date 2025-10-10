import HeroSection from "@/components/industries/HeroSection";
import { IndustryCard } from "@/components/industries/IndustryCard";
import IntegrationSection from "@/components/industries/IntegrationSection";

export default function IndustriesPage() {
  const cards = [
    {
      title: "Healthcare & Accessibility",
      summary: "Empowering assistive mobility through EMG-driven control systems.",
      body: "Enables intuitive wheelchair and prosthetic control by translating muscle signals into precise movements.",
      capabilities: [
        "Real-time EMG interpretation",
        "Integration with rehabilitation systems",
        "Adaptive calibration",
      ],
      imageUrl: "https://source.unsplash.com/featured/?wheelchair,rehabilitation",
      imageAlt: "Wheelchair or prosthetic rehabilitation context",
    },
    {
      title: "Defense & Military",
      summary: "Neural intent decoding for mission-critical precision.",
      body: "Supports advanced control for complex equipment and robotics, improving coordination and dexterity.",
      capabilities: [
        "High-fidelity signal mapping",
        "Integration-ready for exosuits and drones",
        "Noise-resistant signal capture",
      ],
      imageUrl: "https://source.unsplash.com/featured/?soldier,exosuit,technology",
      imageAlt: "Defense operator with advanced exosuit or robotics",
    },
    {
      title: "Industrial Robotics",
      summary: "Adaptive interfaces for human–AI collaboration.",
      body: "Serves as an intelligent interface between human operators and machines for gesture-based control.",
      capabilities: [
        "EMG-based gesture mapping",
        "Low-latency response",
        "Embedded system compatibility",
      ],
      imageUrl: "https://source.unsplash.com/featured/?industrial,robotics,collaboration",
      imageAlt: "Industrial robot collaborating with a human operator",
    },
    {
      title: "Exoskeleton & Hardware Integration",
      summary: "Amplifying movement for strength and rehabilitation.",
      body: "Converts muscle activity into synchronized, amplified motion for rehab or industrial applications.",
      capabilities: [
        "Real-time motion amplification",
        "Supports rehab and load-bearing suits",
        "Modular multi-channel EMG design",
      ],
      imageUrl: "https://source.unsplash.com/featured/?exoskeleton,rehabilitation,engineering",
      imageAlt: "Exoskeleton hardware in rehabilitation or industrial context",
    },
  ];

  return (
    <main>
      <HeroSection />

      <section id="industries" aria-labelledby="industries-grid-heading">
        <div className="container py-20 md:py-28">
          <h2 id="industries-grid-heading" className="text-3xl md:text-4xl font-sentient tracking-tight">
            Industry Applications
          </h2>
          <p className="mt-3 text-foreground/70 max-w-2xl">Our EMG armband adapts to diverse environments to enable intuitive, precise control across sectors.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <IndustryCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <IntegrationSection />
    </main>
  );
}


