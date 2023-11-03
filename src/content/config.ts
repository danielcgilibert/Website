import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '../config/categories'

const blogCollection = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image().optional(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})

const snippetCollection = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(50),
			icon: image(),
			draft: z.boolean().default(false)
		})
})

export const collections = {
	blog: blogCollection,
	snippets: snippetCollection
}
