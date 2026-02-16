// @ts-nocheck
"use client";

export function TeamSection() {
  const items = [
    { image: "/assets/team/gab.jpeg", title: "Jaime Gabriel Domingo", subtitle: "Electronics Engineering Student", handle: "@jaimegabrieldomingo", borderColor: "#EBB800" },
    { image: "/assets/team/lorenz.jpg", title: "Lorenz Arnold Novilunio", subtitle: "Electronics Engineering Student", handle: "@lorenznovilunio", borderColor: "#10B981" },
    { image: "/assets/team/allen.jpg", title: "Allen Sederio", subtitle: "Electronics Engineering Student", handle: "@allensederio", borderColor: "#3B82F6" },
    { image: "/assets/team/john-patrick.jpg", title: "John Patrick Cabigting", subtitle: "Electronics Engineering Student", handle: "@johnpatrickcabigting", borderColor: "#EF4444" },
    { image: "/assets/team/dave.jpg", title: "John Dave Caluya", subtitle: "Electronics Engineering Student", handle: "@johndavecaluya", borderColor: "#8B5CF6" },
    { image: "/assets/team/charles.jpg", title: "Charles Martin Cruz", subtitle: "Electronics Engineering Student", handle: "@charlesmartincruz", borderColor: "#06B6D4" },
  ];

  return (
    <section className="container py-16 md:py-24">
      <div>
        <h2 className="text-3xl md:text-4xl font-sentient">Team Expertise</h2>
        <p className="mt-3 font-mono text-foreground/70 max-w-2xl">
          Multidisciplinary collaboration across AI, biomedical engineering, robotics, and HCI.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((person, i) => (
          <article
            key={i}
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.08]"
            style={{ borderTopColor: person.borderColor, borderTopWidth: 2 }}
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
              <img src={person.image} alt={person.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="mt-4 font-sentient text-lg">{person.title}</h3>
            {person.handle && <span className="font-mono text-sm text-foreground/60">{person.handle}</span>}
            <p className="mt-1 font-mono text-sm text-foreground/70">{person.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


