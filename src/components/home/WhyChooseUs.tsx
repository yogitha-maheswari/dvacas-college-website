"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  TrendingUp,
  Users,
  FlaskConical,
  Landmark,
  Trees,
} from "lucide-react";
import { STRINGS } from "@/data/strings";
import { SectionHeader } from "@/components/shared/SectionHeader";

const icons = [GraduationCap, TrendingUp, Users, FlaskConical, Landmark, Trees];

// Uses only CSS variables from globals.css
const CARD_GRADIENTS = [
  "var(--gradient-navy)",
  "var(--gradient-purple)",
  "var(--gradient-navy)",
  "var(--gradient-purple)",
  "var(--gradient-navy)",
  "var(--gradient-purple)",
];

function StackCard({
  item,
  index,
  Icon,
}: {
  item: { title: string; body: string };
  index: number;
  Icon: React.ElementType;
}) {
  return (
    <div
      className="sticky"
      style={{ top: `${80 + index * 16}px` }}
    >
      {/* Phantom depth layers — no blur, clean sharp edges */}
      <div
        className="absolute inset-x-6 -bottom-2 h-full rounded-3xl opacity-20"
        style={{ background: CARD_GRADIENTS[index], transform: "scale(0.97)" }}
      />
      <div
        className="absolute inset-x-12 -bottom-4 h-full rounded-3xl opacity-10"
        style={{ background: CARD_GRADIENTS[index], transform: "scale(0.93)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        style={{ background: CARD_GRADIENTS[index] }}
        className="relative z-10 rounded-3xl shadow-deep overflow-hidden min-h-[70vh] flex flex-col"
      >
        {/* Decorative orbs from purple/brand tokens */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--purple-mid)" }}
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full opacity-10 blur-2xl"
          style={{ background: "var(--purple-rich)" }}
        />

        {/* Card number watermark — bottom-right so it's not clipped */}
        <span
          className="absolute bottom-6 right-10 select-none font-display opacity-[0.08] leading-none"
          style={{ fontSize: "clamp(100px, 14vw, 180px)", color: "var(--surface-canvas)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col p-10 md:p-16 lg:p-20">

          {/* Top row: icon + index */}
          <div className="flex items-start justify-between">
            <div
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Icon className="h-6 w-6" style={{ color: "var(--text-on-dark)" }} strokeWidth={1.5} />
            </div>

            <span
              className="font-sans text-xs uppercase tracking-[0.2em] opacity-40"
              style={{ color: "var(--text-on-dark)" }}
            >
              {String(index + 1).padStart(2, "0")} / {STRINGS.whyUs.items.length.toString().padStart(2, "0")}
            </span>
          </div>

          {/* Spacer — pushes content to the bottom third */}
          <div className="flex-1" />

          {/* Main content */}
          <div className="max-w-3xl">
            {/* Thin rule */}
            <div
              className="mb-8 h-px w-16 opacity-30"
              style={{ background: "var(--text-on-dark)" }}
            />

            <h3
              className="font-display leading-dense"
              style={{
                color: "var(--text-on-dark)",
                fontSize: "clamp(32px, 4vw, 56px)",
              }}
            >
              {item.title}
            </h3>

            <p
              className="mt-5 font-body leading-relaxed max-w-xl"
              style={{ color: "var(--purple-pale)", fontSize: "var(--text-lg)" }}
            >
              {item.body}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export const WhyChooseUs = () => {
  const items = STRINGS.whyUs.items;

  return (
    <section className="relative bg-surface-base py-24">
      <div className="container-wide">

        <SectionHeader
          eyebrow={STRINGS.whyUs.eyebrow}
          heading={STRINGS.whyUs.heading}
          sub={STRINGS.whyUs.sub}
        />

        {/* Stack scroll area */}
        <div className="mt-16 space-y-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StackCard
                key={item.title}
                item={item}
                index={i}
                Icon={Icon}
              />
            );
          })}
        </div>

        {/* Clear the last sticky card */}
        <div className="h-24" />
      </div>
    </section>
  );
};