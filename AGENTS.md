# abbluiz.com — Agent Context

## O que é

Site pessoal de LABB (blog + portfólio). Astro v6, conteúdo em Markdown via
Content Collections (Zod), deploy estático para GitHub Pages via GitHub Actions.

Hospedado em `https://www.abbluiz.com`. Domínio gerenciado pelo workflow padrão
do GitHub Pages (`public/CNAME` se houver, senão configuração do repo).

## Stack

- Astro v6 (`output: 'static'`)
- Content Collections com schemas Zod em `src/content.config.ts`
- TypeScript leve (`tsconfig.json` mínimo, `astro check` não está no CI)
- Fontes self-hosted via `@fontsource/*`
- `@astrojs/sitemap` + `remark-heading-id` (slugs estáveis em headings)
- Node 22+ (`engines.node >= 22.12`)

## Estrutura

```
src/
  components/        # Header, Footer, PostCard, ProjetoCard
  content/
    blog/            # posts (.md)
    projetos/        # projetos (.md)
  content.config.ts  # schemas Zod das collections
  layouts/Base.astro
  pages/
    index.astro
    sobre/, blog/, projetos/
    tags/, categorias/        # rotas dinâmicas
    rss.xml.ts, 404.astro
  styles/global.css
public/              # assets estáticos (servidos como /)
astro.config.mjs
.github/workflows/deploy.yml
```

## Comandos comuns

```bash
npm install
npm run dev      # servidor de dev local
npm run build    # gera ./dist/
npm run preview  # preview do build
```

Sem `sss` aqui — projeto é simples o bastante para os scripts padrão do Astro.

## Convenções

- **Idioma:** documentação e conteúdo em **português**. Nomes de variáveis,
  arquivos e diretórios técnicos em **inglês** (`components/`, `pages/`,
  `tags/[tag]`); diretórios temáticos do site podem ser em PT (`sobre/`,
  `categorias/`, `projetos/`).
- **Frontmatter validado por Zod.** Sempre confirme o schema em
  `src/content.config.ts` antes de adicionar campos novos. `published` é
  obrigatório em posts; `featured` em projetos é `boolean` (default `false`).
- **Headings com `id` estável** via `remark-heading-id` — útil para
  anchor-linking entre posts.
- **GitHub Pages, não Gitea Pages.** O remote é GitHub. Sem push-to-deploy
  via Gitea aqui.

## Pegadinhas

- **`.astro/` é regenerado.** Está no `.gitignore`. Não tente trackeá-lo.
- **`dist/` está commitado num momento da história mas é gitignored agora.**
  Se aparecer staged depois de um build, ignore — não commitar.
- **Conteúdo desatualizado.** A página *Sobre* ainda menciona o Canadá; alguns
  projetos listados em `src/content/projetos/` estão fora de data. Ver
  memória `project_abbluiz_com_update`. Conteúdo é prioridade maior que
  refatorações de código aqui.
- **`workflow_dispatch` está habilitado** em `deploy.yml`. Pode disparar
  build manual pela UI do GitHub Actions sem commit.

## Docs

- `README.md` — visão geral em PT (humanos)
- `src/content.config.ts` — schemas Zod (fonte de verdade para frontmatter)
- `astro.config.mjs` — config Astro (site, integrations, markdown plugins)
- `.github/workflows/deploy.yml` — pipeline de deploy
