"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

export type IndustrySlideData = {
  title: string;
  summary: string;
  capabilities: string[];
  imageUrl: string;
  imageAlt: string;
};

const AUTO_PLAY_MS = 7000;

type IndustryCarouselProps = {
  slides: IndustrySlideData[];
};

export function IndustryCarousel({ slides }: IndustryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || slides.length === 0 || isPaused || prefersReducedMotion)
      return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, AUTO_PLAY_MS);
    return () => clearInterval(interval);
  }, [emblaApi, slides.length, isPaused, prefersReducedMotion]);

  return (
    <div
      className="relative mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <ul
          className="flex touch-pan-y gap-4 md:gap-6"
          style={{ backfaceVisibility: "hidden" }}
          aria-label="Industry applications carousel"
        >
          {slides.map((slide, index) => (
            <li
              key={slide.title}
              className="relative min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-0.5rem)] lg:flex-[0_0_calc(33.333%-0.667rem)]"
              aria-roledescription="slide"
              aria-label={`${slide.title}, slide ${index + 1} of ${slides.length}`}
            >
              <IndustrySlide data={slide} />
            </li>
          ))}
        </ul>
      </div>

      <div
        className="mt-6 flex justify-center gap-2"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={selectedIndex === index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "w-6 bg-[#0C7AFF]"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}

function IndustrySlide({ data }: { data: IndustrySlideData }) {
  return (
    <article className="group relative aspect-[4/3] md:aspect-[5/3] w-full overflow-hidden rounded-xl border border-border">
      <div className="absolute inset-0">
        <img
          src={data.imageUrl}
          alt={data.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* Subtle overlay so text stays readable; image remains the focus */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 text-left">
        <h3 className="text-lg md:text-xl font-sentient text-foreground transition-colors duration-300 group-hover:text-[#0C7AFF]">
          {data.title}
        </h3>
        <p className="mt-1.5 text-foreground/95 text-sm max-w-lg">
          {data.summary}
        </p>
        <ul className="mt-3 grid gap-1 text-sm list-disc pl-5 marker:text-[#0C7AFF]/80">
          {data.capabilities.slice(0, 3).map((cap) => (
            <li key={cap} className="text-foreground/90">
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default IndustryCarousel;
