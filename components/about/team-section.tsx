"use client";

import ChromaGrid from "./ChromaGrid";

export function TeamSection() {
  const items = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "AI Research",
      subtitle: "Signal Processing & Modeling",
      handle: "@kinesia-ai",
      borderColor: "#EBB800",
      gradient: "linear-gradient(145deg, #EBB800, #000)",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Biomedical Engineering",
      subtitle: "Sensors & Interfaces",
      handle: "@kinesia-bme",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #10B981, #000)",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Robotics",
      subtitle: "Control & Integration",
      handle: "@kinesia-robotics",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image: "https://i.pravatar.cc/300?img=4",
      title: "HCI",
      subtitle: "Human–AI Synergy",
      handle: "@kinesia-hci",
      borderColor: "#A855F7",
      gradient: "linear-gradient(145deg, #A855F7, #000)",
    },
  ];

  return (
    <section className="container py-16 md:py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-sentient">Team Expertise</h2>
          <p className="mt-3 font-mono text-foreground/70 max-w-2xl">
            Multidisciplinary collaboration across AI, biomedical engineering, robotics, and HCI.
          </p>
        </div>
      </div>

      <div className="mt-8" style={{ height: "520px", position: "relative" }}>
        <ChromaGrid items={items} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" />
      </div>
    </section>
  );
}


