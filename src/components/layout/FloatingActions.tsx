"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { COLLEGE } from "@/data/college";
import { STRINGS } from "@/data/strings";

export const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waNumber = COLLEGE.whatsapp.replace(/\D/g, "");

  return (
    <>
      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={STRINGS.whatsapp.label}
        className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_38%)] text-white shadow-elegant transition-transform hover:scale-105 md:bottom-8 md:right-8"
      >
        <MessageCircle className="h-6 w-6" />
        <span
          className="absolute inset-0 -z-10 rounded-full bg-[hsl(142_70%_38%)] opacity-60 blur-md transition-opacity group-hover:opacity-90"
          aria-hidden
        />
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            aria-label={STRINGS.scrollTop.label}
            className="fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-ink-onDark shadow-elegant transition-transform hover:scale-105 md:bottom-8 md:left-8"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};