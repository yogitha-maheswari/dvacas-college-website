"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  FileText,
  IndianRupee,
  Award,
  Search,
  ClipboardList,
  UserCheck,
  GraduationCap,
  Clock,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { CTAButton } from "@/components/shared/CTAButton";
import { Badge } from "@/components/shared/Badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ADMISSIONS } from "@/data/college";
import { STRINGS } from "@/data/strings";

const stepIconMap: Record<number, any> = {
  1: Search,
  2: ClipboardList,
  3: UserCheck,
  4: GraduationCap,
  5: Clock,
};

export const metadata = {
  title: "Admissions 2025–26 | Dr. Vikram Aggarwal College of Arts & Science Chennai",
  description: STRINGS.pages.admissions.sub,
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow={STRINGS.pages.admissions.eyebrow}
        title={STRINGS.pages.admissions.title}
        italicWord={STRINGS.pages.admissions.titleItalic}
        sub={STRINGS.pages.admissions.sub}
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton variant="onDark" size="md">
            {STRINGS.pages.admissions.applyCta}
          </CTAButton>
          <CTAButton variant="outlineDark" size="md">
            {STRINGS.pages.admissions.brochureCta}
          </CTAButton>
        </div>
      </PageHero>

      {/* Key dates */}
      <section className="section bg-surface-canvas relative overflow-hidden">
        {/* Decorative background gradients to show through frosted glass */}
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-mid/10 blur-[120px]" />

        <div className="container-wide relative z-10">
          <p className="eyebrow mb-3 inline-flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" />
            {STRINGS.pages.admissions.keyDates}
          </p>

          <h2 className="font-display text-3xl md:text-4xl text-ink-primary">
            Academic year {ADMISSIONS.academicYear}
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: STRINGS.pages.admissions.applicationOpens,
                value: ADMISSIONS.applicationOpenDate,
              },
              {
                label: STRINGS.pages.admissions.applicationCloses,
                value: ADMISSIONS.lastDateToApply,
              },
              {
                label: STRINGS.pages.admissions.counselling,
                value: ADMISSIONS.counsellingDates,
              },
              {
                label: STRINGS.pages.admissions.classesBegin,
                value: ADMISSIONS.classesCommenceDate,
              },
            ].map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                style={{
                  backdropFilter: "blur(20px) saturate(1.4) brightness(1.02)",
                  WebkitBackdropFilter: "blur(20px) saturate(1.4) brightness(1.02)",
                }}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white/30 p-6 shadow-glass transition-all duration-500 hover:bg-white/50"
              >
                {/* Grain / noise texture overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-20 opacity-[0.12] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                  }}
                />
                <p className="text-[10px] uppercase text-ink-tertiary relative z-30 font-semibold tracking-wider">
                  {d.label}
                </p>
                <p className="mt-3 text-lg font-display text-ink-primary relative z-30">{d.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/40 bg-white/20 p-6 backdrop-blur-md shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
               <IndianRupee className="h-5 w-5" />
            </div>
            <p className="font-display text-lg text-ink-primary">
              {STRINGS.pages.admissions.applicationFee}: <span className="text-brand-primary">₹{ADMISSIONS.applicationFee}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-surface-base relative overflow-hidden">
        {/* Decorative background gradients to show through frosted glass */}
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-purple-mid/10 blur-[120px]" />
        <div className="pointer-events-none absolute left-1/4 bottom-0 h-96 w-96 rounded-full bg-brand-primary/5 blur-[120px]" />

        <div className="container-wide relative z-10">
          <p className="eyebrow mb-3">
            {STRINGS.pages.admissions.processEyebrow}
          </p>

          <h2 className="font-display text-3xl md:text-4xl text-ink-primary">
            {STRINGS.pages.admissions.processHeading}
          </h2>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {ADMISSIONS.process.map((p, i) => {
              const StepIcon = stepIconMap[p.step] || Search;
              return (
                <motion.li
                  key={p.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
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
                    <StepIcon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-[10px] uppercase font-bold tracking-widest text-purple-rich relative z-30">
                    Step {p.step}
                  </p>
                  <h3 className="mt-2 font-display text-lg text-ink-primary relative z-30">{p.title}</h3>
                  <p className="mt-2 font-body text-xs leading-relaxed text-ink-secondary relative z-30">
                    {p.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Documents */}
      <section className="section bg-surface-canvas">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3 inline-flex items-center gap-2">
              <FileText className="h-3.5 w-3.5" />
              {STRINGS.pages.admissions.docsEyebrow}
            </p>

            <h2 className="font-display text-3xl md:text-4xl text-ink-primary">
              {STRINGS.pages.admissions.docsHeading}
            </h2>
          </div>

          <ul className="space-y-4">
            {ADMISSIONS.documentsRequired.map((d, i) => (
              <motion.li
                key={d}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-4 rounded-xl border border-white/40 bg-white/30 p-4 backdrop-blur-md transition-all hover:bg-white/50"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary/10 text-[10px] font-bold text-brand-primary">{i + 1}</span>
                <span className="font-body text-sm text-ink-primary">{d}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section bg-surface-base relative overflow-hidden">
        {/* Decorative background gradients to show through frosted glass */}
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-brand-primary/10 blur-[120px]" />

        <div className="container-wide relative z-10">
          <p className="eyebrow mb-3">
            {STRINGS.pages.admissions.scholarshipsEyebrow}
          </p>

          <h2 className="font-display text-3xl md:text-4xl text-ink-primary">
            {STRINGS.pages.admissions.scholarshipsHeading}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ADMISSIONS.scholarships.map((s, i) => (
              <motion.div 
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  backdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.4) brightness(1.02)",
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/40 p-8 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-lg hover:bg-white/60"
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
                <Badge variant="purple" size="xs" className="w-fit relative z-30">
                  Scholarship
                </Badge>

                <h3 className="mt-5 font-display text-xl text-ink-primary relative z-30">{s.name}</h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-ink-secondary relative z-30">{s.criteria}</p>
                <div className="mt-6 border-t border-white/40 pt-4 relative z-30">
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-purple-rich">{s.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface-canvas">
        <div className="container-wide max-w-4xl">
          <p className="eyebrow mb-3">
            {STRINGS.pages.admissions.faqEyebrow}
          </p>

          <h2 className="text-3xl md:text-4xl">
            {STRINGS.pages.admissions.faqHeading}
          </h2>

          <Accordion type="single" collapsible className="mt-10">
            {ADMISSIONS.faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}