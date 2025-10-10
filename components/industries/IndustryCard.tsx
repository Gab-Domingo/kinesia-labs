import { Reveal } from "@/components/ux/Reveal";

type IndustryCardProps = {
  title: string;
  summary: string;
  body: string;
  capabilities: string[];
  imageUrl: string;
  imageAlt: string;
};

export function IndustryCard({ title, summary, body, capabilities, imageUrl, imageAlt }: IndustryCardProps) {
  return (
    <Reveal as="article" className="group overflow-hidden rounded-xl border border-border bg-background/40">
      <div className="aspect-[3/2] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-sentient transition-colors duration-300 group-hover:text-[#0C7AFF]">
          {title}
        </h3>
        <p className="mt-2 text-foreground/70">{summary}</p>
        <p className="mt-4 text-sm md:text-base text-foreground/80">{body}</p>
        <ul className="mt-5 grid gap-2 text-sm list-disc pl-5 marker:text-[#0C7AFF]/80">
          {capabilities.map((cap) => (
            <li key={cap} className="text-foreground/80">{cap}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default IndustryCard;


