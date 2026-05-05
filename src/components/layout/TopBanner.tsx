"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useUIStore } from "@/store/uiStore";
import { STRINGS } from "@/data/strings";

export const TopBanner = () => {
  const dismissed = useUIStore((s) => s.bannerDismissed);
  const dismiss = useUIStore((s) => s.dismissBanner);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const bannerText = STRINGS.topBanner.text
    .replace("â€“", "-")
    .replace("Â·", "·");
  const [leftTextRaw, rightTextRaw] = bannerText.split("·");
  const leftText = leftTextRaw?.trim() || "Admissions Open for 2025-26";
  const rightText = rightTextRaw?.trim() || "Limited Seats Available";

  // Prevent hydration mismatch by only rendering after mount
  if (!mounted) return null;

  return (
    <AnimatePresence initial={false}>
      {!dismissed && (
        <motion.div
          key="top-banner"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-60 overflow-hidden bg-gradient-purple text-ink-onDark"
        >
          <div className="container-wide flex min-h-11 items-center justify-between gap-3 py-2">
            <Link
              href="/admissions"
              className="group flex min-w-0 flex-1 items-center justify-start gap-2 text-left font-sans text-[10px] tracking-[0.16em] uppercase md:gap-3 md:text-xs md:tracking-[0.18em]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center md:h-11 md:w-11" aria-hidden>
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-silver animate-pulse" />
              </span>
              <span className="truncate text-ink-onDark/90">{leftText}</span>
              <span className="hidden h-3.5 w-px bg-ink-onDark/35 md:ml-[56px] md:inline-block" aria-hidden />
              <span className="hidden text-ink-onDark/80 md:inline">{rightText}</span>
            </Link>

            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/admissions"
                className="ml-2 inline-flex items-center font-sans text-[10px] tracking-[0.16em] uppercase text-silver transition-colors hover:text-ink-onDark md:text-xs md:tracking-[0.18em]"
              >
                {STRINGS.topBanner.cta}
              </Link>
              <button
                type="button"
                onClick={dismiss}
                aria-label={STRINGS.topBanner.dismiss}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-onDark/70 transition-colors hover:bg-ink-onDark/10 hover:text-ink-onDark"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
