"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { COLLEGE } from "@/data/college";
import { STRINGS } from "@/data/strings";
import { CTAButton } from "@/components/shared/CTAButton";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import Image from "next/image";

import heroImg from "@/assets/hero-campus.jpg";
import logo from "@/assets/dvacas-logo.jpeg";

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "22%"]
  );

  const overlayY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "-12%"]
  );

  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.4]);

  const ease = [0.22, 1, 0.36, 1] as const;
  const eyebrowText = STRINGS.hero.eyebrow;
  const affix = " - Affiliated to University of Madras";
  const eyebrowBase = eyebrowText.endsWith(affix)
    ? eyebrowText.slice(0, -affix.length)
    : eyebrowText;

  return (
    <section
      ref={ref}
      className="relative min-h-svh overflow-hidden bg-brand-primary text-ink-onDark"
    >
      {/* Parallax image */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt=""
          fill
          priority
          className="object-cover scale-110"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-primary/85 via-brand-primary/65 to-brand-primary/95" />
      <div className="absolute inset-0 grain-bg opacity-50" />

      <motion.div
        style={{ y: overlayY, opacity: fade }}
        className="relative z-10 container-wide flex min-h-svh flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="flex items-center gap-3"
        >
          <Image
            src={logo}
            alt={STRINGS.hero.badgeAlt}
            width={48}
            height={48}
            className="rounded-full ring-1 ring-ink-onDark/30"
          />

          <span className="font-sans text-[10px] uppercase tracking-[0.22em] leading-normal text-purple-pale md:text-xs md:leading-normal">
            {eyebrowBase}
            <span className="hidden md:inline">{" - "}</span>
            <span className="mt-1 block text-(--purple-tint) md:mt-0 md:inline">
              Affiliated to University of Madras
            </span>
          </span>
        </motion.div>

        {/* Heading */}
        <h1 className="mt-8 max-w-5xl font-display font-light text-4xl leading-[1.02] md:text-7xl lg:text-[5.5rem]">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="block"
          >
            {STRINGS.hero.headingLineOne}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease }}
            className="block italic font-body text-purple-pale"
          >
            {STRINGS.hero.headingLineTwoItalic}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease }}
            className="block"
          >
            {STRINGS.hero.headingLineThree}
          </motion.span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62, ease }}
          className="mt-8 max-w-176 font-body text-base text-ink-onDark/85 md:text-lg"
        >
          {STRINGS.hero.sub}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.74, ease }}
          className="mt-10 flex flex-col gap-3 sm:max-w-176 sm:flex-row sm:gap-4"
        >
          <CTAButton
            variant="onDark"
            size="lg"
            fullWidth
            iconRight={<ArrowUpRight className="h-4 w-4" />}
            className="sm:w-86"
          >
            {STRINGS.hero.primaryCta}
          </CTAButton>

          <CTAButton
            variant="outlineDark"
            size="lg"
            fullWidth
            className="sm:w-86"
          >
            {STRINGS.hero.secondaryCta}
          </CTAButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
          className="mt-14 grid w-full max-w-176 grid-cols-3 border-t border-ink-onDark/15 pt-8"
        >
          <Stat value={COLLEGE.stats.placementRate} suffix="%" label="Placement" className="text-left" />
          <Stat value={COLLEGE.stats.recruitersCount} suffix="+" label="Recruiters" className="text-center" />
          <Stat value={COLLEGE.stats.coursesOffered} label="Programmes" className="text-right" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-6 right-6 hidden items-center gap-3 md:flex"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-purple-pale">
          {STRINGS.hero.scroll}
        </span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4 text-purple-pale" />
        </motion.span>
      </motion.div>
    </section>
  );
};

const Stat = ({ value, suffix = "", label, className = "" }: any) => (
  <div className={className}>
    <p className="font-display text-2xl text-(--purple-tint) md:text-4xl">
      <AnimatedCounter target={value} suffix={suffix} />
    </p>
    <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-purple-pale">
      {label}
    </p>
  </div>
);
