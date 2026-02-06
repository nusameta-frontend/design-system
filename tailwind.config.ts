const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  prefix: "nm-",
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', fontFamily.sans],
        heading: ['"Inter"', "sans-serif"],
      },
      colors: {
        border: "oklch(var(--nm-border) / <alpha-value>)",
        input: "oklch(var(--nm-input) / <alpha-value>)",
        ring: "oklch(var(--nm-ring) / <alpha-value>)",
        background: "oklch(var(--nm-background) / <alpha-value>)",
        foreground: "oklch(var(--nm-foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--nm-primary) / <alpha-value>)",
          foreground: "oklch(var(--nm-primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--nm-secondary) / <alpha-value>)",
          foreground: "oklch(var(--nm-secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--nm-destructive) / <alpha-value>)",
          foreground: "oklch(var(--nm-destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--nm-muted) / <alpha-value>)",
          foreground: "oklch(var(--nm-muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--nm-accent) / <alpha-value>)",
          foreground: "oklch(var(--nm-accent-foreground) / <alpha-value>)",
        },
        btn: {
          primary: {
            DEFAULT: "oklch(var(--nm-btn-primary-bg) / <alpha-value>)",
            fg: "oklch(var(--nm-btn-primary-fg) / <alpha-value>)",
            hover: "oklch(var(--nm-btn-primary-hover) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--nm-btn-dest-bg) / <alpha-value>)",
            fg: "oklch(var(--nm-btn-dest-fg) / <alpha-value>)",
            hover: "oklch(var(--nm-btn-dest-hover) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--nm-btn-sec-bg) / <alpha-value>)",
            fg: "oklch(var(--nm-btn-sec-fg) / <alpha-value>)",
            hover: "oklch(var(--nm-btn-sec-hover) / <alpha-value>)",
          },
          ghost: {
            "hover-bg": "oklch(var(--nm-btn-ghost-hover-bg) / <alpha-value>)",
            "hover-fg": "oklch(var(--nm-btn-ghost-hover-fg) / <alpha-value>)",
          },
        },
        popover: {
          DEFAULT: "oklch(var(--nm-popover) / <alpha-value>)",
          foreground: "oklch(var(--nm-popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(var(--nm-card) / <alpha-value>)",
          foreground: "oklch(var(--nm-card-foreground) / <alpha-value>)",
        },
        table: {
          "row-selected-highlight":
            "oklch(var(--nm-table-row-selected-highlight-bg) / <alpha-value>)",
          "row-selected-highlight-hover":
            "oklch(var(--nm-table-row-selected-highlight-hover-bg) / <alpha-value>)",
        },
        textfield: {
          DEFAULT: "oklch(var(--nm-textfield-bg) / <alpha-value>)",
          foreground: "oklch(var(--nm-textfield-fg) / <alpha-value>)",
          border: "oklch(var(--nm-textfield-border) / <alpha-value>)",
          placeholder: "oklch(var(--nm-textfield-placeholder) / <alpha-value>)",
          disabled: {
            DEFAULT: "oklch(var(--nm-textfield-disabled-bg) / <alpha-value>)",
            foreground:
              "oklch(var(--nm-textfield-disabled-fg) / <alpha-value>)",
          },
          label: {
            DEFAULT: "oklch(var(--nm-textfield-label-fg) / <alpha-value>)",
            error: "oklch(var(--nm-textfield-label-error-fg) / <alpha-value>)",
          },
          helper: {
            DEFAULT: "oklch(var(--nm-textfield-helper-fg) / <alpha-value>)",
            error: "oklch(var(--nm-textfield-helper-error-fg) / <alpha-value>)",
          },
        },
      },
      borderRadius: {
        lg: `var(--nm-radius)`,
        md: `calc(var(--nm-radius) - 2px)`,
        sm: "calc(var(--nm-radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--nm-radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--nm-radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
