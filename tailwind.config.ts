import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Canvas & Surfaces
        background: "#fcf9f4",
        "on-background": "#1c1c19",
        surface: "#fcf9f4",
        "surface-dim": "#dcdad5",
        "surface-bright": "#fcf9f4",
        "surface-variant": "#e5e2dd",
        "on-surface": "#1c1c19",
        "on-surface-variant": "#414847",
        "surface-white": "#FFFFFF",
        "surface-tint": "#3e6563",
        "inverse-surface": "#31302d",
        "inverse-on-surface": "#f3f0eb",

        // Elevation Container Surfaces
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3ee",
        "surface-container": "#f0ede9",
        "surface-container-high": "#ebe8e3",
        "surface-container-highest": "#e5e2dd",

        // Primary Brand (Deep Teal)
        primary: "#002624",
        "on-primary": "#ffffff",
        "primary-container": "#123c3a",
        "on-primary-container": "#7ea6a3",
        "inverse-primary": "#a5cecb",
        "primary-fixed": "#c0ebe7",
        "primary-fixed-dim": "#a5cecb",
        "on-primary-fixed": "#00201f",
        "on-primary-fixed-variant": "#254d4b",
        "teal-dark": "#0C2B29",

        // Secondary Brand (Warm Sand / Earth)
        secondary: "#635e53",
        "on-secondary": "#ffffff",
        "secondary-container": "#eae1d3",
        "on-secondary-container": "#6a6459",
        "secondary-fixed": "#eae1d3",
        "secondary-fixed-dim": "#cec5b8",
        "on-secondary-fixed": "#1f1b13",
        "on-secondary-fixed-variant": "#4b463c",

        // Tertiary Brand (Brass Gold / Warm Ochre)
        tertiary: "#2f1d00",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#4b3000",
        "on-tertiary-container": "#c6964f",
        "tertiary-fixed": "#ffddb1",
        "tertiary-fixed-dim": "#f2be72",
        "on-tertiary-fixed": "#291800",
        "on-tertiary-fixed-variant": "#624000",

        // Outlines & Borders
        outline: "#717978",
        "outline-variant": "#c0c8c7",
        "mist-border": "#E2DCD0",

        // Semantic & Accents
        "charcoal-text": "#1F2523",
        "stone-muted": "#5E6663",
        "botanical-green": "#2F7D5B",
        "terracotta-alert": "#B5472F",
        "amber-demo": "#FFF4DC",

        // Feedback / Error
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        // Stitch Specific Named Aliases
        "display-hero": ["var(--font-playfair)", "serif"],
        "display-hero-mobile": ["var(--font-playfair)", "serif"],
        "headline-lg": ["var(--font-playfair)", "serif"],
        "headline-lg-mobile": ["var(--font-playfair)", "serif"],
        "headline-md": ["var(--font-playfair)", "serif"],
        "headline-md-mobile": ["var(--font-playfair)", "serif"],
        "title-sm": ["var(--font-playfair)", "serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"],
        "body-md": ["var(--font-inter)", "sans-serif"],
        "body-sm": ["var(--font-inter)", "sans-serif"],
        caption: ["var(--font-inter)", "sans-serif"],
        "label-eyebrow": ["var(--font-inter)", "sans-serif"],
        "button-text": ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-hero": [
          "64px",
          { lineHeight: "70px", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "display-hero-mobile": [
          "36px",
          { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "headline-lg": [
          "44px",
          { lineHeight: "52px", letterSpacing: "-0.015em", fontWeight: "500" },
        ],
        "headline-lg-mobile": [
          "28px",
          { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        "headline-md": [
          "28px",
          { lineHeight: "36px", fontWeight: "500" },
        ],
        "headline-md-mobile": [
          "22px",
          { lineHeight: "30px", fontWeight: "500" },
        ],
        "title-sm": [
          "20px",
          { lineHeight: "26px", fontWeight: "600" },
        ],
        "body-lg": [
          "18px",
          { lineHeight: "30px", fontWeight: "400" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "27px", fontWeight: "400" },
        ],
        "body-sm": [
          "14px",
          { lineHeight: "22px", fontWeight: "400" },
        ],
        caption: [
          "13px",
          { lineHeight: "20px", fontWeight: "400" },
        ],
        "label-eyebrow": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.12em", fontWeight: "600" },
        ],
        "button-text": [
          "15px",
          { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" },
        ],
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-mobile": "1rem",
        margin: "2.5rem",
        "margin-mobile": "1.25rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4.5rem",
        "space-4xl": "7.5rem",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        card: "0px 12px 32px rgba(18, 60, 58, 0.06)",
        "card-hover": "0px 20px 48px rgba(18, 60, 58, 0.10)",
        floating: "0px 16px 40px rgba(18, 60, 58, 0.12)",
        fab: "0px 16px 40px rgba(18, 60, 58, 0.22)",
        button: "0px 12px 28px rgba(18, 60, 58, 0.18)",
        nav: "0px 1px 8px rgba(18, 60, 58, 0.05)",
        soft: "0px 4px 16px rgba(18, 60, 58, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
