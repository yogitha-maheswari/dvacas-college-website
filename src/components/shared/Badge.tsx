"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1.5 font-sans font-medium tracking-wide rounded-md transition-colors min-w-[90px]",
  {
    variants: {
      variant: {
        navy: "bg-brand-primary text-ink-onDark",
        purple: "bg-purple-tint text-purple-deep",
        outline: "border border-border-strong text-ink-secondary",
        silver: "bg-silver-soft text-brand-primary",
        ghost: "bg-surface-wash text-ink-secondary",
      },
      size: {
        xs: "h-6 px-2.5 text-[10px] uppercase tracking-[0.16em]",
        sm: "h-7 px-3 text-[11px] uppercase tracking-[0.14em]",
        md: "h-8 px-3.5 text-xs",
      },
    },
    defaultVariants: { variant: "outline", size: "sm" },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({
  className,
  variant,
  size,
  children,
  ...props
}: BadgeProps) => (
  <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
    {children}
  </span>
);