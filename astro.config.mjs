import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.danielcg.dev/',
	image: {
		service: passthroughImageService()
	},
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: 'min-dark',
			wrap: true
		}
	},
	integrations: [
		tailwind(),
		preact(),
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'min-dark',
				wrap: true
			},
			drafts: true
		})
	]
})
