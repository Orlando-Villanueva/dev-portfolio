import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        title: z.string(),
        tagline: z.string(),
        problem: z.string(),
        solution: z.string(),
        result: z.string(),
        image: image(),
        tags: z.array(z.string()),
        link: z.string().optional(),
    }),
});

export const collections = {
    'projects': projects,
};
