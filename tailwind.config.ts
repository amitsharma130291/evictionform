import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue,mdx}",
    "./public/**/*.html",
  ],

  // Safelist dynamic classes used in components
  safelist: [
    // Badge variants
    "badge",
    "badge-success",
    "badge-neutral",
    "badge-warning",
    // Button variants
    "btn",
    "btn-primary",
    "btn-secondary",
    "btn-ghost",
    // Card
    "card",
    "card-step",
    // Trust signal chips
    "trust-chip",
    // Motion
    "transition-colors",
    "transition-shadow",
    "transition-transform",
    "duration-200",
    "ease-in-out",
    // State
    "hover:bg-brand-cta-dark",
    "hover:bg-neutral-100",
    "hover:shadow-md",
    "focus:ring-2",
    "focus:ring-brand-cta",
    "focus:ring-offset-2",
  ],

  theme: {
    extend: {
      // ─── Brand colour palette ─────────────────────────────────────────────
      colors: {
        brand: {
          // Core brand tokens (locked)
          bg: "#F4F7FB",       // page background — light blue-gray
          cta: "#059669",      // primary CTA — emerald green
          "cta-dark": "#047857", // CTA hover — emerald-700
          "cta-light": "#D1FAE5", // CTA tint — for chips/badges
          heading: "#111827",  // charcoal headings — gray-900

          // Supporting neutrals / body text
          body: "#374151",     // body copy — gray-700
          muted: "#6B7280",    // captions, secondary text — gray-500
          subtle: "#9CA3AF",   // placeholders, disabled — gray-400

          // Surface & borders
          surface: "#FFFFFF",  // card / panel background
          "surface-alt": "#EEF2F7", // alternate light surface
          border: "#E5E7EB",   // default border — gray-200
          "border-strong": "#D1D5DB", // strong border — gray-300

          // Semantic
          success: "#059669",  // same as CTA (emerald)
          warning: "#D97706",  // amber-600
          error: "#DC2626",    // red-600
          info: "#2563EB",     // blue-600 (used sparingly — trust seals only)
        },

        // Extended neutral scale (Tailwind gray pass-through with custom aliases)
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        heading: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },

      fontSize: {
        // Display / hero
        "display-xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],  // 48px
        "display-lg": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }], // 40px
        // Headings
        h1: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "700" }],  // 32px
        h2: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }], // 24px
        h3: ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.005em", fontWeight: "600" }], // 20px
        h4: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "600" }],     // 18px
        // Body
        "body-lg": ["1.0625rem", { lineHeight: "1.7", letterSpacing: "0" }],  // 17px
        "body-base": ["1rem", { lineHeight: "1.7", letterSpacing: "0" }],      // 16px
        "body-sm": ["0.9375rem", { lineHeight: "1.6", letterSpacing: "0" }],   // 15px
        // Small / caption
        small: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.005em" }],  // 14px
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],  // 12px
        // Button / label
        label: ["0.875rem", { lineHeight: "1", letterSpacing: "0.02em", fontWeight: "600" }],
      },

      // ─── Spacing ─────────────────────────────────────────────────────────
      spacing: {
        // Component-level tokens
        "btn-x": "1.5rem",      // 24px — button horizontal padding
        "btn-y": "0.75rem",     // 12px — button vertical padding
        "btn-x-sm": "1rem",     // 16px
        "btn-y-sm": "0.5rem",   // 8px
        "card-pad": "2rem",     // 32px — card inner padding
        "card-pad-sm": "1.25rem", // 20px
        "section-y": "5rem",    // 80px — section vertical gap
        "section-y-sm": "3rem", // 48px
      },

      // ─── Border radius ───────────────────────────────────────────────────
      borderRadius: {
        none: "0",
        sm: "0.25rem",    // 4px — tags, tiny chips
        DEFAULT: "0.5rem", // 8px — inputs, small elements
        md: "0.75rem",    // 12px — buttons, badges
        lg: "1rem",       // 16px — cards
        xl: "1.5rem",     // 24px — hero cards, large panels
        "2xl": "2rem",    // 32px — feature blocks
        full: "9999px",   // pill — trust chips, certain badges
      },

      // ─── Shadows ─────────────────────────────────────────────────────────
      boxShadow: {
        // Legaltech-appropriate: subtle, professional, not playful
        xs: "0 1px 2px rgba(17, 24, 39, 0.04)",
        sm: "0 1px 3px rgba(17, 24, 39, 0.06), 0 1px 2px rgba(17, 24, 39, 0.04)",
        DEFAULT: "0 2px 8px rgba(17, 24, 39, 0.06), 0 1px 3px rgba(17, 24, 39, 0.04)",
        md: "0 4px 16px rgba(17, 24, 39, 0.08), 0 2px 6px rgba(17, 24, 39, 0.04)",
        lg: "0 8px 32px rgba(17, 24, 39, 0.1), 0 4px 12px rgba(17, 24, 39, 0.06)",
        xl: "0 16px 48px rgba(17, 24, 39, 0.12), 0 8px 20px rgba(17, 24, 39, 0.06)",
        // Focus ring (CTA-colored)
        "focus-cta": "0 0 0 3px rgba(5, 150, 105, 0.3)",
        "focus-neutral": "0 0 0 3px rgba(17, 24, 39, 0.15)",
        // Card hover lift
        "card-hover": "0 12px 40px rgba(17, 24, 39, 0.12), 0 4px 12px rgba(17, 24, 39, 0.06)",
        // Inset for pressed states
        inner: "inset 0 2px 4px rgba(17, 24, 39, 0.06)",
        none: "none",
      },

      // ─── Motion / transitions ────────────────────────────────────────────
      transitionDuration: {
        DEFAULT: "200ms",
        fast: "150ms",
        slow: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
      },

      // ─── Keyframes ───────────────────────────────────────────────────────
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-out both",
        "slide-up": "slide-up 300ms ease-out both",
      },

      // ─── Max widths / layout ─────────────────────────────────────────────
      maxWidth: {
        prose: "68ch",
        content: "720px",
        layout: "1152px",
        wide: "1280px",
      },
    },
  },

  plugins: [],
};

export default config;
