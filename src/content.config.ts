import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const post = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    // description: z.string(),
    // date: z.date(),
    // tags: z.array(z.string()),
  }),
});

export const collections = { post };
