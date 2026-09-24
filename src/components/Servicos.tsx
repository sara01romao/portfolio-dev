"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Image from "next/image";

type Service = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  img: string;
};

const services: Service[] = [
  {
    num: "01",
    title: "Web e mobile",
    description: "Sites institucionais, landing pages, apps e hospedagem.",
    tags: ["React", "Next.js", "React Native", "Vercel"],
    img:"/web-app.png"
  },
  {
    num: "02",
    title: "UI e UX",
    description: "Design de interface centrado no usuário, prototipagem e testes.",
    tags: ["Figma", "Design systems", "Prototipagem"],
    img:"/web-app.png"
  },
  {
    num: "03",
    title: "Backend",
    description: "APIs, bancos de dados e arquitetura de serviços.",
    tags: ["Node.js", "Python", "PostgreSQL", "Docker"],
    img:"/web-app.png"
  },
  {
    num: "04",
    title: "Ferramentas e automação",
    description: "Scripts e integrações que eliminam trabalho manual repetitivo.",
    tags: ["APIs de terceiros", "Scripts Python"],
    img:"/web-app.png"
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Reveal>
      <section className="bg-gray-100 py-16 ">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-8 md:grid-cols-[0.9fr_1.4fr]">
          <div>
            <p className="mb-[10px] text-sm font-medium text-[#ff6fa0]">SERVIÇOS</p>
            <h2 className="mb-[14px] font-display text-[26px] font-semibold">
              Soluções sob medida
            </h2>
            <p className="text-sm leading-relaxed text-darkSub">
              Cada projeto começa entendendo o problema real do negócio antes
              de qualquer linha de código. Veja as áreas em que trabalho:
            </p>
          </div>

          <div>
            {services.map((service, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={service.title}
                  className="mb-3 overflow-hidden rounded-xl border border-darkLine bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-[14px] px-6 py-5 text-left font-display text-[15px] font-semibold"
                    aria-expanded={isOpen}
                  >
                    <span>
                      <span className="mr-[10px] font-sans text-[12.5px] font-medium text-[#ff6fa0]">
                        {service.num}
                      </span>
                      {service.title}
                    </span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`h-[18px] w-[18px] flex-none text-[#8f8e92] transition-transform duration-300 ease-soft ${
                        isOpen ? "rotate-180 text-[#ff6fa0]" : ""
                      }`}
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className="grid transition-all duration-400 ease-soft"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6">
                        
                        <p className="mb-[14px] text-base leading-relaxed text-darkSub">
                          {service.description}
                        </p>

                        {/* <div className="mb-4 flex aspect-[16/8] mt-4 items-center justify-center rounded-[10px] border border-darkLine bg-gradient-to-br from-[#1d1d1f] to-[#2a2a2c] text-center text-xs text-[#8f8e92]">
                          <Image
                            className="aspect-[4/4] rounded-2xl bg-contain fill bg-center"
                            src="/sobre.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                          />
                        </div> */}
                      
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-darkLine px-3 py-[5px] text-[12.5px] "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
