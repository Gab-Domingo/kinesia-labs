"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">BETA RELEASE</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Redefining Human–Machine Interaction
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[640px] mx-auto">
          Kinesia Labs pioneers EMG-driven interfaces that let humans control machines through muscle intent.
        </p>

        <Link className="contents max-sm:hidden" href="/#demo">
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Watch Product Demo]
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="/#demo">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Watch Product Demo]
          </Button>
        </Link>
      </div>
    </div>
  );
}
