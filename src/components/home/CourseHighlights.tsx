"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock as ClockIcon, Users as UsersIcon } from "lucide-react";
import { COURSES } from "@/data/college";
import { STRINGS } from "@/data/strings";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/shared/Badge";
import { cn } from "@/lib/utils";

// Import images from src/assets/courses
import baEnglishImg from "@/assets/courses/ba-english.png";
import baEconomicsImg from "@/assets/courses/ba-economics.png";
import baHistoryImg from "@/assets/courses/ba-history.png";
import bcomGeneralImg from "@/assets/courses/bcom-general.png";
import bbaImg from "@/assets/courses/bba.png";
// cSpell:ignore bcom
import bcomCsImg from "@/assets/courses/bcom-cs.png";
import bscCsImg from "@/assets/courses/bsc-cs.png";
import bscItImg from "@/assets/courses/bsc-it.png";
import bscMathsImg from "@/assets/courses/bsc-maths.png";
import bscPhyImg from "@/assets/courses/bsc-phy.png";
import bscChemImg from "@/assets/courses/bsc-chem.png";
import bcaImg from "@/assets/courses/bca.png";

const courseImages: Record<string, any> = {
  "ba-english": baEnglishImg,
  "ba-economics": baEconomicsImg,
  "ba-history": baHistoryImg,
  // cSpell:disable-next-line
  "bcom-general": bcomGeneralImg,
  "bba": bbaImg,
  // cSpell:disable-next-line
  "bcom-cs": bcomCsImg,
  "bsc-cs": bscCsImg,
  "bsc-it": bscItImg,
  "bsc-maths": bscMathsImg,
  "bsc-physics": bscPhyImg,
  "bsc-chemistry": bscChemImg,
  "bca": bcaImg,
};

type Filter = "all" | "arts" | "commerce" | "science";

export const CourseHighlights = () => {
  const [filter, setFilter] = useState<Filter>("all");

  // Move filterLabels inside to avoid top-level ReferenceError during module evaluation
  const filterLabels: Record<Filter, string> = useMemo(() => ({
    all: STRINGS.courses.filters.all,
    arts: STRINGS.courses.filters.arts,
    commerce: STRINGS.courses.filters.commerce,
    science: STRINGS.courses.filters.science,
  }), []);

  const filtered = useMemo(() => {
    if (filter === "all") {
      // Hide science and computer applications from the "All" highlights view as requested
      return COURSES.filter((c) => c.category !== "science" && c.category !== "computer-applications").slice(0, 6);
    }
    return COURSES.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <section className="section relative bg-surface-base overflow-hidden">
      {/* Decorative background gradients to show through frosted glass */}
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-purple-mid/20 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-96 w-96 rounded-full bg-brand-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-150 w-150 rounded-full bg-purple-tint/30 blur-[140px]" />

      <div className="container-wide relative z-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={STRINGS.courses.eyebrow}
            heading={STRINGS.courses.heading}
            sub={STRINGS.courses.sub}
            className="max-w-2xl [&_h2]:font-light!"
          />

          <Link
            href="/courses"
            className="hidden font-sans text-sm font-medium text-brand-primary story-link md:inline-block"
          >
            {STRINGS.courses.viewAll} →
          </Link>
        </div>

        {/* Filters */}
        <div className="mt-10 grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:col-span-2">
            {(Object.keys(filterLabels) as Filter[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={cn(
                  "h-11 w-full rounded-lg border px-5 font-sans text-xs uppercase tracking-[0.16em] transition-all",
                  filter === key
                    ? "bg-brand-primary text-ink-onDark border-brand-primary shadow-md"
                    : "bg-white/60 backdrop-blur-md text-ink-secondary border-white/20 hover:border-brand-primary"
                )}
              >
                {filterLabels[key]}
              </button>
            ))}
          </div>
        </div>

        {/* Frosted Glass Program Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((course, i) => (
              <motion.article
                key={course.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05, // Slightly faster staggered delay for larger lists
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backdropFilter: "blur(32px) saturate(1.8) brightness(1.05)",
                  WebkitBackdropFilter: "blur(32px) saturate(1.8) brightness(1.05)",
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/20 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-lg hover:bg-white/30"
              >
                {/* Grain / noise texture overlay — sits over the entire card */}
                {/* cSpell:disable-next-line */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-[0.18] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                  }}
                />

                {/* Upper Section: Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  {courseImages[course.id] ? (
                    <Image
                      src={courseImages[course.id]}
                      alt={course.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      placeholder="blur"
                    />
                  ) : (
                    <div className="h-full w-full bg-brand-primary/10 flex items-center justify-center">
                       <span className="font-sans text-[10px] uppercase tracking-widest text-ink-tertiary">Image Pending</span>
                    </div>
                  )}
                  {/* Sophisticated Color Wash to strictly sync with Oxford Blue & Purple palette */}
                  <div className="absolute inset-0 z-10 bg-linear-to-tr from-[#1D2639]/40 via-transparent to-[#46315C]/30 mix-blend-multiply opacity-90" />
                  <div className="absolute inset-0 z-10 bg-[#1D2639]/20 mix-blend-color" />
                  
                  {/* Category Badge on Image - Glass Style */}
                  <div className="absolute left-5 top-5">
                    <Badge
                      variant="navy"
                      size="xs"
                      className="bg-brand-primary/80 backdrop-blur-md border border-white/10 text-white shadow-sm"
                    >
                      {course.department}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-ink-tertiary">
                      {course.code}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl text-ink-primary md:text-2xl">
                    {course.name}
                  </h3>
                  
                  <p className="mt-3 line-clamp-3 font-body text-sm leading-relaxed text-ink-secondary">
                    {course.overview}
                  </p>

                  <div className="flex-1" />

                  {/* Frosted Footer inside Card Body */}
                  <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-white/40 bg-white/30 p-4 backdrop-blur-md shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                        <ClockIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-ink-tertiary">
                          Duration
                        </p>
                        <p className="font-sans text-xs font-semibold text-ink-primary">
                          {course.duration.split(" ")[0]} Years
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                        <UsersIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-ink-tertiary">
                          Seats
                        </p>
                        <p className="font-sans text-xs font-semibold text-ink-primary">
                          {course.totalSeats} Available
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Explore Link */}
                  <div className="mt-6">
                    <Link
                      href={`/courses/${course.category}/${course.id}`}
                      className="group/link inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-primary"
                    >
                      {STRINGS.courses.explore}
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 transition-all group-hover/link:bg-brand-primary group-hover/link:text-white">
                        <ArrowUpRight className="h-3 w-3" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Animated shimmer sweep effect on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-glass-sweep" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
