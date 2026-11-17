import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./src/app/**/*.{ts,tsx}",
  "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        night: "#161616",
        graphite: "#3a3a3a",
        lilac: "#e4e2ec",
        rose: "#ee6f9b",
        ember: "#ff5a1f",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
