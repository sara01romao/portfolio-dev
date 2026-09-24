import { repositorios } from "@/src/lib/projetos";
import Reveal from "./Reveal";
import { FaGithubAlt } from "react-icons/fa";

type Repo = {
  name: string;
  description: string;
  href: string;
};

const repos: Repo[] = [
  {
    name: "cinema-ingresso-reactjs-typescript",
    description:
      "Compra de ingressos com escolha de filme, data, horário e assento (estados reativos para poltronas livres/ocupadas/reservadas).",
    href: "https://github.com/sara01romao/cinema-ingresso-reactjs-typescript",
  },
  {
    name: "webfrase-react-typescript-ia-nodejs-express",
    description:
      "Gera frases automáticas com IA para posts em datas comemorativas e comerciais.",
    href: "https://github.com/sara01romao/webfrase-react-typescript-ia-nodejs-express",
  },
  {
    name: "algoritmos",
    description: "Resolução de desafios de lógica, algoritmos e estruturas de dados.",
    href: "https://github.com/sara01romao/algoritmos",
  },
];

export default function ProjetosRepositorios() {
  return (
    <section className="container-wrap py-20">
      <h2 className="font-display text-2xl text-ink md:text-3xl">
        Projetos & Repositórios
      </h2>
      <p className="mt-2 mb-4 max-w-md text-ink/60">
        Explore outros projetos, experimentos e soluções desenvolvidas.
      </p>

      {/* <div className="mt-8 grid gap-6 md:grid-cols-3">
        {repositorios.map((repo) => (
          <a
            key={repo.titulo}
            href={repo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(/repos/${repo.imagem}.svg)` }}
          >
            <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
            <span className="absolute bottom-4 left-4 rounded-md bg-paper/90 px-3 py-1 text-sm font-medium text-ink">
              {repo.titulo}
            </span>
          </a>
        ))}
      </div> */}

      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        {repos.map((r, i) => (
          <Reveal key={r.name} delay={i * 90}>
          <a
            href={r.href}
            target="_blank"
            rel="noreferrer"
            className="block transition-colors duration-300 ease-soft hover:bg-card hover:bg-gray-200"
          >
            <div
              className={`flex items-center gap-4 px-5 py-[18px] ${
                i !== repos.length - 1 ? "border-b border-line dark:border-darkLine" : ""
              }`}
            >
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-[10px] bg-card text-[11px] text-sub dark:bg-darkLine dark:text-darkSub">
                <FaGithubAlt size={20}/>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-[3px] text-[15px] font-semibold">{r.name}</h3>
                <p className="text-[13px] text-sub dark:text-darkSub">{r.description}</p>
              </div>
              {/* <a
                href={r.href}
                className="flex-none text-[13px] font-medium text-accent"
                target="_blank"
                rel="noreferrer"
              >
                Ver no GitHub →
              </a> */}
            </div>
            </a>
          </Reveal>
        ))}
      </div>
    
    </section>
  );
}
