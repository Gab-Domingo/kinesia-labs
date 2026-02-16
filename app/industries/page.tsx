import HeroSection from "@/components/industries/HeroSection";
import IndustryCarousel from "@/components/industries/IndustryCarousel";
import IntegrationSection from "@/components/industries/IntegrationSection";

const industrySlides = [
  {
    title: "Healthcare & Accessibility",
    summary: "Empowering assistive mobility through EMG-driven control systems.",
    capabilities: [
      "Real-time EMG interpretation",
      "Integration with rehabilitation systems",
      "Adaptive calibration",
    ],
    imageUrl: "/assets/industries/image.png",
    imageAlt: "Healthcare and accessibility applications of EMG technology",
  },
  {
    title: "Defense & Military",
    summary: "Neural intent decoding for mission-critical precision.",
    capabilities: [
      "High-fidelity signal mapping",
      "Integration-ready for exosuits and drones",
      "Noise-resistant signal capture",
    ],
    imageUrl: "/assets/industries/military.png",
    imageAlt: "Defense and military applications of EMG technology",
  },
  {
    title: "Industrial Robotics",
    summary: "Adaptive interfaces for human–AI collaboration.",
    capabilities: [
      "EMG-based gesture mapping",
      "Low-latency response",
      "Embedded system compatibility",
    ],
    imageUrl: "/assets/industries/industrial2.png",
    imageAlt: "Industrial robotics applications of EMG technology",
  },
  {
    title: "Exoskeleton & Hardware Integration",
    summary: "Amplifying movement for strength and rehabilitation.",
    capabilities: [
      "Real-time motion amplification",
      "Supports rehab and load-bearing suits",
      "Modular multi-channel EMG design",
    ],
    imageUrl: "/assets/industries/exoskeleton.png",
    imageAlt: "Exoskeleton and hardware integration applications of EMG technology",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <HeroSection />

      <section id="industries" aria-labelledby="industries-grid-heading">
        <div className="container py-20 md:py-28">
          <h2 id="industries-grid-heading" className="text-3xl md:text-4xl font-sentient tracking-tight">
            Industry Applications
          </h2>
          <p className="mt-3 text-foreground/70 max-w-2xl">
            Our EMG armband adapts to diverse environments to enable intuitive, precise control across sectors.
          </p>

          <IndustryCarousel slides={industrySlides.slice(0, 3)} />
        </div>
      </section>

      <IntegrationSection />
    </main>
  );
}


