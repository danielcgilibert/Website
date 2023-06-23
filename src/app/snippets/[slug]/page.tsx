// COMPONENTS
const Markdown = dynamic(() => import('@/components/markdown'), {
  ssr: false
})

// SERVICES
import { getSnippets } from '@/services/getSnippets'

// TYPES
import { ISnippet } from '@/types/snippet'
import dynamic from 'next/dynamic'

export default async function Page({ params: { slug } }: any) {
  const snippets = await getSnippets('/snippets')
  const [snippet] = snippets.filter(
    (snippet: ISnippet) => snippet.attributes.urlSlug === slug
  )
  return (
    <div className='prose mt-4 px-6 '>
      <h1>{snippet.name}</h1>
      <Markdown mdxSource={snippet.attributes.content} />
    </div>
  )
}
