// @ts-nocheck
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import DecryptedText from "@/components/DecryptedText";

export function AboutHero() {
  return (
    <section className="container pt-28 md:pt-40 pb-16 md:pb-24 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(235,184,0,0.10),transparent_60%)]" />
      </div>

      <div className="grid gap-10 md:gap-12 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-sentient tracking-tight">
            <DecryptedText
              text="Redefining Human–AI Interaction Through Muscle Intent Decoding"
              animateOn="both"
              revealDirection="center"
              className="revealed"
              encryptedClassName="opacity-40"
            />
          </h1>
          <p className="mt-6 font-mono text-foreground/70 max-w-2xl">
            We pioneer neuroadaptive interfaces that translate EMG signals into intelligent action—
            empowering mobility, expression, and independence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/research" className="contents">
              <Button>Explore Our Research</Button>
            </Link>
            <Link href="/contact" className="contents">
              <Button className="border-foreground/30 text-foreground/80 bg-transparent hover:text-foreground hover:border-foreground/60">
                Collaborate with Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl overflow-hidden border border-white/10">
            <svg viewBox="0 0 800 260" className="w-full h-auto" role="img" aria-label="EMG to AI to Action">
              <defs>
                <linearGradient id="emg" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#EBB800" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#EBB800" stopOpacity="0.2" />
                </linearGradient>
                <style>{`
                  @keyframes pulse {
                    0% { opacity: 0.6; }
                    50% { opacity: 1; }
                    100% { opacity: 0.6; }
                  }
                  @keyframes sweep {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -240; }
                  }
                `}</style>
              </defs>
              <rect x="0" y="0" width="800" height="260" fill="#0B0B0B" />
              {/* EMG strip */}
              <g>
                <rect x="40" y="60" width="220" height="60" rx="10" fill="#121212" stroke="#2a2a2a" />
                <path d="M 50 90 Q 80 40, 110 90 T 170 90 T 230 90" stroke="url(#emg)" strokeWidth="2" fill="none" style={{ strokeDasharray: 240, animation: 'sweep 2.4s linear infinite' }} />
                <text x="150" y="130" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace">EMG</text>
              </g>
              {/* AI node */}
              <g>
                <rect x="310" y="60" width="180" height="60" rx="10" fill="#121212" stroke="#2a2a2a" />
                <circle cx="350" cy="90" r="8" fill="#1b1b1b" stroke="#2a2a2a" />
                <circle cx="390" cy="90" r="8" fill="#1b1b1b" stroke="#2a2a2a" />
                <circle cx="430" cy="90" r="8" fill="#1b1b1b" stroke="#2a2a2a" />
                <text x="400" y="130" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace">AI</text>
              </g>
              {/* Action: GO / STOP */}
              <g>
                <rect x="580" y="40" width="180" height="100" rx="12" fill="#121212" stroke="#2a2a2a" />
                <circle cx="620" cy="90" r="12" fill="#1F6F1F" stroke="#2a2a2a" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                <circle cx="710" cy="90" r="12" fill="#6F1F1F" stroke="#2a2a2a" />
                <text x="620" y="120" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace">GO</text>
                <text x="710" y="120" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace">STOP</text>
              </g>
              {/* connectors */}
              <g stroke="#3a3a3a">
                <line x1="260" y1="90" x2="310" y2="90" />
                <line x1="490" y1="90" x2="580" y2="90" />
              </g>
            </svg>
          </div>
          <div className="md:block hidden absolute -inset-6 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(235,184,0,0.10),transparent_60%)] blur-2xl" />
        </div>
      </div>
    </section>
  );
}


