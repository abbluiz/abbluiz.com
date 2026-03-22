# abbluiz.com

Site pessoal de LABB — blog e portfólio. Construído com Astro, hospedado no GitHub Pages.

🌐 **https://www.abbluiz.com**

## Stack

- [Astro v6](https://astro.build) — gerador de sites estáticos
- Content Collections com Zod para validação de frontmatter
- Fontes self-hosted via [fontsource](https://fontsource.org) (Inter, Lora, Playfair Display, Space Grotesk, JetBrains Mono)
- GitHub Actions para deploy automático no GitHub Pages

## Estrutura

```
src/
├── components/       # Header, Footer, PostCard, ProjetoCard
├── content/
│   ├── blog/         # Posts em Markdown
│   └── projetos/     # Projetos em Markdown
├── layouts/
│   └── Base.astro    # Layout base HTML
├── pages/
│   ├── index.astro
│   ├── sobre/
│   ├── blog/
│   ├── projetos/
│   ├── tags/         # /tags/[tag]/
│   ├── categorias/   # /categorias/[categoria]/
│   ├── rss.xml.ts
│   └── 404.astro
└── styles/
    └── global.css
```

## Comandos

| Comando           | Ação                                        |
| :---------------- | :------------------------------------------ |
| `npm install`     | Instala dependências                        |
| `npm run dev`     | Inicia servidor de desenvolvimento          |
| `npm run build`   | Gera o site estático em `./dist/`           |
| `npm run preview` | Preview local do build                      |

## Conteúdo

Posts ficam em `src/content/blog/` e projetos em `src/content/projetos/`, ambos em Markdown com frontmatter tipado.

**Frontmatter de post:**
```yaml
---
title: "Título do post"
description: "Descrição opcional"
published: 2024-01-01
updated: 2024-06-01       # opcional
categories: ["categoria"]
tags: ["tag1", "tag2"]
draft: false
lang: pt
---
```

**Frontmatter de projeto:**
```yaml
---
name: "Nome do Projeto"
description: "Descrição"
url: "https://exemplo.com"         # opcional
repository: "https://github.com/…" # opcional
status: "active"                   # active | paused | archived
start: 2020-01-01                  # opcional
featured: true
tags: ["tag1", "tag2"]
---
```

## Licença

🄯 LABB — Copyleft
