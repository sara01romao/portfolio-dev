import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";
import "./globals.css";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Sara Romão — Soluções de Software",
  description:
    "Websites, APIs, aplicações e ferramentas de automação sob medida.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
