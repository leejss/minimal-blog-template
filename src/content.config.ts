import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const post = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    draft: z.boolean().optional().default(false),
    publishedAt: z.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { post };
