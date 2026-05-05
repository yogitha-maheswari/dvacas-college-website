"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";
import { MANAGEMENT } from "@/data/college";
import { STRINGS } from "@/data/strings";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Image from "next/image";
import founderImg from "@/assets/founder.jpg";

export const AboutSnapshot = () => {
  return (
    <section className="section relative overflow-hidden">
      {/* Decorative background gradients to show through frosted glass */}
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-mid/10 blur-[120px]" />

      <div className="container-wide relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Image block */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-xl shadow-elegant"
            >
              <Image
                src={founderImg}
                alt={MANAGEMENT.founder.name}
                width={1024}
                height={1280}
                className="aspect-4/5 w-full object-cover"
                priority={false}
              />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-primary to-transparent p-6 text-ink-onDark md:p-8">
                <p className="font-display text-xl text-white md:text-2xl">
                  {MANAGEMENT.founder.name}
                </p>
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-purple-pale mt-1">
                  {STRINGS.about.quoteAttribution}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Content block */}
          <div className="lg:col-span-7 lg:pt-6">
            <SectionHeader
              eyebrow={STRINGS.about.eyebrow}
              heading={STRINGS.about.heading}
              sub={STRINGS.about.body}
            />

            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 border-l-2 border-silver pl-6 md:pl-8"
            >
              <Quote className="h-7 w-7 text-purple-mid" aria-hidden />

              <blockquote className="mt-4 font-display text-xl italic leading-snug text-ink-primary md:text-2xl">
                "{MANAGEMENT.founder.quote}"
              </blockquote>
            </motion.figure>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 font-sans text-sm font-medium text-brand-primary story-link"
            >
              {STRINGS.about.learnMore}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
