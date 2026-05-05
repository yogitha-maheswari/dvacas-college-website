"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { STRINGS } from "@/data/strings";
import { CTAButton } from "@/components/shared/CTAButton";

export const CTABanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container-wide py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-xl bg-gradient-navy p-8 text-ink-onDark shadow-deep md:p-16 lg:p-20"
        >
          <div className="absolute inset-0 grain-bg opacity-60" aria-hidden />

          {/* Orb 1 */}
          <div
            className="absolute -right-40 -top-40 h-125 w-125 rounded-full opacity-40 blur-3xl bg-purple-rich"
            aria-hidden
          />

          {/* Orb 2 */}
          <div
            className="absolute -bottom-32 -left-20 h-75 w-75 rounded-full opacity-35 blur-3xl bg-purple-rich"
            aria-hidden
          />

          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow text-purple-pale mb-5 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-silver" aria-hidden />
              {STRINGS.ctaBanner.eyebrow}
            </p>

            <h2 className="font-display font-light text-4xl leading-[1.05] text-balance text-purple-pale md:text-6xl lg:text-7xl">
              {STRINGS.ctaBanner.heading}
            </h2>

            <p className="mt-6 max-w-none whitespace-nowrap font-body text-base text-ink-onDark/85 md:text-lg">
              {STRINGS.ctaBanner.sub}
            </p>

            <div className="mt-24 flex w-full max-w-3xl flex-col gap-3 sm:flex-row">
              <CTAButton
                variant="onDark"
                size="lg"
                fullWidth
                iconRight={<ArrowUpRight className="h-4 w-4" />}
                className="sm:flex-1"
              >
                {STRINGS.ctaBanner.primary}
              </CTAButton>

              <CTAButton
                variant="outlineDark"
                size="lg"
                fullWidth
                className="sm:flex-1"
              >
                {STRINGS.ctaBanner.secondary}
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
