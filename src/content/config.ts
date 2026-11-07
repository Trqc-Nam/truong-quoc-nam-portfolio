import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    category: z.enum([
      'ai-ml',
      'computer-vision',
      'software-engineering',
      'competitive-programming',
      'academic-research',
    ]),
    title: z.object({
      vi: z.string(),
      en: z.string(),
    }),
    description: z.object({
      vi: z.string(),
      en: z.string(),
    }),
    thumbnail: z.string(),
    gallery: z.array(z.string()).default([]),
    technologies: z.array(z.string()),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        paper: z.string().url().optional(),
      })
      .default({}),
    timeline: z.object({
      startDate: z.string(),
      completionDate: z.string().optional(),
      status: z.enum(['in-progress', 'completed', 'archived']),
    }),
    academic: z.object({
      individualContribution: z.object({
        vi: z.string(),
        en: z.string(),
      }),
      methodology: z
        .object({
          vi: z.string(),
          en: z.string(),
        })
        .optional(),
      results: z
        .object({
          vi: z.string(),
          en: z.string(),
        })
        .optional(),
      limitations: z
        .object({
          vi: z.string(),
          en: z.string(),
        })
        .optional(),
    }),
  }),
});

const achievements = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    published: z.boolean().default(true),
    category: z.enum([
      'awards',
      'scholarships',
      'competitions',
      'certificates',
      'academic-activities',
      'research-activities',
    ]),
    title: z.object({
      vi: z.string(),
      en: z.string(),
    }),
    organization: z.string(),
    date: z.string(),
    description: z.object({
      vi: z.string(),
      en: z.string(),
    }),
    verificationUrl: z.string().url().optional(),
    evidenceImage: z.string().optional(),
  }),
});

export const collections = {
  projects,
  achievements,
};
