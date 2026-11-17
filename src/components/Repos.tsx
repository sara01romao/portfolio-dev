"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Youtube, Gamepad2 } from "lucide-react";
import Reveal from "./Reveal";
import { FaGithub, FaYoutube } from "react-icons/fa";

const links = [
  { title: "Mais Projetos", sub: "github", href: "https://github.com/sara01romao", icon: <FaGithub size={44} />, offset: "md:ml-10" },
  { title: "Vídeos", sub: "youtube", href: "https://www.youtube.com/@sararomaodev", icon: <FaYoutube size={44} className="bg-red-600 p-1.5 text-white" />, offset: "md:-ml-6" },
  { title: "Dev Game", sub: "jogos", href: "https://sara01romao.github.io/campo-minado-logica-desafio/", icon: <Gamepad2 size={40} className="bg-purple-600 text-white "/>, offset: "md:ml-10" },
];

export default function Repos() {
  return (
    <section className="bg-white px-6 py-28 text-ink">
      <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-[0.95] text-rose  sm:text-5xl lg:text-6xl">
            PROJETOS &amp; REPOSITÓRIOS
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            Explore outros projetos lógicos, abstratos e divertidos
          </p>
        </Reveal>

        <div className="flex flex-col gap-6">
          {links.map((l, i) => (
            <motion.a
              key={l.title}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`sketch flex items-center justify-between px-6 py-5 ${l.offset}`}
            >
              <div>
                <span className="flex items-center gap-2 text-lg font-semibold">
                  {l.title} <ExternalLink size={18} />
                </span>
                <span className="text-base text-neutral-400">{l.sub}</span>
              </div>
              {l.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
