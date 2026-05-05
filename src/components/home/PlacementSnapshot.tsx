"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PLACEMENTS } from "@/data/college";
import { STRINGS } from "@/data/strings";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Badge } from "@/components/shared/Badge";

export const PlacementSnapshot = () => {
  return (
    <section className="section relative overflow-hidden bg-brand-primary text-ink-onDark grain-bg">
      <div
        className="absolute -top-40 right-[-10%] h-125 w-125 rounded-full opacity-30 blur-3xl bg-purple-rich"
        aria-hidden
      />

      <div className="container-wide relative z-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={STRINGS.placements.eyebrow}
              heading={STRINGS.placements.heading}
              sub={STRINGS.placements.sub}
              invert
            />

            <Link
              href="/placements"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-silver story-link"
            >
              {STRINGS.placements.seeMore}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-ink-onDark/15"
            >
              <div className="flex items-baseline gap-6 py-8">
                <span className="font-display text-7xl text-silver md:text-[10rem]">
                  <AnimatedCounter target={PLACEMENTS.stats.placementRate} suffix="%" />
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.22em] text-purple-pale">
                  {STRINGS.placements.rate}
                </span>
              </div>
            </motion.div>

            <div className="grid w-full grid-cols-3 border-t border-ink-onDark/15 pt-8">
              <Stat
                value={PLACEMENTS.stats.avgSalaryLPA}
                prefix="₹"
                suffix=" L"
                decimals={1}
                label={STRINGS.placements.avg}
                className="text-left"
              />

              <Stat
                value={PLACEMENTS.stats.highestSalaryLPA}
                prefix="₹"
                suffix=" L"
                label={STRINGS.placements.highest}
                className="text-center"
              />

              <Stat
                value={PLACEMENTS.stats.recruitersVisited}
                suffix="+"
                label={STRINGS.placements.recruiters}
                className="text-right"
              />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
              {PLACEMENTS.topRecruiters.slice(0, 12).map((r) => (
                <Badge
                  key={r.name}
                  size="md"
                  className="h-10 w-full justify-center rounded-lg border border-ink-onDark/20 bg-ink-onDark/5 px-3 text-center text-ink-onDark/85 backdrop-blur-sm"
                >
                  {r.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, prefix = "", suffix = "", decimals = 0, label, className = "" }: any) => (
  <div className={className}>
    <p className="font-display text-3xl md:text-4xl">
      {prefix}
      <AnimatedCounter target={value} decimals={decimals} suffix={suffix} />
    </p>
    <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-purple-pale">{label}</p>
  </div>
);
