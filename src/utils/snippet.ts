import { getCollection } from 'astro:content'

export const getSnippets = async (max?: number) => {
	return (await getCollection('snippets')).filter((snippet) => !snippet.data.draft).slice(0, max)
}
