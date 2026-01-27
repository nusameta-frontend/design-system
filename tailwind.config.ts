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
        border: "var(--nm-border)",
        input: "var(--nm-input)",
        ring: "var(--nm-ring)",
        background: "var(--nm-background)",
        foreground: "var(--nm-foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        btn: {
          primary: {
            DEFAULT: "var(--nm-btn-primary-bg)",
            fg: "var(--nm-btn-primary-fg)",
            hover: "var(--nm-btn-primary-hover)",
          },
          destructive: {
            DEFAULT: "var(--nm-btn-dest-bg)",
            fg: "var(--nm-btn-dest-fg)",
            hover: "var(--nm-btn-dest-hover)",
          },
          secondary: {
            DEFAULT: "var(--nm-btn-sec-bg)",
            fg: "var(--nm-btn-sec-fg)",
            hover: "var(--nm-btn-sec-hover)",
          },
          ghost: {
            "hover-bg": "var(--nm-btn-ghost-hover-bg)",
            "hover-fg": "var(--nm-btn-ghost-hover-fg)",
          },
        },
        popover: {
          DEFAULT: "var(--nm-popover)",
          foreground: "var(--nm-popover-foreground)",
        },
        card: {
          DEFAULT: "var(--nm-card)",
          foreground: "var(--nm-card-foreground)",
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
