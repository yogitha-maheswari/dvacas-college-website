"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { STRINGS } from "@/data/strings";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Image from "next/image";

import library from "@/assets/campus-library.jpg";
import lab from "@/assets/campus-lab.jpg";
import students from "@/assets/campus-students.jpg";
import aerial from "@/assets/campus-aerial.jpg";

const tiles = [
  {
    src: library,
    label: "Central Library",
    caption: "25,000 volumes · 50,000 e-books",
  },
  {
    src: aerial,
    label: "The Quadrangle",
    caption: "8 acres in Arumbakkam, Chennai",
  },
  {
    src: lab,
    label: "AI & ML Lab",
    caption: "GPU-powered research workstations",
  },
  {
    src: students,
    label: "Campus Life",
    caption: "Clubs, sport, and a thriving community",
  },
];

export const CampusGallery = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + tiles.length) % tiles.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="section relative bg-surface-base overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeader
            eyebrow={STRINGS.gallery.eyebrow}
            heading={STRINGS.gallery.heading}
            sub={STRINGS.gallery.sub}
            className="max-w-2xl"
          />

          <Link
            href="/campus"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-brand-primary story-link"
          >
            {STRINGS.gallery.visit}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div 
          className="relative group aspect-16/9 md:aspect-21/9 overflow-hidden rounded-2xl shadow-deep bg-brand-primary"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              <Image
                src={tiles[index].src}
                alt={tiles[index].label}
                fill
                className="object-cover"
                priority
              />
              
              {/* Enhanced Overlay for better text visibility */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-primary via-brand-primary/40 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-brand-primary/10" />

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-ink-onDark">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl mb-3 text-white">
                    {tiles[index].label}
                  </h3>
                  <p className="font-sans text-sm md:text-base uppercase tracking-[0.2em] text-purple-pale max-w-xl">
                    {tiles[index].caption}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none z-20">
            <button
              onClick={() => paginate(-1)}
              className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:bg-white/20 hover:scale-105 pointer-events-auto"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:bg-white/20 hover:scale-105 pointer-events-auto"
              aria-label="Next slide"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {tiles.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-surface-canvas" : "w-2 bg-surface-canvas/30 hover:bg-surface-canvas/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
