import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	image: {
		service: passthroughImageService()
	},
	markdown: {
		syntaxHighlight: 'prism',
		// remarkPlugins: [remarkPlugin1],
		gfm: false
	},
	integrations: [
		tailwind(),
		preact(),
		mdx({
			drafts: true
		})
	]
})
