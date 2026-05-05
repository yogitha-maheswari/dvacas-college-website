"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export const AnimatedCounter = ({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  const value = useAnimatedCounter({
    target,
    duration,
    start: inView,
  });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};