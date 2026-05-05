"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  sub?: string;
  crumbs?: Crumb[];
  align?: "left" | "center";
  variant?: "navy" | "wash";
  children?: React.ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

export const PageHero = ({
  eyebrow,
  title,
  italicWord,
  sub,
  crumbs,
  align = "left",
  variant = "navy",
  children,
}: PageHeroProps) => {
  const dark = variant === "navy";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        dark
          ? "bg-brand-primary text-ink-onDark"
          : "bg-surface-base text-ink-primary"
      )}
    >
      {dark && (
        <>
          <div
            className="absolute inset-0 bg-linear-to-br from-brand-primary via-brand-secondary to-purple-rich opacity-90"
            aria-hidden
          />
          <div className="absolute inset-0 grain-bg opacity-40" aria-hidden />
          <div
            className="absolute -top-40 -right-32 h-112 w-md rounded-full bg-purple-rich/40 blur-[120px]"
            aria-hidden
          />
        </>
      )}

      <div
        className={cn(
          "container-wide relative z-10 pb-20 pt-32 md:pb-28 md:pt-40 lg:pb-32 lg:pt-44",
          align === "center" && "text-center"
        )}
      >
        {/* Breadcrumbs */}
        {crumbs && crumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            aria-label="Breadcrumb"
            className={cn(
              "mb-8 flex flex-wrap items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.18em]",
              dark ? "text-purple-pale" : "text-ink-tertiary",
              align === "center" && "justify-center"
            )}
          >
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-silver transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className={dark ? "text-ink-onDark" : "text-ink-primary"}>
                    {c.label}
                  </span>
                )}

                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 opacity-60" />
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
            className={cn(
              "eyebrow mb-5 inline-flex items-center gap-3",
              dark && "text-purple-pale",
              align === "center" && "justify-center"
            )}
          >
            <span
              className={cn(
                "h-px w-8",
                dark ? "bg-purple-pale/60" : "bg-purple-mid/60"
              )}
              aria-hidden
            />
            {eyebrow}
          </motion.p>
        )}

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
          className={cn(
            "font-display text-4xl leading-[1.04] text-balance md:text-6xl lg:text-7xl",
            dark ? "text-ink-onDark" : "text-ink-primary",
            align === "center" && "mx-auto max-w-4xl"
          )}
        >
          {title}{" "}
          {italicWord && (
            <span
              className={cn(
                "italic font-body font-normal",
                dark ? "text-purple-pale" : "text-purple-rich"
              )}
            >
              {italicWord}
            </span>
          )}
        </motion.h1>

        {/* Subtext */}
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className={cn(
              "mt-6 max-w-2xl font-body text-base leading-relaxed md:text-lg",
              dark ? "text-ink-onDark/80" : "text-ink-secondary",
              align === "center" && "mx-auto"
            )}
          >
            {sub}
          </motion.p>
        )}

        {/* Extra content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};