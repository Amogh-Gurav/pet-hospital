import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2540",
          50: "#EAF0F6",
          100: "#CBD9E7",
          400: "#274768",
          600: "#0A2540",
          700: "#081D33",
          900: "#050F1A",
        },
        secondary: {
          DEFAULT: "#0D9488",
          50: "#E6F6F4",
          400: "#14B8A9",
          600: "#0D9488",
          700: "#0B786E",
        },
        accent: {
          DEFAULT: "#22C55E",
          50: "#E9FBF0",
          400: "#4ADE80",
          600: "#22C55E",
        },
        surface: {
          main: "#FFFFFF",
          sub: "#F8FAFC",
        },
        ink: {
          main: "#0F172A",
          muted: "#475569",
        },
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        tighter: "-0.01em",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 20px -4px rgba(10,37,64,0.08)",
        card: "0 8px 30px -8px rgba(10,37,64,0.12)",
        lift: "0 20px 50px -12px rgba(10,37,64,0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.45)" },
          "100%": { boxShadow: "0 0 0 12px rgba(34,197,94,0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
