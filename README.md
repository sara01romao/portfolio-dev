# Sara Romão — Portfolio

Portfolio pessoal construído com **Next.js (App Router)**, **TypeScript** e **Tailwind CSS**, com scroll suave (inércia) via [Lenis](https://github.com/darkroomengineering/lenis).

## Rodando o projeto

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/
  layout.tsx          # fontes + scroll com inércia (SmoothScroll)
  page.tsx             # home (todas as seções)
  projetos/[slug]/     # página de detalhe de cada projeto em destaque
components/
  Header.tsx, Footer.tsx
  Hero.tsx, Sobre.tsx, Servicos.tsx
  ProjetosDestaque.tsx      # ÚNICA seção que linka para /projetos/[slug]
  ProjetosRepositorios.tsx  # links externos com imagem de fundo (sem página interna)
  Contato.tsx
  SmoothScroll.tsx     # ativa o Lenis (respeita prefers-reduced-motion)
lib/
  projetos.ts          # conteúdo: projetos, serviços, repositórios
public/
  projects/*.svg       # placeholders — troque pelas imagens reais dos projetos
  repos/*.svg          # placeholders — troque pelas imagens dos repositórios
```

## Como editar o conteúdo

- **Textos e projetos**: tudo fica em `lib/projetos.ts` (título, descrição, contexto, user story, stack, cores, links de GitHub/YouTube).
- **Imagens**: troque os arquivos `.svg` em `public/projects` e `public/repos` por `.jpg`/`.png` reais e ajuste a extensão nas referências (`image: "url(/projects/roofing-1.jpg)"`) ou renomeie os arquivos mantendo `.svg` se preferir manter os placeholders.
- **Comportamento de navegação**:
  - Cards em **"Projetos em Destaque"** → levam para `/projetos/[slug]` (página de detalhe).
  - Cards em **"Projetos & Repositórios"** → são links (`<a>`) diretos para GitHub/site, com imagem de fundo, sem página interna.

## Scroll com inércia

O componente `SmoothScroll` (client component) inicializa o Lenis no layout raiz, aplicando um scroll suave e com inércia em toda a aplicação. Usuários com `prefers-reduced-motion: reduce` continuam com o scroll nativo do navegador.

## Deploy

Funciona out-of-the-box na [Vercel](https://vercel.com):

```bash
pnpm build
```
