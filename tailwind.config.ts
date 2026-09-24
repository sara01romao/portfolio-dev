import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111112",
        paper: "#FBFAF8",
        haze: "#F1F0EC",
        flamingo: "#F14E8A",
        flamingoDark: "#C93268",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-plex)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        wrap: "1180px",
      },
      letterSpacing: {
        tightest2: "-0.045em",
      },
    },
  },
  plugins: [],
};

export default config;
