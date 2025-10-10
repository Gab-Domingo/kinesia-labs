// @ts-nocheck
"use client";

export function IntentDecodingDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
      <svg viewBox={compact ? "0 0 800 260" : "0 0 800 450"} className="w-full h-auto" role="img" aria-label="EMG to intent decoding schematic">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EBB800" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#EBB800" stopOpacity="0" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="800" height={compact ? 260 : 450} fill="#0B0B0B" />

        <g>
          <rect x="40" y="60" width="180" height="80" rx="12" fill="#121212" stroke="#2a2a2a" />
          <text x="130" y="108" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace">Signal Acquisition</text>
          <path d="M 60 120 Q 90 60, 120 120 T 180 120" stroke="#EBB800" strokeWidth="2" fill="none" />
        </g>

        <g>
          <rect x="310" y="60" width="180" height="80" rx="12" fill="#121212" stroke="#2a2a2a" />
          <text x="400" y="108" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace">Filtering & Denoising</text>
          <rect x="330" y="76" width="140" height="10" fill="url(#g1)" filter="url(#softGlow)" />
          <rect x="330" y="94" width="140" height="10" fill="url(#g1)" />
          <rect x="330" y="112" width="140" height="10" fill="url(#g1)" />
        </g>

        <g>
          <rect x="580" y="60" width="180" height="80" rx="12" fill="#121212" stroke="#2a2a2a" />
          <text x="670" y="108" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace">AI Intent Decoding</text>
          <circle cx="635" cy="100" r="12" fill="#1b1b1b" stroke="#2a2a2a" />
          <circle cx="670" cy="100" r="12" fill="#1b1b1b" stroke="#2a2a2a" />
          <circle cx="705" cy="100" r="12" fill="#1b1b1b" stroke="#2a2a2a" />
        </g>

        <g stroke="#2a2a2a">
          <line x1="220" y1="100" x2="310" y2="100" stroke="#3a3a3a" />
          <line x1="490" y1="100" x2="580" y2="100" stroke="#3a3a3a" />
        </g>

        {compact ? null : (
          <>
            <g>
              <rect x="310" y="210" width="180" height="80" rx="12" fill="#121212" stroke="#2a2a2a" />
              <text x="400" y="258" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace">Low-Latency Control</text>
            </g>
            <g>
              <rect x="580" y="210" width="180" height="80" rx="12" fill="#121212" stroke="#2a2a2a" />
              <text x="670" y="258" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace">Wheelchair/Robot</text>
            </g>
            <g stroke="#3a3a2a">
              <line x1="670" y1="140" x2="670" y2="210" />
              <line x1="490" y1="250" x2="580" y2="250" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
}


