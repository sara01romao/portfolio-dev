"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Workflow, Monitor, BrainCircuit } from "lucide-react";
import Reveal from "./Reveal";

const tabs = [
  {
    id: "exp",
    label: "Experiência",
    icon: Workflow,
    text: "Projetos profissionais e independentes, participando de diferentes etapas do desenvolvimento de software.",
  },
  {
    id: "tec",
    label: "Tecnologia",
    icon: Monitor,
    text: "Busco equilibrar qualidade técnica, organização, usabilidade e experiência do usuário em cada projeto.",
  },
  {
    id: "abo",
    label: "Abordagem",
    icon: BrainCircuit,
    text: "Começo pelo fluxo do usuário, desenho a arquitetura e entrego código simples de manter.",
  },
];

export default function About() {
  const [active, setActive] = useState("exp");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="sobre" className="bg-lilac px-6 py-20 text-ink">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <h2 className="font-display text-5xl font-extrabold text-rose md:text-6xl">SOBRE</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-4  text-sm leading-relaxed md:text-base">
          Combino design funcional e arquitetura de código para construir websites, APIs, aplicações, e ferramentas de automação sob medida.
        </Reveal>

       <div className="mt-14 grid w-full grid-cols-[2fr_1fr_1fr] items-stretch gap-3">
          {tabs.map((t) => {
            const on = t.id === active;
            const Icon = t.icon;
            return (
              <motion.button
                key={t.id}
                onClick={() => setActive(t.id)}
                data-active={on}
                whileTap={{ y: 4, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 600, damping: 30 }}
                className="keycap relative h-20 min-w-0 p-3 text-xs font-semibold sm:text-sm"
              >
                <Icon
                  className={`absolute right-3 top-3 transition-colors duration-150 ${
                    on ? "text-rose" : "text-neutral-400"
                  }`}
                  size={18}
                />


                <span className="sm:hidden text-ink">{t.label[0]}</span>
                <span className="hidden sm:inline text-ink">{t.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* indicador */}
        <div className="relative mt-6 h-5 w-full max-w-xl">
          <motion.div
            className="absolute top-0 h-0 w-0 border-x-[9px] border-b-[14px] border-x-transparent border-b-rose"
            animate={{ left: active === "exp" ? "15%" : active === "tec" ? "63%" : "88%" }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          />
        </div>

        <div className="mt-4 min-h-[64px] max-w-lg text-left text-sm">
          <AnimatePresence mode="wait">
            <motion.p
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-lg"
            >
              <span className="text-rose text-lg"># {current.label}</span> {current.text}
            </motion.p>
          </AnimatePresence>
          <motion.div
            className="ml-auto mt-4 h-[3px] w-28 bg-rose"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            style={{ originX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}
