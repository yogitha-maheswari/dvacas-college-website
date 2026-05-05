"use client";

import { useEffect, useRef } from "react";

export const StaticBackground = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll (orbs drift slowly)
  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!ref.current) return;

        const y = window.scrollY;
        const orbs = ref.current.querySelectorAll<HTMLElement>("[data-orb]");

        orbs.forEach((el, i) => {
          const speed = 0.06 + i * 0.04;
          el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="static-bg grain-bg" aria-hidden="true">
      <div
        data-orb
        className="static-bg__orb"
        style={{
          width: 520,
          height: 520,
          top: "-120px",
          left: "-120px",
          background: "hsl(var(--purple-tint))",
        }}
      />
      <div
        data-orb
        className="static-bg__orb"
        style={{
          width: 600,
          height: 600,
          top: "30vh",
          right: "-180px",
          background: "hsl(var(--brand-tertiary) / 0.18)",
          animationDelay: "-6s",
        }}
      />
      <div
        data-orb
        className="static-bg__orb"
        style={{
          width: 480,
          height: 480,
          bottom: "-160px",
          left: "30vw",
          background: "hsl(var(--purple-pale) / 0.35)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
};