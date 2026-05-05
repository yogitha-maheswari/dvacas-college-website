"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowUpRight, Tag } from "lucide-react";
import { PageShell } from "@/components/shared/PageShell";
import { PageHero } from "@/components/shared/PageHero";
import { Badge } from "@/components/shared/Badge";
import { NEWS_EVENTS } from "@/data/college";
import { STRINGS } from "@/data/strings";
import { cn } from "@/lib/utils";

type Filter = "all" | "news" | "event";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

const News = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = useMemo(
    () => (filter === "all" ? NEWS_EVENTS : NEWS_EVENTS.filter((n) => n.type === filter)),
    [filter]
  );

  const labels: Record<Filter, string> = {
    all: STRINGS.pages.news.filterAll,
    news: STRINGS.pages.news.filterNews,
    event: STRINGS.pages.news.filterEvents,
  };

  return (
    <PageShell title="News & Events | Dr. Vikram Aggarwal College of Arts & Science Chennai" description={STRINGS.pages.news.sub}>
      <PageHero
        eyebrow={STRINGS.pages.news.eyebrow}
        title={STRINGS.pages.news.title}
        italicWord={STRINGS.pages.news.titleItalic}
        sub={STRINGS.pages.news.sub}
        crumbs={[{ label: "Home", href: "/" }, { label: "News & Events" }]}
      />

      <section className="section bg-surface-canvas">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(labels) as Filter[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setFilter(k)}
                className={cn(
                  "h-11 px-5 font-sans text-xs uppercase tracking-[0.16em] rounded-full border transition-all",
                  filter === k
                    ? "bg-brand-primary text-ink-onDark border-brand-primary"
                    : "bg-surface-canvas text-ink-secondary border-border-default hover:border-brand-primary"
                )}
              >
                {labels[k]}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex flex-col rounded-lg border border-border-subtle bg-surface-canvas p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant={item.type === "event" ? "purple" : "outline"} size="xs">
                      {item.type === "event" ? "Event" : "News"}
                    </Badge>
                    <span className="inline-flex items-center gap-1.5 font-sans text-[11px] text-ink-tertiary">
                      <Calendar className="h-3 w-3" />
                      {formatDate(item.date)}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl text-ink-primary leading-tight md:text-[1.4rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink-secondary">{item.excerpt}</p>

                  <div className="mt-5 flex items-start gap-2">
                    <Tag className="mt-0.5 h-3 w-3 text-purple-mid" />
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span key={t} className="font-sans text-[11px] text-ink-tertiary">#{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4 border-t border-border-subtle pt-4">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.16em] text-brand-primary"
                    >
                      {STRINGS.pages.news.readMore}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    {item.registrationLink && (
                      <span className="ml-auto rounded-full bg-purple-tint px-3 py-1 font-sans text-[10px] uppercase tracking-[0.14em] text-purple-deep">
                        {STRINGS.pages.news.register}
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center font-body text-ink-tertiary">{STRINGS.pages.news.empty}</p>
          )}
        </div>
      </section>
    </PageShell>
  );
};

export default News;
