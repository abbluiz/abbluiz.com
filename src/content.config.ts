import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string().optional(),
    publicado: z.coerce.date(),
    atualizado: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    categorias: z.array(z.string()).default([]),
    rascunho: z.boolean().default(false),
  }),
});

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    nome: z.string(),
    descricao: z.string(),
    url: z.string().url().optional(),
    repositorio: z.string().url().optional(),
    status: z.enum(['ativo', 'pausado', 'arquivado']).default('ativo'),
    inicio: z.coerce.date().optional(),
    destaque: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, projetos };
