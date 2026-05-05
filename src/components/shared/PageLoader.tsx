"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useSyncExternalStore } from "react";
import { useUIStore } from "@/store/uiStore";
import { STRINGS } from "@/data/strings";

const noopSubscribe = () => () => { };

export const PageLoader = () => {
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const hasLoaded = useUIStore((s) => s.hasLoaded);
  const markLoaded = useUIStore((s) => s.markLoaded);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!mounted) return;
    if (hasLoaded) return;

    const t = window.setTimeout(
      () => markLoaded(),
      reduce ? 700 : 5000
    );

    return () => window.clearTimeout(t);
  }, [mounted, hasLoaded, markLoaded, reduce]);

  if (!mounted || hasLoaded) return null;

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-200 flex items-center justify-center bg-brand-primary"
    >
      <div className="absolute inset-0 grain-bg opacity-90" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 h-px w-16 bg-silver"
          aria-hidden
        />

        <motion.h1
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-2xl text-ink-onDark md:text-4xl"
        >
          {STRINGS.loader.institution}
        </motion.h1>

        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-sans text-xs uppercase tracking-[0.3em] text-purple-pale"
        >
          {STRINGS.loader.sub}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="mt-10 h-[2px] w-24 origin-center bg-[var(--gold-soft)]"
          aria-hidden
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.4 }}
          className="mt-6 font-body italic text-purple-pale text-sm"
        >
          {STRINGS.loader.tagline}
        </motion.p>
      </div>
    </motion.div>
  );
};
