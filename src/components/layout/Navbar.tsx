"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useUIStore } from "@/store/uiStore";
import { COLLEGE, NAV_LINKS } from "@/data/college";
import { STRINGS } from "@/data/strings";
import { CTAButton } from "@/components/shared/CTAButton";
import Image from "next/image";
import logo from "@/assets/dvacas-logo.jpeg";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const open = useUIStore((s) => s.mobileMenuOpen);
  const setOpen = useUIStore((s) => s.setMobileMenuOpen);

  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, setOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full transition-all duration-500 bg-transparent"
        style={mounted && scrolled ? {
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderBottom: '1px solid var(--border-subtle)'
        } : undefined}
      >
        <div className="container-wide flex h-16 items-center justify-between gap-3 md:h-20">
          <Link href="/" className="flex items-center gap-2" aria-label={COLLEGE.name}>
            <Image
              src={logo}
              alt={STRINGS.hero.badgeAlt}
              width={44}
              height={44}
              className="h-10 w-10 rounded-full ring-1 ring-border-default md:h-11 md:w-11"
            />
            <div className="hidden flex-col justify-center leading-[1.15] sm:flex">
              <span className="font-display text-[14px] font-light text-ink-primary">
                {COLLEGE.shortName}
              </span>
              <span className="mt-1 font-sans text-[9px] uppercase tracking-[0.18em] text-ink-tertiary">
                {STRINGS.nav.estab}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "story-link font-sans text-[13px] font-medium tracking-wide transition-colors",
                  pathname === link.href
                    ? "text-brand-primary"
                    : "text-ink-secondary hover:text-brand-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <CTAButton variant="secondary" size="xs" className="w-[128px]">
              {STRINGS.nav.brochure}
            </CTAButton>
            <CTAButton
              variant="primary"
              size="xs"
              iconRight={<ArrowUpRight className="h-3 w-3" />}
              className="w-[128px]"
            >
              {STRINGS.nav.apply}
            </CTAButton>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md text-ink-primary transition-colors hover:bg-surface-wash lg:hidden"
            onClick={() => setOpen(true)}
            aria-label={STRINGS.nav.openMenu}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-80 bg-brand-primary/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-90 flex h-dvh w-full max-w-sm flex-col overflow-y-auto bg-surface-canvas shadow-deep lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between gap-3 border-b border-border-subtle px-4 py-3.5 sm:px-6 sm:py-4">
                <span className="max-w-[250px] font-display text-sm leading-tight text-ink-primary sm:max-w-[280px] sm:text-base">
                  {COLLEGE.shortName}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={STRINGS.nav.closeMenu}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-ink-primary hover:bg-surface-wash sm:h-11 sm:w-11"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col px-5 py-4 sm:px-6 sm:py-5" aria-label="Mobile primary">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.04,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block border-b border-border-subtle py-3.5 font-display text-lg leading-[1.15] text-ink-primary transition-colors hover:text-purple-rich sm:text-[22px]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-3 border-t border-border-subtle px-6 py-6">
                <CTAButton
                  variant="primary"
                  size="xs"
                  fullWidth
                  iconRight={<ArrowUpRight className="h-3 w-3" />}
                >
                  {STRINGS.nav.apply}
                </CTAButton>

                <CTAButton variant="secondary" size="xs" fullWidth>
                  {STRINGS.nav.brochure}
                </CTAButton>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
