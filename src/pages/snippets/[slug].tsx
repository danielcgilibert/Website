import Markdown from '@/components/markdown'
import { ISnippet } from '@/types/snippet'
import { api } from '@/utils/api'
import { NextPage } from 'next'

type SnippetProps = {
  snippet: any
  mdxSource: any
}

const SnippetPage: NextPage<SnippetProps> = ({
  snippet: { attributes },
  mdxSource
}) => {
  const { name } = attributes

  return (
    <div className='prose mt-4 px-6 '>
      <h1>{name}</h1>
      <Markdown mdxSource={mdxSource} />
    </div>
  )
}

const getStaticPaths = async () => {
  try {
    const {
      data: { data: snippets }
    } = await api.get('/snippets')

    const paths = snippets.map((snippet: ISnippet) => ({
      params: {
        slug: snippet.attributes.urlSlug
      }
    }))

    return {
      paths,
      fallback: false
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false
    }
  }
}

const getStaticProps = async ({ params: { slug } }: any) => {
  const {
    data: { data: snippets }
  } = await api.get('/snippets')

  const [snippet] = snippets.filter(
    (snippet: ISnippet) => snippet.attributes.urlSlug === slug
  )

  return {
    props: {
      snippet,
      mdxSource: snippet.attributes.content
    }
  }
}

export { getStaticProps, getStaticPaths }
export default SnippetPage
