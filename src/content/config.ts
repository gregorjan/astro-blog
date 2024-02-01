import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			heroImageAlt: z.string().optional(),
			draft: z.boolean().optional(),
		}),
})

export const collections = { posts }
