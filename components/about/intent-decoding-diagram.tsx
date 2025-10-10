// @ts-nocheck
"use client";

// orientation: "horizontal" (default) keeps the animated pipeline
// orientation: "vertical" shows a tall Lottie visual with a concise legend
export function IntentDecodingDiagram({
  compact = false,
  orientation = "horizontal",
  lottieSrc,
}: {
  compact?: boolean;
  orientation?: "horizontal" | "vertical";
  lottieSrc?: string;
}) {
  // Lazy-load the official Lottie web component if needed
  // We avoid adding a package and use the lightweight web component via CDN
  if (typeof window !== "undefined") {
    // @ts-ignore
    if (!customElements.get("lottie-player")) {
      const existing = document.querySelector('script[data-lib="lottie-player"]');
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
        script.async = true;
        script.setAttribute("data-lib", "lottie-player");
        document.head.appendChild(script);
      }
    }
  }

  if (orientation === "vertical") {
    return (
      <div className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
        <div className="relative h-[420px] md:h-[520px]">
          {lottieSrc ? (
            // @ts-ignore - custom element provided by web component script
            <lottie-player
              autoplay
              loop
              mode="normal"
              src={lottieSrc}
              style={{ width: "100%", height: "100%" }}
              speed="1"
              background="transparent"
            />
          ) : null}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/25" />
        </div>

        <div className="grid grid-cols-1 gap-3 p-5 md:p-6 border-t border-white/10">
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[rgba(235,184,0,0.9)] shadow-[0_0_20px_rgba(235,184,0,0.35)]" />
            <div>
              <div className="font-sentient">Signal Acquisition</div>
              <div className="font-mono text-sm text-foreground/70">High‑fidelity EMG capture from target muscle groups.</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[rgba(235,184,0,0.7)]" />
            <div>
              <div className="font-sentient">Filtering & Denoising</div>
              <div className="font-mono text-sm text-foreground/70">Adaptive suppression to maximize signal‑to‑noise.</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[rgba(235,184,0,0.7)]" />
            <div>
              <div className="font-sentient">AI Intent Decoding</div>
              <div className="font-mono text-sm text-foreground/70">Real‑time inference tuned for assistive control loops.</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[rgba(235,184,0,0.7)]" />
            <div>
              <div className="font-sentient">Low‑Latency Control</div>
              <div className="font-mono text-sm text-foreground/70">Smooth wheelchair/robot actuation with confidence outputs.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
      <svg viewBox={compact ? "0 0 800 260" : "0 0 800 450"} className="w-full h-auto" role="img" aria-label="EMG signal to intent decoding pipeline with animated flow">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EBB800" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EBB800" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EBB800" />
            <stop offset="100%" stopColor="#6b5b00" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b6b6b" />
          </marker>
          <style>
            {`
            .wave {
              stroke-dasharray: 6 8;
              animation: flow 5s linear infinite;
            }
            .edge {
              stroke-dasharray: 10 8;
              animation: flow 2.5s linear infinite;
            }
            .node {
              animation: pulse 2.2s ease-in-out infinite;
            }
            .bar {
              transform-box: fill-box;
              transform-origin: 50% 100%;
              animation: grow 3s ease-in-out infinite;
            }
            .bar.delay-1 { animation-delay: .2s; }
            .bar.delay-2 { animation-delay: .4s; }
            .scan {
              animation: sweep 3.6s ease-in-out infinite;
            }
            @keyframes flow {
              to { stroke-dashoffset: -400; }
            }
            @keyframes pulse {
              0%,100% { opacity: .6; }
              50% { opacity: 1; }
            }
            @keyframes grow {
              0%,100% { transform: scaleY(.35); }
              50% { transform: scaleY(1); }
            }
            @keyframes sweep {
              0% { opacity: .0; transform: translateX(-140px); }
              15% { opacity: .6; }
              85% { opacity: .6; }
              100% { opacity: 0; transform: translateX(140px); }
            }
          `}
          </style>
        </defs>

        <rect x="0" y="0" width="800" height={compact ? 260 : 450} fill="#0B0B0B" />

        {/* Acquisition */}
        <g>
          <rect x="40" y="48" width="200" height="100" rx="12" fill="#121212" stroke="#2a2a2a" />
          <text x="140" y="86" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace">Signal Acquisition</text>
          {/* EMG waveform */}
          <path
            className="wave"
            d="M 50 120 C 70 90, 90 150, 110 120 C 130 90, 150 150, 170 120 C 190 90, 210 150, 230 120"
            stroke="url(#gold)" strokeWidth="2" fill="none" filter="url(#glow)"
          />
        </g>

        {/* Edge to Filtering */}
        <line x1="240" y1="98" x2="310" y2="98" stroke="#4a4a4a" className="edge" markerEnd="url(#arrow)" />

        {/* Filtering */}
        <g>
          <rect x="310" y="48" width="200" height="100" rx="12" fill="#121212" stroke="#2a2a2a" />
          <text x="410" y="86" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace">Filtering & Denoising</text>
          {/* band-pass lanes */}
          <rect x="330" y="70" width="160" height="8" fill="url(#gold)" opacity="0.55" />
          <rect x="330" y="88" width="160" height="8" fill="url(#gold)" opacity="0.35" />
          <rect x="330" y="106" width="160" height="8" fill="url(#gold)" opacity="0.2" />
          {/* scanning window */}
          <rect x="330" y="64" width="28" height="60" rx="6" className="scan" fill="#EBB800" opacity="0.14" />
        </g>

        {/* Edge to AI */}
        <line x1="510" y1="98" x2="580" y2="98" stroke="#4a4a4a" className="edge" markerEnd="url(#arrow)" />

        {/* AI Inference */}
        <g>
          <rect x="580" y="48" width="200" height="100" rx="12" fill="#121212" stroke="#2a2a2a" />
          <text x="680" y="86" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace">AI Intent Decoding</text>
          {/* small network */}
          <g>
            <circle className="node" cx="615" cy="104" r="8" fill="#1b1b1b" stroke="#2a2a2a" />
            <circle className="node" cx="650" cy="104" r="8" fill="#1b1b1b" stroke="#2a2a2a" />
            <circle className="node" cx="685" cy="104" r="8" fill="#1b1b1b" stroke="#2a2a2a" />
            <circle className="node" cx="720" cy="104" r="8" fill="#1b1b1b" stroke="#2a2a2a" />
            <line x1="623" y1="104" x2="642" y2="104" stroke="url(#edge)" className="edge" />
            <line x1="658" y1="104" x2="677" y2="104" stroke="url(#edge)" className="edge" />
            <line x1="693" y1="104" x2="712" y2="104" stroke="url(#edge)" className="edge" />
          </g>
        </g>

        {/* To outputs */}
        {!compact && (
          <>
            <line x1="680" y1="148" x2="680" y2="210" stroke="#4a4a4a" className="edge" markerEnd="url(#arrow)" />

            {/* Output panel */}
            <g>
              <rect x="520" y="210" width="320" height="160" rx="14" fill="#121212" stroke="#2a2a2a" />
              <text x="680" y="236" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace">Control Confidence</text>

              {/* Bars */}
              <g>
                <rect x="580" y="320" width="32" height="40" className="bar" fill="url(#gold)" />
                <text x="596" y="336" textAnchor="middle" fill="#bbb" fontSize="11" fontFamily="monospace">Left</text>

                <rect x="664" y="300" width="32" height="60" className="bar delay-1" fill="url(#gold)" />
                <text x="680" y="336" textAnchor="middle" fill="#bbb" fontSize="11" fontFamily="monospace">Forward</text>

                <rect x="748" y="310" width="32" height="50" className="bar delay-2" fill="url(#gold)" />
                <text x="764" y="336" textAnchor="middle" fill="#bbb" fontSize="11" fontFamily="monospace">Right</text>
              </g>
            </g>
          </>
        )}
      </svg>
    </div>
  );
}


