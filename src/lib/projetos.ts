export type Projeto = {
  slug: string;
  categoria: string;
  titulo: string;
  resumo: string;
  descricaoLonga: string;
  contexto: string[];
  userStory: {
    texto: string;
    objetivo: string;
    recursos: string;
    resultado: string;
  };
  stack: string[];
  cores: { nome: string; hex: string }[];
  fonteNome: string;
  imagemCapa: string;
  galeria: string[];
  links: { github?: string; youtube?: string; live?: string };
};

export const projetos: Projeto[] = [
  {
    slug: "roofing-website",
    categoria: "Projeto",
    titulo: "Roofing Co — Site & Agendamento",
    resumo: "Para empresas receberem orçamentos e agendarem inspeções direto do site.",
    descricaoLonga:
      "Site institucional e fluxo de agendamento para uma empresa de cobertura residencial e comercial, com formulário de inspeção gratuita, prova social e versão mobile-first.",
    contexto: [
      "Empresas de serviços residenciais costumam perder orçamentos por formulários de contato longos e sites que não funcionam bem no celular, onde chega a maior parte do tráfego.",
      "A proposta foi construir uma landing page rápida, com um formulário curto de 'inspeção gratuita' sempre visível e seções de prova social (avaliações, anos de experiência, áreas de atuação) para reduzir a hesitação do visitante.",
    ],
    userStory: {
      texto:
        "Como proprietário de imóvel, quero pedir uma inspeção gratuita em poucos cliques, para saber rapidamente o custo do reparo do meu telhado.",
      objetivo: "solicitar orçamento",
      recursos: "formulário curto + prova social + contato direto",
      resultado: "aumento na taxa de conversão de visitante para lead",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    cores: [
      { nome: "Verde ação", hex: "#3E8E4F" },
      { nome: "Grafite", hex: "#1B1B1B" },
      { nome: "Branco", hex: "#FFFFFF" },
    ],
    fonteNome: "Inter",
    imagemCapa: "roofing-1",
    galeria: ["roofing-1", "roofing-2", "roofing-3"],
    links: { github: "#", live: "#" },
  },
  {
    slug: "musica-acordes",
    categoria: "Projeto",
    titulo: "Música — Acordes",
    resumo:
      "Aplicação web para auxiliar músicos iniciantes na prática de acordes, troca de posições e controle de ritmo.",
    descricaoLonga:
      "Aplicação web desenvolvida para auxiliar músicos iniciantes na prática de acordes, troca de posições e controle de ritmo.",
    contexto: [
      "Durante a prática de violão, algumas das dificuldades comuns para iniciantes são memorizar os formatos dos acordes, realizar a troca entre eles com fluidez e manter um ritmo constante.",
      "A proposta do projeto foi reunir essas práticas em uma única ferramenta, permitindo consultar acordes, praticar progressões e utilizar um metrônomo durante os exercícios.",
    ],
    userStory: {
      texto:
        "Como estudante de violão, quero consultar acordes, praticar progressões e controlar o ritmo com um metrônomo, para desenvolver precisão e fluidez durante meus estudos.",
      objetivo: "praticar",
      recursos: "acordes + exercícios + metrônomo",
      resultado: "realizar uma prática musical estruturada",
    },
    stack: ["React.js", "TypeScript", "Tailwind", "Vite", "Figma"],
    cores: [
      { nome: "Azul", hex: "#2B92C9" },
      { nome: "Branco", hex: "#FFFFFF" },
      { nome: "Preto", hex: "#000000" },
    ],
    fonteNome: "Helvetica",
    imagemCapa: "acordes-1",
    galeria: ["acordes-1", "acordes-2", "acordes-3"],
    links: { github: "#", youtube: "#" },
  },
];

export const destaqueHome = [
  { projetoSlug: "feedback", imagem: "feedback", titulo: "Sistema de feedback anônimo", legenda: "Para empresas receberem sugestões com segurança", url:"https://github.com/sara01romao/feedback-nodejs-typescript-docker-postgres-nextjs" },
  { projetoSlug: "musica-acordes", imagem: "music", titulo: "Music Practice", legenda: "Prática de acordes de violão", url:"https://github.com/sara01romao/music-practice-react-typescript" },
  { projetoSlug: "bot-cripto", imagem: "bot", titulo: "Bot Telegram Cripto", legenda: "Relatórios automáticos de cotação ", url:"https://github.com/sara01romao/bot-telegram-cripto-nodejs-fastify-api" },
];

export type Repositorio = {
  titulo: string;
  imagem: string;
  href: string;
};

export const repositorios: Repositorio[] = [
  { titulo: "Calculadora de Piquetes", imagem: "piquetes", href: "#" },
  { titulo: "Desserts — Cardápio", imagem: "desserts", href: "#" },
];



