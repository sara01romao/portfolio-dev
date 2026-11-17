"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Youtube } from "lucide-react";
import Reveal from "./Reveal";
import Logo from "./Logo";
import { scrollToTarget } from "@/lib/lenis";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <section className="relative bg-lilac px-6 pb-28 pt-24 text-center text-ink">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold md:text-6xl">CONTATO</h2>
          <p className="mt-3 text-sm">Entre em contato e vamos conversar.</p>
        </Reveal>

        <motion.a
          href="https://www.linkedin.com/in/sara-romao/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ y: 0, color: "#0a66c2" }}
          className="keycap mx-auto mt-10 h-24 w-72 p-4 text-sm font-semibold"
        >
          <FaLinkedinIn className="absolute right-4 top-4 " size={22} />
          Linkedin
        </motion.a>

        <button
          aria-label="Voltar ao topo"
          onClick={() => scrollToTarget(0)}
          className="keycap absolute bottom-6 right-6 h-14 w-14 items-center justify-center !text-neutral-700 md:right-24"
        >
          <ArrowUp size={26} strokeWidth={3} />
        </button>
      </section>

      <footer className="bg-lilac px-6 pb-10 md:px-14">
        <div className="flex items-center justify-between border-t border-ink/70 pt-6 text-ink">
          <div className="scale-75 [&_svg]:stroke-ink"><Logo color="black"/></div>
          <div className="flex gap-5">
             <a
                href="https://github.com/sara01romao"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group inline-flex text-ink"
              >
                <FaGithub
                  size={24}
                  className="transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-rose group-focus-visible:text-flamingo"
                />
              </a>
            <a href="https://www.linkedin.com/in/sara-romao/" target="_blank" aria-label="LinkedIn" className="group inline-flex text-ink">
              <FaLinkedin 
                size={24}  
                className="transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-rose group-focus-visible:text-flamingo"
              />
            </a>
            <a href="https://www.youtube.com/@sararomaodev" target="_blank" aria-label="YouTube" className="group inline-flex text-ink">
              <FaSquareYoutube 
              size={24}
              className="transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-rose group-focus-visible:text-flamingo"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
