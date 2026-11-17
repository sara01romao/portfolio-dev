"use client";

import type { ComponentType, SVGProps } from "react";
import { motion, MotionConfig, type Variants } from "framer-motion";

const PINK = "#ff5c8d";
const IDLE = "#d4d4d8";

/* ---------- Ícones (stroke = currentColor, muda com a animação) ---------- */
const svgProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-12 w-12",
  "aria-hidden": true,
};

const RulesIcon = () => (
  <svg {...svgProps}>
    <rect x="4" y="20" width="8" height="8" rx="2" />
    <rect x="30" y="5" width="9" height="9" rx="2" />
    <rect x="30" y="34" width="9" height="9" rx="2" />
    <path d="M12 24h8M20 9.5v29M20 9.5h10M20 38.5h10" />
  </svg>
);

const DatabaseIcon = () => (
  <svg {...svgProps}>
    <ellipse cx="24" cy="10" rx="15" ry="5" />
    <path d="M9 10v28M39 10v28" />
    <path d="M9 20a15 5 0 0 0 30 0M9 29a15 5 0 0 0 30 0M9 38a15 5 0 0 0 30 0" />
  </svg>
);

const ApiIcon = () => (
  <svg {...svgProps} className="h-14 w-14">
    <path d="M16 8c-4 0-5 2-5 5v5c0 3-2 5-5 6 3 1 5 3 5 6v5c0 3 1 5 5 5" />
    <path d="M32 8c4 0 5 2 5 5v5c0 3 2 5 5 6-3 1-5 3-5 6v5c0 3-1 5-5 5" />
    <path d="M19 20h10M26 17l3 3-3 3" />
    <path d="M29 28H19M22 25l-3 3 3 3" />
  </svg>
);

const MonitorIcon = () => (
  <svg {...svgProps}>
    <rect x="5" y="6" width="38" height="27" rx="3" />
    <path d="M24 33v9M16 42h16" />
    <path d="M17 19.5l5 5 9-10" />
  </svg>
);

const RobotIcon = () => (
  <svg {...svgProps}>
    <rect x="9" y="14" width="30" height="23" rx="7" />
    <path d="M24 14V8M20 8h8" />
    <path d="M18 23v4M30 23v4" />
    <path d="M4 26h5M39 26h5" />
  </svg>
);

type Step = { label: string; Icon: ComponentType };

const steps: Step[] = [
  { label: "Regras de negócio", Icon: RulesIcon },
  { label: "Modelagem de dados", Icon: DatabaseIcon },
  { label: "APIS", Icon:  ApiIcon},
  { label: "Validações", Icon: MonitorIcon },
  { label: "Automação.", Icon: RobotIcon },
];

/* ---------- Variants ---------- */
// O container dispara os filhos em sequência: item → linha → item → linha...
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.55, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0.45 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

const iconVariant: Variants = {
  hidden: { color: IDLE, scale: 0.9 },
  show: {
    color: "#FF7DA4",
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 16 },
  },
};

// Linha horizontal (desktop): cresce da esquerda p/ direita e fica rosa
const lineX: Variants = {
  hidden: { scaleX: 0, backgroundColor: IDLE },
  show: {
    scaleX: 1,
    backgroundColor: PINK,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
};

// Linha vertical (mobile): cresce de cima p/ baixo e fica rosa
const lineY: Variants = {
  hidden: { scaleY: 0, backgroundColor: IDLE },
  show: {
    scaleY: 1,
    backgroundColor: PINK,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
};

function Connector() {
  return (
    <div
      aria-hidden
      className="flex justify-center md:mx-4 md:mt-[23px] md:flex-1"
    >
      {/* trilho cinza (fica sempre visível) */}
      <div className="relative h-10 w-0.5 overflow-hidden rounded-full bg-zinc-200 md:h-0.5 md:w-full">
        {/* mobile: vertical */}
        <motion.span
          variants={lineY}
          style={{ originY: 0 }}
          className="absolute inset-0 md:hidden"
        />
        {/* desktop: horizontal */}
        <motion.span
          variants={lineX}
          style={{ originX: 0 }}
          className="absolute inset-0 hidden md:block"
        />
      </div>
    </div>
  );
}

export default function ApiFlow() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 text-center">
        {/* <h2 className="text-sm font-bold tracking-tight text-white sm:text-base">
          APIs E INTEGRAÇÕES
        </h2>
        <p className="mt-4 text-sm text-white sm:text-base">
          REST • HTTP • Autenticação • Webhooks
        </p> */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-14 flex flex-col items-center md:flex-row md:items-start md:justify-between"
        >
          {steps.map(({ label, Icon }, i) => (
            <div key={label} className="contents">
              <motion.div
                variants={item}
                className="flex w-36 flex-col items-center gap-4"
              >
                <motion.div variants={iconVariant}>
                  <Icon />
                </motion.div>
                <span className="text-sm leading-snug text-white sm:text-[15px]">
                  {label}
                </span>
              </motion.div>

              {i < steps.length - 1 && <Connector />}
            </div>
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  );
}
