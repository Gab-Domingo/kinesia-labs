// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    lottie?: any;
  }
}

export function SignalViz() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<any>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

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
      try {
        setStatus("loading");
        const lottie = await ensureLottie();
        if (!isMounted || !containerRef.current || !lottie) return;

        const res = await fetch("/assets/Audio-Wave.json", { cache: "no-store" });
        if (!res.ok) throw new Error("failed to fetch animation json");
        const data = await res.json();

        animRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data,
          rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
        });

        animRef.current?.addEventListener?.("DOMLoaded", () => {
          if (!isMounted) return;
          setStatus("ready");
        });
      } catch {
        if (!isMounted) return;
        setStatus("error");
      }
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
    <div className="aspect-[16/10] w-full rounded-lg border grid place-items-center bg-black text-white/70 overflow-hidden relative">
      <div ref={containerRef} className="w-full h-full" />
      {status !== "ready" ? (
        <div className="absolute inset-0 grid place-items-center pointer-events-none select-none">
          <div className="font-mono text-xs opacity-60">
            {status === "error" ? "Unable to load visualization" : "Loading visualization…"}
          </div>
        </div>
      ) : null}
    </div>
  );
}


