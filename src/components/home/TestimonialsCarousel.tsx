"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/college";
import { STRINGS } from "@/data/strings";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => paginate(1), 6000);
    return () => clearInterval(t);
  }, [isPaused, paginate]);

  const active = TESTIMONIALS[index];

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 60 : -60, opacity: 0 }),
  };

  return (
    <section
      className="section relative overflow-hidden bg-brand-primary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #68507B 0%, transparent 60%)" }}
      />

      <div className="container-wide relative z-10">

        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14">
          <SectionHeader
            eyebrow={STRINGS.testimonials.eyebrow}
            heading={STRINGS.testimonials.heading}
            className="max-w-none [&_*]:text-white [&_.eyebrow]:text-purple-pale [&_h2]:whitespace-nowrap"
          />
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-purple-pale hover:text-white transition-colors story-link"
          >
            Read all stories
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Carousel card */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-deep">

          <div className="grid md:grid-cols-[1fr_auto] gap-0">

            {/* Quote area */}
            <div className="relative min-h-[320px] p-10 md:p-14 flex flex-col justify-between">

              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={active.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-purple-pale mb-6">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-display text-lg md:text-xl italic leading-relaxed text-white/90 max-w-2xl">
                    "{active.quote}"
                  </blockquote>

                  {/* Author */}
                  <figcaption className="mt-8 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-purple-rich/60 border border-white/20 flex items-center justify-center shrink-0">
                      <span className="font-display text-sm text-white">
                        {active.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-sm text-white">{active.name}</p>
                      <p className="mt-0.5 font-sans text-[10px] uppercase tracking-[0.18em] text-purple-pale">
                        {active.type === "student"
                          ? `${active.course} · ${active.year}`
                          : (active as { relation: string }).relation}
                      </p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              {/* Pagination dots */}
              <div className="mt-10 flex items-center gap-3">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-white" : "w-2 bg-white/25 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right decorative column */}
            <div className="hidden md:flex flex-col items-center justify-between p-10 border-l border-white/10 gap-8 min-w-[140px]">
              <Quote className="h-14 w-14 text-purple-pale/90" aria-hidden />

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  aria-label="Previous testimonial"
                  className="h-12 w-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all hover:bg-white/20 hover:scale-105"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  aria-label="Next testimonial"
                  className="h-12 w-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all hover:bg-white/20 hover:scale-105"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/30 [writing-mode:vertical-rl] rotate-180">
                {index + 1} / {TESTIMONIALS.length}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
