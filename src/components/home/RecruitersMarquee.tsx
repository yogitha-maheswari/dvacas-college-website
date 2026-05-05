"use client";

import { PLACEMENTS } from "@/data/college";
import { STRINGS } from "@/data/strings";

export const RecruitersMarquee = () => {
  const list = PLACEMENTS.topRecruiters;
  // duplicate for seamless loop
  const doubled = [...list, ...list];

  return (
    <section className="border-y border-border-subtle bg-surface-canvas py-14 md:py-20">
      <div className="container-wide mb-10 text-center">
        <p className="eyebrow">{STRINGS.recruiters.eyebrow}</p>
        <h3 className="mt-3 font-display text-2xl text-ink-primary md:text-3xl">
          {STRINGS.recruiters.heading}
        </h3>
      </div>

      <div className="marquee">
        <div className="marquee__track">
          {doubled.map((r, i) => (
            <span
              key={`${r.name}-${i}`}
              className="font-display text-2xl text-ink-tertiary transition-colors hover:text-brand-primary md:text-4xl"
            >
              {r.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
