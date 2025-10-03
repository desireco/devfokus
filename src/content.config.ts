import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { BlogMetadata } from "./schemas/blog";
import { CardMetadata } from "./schemas/card";
import { SlideMetadata } from "./schemas/slide";

const blogs = defineCollection({
  loader: glob({
    base: "./src/content/blogs",
    pattern: "**/[0-9][0-9][0-9][0-9]-[0-9][0-9]/*.{md,mdx}",
  }),
  schema: BlogMetadata,
});

const cards = defineCollection({
  loader: glob({ base: "./src/content/cards", pattern: "**/*.{md,mdx}" }),
  schema: CardMetadata,
});

const slides = defineCollection({
  loader: glob({ base: "./src/content/slides", pattern: "**/*.{md,mdx}" }),
  schema: SlideMetadata,
});

export const collections = { blogs, cards, slides };
