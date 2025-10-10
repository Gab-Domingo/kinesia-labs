import { AboutHero } from "@/components/about/about-hero";
import { ResearchPhilosophy } from "@/components/about/research-philosophy";
import { CoreFocusGrid } from "@/components/about/core-focus-grid";
import { TeamSection } from "@/components/about/team-section";
import { Timeline } from "@/components/about/timeline";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <ResearchPhilosophy />
      <CoreFocusGrid />
      <TeamSection />
      <Timeline />
    </main>
  );
}


