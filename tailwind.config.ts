import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#FBFBF9",
          dim: "#d9dade",
          bright: "#f9f9fd",
          container: {
            lowest: "#ffffff",
            low: "#F5F5F2",
            DEFAULT: "#ededf1",
            high: "#e8e8ec",
            highest: "#e2e2e6",
          },
        },
        "on-surface": {
          DEFAULT: "#1C1E21",
          variant: "#4B5158",
          muted: "#757E88",
        },
        primary: {
          DEFAULT: "#1E3838",
          dark: "#072323",
          container: "#162C2C",
          fixed: "#cbe8e7",
          "fixed-dim": "#b0cccb",
        },
        secondary: {
          DEFAULT: "#1F513F",
          container: "#b9eed5",
          "on-container": "#1d4f3d",
          fixed: "#b9eed5",
        },
        outline: {
          DEFAULT: "#727878",
          variant: "#E5E5DF",
          subtle: "#ECECE7",
        },
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.375rem",
        xl: "0.5rem",
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
