"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Logo from "./Logo";
import { scrollToTarget } from "@/lib/lenis";

const words = [
  { t: "SOLUÇÕES", c: "text-white" },
  { t: "DE", c: "text-white" },
  { t: "SOFTWARE", c: "text-rose" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-night px-6">
      <motion.div style={{ y, opacity }} className="flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} className="mb-14" animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Logo label/>
        </motion.div>

        <h1 className="flex flex-wrap justify-center gap-x-4 font-display text-4xl font-extrabold italic tracking-tight sm:text-6xl md:text-7xl">
          {words.map((w, i) => (
            <span key={w.t} className="overflow-hidden pb-2">
              <motion.span
                className={`inline-block ${w.c}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                {w.t}
              </motion.span>
            </span>
          ))}
        </h1>

        
        <motion.div className="mb-14 mt-10" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <p className="text-lg"> Web • Apps • Integrações • Design • Automação</p>
        </motion.div>

        <motion.button
          aria-label="Rolar para baixo"
          onClick={() => scrollToTarget("#sobre")}
          className="keycap h-14 w-14 items-center justify-center !text-neutral-700"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 14 }}
        >
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ArrowDown size={26} strokeWidth={3} />
          </motion.span>
        </motion.button>

      </motion.div>
    </section>
  );
}
