import { z } from "astro:content";

export const PageBaseMetadata = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
});

export const CategoryMetadata = PageBaseMetadata.extend({
  // Basic identification
  slug: z.string(),

  // Visual elements
  icon: z.string(),
  color: z.string(),

  // Featured content and ordering
  featured: z.boolean().default(false),
  order: z.number().int().optional(),

  // Target audience
  targetAudience: z.array(z.string()).default([]),

  // Related content
  relatedCategories: z.array(z.string()).default([]),

  // Optional: Reference to topics in this category
  // This would be useful for bidirectional relationships
  featuredTopics: z.array(z.string()).default([]),
});
