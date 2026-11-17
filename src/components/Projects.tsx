"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import ApiFlow from "./ApiFlow";

/** Troque pelos seus prints em /public/projects */
const shots = [
  { src: "/projects/feedback.png", alt: "Tela de feedback do PetHub", cls: "flex-[3]" },
  { src: "/projects/padaria-mobile.png", alt: "Versão mobile do app da padaria", cls: "hidden flex-[1.3] md:block" },
  { src: "/projects/image.png", alt: "Tela do app de música", cls: "hidden flex-[1.1] lg:block" },
];

const designer = [
  { src: "/projects/estilos.png", alt: "Guia de estilos", cls: "flex-1" },
  { src: "/projects/ui.png", alt: "Telas de interface (UI)", cls: "flex-1" },
];

const items = [
  {
    id: "web",
    title: "Websites & Apps",
    text: "Criação de sites institucionais, Apps e Landing Pages otimizadas para captura de clientes e vendas.",
    bg: "bg-ink text-white",
    plus: "text-rose",
  },
  {
    id: "ux",
    title: "Designer UI / UX",
    text: "Mapeamento do fluxo do usuário, wireframes, prototipagem e Design Systems.",
    bg: "bg-lilac text-ink",
    plus: "text-rose",
  },
  {
    id: "eng",
    title: "Engenharia de Software",
    text: "Desenvolvimento de APIs, integrações, modelagem de dados, regras de negócio e automação.",
    bg: "bg-graphite text-white",
    plus: "text-white",
  },
];

export default function Projects() {
  const [open, setOpen] = useState<string | null>("web");

  return (
    <section id="projetos" className="bg-ink">
      <div className="px-6 pb-24 pt-28 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-xl font-display text-4xl sm:text-5xl font-extrabold leading-[0.95] md:text-7xl">
            PROJETOS EM DESTAQUE
          </h2>
        </Reveal>
      </div>

      {items.map((it) => {
        const isOpen = open === it.id;
        return (
          <div key={it.id} className={it.bg}>
            <button
              onClick={() => setOpen(isOpen ? null : it.id)}
              className="mx-auto flex w-full max-w-7xl items-start justify-between gap-6 px-6 py-10 text-left md:px-10"
              aria-expanded={isOpen}
            >
              <div>
                <h3 className="font-display text-3xl font-bold md:text-4xl">{it.title}</h3>
                <p className="mt-4 max-w-4xl text-base opacity-90">{it.text}</p>
              </div>
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ type: "spring", stiffness: 260, damping: 18 }} className={it.plus}>
                <Plus size={44} strokeWidth={1} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && it.id === "web" && (
              <motion.div
                key="content-web"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mx-auto flex max-w-7xl gap-3 px-4 sm:gap-4 sm:px-6 md:px-10">
                  {shots.map((s, i) => (
                    <motion.div
                      key={s.src}
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 + i * 0.12, duration: 0.7 }}
                      className={`min-w-0 aspect-[4/3] overflow-hidden rounded-sm bg-neutral-800 sm:aspect-[16/10] md:aspect-auto md:h-[380px] ${s.cls}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.src}
                        alt={s.alt}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {isOpen && it.id === "ux" && (
              <motion.div
                key="content-ux"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-12 sm:gap-4 sm:px-6 md:flex-row md:px-10">
                  {designer.map((s, i) => (
                    <motion.div
                      key={s.src}
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 + i * 0.12, duration: 0.7 }}
                      className={`min-w-0 aspect-[4/3] overflow-hidden rounded-sm  md:aspect-auto md:h-[380px] ${s.cls}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.src}
                        alt={s.alt}
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

              {isOpen && it.id == "eng" && (
                <motion.div
                  key="content"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                <ApiFlow/>
                   
                  {/* <p className="mx-auto max-w-6xl px-6 pb-10 text-sm opacity-70 md:px-10">
                    Adicione aqui os cases desta área.
                  </p> */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
}
