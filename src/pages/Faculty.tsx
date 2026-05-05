"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, BookOpen, Award, Briefcase } from "lucide-react";
import { PageShell } from "@/components/shared/PageShell";
import { PageHero } from "@/components/shared/PageHero";
import { Badge } from "@/components/shared/Badge";
import { FACULTY } from "@/data/college";
import { STRINGS } from "@/data/strings";
import { cn } from "@/lib/utils";

const Faculty = () => {
  const departments = useMemo(() => {
    const set = new Set(FACULTY.map((f) => f.department));
    return ["All", ...Array.from(set)];
  }, []);
  const [dept, setDept] = useState("All");

  const filtered = useMemo(
    () => (dept === "All" ? FACULTY : FACULTY.filter((f) => f.department === dept)),
    [dept]
  );

  const initials = (name: string) =>
    name
      .replace(/Dr\.|Prof\.|Mr\.|Mrs\.|Ms\./g, "")
      .trim()
      .split(/\s+/)
      .map((p) => p[0])
      .slice(0, 2)
      .join("");

  return (
    <PageShell title="Faculty | Dr. Vikram Aggarwal College of Arts & Science Chennai" description={STRINGS.pages.faculty.sub}>
      <PageHero
        eyebrow={STRINGS.pages.faculty.eyebrow}
        title={STRINGS.pages.faculty.title}
        italicWord={STRINGS.pages.faculty.titleItalic}
        sub={STRINGS.pages.faculty.sub}
        crumbs={[{ label: "Home", href: "/" }, { label: "Faculty" }]}
      />

      <section className="section bg-surface-canvas">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {departments.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDept(d)}
                className={cn(
                  "h-11 px-5 font-sans text-xs uppercase tracking-[0.16em] rounded-full border transition-all",
                  dept === d
                    ? "bg-brand-primary text-ink-onDark border-brand-primary"
                    : "bg-surface-canvas text-ink-secondary border-border-default hover:border-brand-primary"
                )}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((f, i) => (
                <motion.article
                  key={f.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="group flex flex-col rounded-lg border border-border-subtle bg-surface-canvas p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-rich to-brand-primary font-display text-xl text-ink-onDark">
                      {initials(f.name)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg text-ink-primary leading-tight">{f.name}</h3>
                      <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.14em] text-purple-rich">{f.designation}</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Badge variant="purple" size="xs">{f.department}</Badge>
                  </div>

                  <p className="mt-5 font-body text-xs text-ink-secondary">{f.qualification}</p>

                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border-subtle pt-4 text-xs">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5 text-purple-mid" />
                      <span className="font-sans text-ink-primary">{f.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-3.5 w-3.5 text-purple-mid" />
                      <span className="font-sans text-ink-primary">{f.publications} {STRINGS.pages.faculty.publications.toLowerCase()}</span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">{STRINGS.pages.faculty.specialization}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {f.specialization.map((s) => (
                        <span key={s} className="rounded-full bg-surface-base px-2.5 py-1 font-sans text-[11px] text-ink-secondary">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {f.achievements && f.achievements.length > 0 && (
                    <div className="mt-5 flex items-start gap-2 rounded-md bg-silver-soft/50 p-3">
                      <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-silver" />
                      <p className="font-body text-[11px] text-ink-primary">{f.achievements[0]}</p>
                    </div>
                  )}

                  <a
                    href={`mailto:${f.email}`}
                    className="mt-5 inline-flex items-center gap-1.5 font-sans text-xs text-brand-primary hover:text-purple-rich"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {f.email}
                  </a>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center font-body text-ink-tertiary">{STRINGS.pages.faculty.empty}</p>
          )}
        </div>
      </section>
    </PageShell>
  );
};

export default Faculty;
