"use client";

import { motion } from "framer-motion";
import { Quote, Award, Mail, Phone, Lightbulb, Scale, Users, Globe } from "lucide-react";
import Image from "next/image";
import { PageShell } from "@/components/shared/PageShell";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import { VISION_MISSION, MANAGEMENT, AFFILIATIONS } from "@/data/college";
import { STRINGS } from "@/data/strings";
import founderImg from "@/assets/founder.jpg";
import secretaryImg from "@/assets/management/secretary.png";
import principalImg from "@/assets/management/principal.png";
import rajeshImg from "@/assets/management/rajesh.png";
import anithaImg from "@/assets/management/anitha.png";
import sureshImg from "@/assets/management/suresh.png";
import lakshmiImg from "@/assets/management/lakshmi.png";

const iconMap: Record<string, any> = {
  "Excellence": Award,
  "Innovation": Lightbulb,
  "Integrity": Scale,
  "Inclusivity": Users,
  "Impact": Globe,
};

const About = () => {
  return (
    <PageShell title="About | Dr. Vikram Aggarwal College of Arts & Science Chennai" description={STRINGS.pages.about.sub}>
      <PageHero
        eyebrow={STRINGS.pages.about.eyebrow}
        title={STRINGS.pages.about.title}
        italicWord={STRINGS.pages.about.titleItalic}
        sub={STRINGS.pages.about.sub}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Vision & Mission */}
      <section className="section bg-surface-canvas relative overflow-hidden">
        {/* Decorative background gradients to show through frosted glass */}
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-mid/10 blur-[120px]" />

        <div className="container-wide relative z-10">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow mb-3">{STRINGS.pages.about.visionEyebrow}</p>
            <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{STRINGS.pages.about.visionHeading}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                backdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                WebkitBackdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/40 p-8 shadow-glass transition-all duration-500 hover:bg-white/50"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-20 opacity-[0.12] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "repeat",
                }}
              />
              <p className="eyebrow mb-4 text-purple-rich relative z-30">{STRINGS.pages.about.visionLabel}</p>
              <p className="font-body text-lg leading-relaxed text-ink-primary relative z-30">{VISION_MISSION.vision}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                backdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                WebkitBackdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/40 p-8 shadow-glass transition-all duration-500 hover:bg-white/50"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-20 opacity-[0.12] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "repeat",
                }}
              />
              <p className="eyebrow mb-4 text-purple-rich relative z-30">{STRINGS.pages.about.missionLabel}</p>
              <ul className="space-y-3 relative z-30">
                {VISION_MISSION.mission.map((m, i) => (
                  <li key={i} className="flex gap-3 font-body text-ink-secondary">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-mid" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section bg-surface-base relative overflow-hidden">
        {/* Decorative background gradients to show through frosted glass */}
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-purple-mid/15 blur-[120px]" />
        <div className="pointer-events-none absolute left-1/4 bottom-0 h-96 w-96 rounded-full bg-brand-primary/10 blur-[120px]" />

        <div className="container-wide relative z-10">
          <p className="eyebrow mb-3">{STRINGS.pages.about.valuesEyebrow}</p>
          <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{STRINGS.pages.about.valuesHeading}</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {VISION_MISSION.coreValues.map((v, i) => {
              const Icon = iconMap[v.value] || Award;
              return (
                <motion.div
                  key={v.value}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
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

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 font-display text-lg text-ink-primary">{v.value}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink-secondary">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section bg-brand-primary text-ink-onDark relative overflow-hidden">
        <div className="absolute inset-0 grain-bg opacity-50" aria-hidden />
        <div className="container-wide relative z-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-xl">
              <Image
                src={founderImg}
                alt={MANAGEMENT.founder.name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow text-purple-pale mb-4">{STRINGS.pages.about.mgmtEyebrow}</p>
            <h2 className="font-display text-4xl text-ink-onDark md:text-5xl">{MANAGEMENT.founder.name}</h2>
            <p className="mt-2 font-sans text-sm uppercase tracking-[0.18em] text-purple-pale">{MANAGEMENT.founder.title}</p>
            <p className="mt-6 font-body text-base leading-relaxed text-ink-onDark/85 md:text-lg">{MANAGEMENT.founder.bio}</p>
            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 border-l-2 border-silver/30 pl-6 md:pl-8"
            >
              <Quote className="h-7 w-7 text-purple-pale" aria-hidden />
              <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-ink-onDark md:text-2xl">
                "{MANAGEMENT.founder.quote}"
              </blockquote>
            </motion.figure>
            <p className="mt-6 font-sans text-xs uppercase tracking-[0.18em] text-purple-pale">{MANAGEMENT.founder.qualification}</p>
          </div>
        </div>
      </section>

      {/* Secretary & Principal */}
      <section className="section bg-surface-canvas relative overflow-hidden">
        {/* Decorative background gradients to show through frosted glass */}
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-mid/10 blur-[120px]" />

        <div className="container-wide relative z-10">
          <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{STRINGS.pages.about.mgmtHeading}</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[
              { 
                ...MANAGEMENT.secretary, 
                portrait: secretaryImg 
              },
              { 
                ...MANAGEMENT.principal, 
                portrait: principalImg 
              }
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  backdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/40 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-lg hover:bg-white/60"
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

                {/* Image Section */}
                <div className="relative h-[420px] w-full overflow-hidden">
                  <Image
                    src={p.portrait}
                    alt={p.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Brand Overlay */}
                  <div className="absolute inset-0 z-10 bg-linear-to-tr from-brand-primary/40 via-transparent to-purple-mid/20 mix-blend-multiply opacity-60" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col p-8 relative z-30">
                  <h3 className="font-display text-2xl text-ink-primary">{p.name}</h3>
                  <p className="mt-1 font-sans text-xs uppercase tracking-[0.16em] text-purple-rich">{p.title}</p>
                  <p className="mt-5 font-body text-sm leading-relaxed text-ink-secondary">{p.bio}</p>
                  <p className="mt-4 font-sans text-xs text-ink-tertiary">{p.qualification}</p>
                  
                  {(p.email || p.phone) && (
                    <div className="mt-6 flex flex-wrap gap-5 border-t border-white/40 pt-6 text-xs">
                      {p.email && (
                        <a href={`mailto:${p.email}`} className="inline-flex items-center gap-2 text-brand-primary hover:text-purple-rich transition-colors">
                          <Mail className="h-3.5 w-3.5" /> {p.email}
                        </a>
                      )}
                      {p.phone && (
                        <a href={`tel:${p.phone}`} className="inline-flex items-center gap-2 text-brand-primary hover:text-purple-rich transition-colors">
                          <Phone className="h-3.5 w-3.5" /> {p.phone}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Board */}
          <div className="mt-16">
            <p className="eyebrow mb-6">{STRINGS.pages.about.boardLabel}</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { ...MANAGEMENT.board[0], portrait: rajeshImg },
                { ...MANAGEMENT.board[1], portrait: anithaImg },
                { ...MANAGEMENT.board[2], portrait: sureshImg },
                { ...MANAGEMENT.board[3], portrait: lakshmiImg }
              ].map((b, i) => (
                <motion.div
                  key={b.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  style={{
                    backdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                    WebkitBackdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                  }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/40 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-lg hover:bg-white/60"
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

                  {/* Image Section */}
                  <div className="relative aspect-[4/5] sm:h-64 w-full overflow-hidden">
                    <Image
                      src={b.portrait}
                      alt={b.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-10 bg-linear-to-tr from-brand-primary/30 via-transparent to-purple-mid/10 mix-blend-multiply opacity-50" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 relative z-30">
                    <h4 className="font-display text-lg text-ink-primary">{b.name}</h4>
                    <p className="mt-1 font-sans text-[10px] leading-tight text-ink-secondary">{b.title}</p>
                    <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.12em] text-purple-rich">{b.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="section bg-surface-base relative overflow-hidden">
        {/* Decorative background gradients to show through frosted glass */}
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-primary/10 blur-[100px]" />

        <div className="container-wide relative z-10">
          <p className="eyebrow mb-3">{STRINGS.pages.about.affiliationsEyebrow}</p>
          <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{STRINGS.pages.about.affiliationsHeading}</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AFFILIATIONS.map((a, i) => (
              <motion.div
                key={a.name}
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
                
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white relative z-30">
                  <Award className="h-6 w-6" />
                </div>

                <h4 className="mt-6 font-display text-lg text-ink-primary relative z-30">{a.name}</h4>
                <p className="mt-2 font-sans text-xs uppercase tracking-[0.14em] text-purple-rich relative z-30">{a.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
};

export default About;
