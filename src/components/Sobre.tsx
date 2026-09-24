import Image from "next/image"
import Reveal from "./Reveal";

export default function Sobre() {
  return (
    <Reveal className="container-wrap grid gap-8 pb-20 md:grid-cols-2 md:items-center md:gap-14">
      <Image
        className="aspect-[4/4] rounded-2xl bg-contain fill bg-center"
        src="/sobre.png"
        width={400}
        height={400}
        alt="Picture of the author"
      />

      <div>
        <p className="mb-3 text-sm text-flamingo">SOBRE</p>
        <h2 className="mb-4 font-display font-semibold text-2xl text-ink md:text-3xl">
          Analista e Desenvolvedora de Software
        </h2>

        <p className="mb-[10px] text-lg leading-relaxe">
          Combino design funcional e arquitetura de código para construir websites, APIs, aplicações, e ferramentas de automação sob medida.
        </p>
        
        <p className="mb-[10px] text-lg leading-relaxe">
          Nos últimos anos trabalhei com empresas e projetos
          independentes, entregando sites, painéis internos, automações,
          soluções com LLM e Inteligência Artificial, sempre buscando unir uma boa experiência.
        </p>
      </div>
    </Reveal>
  );
}
