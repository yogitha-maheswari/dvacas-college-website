import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],

  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },

    extend: {

      // ── Colors ──────────────────────────────────────────
      // Every token maps 1-to-1 with a CSS variable in globals.css.
      // Usage: bg-bg-primary, text-text-secondary, border-border-subtle, etc.
      colors: {

        // ── shadcn/ui-compatible semantic tokens ─────────────
        // These map to HSL CSS vars expected by shadcn components.
        input:      "hsl(var(--input))",
        ring:       "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // ── Sidebar group ─────────────────────────────────────
        sidebar: {
          DEFAULT:              "hsl(var(--sidebar-background))",
          foreground:           "hsl(var(--sidebar-foreground))",
          primary:              "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent:               "hsl(var(--sidebar-accent))",
          "accent-foreground":  "hsl(var(--sidebar-accent-foreground))",
          border:               "hsl(var(--sidebar-border))",
          ring:                 "hsl(var(--sidebar-ring))",
        },

        // ── Brand scale ───────────────────────────────────────
        brand: {
          primary:   "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          tertiary:  "var(--brand-tertiary)",
        },

        // ── Surface scale ─────────────────────────────────────
        surface: {
          canvas:  "var(--surface-canvas)",
          base:    "var(--surface-base)",
          wash:    "var(--surface-wash)",
        },

        // ── Semantic backgrounds ──────────────────────────────
        bg: {
          primary:  "var(--bg-primary)",
          surface:  "var(--bg-surface)",
          sunken:   "var(--bg-sunken)",
          elevated: "var(--bg-elevated)",
          overlay:  "var(--bg-overlay)",
        },

        // ── Semantic text ─────────────────────────────────────
        text: {
          primary:   "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary:  "var(--text-tertiary)",
          ghost:     "var(--text-ghost)",
          brand:     "var(--text-brand)",
        },

        // ── Ink aliases (shorthand for text tokens) ───────────
        ink: {
          primary:   "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary:  "var(--text-tertiary)",
          ghost:     "var(--text-ghost)",
          onDark:    "var(--text-on-dark)",
        },

        // ── Semantic borders ──────────────────────────────────
        // DEFAULT also satisfies shadcn's `border: "hsl(var(--border))"` contract.
        border: {
          DEFAULT: "hsl(var(--border))",
          strong:  "var(--border-strong)",
          subtle:  "var(--border-subtle)",
        },

        // ── Interactive states ────────────────────────────────
        state: {
          active:   "var(--state-active)",
          hover:    "var(--state-hover)",
          focus:    "var(--state-focus)",
          selected: "var(--state-selected-bg)",
        },

        // ── UI utility ────────────────────────────────────────
        cta:         "var(--color-cta)",
        interactive: "var(--color-interactive)",

        // ── Purple accent scale ───────────────────────────────
        purple: {
          deep: "var(--purple-deep)",
          rich: "var(--purple-rich)",
          mid:  "var(--purple-mid)",
          soft: "var(--purple-soft)",
          pale: "var(--purple-pale)",
          tint: "var(--purple-tint)",
        },

        // ── Silver accent ───────────────────────────────────────
        silver: {
          DEFAULT: "var(--silver)",
          soft:    "hsl(var(--silver-soft))",
        },

        // ── Glass surface colors ──────────────────────────────
        glass: {
          DEFAULT: "var(--glass-bg)",
          strong:  "var(--glass-bg-strong)",
          subtle:  "var(--glass-bg-subtle)",
          navy:    "rgba(29, 38, 57, 0.55)",
          purple:  "rgba(70, 49, 92, 0.50)",
        },
      },

      // ── Border Radius ────────────────────────────────────
      borderRadius: {
        none:   "var(--radius-none)",
        xs:     "var(--radius-xs)",
        sm:     "var(--radius-sm)",
        md:     "var(--radius-md)",
        lg:     "var(--radius-lg)",
        xl:     "var(--radius-xl)",
        pill:   "var(--radius-pill)",
        circle: "var(--radius-circle)",
      },

      // ── Font Families ────────────────────────────────────
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
        sans:    ["var(--font-sans)"],
        mono:    ["var(--font-mono)"],
      },

      // ── Font Sizes ───────────────────────────────────────
      // Paired with their matching leading tokens for correct line-height.
      fontSize: {
        "2xs": ["var(--text-2xs)", { lineHeight: "var(--leading-base)"  }],
        xs:    ["var(--text-xs)",  { lineHeight: "var(--leading-base)"  }],
        sm:    ["var(--text-sm)",  { lineHeight: "var(--leading-base)"  }],
        base:  ["var(--text-base)",{ lineHeight: "var(--leading-base)"  }],
        md:    ["var(--text-md)",  { lineHeight: "var(--leading-body)"  }],
        lg:    ["var(--text-lg)",  { lineHeight: "var(--leading-body)"  }],
        xl:    ["var(--text-xl)",  { lineHeight: "var(--leading-dense)" }],
        "2xl": ["var(--text-2xl)", { lineHeight: "var(--leading-dense)" }],
        "3xl": ["var(--text-3xl)", { lineHeight: "1"                    }],
        "h3":  ["var(--text-h3)",  { lineHeight: "var(--leading-base)"  }],
        "h2":  ["var(--text-h2)",  { lineHeight: "var(--leading-tight)" }],
        "h1":  ["var(--text-h1)",  { lineHeight: "var(--leading-dense)" }],
      },

      // ── Font Weights ─────────────────────────────────────
      fontWeight: {
        light:    "var(--weight-light)",
        regular:  "var(--weight-regular)",
        medium:   "var(--weight-medium)",
        semibold: "var(--weight-semibold)",
        bold:     "var(--weight-bold)",
      },

      // ── Letter Spacing ───────────────────────────────────
      letterSpacing: {
        tighter: "var(--tracking-tighter)",
        tight:   "var(--tracking-tight)",
        normal:  "var(--tracking-normal)",
        label:   "var(--tracking-label)",
        wide:    "var(--tracking-wide)",
        wider:   "var(--tracking-wider)",
      },

      // ── Line Height ──────────────────────────────────────
      lineHeight: {
        dense:   "var(--leading-dense)",
        tight:   "var(--leading-tight)",
        base:    "var(--leading-base)",
        body:    "var(--leading-body)",
        relaxed: "var(--leading-relaxed)",
      },

      // ── Spacing ──────────────────────────────────────────
      // Overrides Tailwind's default scale with the 8px-grid tokens.
      spacing: {
        1:  "var(--space-1)",
        2:  "var(--space-2)",
        3:  "var(--space-3)",
        4:  "var(--space-4)",
        5:  "var(--space-5)",
        6:  "var(--space-6)",
        8:  "var(--space-8)",
        10: "var(--space-10)",
        12: "var(--space-12)",
        16: "var(--space-16)",
        20: "var(--space-20)",
        24: "var(--space-24)",
      },

      // ── Layout Widths ────────────────────────────────────
      width: {
        "sidebar-collapsed": "var(--sidebar-collapsed)",
        "sidebar-expanded":  "var(--sidebar-expanded)",
        "content-max":       "var(--content-max)",
        "carousel-card":     "var(--carousel-card-width)",
      },

      maxWidth: {
        content: "var(--content-max)",
      },

      // ── Layout Heights ───────────────────────────────────
      height: {
        topbar: "var(--topbar-height)",
      },

      minHeight: {
        screen: "100dvh",
      },

      // ── Backdrop Blur ────────────────────────────────────
      // Maps to the glass blur tokens for use with Tailwind's
      // backdrop-blur-* utilities: backdrop-blur-glass-sm, etc.
      backdropBlur: {
        "glass-sm": "8px",
        "glass":    "16px",
        "glass-lg": "28px",
      },

      // ── Box Shadow ───────────────────────────────────────
      boxShadow: {
        glass:      "var(--glass-shadow)",
        "glass-lg": "var(--glass-shadow-lg)",
        card:       "0 4px 16px rgba(29, 38, 57, 0.06)",
        "card-lg":  "0 12px 40px rgba(29, 38, 57, 0.10)",
        // Semantic aliases
        elegant:    "var(--shadow-lg)",
        deep:       "var(--shadow-xl)",
        soft:       "var(--shadow-md)",
      },

      // ── Z-Index ──────────────────────────────────────────
      zIndex: {
        base:     "var(--z-base)",
        raised:   "var(--z-raised)",
        dropdown: "var(--z-dropdown)",
        sticky:   "var(--z-sticky)",
        overlay:  "var(--z-overlay)",
        modal:    "var(--z-modal)",
        toast:    "var(--z-toast)",
        tooltip:  "var(--z-tooltip)",
      },

      // ── Transitions ──────────────────────────────────────
      transitionDuration: {
        fast:     "80ms",
        base:     "150ms",
        medium:   "200ms",
        slow:     "300ms",
        layout:   "200ms",
        carousel: "600ms",
        stack:    "500ms",
        orb:      "28000ms",
      },

      transitionTimingFunction: {
        base:     "ease",
        layout:   "cubic-bezier(0.4, 0, 0.2, 1)",
        spring:   "cubic-bezier(0.22, 1, 0.36, 1)",
        carousel: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      // ── Keyframes ────────────────────────────────────────
      // Names match the @keyframes in globals.css exactly.
      keyframes: {

        // Visibility
        "fade-in":  { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-out": { from: { opacity: "1" }, to: { opacity: "0" } },

        // Vertical entrances
        "slide-up": {
          from: { transform: "translateY(8px)", opacity: "0" },
          to:   { transform: "translateY(0)",   opacity: "1" },
        },
        "slide-down": {
          from: { transform: "translateY(-8px)", opacity: "0" },
          to:   { transform: "translateY(0)",    opacity: "1" },
        },

        // Horizontal panels — toasts, drawers
        "slide-in-right": {
          from: { transform: "translateX(100%)", opacity: "0" },
          to:   { transform: "translateX(0)",    opacity: "1" },
        },
        "slide-out-right": {
          from: { transform: "translateX(0)",    opacity: "1" },
          to:   { transform: "translateX(100%)", opacity: "0" },
        },

        // Modal
        "modal-in": {
          "0%":   { opacity: "0", transform: "translateY(8px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0)   scale(1)"    },
        },

        // Sidebar width
        "expand-width": {
          from: { width: "var(--sidebar-collapsed)" },
          to:   { width: "var(--sidebar-expanded)"  },
        },
        "collapse-width": {
          from: { width: "var(--sidebar-expanded)"  },
          to:   { width: "var(--sidebar-collapsed)" },
        },

        // Live data ticker number roll
        "tick-up": {
          from: { transform: "translateY(100%)", opacity: "0" },
          to:   { transform: "translateY(0)",    opacity: "1" },
        },

        // Cursor blink
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },

        // Skeleton shimmer
        shimmer: {
          "0%":   { opacity: "0.5" },
          "50%":  { opacity: "1"   },
          "100%": { opacity: "0.5" },
        },

        // Spinner
        spin: {
          from: { transform: "rotate(0deg)"   },
          to:   { transform: "rotate(360deg)" },
        },

        // Scale in
        "scale-in": {
          from: { transform: "scale(0.92)", opacity: "0" },
          to:   { transform: "scale(1)",    opacity: "1" },
        },

        // Progress bar fill
        "fill-bar": {
          from: { width: "0%" },
          to:   { width: "var(--progress-width, 100%)" },
        },

        // Activity feed row entrance
        "feed-in": {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },

        // WebSocket reconnecting badge pulse
        "status-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "1"   },
        },

        // Theme toggle rotate
        "rotate-half": {
          from: { transform: "rotate(0deg)"   },
          to:   { transform: "rotate(180deg)" },
        },

        // Static background orb drift — layer 1
        "orb-drift-1": {
          "0%":   { transform: "translate(0%, 0%) scale(1)"     },
          "33%":  { transform: "translate(4%, 3%) scale(1.04)"  },
          "66%":  { transform: "translate(-2%, 5%) scale(0.97)" },
          "100%": { transform: "translate(3%, -2%) scale(1.02)" },
        },

        // Static background orb drift — layer 2
        "orb-drift-2": {
          "0%":   { transform: "translate(0%, 0%) scale(1)"      },
          "40%":  { transform: "translate(-5%, 3%) scale(1.06)"  },
          "70%":  { transform: "translate(3%, -4%) scale(0.95)"  },
          "100%": { transform: "translate(-2%, 2%) scale(1.03)"  },
        },

        // Static background orb drift — layer 3
        "orb-drift-3": {
          "0%":   { transform: "translate(0%, 0%) scale(1)"     },
          "50%":  { transform: "translate(6%, -5%) scale(1.08)" },
          "100%": { transform: "translate(-4%, 3%) scale(0.94)" },
        },

        // Carousel card entrance
        "carousel-enter": {
          from: { opacity: "0", transform: "scale(0.96) translateX(12px)" },
          to:   { opacity: "1", transform: "scale(1) translateX(0)"       },
        },

        // Scroll stack card entrance
        "stack-card-in": {
          from: { opacity: "0", transform: "scale(0.94) translateY(24px)" },
          to:   { opacity: "1", transform: "scale(1) translateY(0)"       },
        },

        // Glass shimmer sweep highlight
        "glass-sweep": {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },

        // Grain texture subtle drift (for animated grain layers)
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)"     },
          "20%":       { transform: "translate(-2%, -3%)" },
          "40%":       { transform: "translate(3%, 1%)"   },
          "60%":       { transform: "translate(-1%, 4%)"  },
          "80%":       { transform: "translate(2%, -2%)"  },
        },

        // Accordion (Radix UI)
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },

        // Fade up entrance
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)"    },
        },

        // Simple orb float
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0)"        },
          "50%":      { transform: "translate(30px, -40px)" },
        },
      },

      // ── Animation Shorthands ─────────────────────────────
      animation: {

        // Visibility
        "fade-in":  "fade-in 150ms ease both",
        "fade-out": "fade-out 150ms ease both",

        // Vertical entrances
        "slide-up":   "slide-up 150ms ease both",
        "slide-down": "slide-down 150ms ease both",

        // Horizontal panels & toasts
        "slide-in-right":  "slide-in-right 200ms cubic-bezier(0.4,0,0.2,1) both",
        "slide-out-right": "slide-out-right 200ms cubic-bezier(0.4,0,0.2,1) both",

        // Modal
        modal: "modal-in 200ms ease both",

        // Sidebar
        "expand-width":   "expand-width 200ms cubic-bezier(0.4,0,0.2,1) both",
        "collapse-width": "collapse-width 200ms cubic-bezier(0.4,0,0.2,1) both",

        // Live data ticker
        "tick-up": "tick-up 600ms ease both",

        // Cursor blink
        blink: "blink 800ms step-end infinite",

        // Skeleton shimmer
        shimmer: "shimmer 1.8s ease infinite",

        // Spinner
        spin: "spin 600ms linear infinite",

        // Scale in
        "scale-in": "scale-in 200ms cubic-bezier(0.22,1,0.36,1) both",

        // Progress bar
        "fill-bar": "fill-bar 600ms ease both",

        // Activity feed row
        "feed-in": "feed-in 150ms ease both",

        // WebSocket reconnecting
        "status-pulse": "status-pulse 1.4s ease infinite",

        // Theme toggle
        "rotate-half": "rotate-half 200ms ease both",

        // Static background orb drifts
        "orb-drift-1": "orb-drift-1 28s ease-in-out infinite alternate",
        "orb-drift-2": "orb-drift-2 22s ease-in-out infinite alternate",
        "orb-drift-3": "orb-drift-3 16s ease-in-out infinite alternate",

        // Carousel slide entrance
        "carousel-enter": "carousel-enter 600ms cubic-bezier(0.4,0,0.2,1) both",

        // Scroll stack card entrance
        "stack-card-in": "stack-card-in 500ms cubic-bezier(0.22,1,0.36,1) both",

        // Glass shimmer highlight sweep
        "glass-sweep": "glass-sweep 3s linear infinite",

        // Grain drift (for animated grain layers)
        "grain-shift": "grain-shift 8s steps(10) infinite",

        // Accordion (Radix UI)
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",

        // Fade up entrance
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",

        // Simple orb float
        "orb-float": "orb-float 18s ease-in-out infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};

export default config;
