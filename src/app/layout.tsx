import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import SmoothScroll from "@/src/components/SmoothScroll";
import './globals.css';

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sara Romão — Soluções de software",
  description:
    "Analista e desenvolvedora de software. Design, APIs, integrações e automação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${plex.variable} ${plexMono.variable}`}>
      <body className="bg-paper font-body text-ink">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
