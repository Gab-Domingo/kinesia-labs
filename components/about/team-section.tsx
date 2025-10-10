// @ts-nocheck
"use client";

import ChromaGrid from "./ChromaGrid";

export function TeamSection() {
  const items = [
    {
      image: "/assets/team/gab.jpeg",
      title: "Jaime Gabriel Domingo",
      subtitle: "Electronics Engineering Student",
      handle: "@jaimegabrieldomingo",
      borderColor: "#EBB800",
      gradient: "linear-gradient(145deg, #EBB800, #000)",
    },
    {
      image: "/assets/team/lorenz.jpg",
      title: "Lorenz Arnold Novilunio",
      subtitle: "Electronics Engineering Student",
      handle: "@lorenznovilunio",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #10B981, #000)",
    },
    {
      image: "/assets/team/allen.jpg",
      title: "Allen Sederio",
      subtitle: "Electronics Engineering Student",
      handle: "@allensederio",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image: "/assets/team/john-patrick.jpg",
      title: "John Patrick Cabigting",
      subtitle: "Electronics Engineering Student",
      handle: "@johnpatrickcabigting",
      borderColor: "#EF4444",
      gradient: "linear-gradient(145deg, #EF4444, #000)",
    },
    {
      image: "/assets/team/dave.jpg",
      title: "John Dave Caluya",
      subtitle: "Electronics Engineering Student",
      handle: "@johndavecaluya",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    },
    {
      image: "/assets/team/charles.jpg",
      title: "Charles Martin Cruz",
      subtitle: "Electronics Engineering Student",
      handle: "@charlesmartincruz",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(145deg, #06B6D4, #000)",
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

      <div className="mt-8" style={{ position: "relative" }}>
        <ChromaGrid items={items} radius={320} damping={0.45} fadeOut={0.6} ease="power3.out" columns={3} rows={2} />
      </div>
    </section>
  );
}


