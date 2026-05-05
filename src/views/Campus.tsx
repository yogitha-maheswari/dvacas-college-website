"use client";

import { motion } from "framer-motion";
import { Check, BookOpen, Bus, ShieldCheck, Dumbbell, Home as HomeIcon, FlaskConical } from "lucide-react";
import Image from "next/image";
import { PageShell } from "@/components/shared/PageShell";
import { PageHero } from "@/components/shared/PageHero";
import { Badge } from "@/components/shared/Badge";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { INFRASTRUCTURE, COLLEGE } from "@/data/college";
import lab from "@/assets/campus-lab.jpg";
import library from "@/assets/campus-library.jpg";
import students from "@/assets/campus-students.jpg";
import aerial from "@/assets/campus-aerial.jpg";

const CAMPUS_COPY = {
  metaSub:
    "Explore Dr. Vikram Aggarwal College of Arts & Science infrastructure: labs, library, hostels, sports facilities, transport, and campus safety.",
  heroEyebrow: "Campus & Infrastructure",
  heroTitle: "A Campus Built",
  heroTitleItalic: "For Possibility",
  heroSub:
    "From specialized labs to modern hostels and sports arenas, every space at Dr. Vikram Aggarwal College of Arts & Science is designed for focused learning and holistic student life.",
  labsEyebrow: "Laboratories",
  labsHeading: "Research-grade labs for hands-on learning.",
  capacity: "Capacity",
  libraryEyebrow: "Library",
  hostelEyebrow: "Residential Life",
  amenities: "Amenities",
  mealsPerDay: "Meals per day",
  sportsEyebrow: "Sports & Fitness",
  sportsHeading: "Facilities that keep students active and balanced.",
  transportEyebrow: "Transport",
  transportHeading: "City-wide commute support.",
  areasServed: "Areas served",
  safetyEyebrow: "Safety",
  safetyHeading: "A secure, student-first campus.",
} as const;

const Campus = () => {
  return (
    <PageShell title="Campus & Infrastructure | Dr. Vikram Aggarwal College of Arts & Science Chennai" description={CAMPUS_COPY.metaSub}>
      <PageHero
        eyebrow={CAMPUS_COPY.heroEyebrow}
        title={CAMPUS_COPY.heroTitle}
        italicWord={CAMPUS_COPY.heroTitleItalic}
        sub={CAMPUS_COPY.heroSub}
        crumbs={[{ label: "Home", href: "/" }, { label: "Campus" }]}
      />

      {/* Snapshot */}
      <section className="border-b border-border-subtle bg-surface-canvas">
        <div className="container-wide grid grid-cols-2 gap-px bg-border-subtle md:grid-cols-4">
          {[
            { value: COLLEGE.stats.campusAcres, suffix: "", label: "Acres" },
            { value: COLLEGE.stats.labsCount, suffix: "+", label: "Specialised labs" },
            { value: COLLEGE.stats.libraryBooks, suffix: "+", label: "Library volumes" },
            { value: INFRASTRUCTURE.classrooms.count, suffix: "+", label: "Smart classrooms" },
          ].map((s, i) => (
            <div key={i} className="bg-surface-canvas p-6 md:p-8">
              <p className="font-display text-3xl text-ink-primary md:text-5xl">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.16em] text-ink-tertiary">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hero image strip */}
      <section className="bg-surface-canvas">
        <div className="container-wide grid gap-3 py-12 md:grid-cols-3">
          {[aerial, lab, students].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="overflow-hidden rounded-lg"
            >
              <Image src={src} alt="" className="aspect-4/3 h-auto w-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Labs */}
      <section className="section bg-surface-base">
        <div className="container-wide">
          <p className="eyebrow mb-3 inline-flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5" /> {CAMPUS_COPY.labsEyebrow}</p>
          <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{CAMPUS_COPY.labsHeading}</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INFRASTRUCTURE.labs.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-lg border border-border-subtle bg-surface-canvas p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <Badge variant="purple" size="xs">{CAMPUS_COPY.capacity}: {l.capacity}</Badge>
                <h3 className="mt-5 font-display text-xl text-ink-primary">{l.name}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink-secondary">{l.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="section bg-surface-canvas">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-3 inline-flex items-center gap-2"><BookOpen className="h-3.5 w-3.5" /> {CAMPUS_COPY.libraryEyebrow}</p>
            <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{INFRASTRUCTURE.library.title}</h2>
            <p className="mt-5 font-body text-base leading-relaxed text-ink-secondary">{INFRASTRUCTURE.library.description}</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: INFRASTRUCTURE.library.books, l: "Volumes" },
                { v: INFRASTRUCTURE.library.ebooks, l: "E-books" },
                { v: INFRASTRUCTURE.library.journals, l: "Journals" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg border border-border-subtle bg-surface-base p-4">
                  <p className="font-display text-2xl text-ink-primary">
                    <AnimatedCounter target={s.v} suffix="+" />
                  </p>
                  <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.14em] text-ink-tertiary">{s.l}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {INFRASTRUCTURE.library.features.map((f) => (
                <li key={f} className="flex items-start gap-2 font-body text-sm text-ink-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple-rich" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 overflow-hidden rounded-xl lg:order-2">
            <Image src={library} alt="" className="aspect-4/3 h-auto w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Hostel */}
      <section className="section bg-surface-base">
        <div className="container-wide">
          <p className="eyebrow mb-3 inline-flex items-center gap-2"><HomeIcon className="h-3.5 w-3.5" /> {CAMPUS_COPY.hostelEyebrow}</p>
          <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{INFRASTRUCTURE.hostel.title}</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { label: "Boys", data: INFRASTRUCTURE.hostel.boys },
              { label: "Girls", data: INFRASTRUCTURE.hostel.girls },
            ].map((h) => (
              <div key={h.label} className="rounded-lg border border-border-subtle bg-surface-canvas p-7 shadow-soft">
                <Badge variant="navy" size="xs">{h.label} hostel</Badge>
                <p className="mt-5 font-display text-3xl text-ink-primary">
                  <AnimatedCounter target={h.data.capacity} /> <span className="text-base text-ink-tertiary">{CAMPUS_COPY.capacity.toLowerCase()}</span>
                </p>
                <p className="mt-2 font-body text-sm text-ink-secondary">{h.data.rooms}</p>
                <p className="eyebrow mt-6 mb-3">{CAMPUS_COPY.amenities}</p>
                <ul className="grid grid-cols-2 gap-2 text-xs">
                  {h.data.amenities.map((a) => (
                    <li key={a} className="flex items-start gap-1.5 font-body text-ink-secondary">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-mid" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border-subtle bg-surface-canvas p-6">
            <p className="eyebrow mb-2">Mess</p>
            <p className="font-body text-sm text-ink-secondary">{INFRASTRUCTURE.hostel.mess.description}</p>
            <p className="mt-3 font-sans text-xs text-ink-tertiary">{CAMPUS_COPY.mealsPerDay}: {INFRASTRUCTURE.hostel.mess.mealsPerDay}</p>
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="section bg-surface-canvas">
        <div className="container-wide">
          <p className="eyebrow mb-3 inline-flex items-center gap-2"><Dumbbell className="h-3.5 w-3.5" /> {CAMPUS_COPY.sportsEyebrow}</p>
          <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{CAMPUS_COPY.sportsHeading}</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {INFRASTRUCTURE.sports.facilities.map((s) => (
              <span key={s} className="rounded-full border border-border-default bg-surface-base px-4 py-2 font-sans text-sm text-ink-primary">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Transport + Safety */}
      <section className="section bg-surface-base">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="rounded-lg border border-border-subtle bg-surface-canvas p-8">
            <p className="eyebrow mb-3 inline-flex items-center gap-2"><Bus className="h-3.5 w-3.5" /> {CAMPUS_COPY.transportEyebrow}</p>
            <h3 className="font-display text-2xl text-ink-primary">{CAMPUS_COPY.transportHeading}</h3>
            <p className="mt-4 font-body text-sm text-ink-secondary">
              {INFRASTRUCTURE.transport.busRoutes} routes serving major neighbourhoods across the city.
            </p>
            <p className="eyebrow mt-6 mb-3">{CAMPUS_COPY.areasServed}</p>
            <div className="flex flex-wrap gap-2">
              {INFRASTRUCTURE.transport.areasServed.map((a) => (
                <span key={a} className="rounded-full bg-surface-base px-3 py-1 font-sans text-xs text-ink-secondary">{a}</span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border-subtle bg-surface-canvas p-8">
            <p className="eyebrow mb-3 inline-flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5" /> {CAMPUS_COPY.safetyEyebrow}</p>
            <h3 className="font-display text-2xl text-ink-primary">{CAMPUS_COPY.safetyHeading}</h3>
            <ul className="mt-6 space-y-2.5">
              {INFRASTRUCTURE.safety.measures.map((m) => (
                <li key={m} className="flex items-start gap-2 font-body text-sm text-ink-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple-rich" /> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Campus;
