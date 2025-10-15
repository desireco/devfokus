import { z } from "astro:content";

export const PageBaseMetadata = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

// SEO metadata schema
export const SEOMetadata = z.object({
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.array(z.string()).default([]),
  ogImage: z.string().optional(),
  canonical: z.string().url().optional(),
});

// Structured data schema
export const StructuredDataSchema = z.object({
  type: z.string().optional(),
  datePublished: z.string().optional(),
  author: z.string().optional(),
  mainEntityOfPage: z.string().url().optional(),
});

export const TopicMetadata = PageBaseMetadata.extend({
  // Basic categorization
  tags: z.array(z.string()).default([]),
  category: z.string().optional(),

  // Content metadata
  excerpt: z.string().optional(),
  slug: z.string().optional(),

  // Target audience and difficulty
  difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  difficultyLevel: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  targetAudience: z.array(z.string()).default([]),
  prerequisites: z.array(z.string()).default([]),

  // Reading time and engagement
  estimatedReadingTime: z.number().int().positive().optional(),
  readTime: z.number().int().positive().optional(),

  // Visual elements
  image: z.string().url().optional(),
  icon: z.string().optional(),
  color: z.string().optional(),

  // Featured content and ordering
  featured: z.boolean().default(false),
  order: z.number().int().optional(),

  // Author information
  author: z.string().optional(),

  // Related content
  relatedTopics: z.array(z.string()).default([]),
  relatedPosts: z.array(z.string()).default([]),
  relatedServices: z.array(z.string()).default([]),
  services: z.array(z.string()).default([]),
  relatedCategories: z.array(z.string()).default([]),

  // SEO optimization
  meta: SEOMetadata.optional(),

  // Structured data for search engines
  structuredData: StructuredDataSchema.optional(),
});
