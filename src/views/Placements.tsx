"use client";

import { motion } from "framer-motion";
import { Quote, TrendingUp, Briefcase, Award, Users } from "lucide-react";
import { PageShell } from "@/components/shared/PageShell";
import { PageHero } from "@/components/shared/PageHero";
import { Badge } from "@/components/shared/Badge";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { RecruitersMarquee } from "@/components/home/RecruitersMarquee";
import { CTABanner } from "@/components/home/CTABanner";
import { PLACEMENTS } from "@/data/college";
import { STRINGS } from "@/data/strings";

const Placements = () => {
  return (
    <PageShell title="Placements | Dr. Vikram Aggarwal College of Arts & Science Chennai" description={STRINGS.pages.placements.sub}>
      <PageHero
        eyebrow={STRINGS.pages.placements.eyebrow}
        title={STRINGS.pages.placements.title}
        italicWord={STRINGS.pages.placements.titleItalic}
        sub={STRINGS.pages.placements.sub}
        crumbs={[{ label: "Home", href: "/" }, { label: "Placements" }]}
      />

      {/* Stats */}
      <section className="border-b border-border-subtle bg-surface-canvas">
        <div className="container-wide grid grid-cols-2 gap-px bg-border-subtle md:grid-cols-4">
          {[
            { v: PLACEMENTS.stats.placementRate, suffix: "%", label: STRINGS.placements.rate, icon: TrendingUp },
            { v: PLACEMENTS.stats.avgSalaryLPA, suffix: " LPA", label: STRINGS.placements.avg, icon: Briefcase, decimals: 1 },
            { v: PLACEMENTS.stats.highestSalaryLPA, suffix: " LPA", label: STRINGS.placements.highest, icon: Award },
            { v: PLACEMENTS.stats.recruitersVisited, suffix: "+", label: STRINGS.placements.recruiters, icon: Users },
          ].map((s, i) => (
            <div key={i} className="bg-surface-canvas p-6 md:p-8">
              <s.icon className="h-5 w-5 text-purple-mid" />
              <p className="mt-3 font-display text-3xl text-ink-primary md:text-5xl">
                <AnimatedCounter target={s.v} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.16em] text-ink-tertiary">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section bg-surface-base">
        <div className="container-wide">
          <p className="eyebrow mb-3">{STRINGS.pages.placements.processEyebrow}</p>
          <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{STRINGS.pages.placements.processHeading}</h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PLACEMENTS.placementProcess.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{
                  backdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/40 p-7 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-lg hover:bg-white/60"
              >
                {/* Grain / noise texture overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-20 opacity-[0.15] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                  }}
                />

                <span className="font-display text-4xl text-purple-pale">0{p.step}</span>
                <h3 className="mt-3 font-display text-lg text-ink-primary">{p.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-secondary">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section bg-surface-canvas">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">{STRINGS.pages.placements.sectorsEyebrow}</p>
            <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{STRINGS.pages.placements.sectorsHeading}</h2>
            <p className="mt-5 font-body text-base leading-relaxed text-ink-secondary">
              IT and finance lead the chart, but a quarter of our offers come from consulting, e-commerce and engineering.
            </p>
          </div>
          <div className="space-y-4">
            {PLACEMENTS.sectorBreakdown.map((s, i) => (
              <motion.div
                key={s.sector}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="flex items-center justify-between font-sans text-sm">
                  <span className="text-ink-primary">{s.sector}</span>
                  <span className="font-display text-base text-purple-rich">{s.percentage}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-wash">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.percentage * 2}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-linear-to-r from-purple-rich to-brand-primary"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters marquee */}
      <RecruitersMarquee />

      {/* Voices */}
      <section className="section bg-surface-base">
        <div className="container-wide">
          <p className="eyebrow mb-3">{STRINGS.pages.placements.voicesEyebrow}</p>
          <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{STRINGS.pages.placements.voicesHeading}</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PLACEMENTS.testimonials.map((t, i) => (
              <motion.figure
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                style={{
                  backdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/40 p-7 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-lg hover:bg-white/60"
              >
                {/* Grain / noise texture overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-20 opacity-[0.15] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                  }}
                />

                <Quote className="h-5 w-5 text-silver" />
                <blockquote className="mt-4 flex-1 font-body text-sm leading-relaxed text-ink-primary italic">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-white/40 pt-4 relative z-10">
                  <p className="font-display text-base text-ink-primary">{t.name}</p>
                  <p className="mt-1 font-sans text-xs text-ink-tertiary">{t.batch}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <Badge variant="purple" size="xs">{t.company}</Badge>
                    <span className="font-display text-sm text-purple-rich">{t.ctc}</span>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
};

export default Placements;
