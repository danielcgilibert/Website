import SyntaxHighlighterCustom from '@/components/syntaxHighlighterCustom'
import { ISnippet } from '@/types/snippet'
import { api } from '@/utils/api'
import { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

const components = { SyntaxHighlighterCustom }

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
    <div className='prose mt-4 px-6'>
      <h1>{name}</h1>
      <MDXRemote {...mdxSource} components={components} />
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

  const mdxSource = await serialize(snippet.attributes.content)

  return {
    props: {
      snippet,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default SnippetPage
