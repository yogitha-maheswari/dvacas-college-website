"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-canvas group/btn",
  {
    variants: {
      variant: {
        primary: "bg-brand-primary text-ink-onDark hover:bg-purple-deep shadow-soft hover:shadow-elegant",
        secondary: "bg-transparent text-brand-primary border border-brand-primary/40 hover:bg-brand-primary hover:text-ink-onDark hover:-translate-y-[1px]",
        ghost: "bg-transparent text-brand-primary hover:bg-surface-wash",
        silver: "bg-gradient-silver text-brand-primary hover:brightness-110 shadow-soft",
        onDark: "bg-ink-onDark text-brand-primary hover:bg-purple-tint",
        outlineDark: "bg-transparent text-ink-onDark border border-ink-onDark/40 hover:bg-ink-onDark hover:text-brand-primary",
      },
      size: {
        xs: "h-8 px-3 text-[10px] uppercase tracking-[0.12em] rounded-md",
        sm: "h-8.5 px-3.5 text-[10px] uppercase tracking-[0.14em] rounded-md",
        md: "h-12 px-6 text-sm uppercase tracking-[0.14em] rounded-md",
        lg: "h-14 px-8 text-sm uppercase tracking-[0.16em] rounded-md",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: { variant: "primary", size: "md", fullWidth: false },
  }
);

export interface CTAButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant, size, fullWidth, iconLeft, iconRight, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      >
        {iconLeft}
        <span>{children}</span>
        {iconRight && (
          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export { buttonVariants };
