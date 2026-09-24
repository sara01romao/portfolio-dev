import Link from "next/link";

import { destaqueHome } from "@/src/lib/projetos";

export default function ProjetosDestaque() {
  return (
    <section className="container-wrap py-20 ">
      <h2 className="mb-8 font-display text-2xl text-ink md:text-3xl">
        Projetos em Destaque
      </h2>

      <div className="grid gap-6 md:grid-cols-11">
        {destaqueHome.map((item, i) => (
          <a
            key={`${item.projetoSlug}-${i}`}
            href={`${item.url}`}
            target="_blank"
            className={`group block ${
              i === 0 ? "md:col-span-5" : "md:col-span-3"
            }`}
          >
            <div className="h-[500px] overflow-hidden rounded-xl bg-haze">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(/projects/${item.imagem}.png)`,
                }}
              />
            </div>

            <p className="mt-4 font-medium text-ink text-lg">{item.titulo}</p>

            <p className="text-sm text-ink/60">{item.legenda}</p>
          </a>
        ))}
      </div>
    </section>
  );
}