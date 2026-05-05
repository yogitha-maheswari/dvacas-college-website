"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  sub?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  heading,
  sub,
  align = "left",
  invert = false,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "eyebrow mb-4 inline-flex items-center gap-3",
            invert && "text-purple-pale"
          )}
        >
          <span
            className={cn(
              "h-px w-8",
              invert ? "bg-purple-pale/60" : "bg-purple-mid/60"
            )}
            aria-hidden
          />
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "font-display text-3xl leading-[1.08] text-balance md:text-h2",
          invert ? "text-ink-onDark" : "text-ink-primary"
        )}
      >
        {heading}
      </motion.h2>

      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-5 font-body text-base leading-relaxed text-pretty md:text-lg",
            invert ? "text-purple-pale" : "text-ink-secondary"
          )}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
};