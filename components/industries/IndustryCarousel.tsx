"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

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
    return () => emblaApi.off("select", onSelect);
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
      onFocusWithin={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
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

      <div className="mt-6 flex items-center justify-center gap-3">
        <Button
          type="button"
          variant="default"
          size="sm"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="!h-10 !px-4"
        >
          <ChevronLeft className="size-5" />
        </Button>
        <div
          className="flex gap-2"
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
        <Button
          type="button"
          variant="default"
          size="sm"
          onClick={scrollNext}
          aria-label="Next slide"
          className="!h-10 !px-4"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

function IndustrySlide({ data }: { data: IndustrySlideData }) {
  return (
    <article className="group relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden rounded-xl border border-border">
      <div className="absolute inset-0">
        <img
          src={data.imageUrl}
          alt={data.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 transition-opacity duration-300 group-hover:from-black/92 group-hover:via-black/55 group-hover:to-black/35"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-left">
        <h3 className="text-xl md:text-2xl font-sentient text-foreground transition-colors duration-300 group-hover:text-[#0C7AFF]">
          {data.title}
        </h3>
        <p className="mt-2 text-foreground/90 text-sm md:text-base max-w-xl">
          {data.summary}
        </p>
        <ul className="mt-4 grid gap-1.5 text-sm list-disc pl-5 marker:text-[#0C7AFF]/80">
          {data.capabilities.slice(0, 3).map((cap) => (
            <li key={cap} className="text-foreground/85">
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default IndustryCarousel;
