// @ts-nocheck
"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  direction?: RevealDirection;
  delayMs?: number;
  once?: boolean;
  threshold?: number;
  children: React.ReactNode;
}

export function Reveal({
  as = "div",
  direction = "up",
  delayMs = 0,
  once = true,
  threshold = 0.12,
  className = "",
  children,
  ...rest
}: RevealProps) {
  const Tag = as as any;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      setHasAppeared(true);
      return;
    }

    const node = ref.current as Element | null;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              const timer = setTimeout(() => setVisible(true), delayMs);
              return () => clearTimeout(timer as any);
            }
            setVisible(true);
            if (once) {
              setHasAppeared(true);
            }
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs, once, threshold]);

  const baseHidden =
    direction === "up"
      ? "translate-y-6"
      : direction === "down"
      ? "-translate-y-6"
      : direction === "left"
      ? "translate-x-6"
      : direction === "right"
      ? "-translate-x-6"
      : "";

  const classes = [
    "transition-all",
    "duration-700",
    "ease-out",
    visible || hasAppeared
      ? "opacity-100 translate-x-0 translate-y-0"
      : `opacity-0 ${baseHidden}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref as any} className={classes} {...rest}>
      {children}
    </Tag>
  );
}

export default Reveal;


