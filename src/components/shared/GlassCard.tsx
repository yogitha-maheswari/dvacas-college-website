"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const glassVariants = cva(
  "relative overflow-hidden border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  {
    variants: {
      variant: {
        light: "glass text-ink-primary",
        dark: "glass-dark text-ink-onDark",
        solid: "bg-surface-canvas border-border-subtle text-ink-primary shadow-soft",
        tinted: "bg-purple-tint/60 border-purple-pale/40 text-ink-primary backdrop-blur-md",
      },
      size: {
        sm: "p-5 rounded-lg",
        md: "p-6 md:p-8 rounded-lg",
        lg: "p-8 md:p-10 rounded-xl",
      },
      hover: {
        lift: "hover:-translate-y-1 hover:shadow-elegant",
        glow: "hover:border-purple-mid/60 hover:shadow-elegant",
        none: "",
      },
    },
    defaultVariants: { variant: "light", size: "md", hover: "none" },
  }
);

export interface GlassCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassVariants> {}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, size, hover, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(glassVariants({ variant, size, hover }), className)}
      {...props}
    >
      {children}
    </div>
  )
);

GlassCard.displayName = "GlassCard";