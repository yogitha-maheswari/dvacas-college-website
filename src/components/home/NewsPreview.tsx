"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react";
import { NEWS_EVENTS } from "@/data/college";
import { STRINGS } from "@/data/strings";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/shared/Badge";

// Import images
import techFestImg from "@/assets/news/tech-fest.png";
import mouImg from "@/assets/news/mou.png";
import literaryImg from "@/assets/news/literary.png";

const newsImages: Record<number, any> = {
  1: techFestImg,
  2: mouImg,
  3: literaryImg,
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return {
    day: d.getDate(),
    month: d.toLocaleDateString("en-IN", { month: "short" }),
    year: d.getFullYear(),
  };
};

export const NewsPreview = () => {
  const items = NEWS_EVENTS.slice(0, 3);

  return (
    <section className="section relative bg-surface-base overflow-hidden">
      {/* Decorative background gradients to show through frosted glass */}
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-mid/10 blur-[120px]" />

      <div className="container-wide relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={STRINGS.news.eyebrow}
            heading={STRINGS.news.heading}
            sub={STRINGS.news.sub}
            className="max-w-2xl"
          />

          <Link
            href="/news-events"
            className="hidden font-sans text-sm font-medium text-brand-primary story-link md:inline-block"
          >
            {STRINGS.news.readAll} →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const dateObj = formatDate(item.date);
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
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
                <div className="relative h-52 w-full overflow-hidden">
                  {newsImages[item.id] ? (
                    <Image
                      src={newsImages[item.id]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      placeholder="blur"
                    />
                  ) : (
                    <div className="h-full w-full bg-brand-primary/10 flex items-center justify-center">
                       <span className="font-sans text-[10px] uppercase tracking-widest text-ink-tertiary">Image Pending</span>
                    </div>
                  )}
                  
                  {/* Brand Overlay */}
                  <div className="absolute inset-0 z-10 bg-linear-to-tr from-brand-primary/20 via-transparent to-purple-mid/10 mix-blend-multiply opacity-60" />

                  {/* Badge on Image */}
                  <div className="absolute left-5 top-5 z-20">
                    <Badge
                      variant={item.type === "event" ? "navy" : "outline"}
                      size="xs"
                      className="bg-brand-primary/80 backdrop-blur-md border border-white/10 text-white shadow-sm"
                    >
                      {item.type === "event" ? "Event" : "News"}
                    </Badge>
                  </div>

                  {/* Date Overlap Badge */}
                  <div className="absolute right-5 -bottom-0 z-20 flex flex-col items-center justify-center bg-white p-3 rounded-t-xl shadow-lg min-w-[60px]">
                    <span className="font-sans text-lg font-bold text-brand-primary leading-none">{dateObj.day}</span>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-ink-tertiary font-medium">{dateObj.month}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-ink-tertiary">
                     <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Campus</span>
                     {item.type === "event" && <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 09:00 AM</span>}
                  </div>

                  <h3 className="mt-4 font-display text-xl text-ink-primary leading-tight transition-colors group-hover:text-brand-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 flex-1 font-body text-sm leading-relaxed text-ink-secondary">
                    {item.excerpt}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/40 pt-5">
                    <Link
                      href={`/news-events/${item.id}`}
                      className="group/link inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-primary"
                    >
                      {STRINGS.news.readMore}
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 transition-all group-hover/link:bg-brand-primary group-hover/link:text-white">
                        <ArrowUpRight className="h-3 w-3" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-glass-sweep" />
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center md:hidden">
          <Link href="/news-events" className="w-full">
            <Badge className="w-full h-12 flex justify-center border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all cursor-pointer">
              {STRINGS.news.readAll}
            </Badge>
          </Link>
        </div>
      </div>
    </section>
  );
};