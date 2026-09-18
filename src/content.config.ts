import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    stack: z.array(z.string()),
    github: z.string().url().optional(),
    url: z.string().url().optional(),
    imagen: z.string().optional(),
    orden: z.number().default(99),
  }),
});

export const collections = { proyectos };
