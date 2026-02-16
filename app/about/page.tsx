import { AboutHero } from "@/components/about/about-hero";
import { ResearchPhilosophy } from "@/components/about/research-philosophy";
import { TeamSection } from "@/components/about/team-section";
import { Timeline } from "@/components/about/timeline";
import { FAQSection } from "@/components/about/faq-section";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <ResearchPhilosophy />
      <TeamSection />
      <Timeline />
      <FAQSection />
    </main>
  );
}


