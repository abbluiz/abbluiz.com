import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());

  return rss({
    title: 'LABB',
    description: 'Desenvolvimento, segurança, privacidade — e às vezes política e cotidiano.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.published,
      description: post.data.description,
      link: `/blog/${post.data.published.toISOString().split('T')[0]}-${post.id.replace(/\.md$/, '')}/`,
    })),
    customData: '<language>pt-BR</language>',
  });
}
