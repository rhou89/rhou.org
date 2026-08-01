import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// "work" entries live in src/content/work/*.md
// Each file's `id` is derived from its filename, e.g. studio-os.md -> "studio-os",
// which becomes the URL at /work/studio-os.
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      role: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      eyebrow: z.string(),
      impact: z.string().optional(),
      cover: image().optional(),
      url: z.url().optional(),
      repo: z.url().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.number(),
    authorship: z.string().optional(),
    note: z.string().optional(),
    url: z.url().optional(),
    topics: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(220),
    date: z.coerce.date(),
    url: z.url(),
    language: z.string().default('中文'),
    featured: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    date: z.coerce.date(),
    category: z.enum(['Recognition', 'Talks', 'Media', 'Adoption']),
    summary: z.string().max(500),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.url(),
        }),
      )
      .default([]),
  }),
});

export const collections = { work, publications, writing, news };
