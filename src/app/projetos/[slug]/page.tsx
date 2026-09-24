import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { projetos } from "@/src/lib/projetos";

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export default function ProjetoPage({ params }: { params: { slug: string } }) {
  const projeto = projetos.find((p) => p.slug === params.slug);
  if (!projeto) notFound();

  return (
    <main>
      <Header />

      <article className="container-wrap pb-24">
        <Link href="/" className="text-sm text-ink/50 transition hover:text-flamingo">
          ← Voltar
        </Link>

        <div className="mt-8 flex items-start justify-between gap-6">
          <div>
            <p className="text-sm text-flamingo">{projeto.categoria}</p>
            <h1 className="mt-2 font-display text-3xl text-ink md:text-4xl">
              {projeto.titulo}
            </h1>
          </div>
          <div className="flex shrink-0 items-center gap-4 pt-2">
            {projeto.links.github && (
              <a href={projeto.links.github} aria-label="Repositório no GitHub" className="text-ink transition hover:text-flamingo">
                {/* <Github size={20} /> */}
              </a>
            )}
            {projeto.links.youtube && (
              <a href={projeto.links.youtube} aria-label="Vídeo no YouTube" className="text-ink transition hover:text-flamingo">
                {/* <Youtube size={20} /> */}
              </a>
            )}
            {projeto.links.live && (
              <a href={projeto.links.live} aria-label="Ver site" className="text-ink transition hover:text-flamingo">
                {/* <ExternalLink size={20} /> */}
              </a>
            )}
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-ink/70">{projeto.descricaoLonga}</p>

        <div
          className="mt-8 aspect-[16/9] rounded-2xl bg-haze bg-cover bg-center"
          style={{ backgroundImage: `url(/projects/${projeto.imagemCapa}.svg)` }}
        />

        <div className="mt-4 grid grid-cols-3 gap-4">
          {projeto.galeria.map((img) => (
            <div
              key={img}
              className="aspect-[4/3] rounded-lg bg-haze bg-cover bg-center"
              style={{ backgroundImage: `url(/projects/${img}.svg)` }}
            />
          ))}
        </div>

        <section className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display text-xl text-ink">Contexto</h2>
          <p className="text-sm text-ink/50">proposta do projeto</p>
          <div className="mt-4 max-w-2xl space-y-4 text-ink/70">
            {projeto.contexto.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display text-xl text-ink">Principal User Story</h2>
          <p className="text-sm text-ink/50">objetivo do usuário</p>
          <p className="mt-4 max-w-2xl text-ink/70">{projeto.userStory.texto}</p>
          <ul className="mt-4 space-y-1 text-sm text-ink/70">
            <li>
              <span className="text-flamingo">•</span> Objetivo: {projeto.userStory.objetivo}
            </li>
            <li>
              <span className="text-flamingo">•</span> Recursos: {projeto.userStory.recursos}
            </li>
            <li>
              <span className="text-flamingo">•</span> Resultado esperado: {projeto.userStory.resultado}
            </li>
          </ul>
        </section>

        <section className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display text-xl text-ink">Desenvolvimento</h2>
          <p className="text-sm text-ink/50">
            Tecnologias e ferramentas utilizadas na construção da aplicação
          </p>
          <p className="mt-4 font-medium text-flamingo">{projeto.stack.join(" · ")}</p>
        </section>

        <section className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display text-xl text-ink">Estilo</h2>
          <p className="text-sm text-ink/50">Paleta de cores e tipografia utilizadas na interface</p>

          <div className="mt-4 flex flex-col gap-8 rounded-xl border border-ink/10 p-6 sm:flex-row sm:items-center sm:gap-16">
            <div>
              <p className="text-sm text-ink/50">Font Family</p>
              <p className="font-display text-lg text-ink">{projeto.fonteNome}</p>
            </div>
            <div className="flex gap-4">
              {projeto.cores.map((cor) => (
                <div key={cor.hex} className="text-center">
                  <div
                    className="h-10 w-16 rounded-md border border-ink/10"
                    style={{ backgroundColor: cor.hex }}
                  />
                  <p className="mt-1 text-xs text-ink/50">{cor.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
