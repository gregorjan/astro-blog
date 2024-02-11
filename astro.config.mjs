import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.gregorjan.eu',
	integrations: [
		mdx(),
		robotsTxt(),
		sitemap(),
		tailwind(),
		icon({
			iconDir: 'src/assets/svg',
		}),
	],
	prefetch: true,
	experimental: {
		clientPrerender: true,
	},
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			langs: ['css', 'typescript', 'html', 'json'],
			wrap: true,
			transformers: [],
		},
	},
})
