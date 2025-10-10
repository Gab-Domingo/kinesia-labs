// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    lottie?: any;
  }
}

export function SignalViz() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    async function ensureLottie() {
      if (window.lottie) return window.lottie;
      await new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
        script.async = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
      return window.lottie;
    }

    async function loadAnimation() {
      const lottie = await ensureLottie();
      if (!isMounted || !containerRef.current || !lottie) return;

      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/assets/Audio-Wave.json",
      });
    }

    loadAnimation();

    return () => {
      isMounted = false;
      try {
        animRef.current?.destroy?.();
      } catch {}
    };
  }, []);

  return (
    <div className="aspect-[16/10] w-full rounded-lg border grid place-items-center text-black/60 overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}


