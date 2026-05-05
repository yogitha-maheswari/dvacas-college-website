"use client";

import { motion } from "framer-motion";
import { COLLEGE } from "@/data/college";
import { STRINGS } from "@/data/strings";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const items = [
  { label: STRINGS.stats.students, target: COLLEGE.stats.studentsEnrolled, suffix: "+" },
  { label: STRINGS.stats.faculty, target: COLLEGE.stats.facultyCount, suffix: "+" },
  { label: STRINGS.stats.courses, target: COLLEGE.stats.coursesOffered, suffix: "" },
  { label: STRINGS.stats.placements, target: COLLEGE.stats.placementRate, suffix: "%" },
];

export const StatsBar = () => {
  return (
    <section className="relative border-y border-border-subtle bg-surface-canvas">
      <div className="container-wide py-12 md:py-16">

        <p className="eyebrow text-center mb-8">
          {STRINGS.stats.eyebrow}
        </p>

        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {items.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center"
            >
              <p className="font-display text-4xl text-brand-primary md:text-6xl">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </p>

              <span className="mt-3 h-px w-8 bg-silver" aria-hidden />

              <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.2em] text-ink-tertiary">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};