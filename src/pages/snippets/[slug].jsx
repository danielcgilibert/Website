import SyntaxHighlighterCustom from '@/components/syntaxHighlighterCustom'
import { api } from '@/utils/api'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

const components = { SyntaxHighlighterCustom }

const SnippetPage = ({ snippet: { attributes }, mdxSource }) => {
  const { name, createdAt } = attributes

  return (
    <div className="mt-4 px-6 prose">
      <h1>{name}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}

const getStaticPaths = async () => {
  try {
    const {
      data: { data: snippets },
    } = await api.get('/snippets')

    const paths = snippets.map(snippet => ({
      params: {
        slug: snippet.attributes.urlSlug,
      },
    }))

    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    }
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const {
    data: { data: snippets },
  } = await api.get('/snippets')

  const [snippet] = snippets.filter(
    snippet => snippet.attributes.urlSlug === slug
  )

  const mdxSource = await serialize(snippet.attributes.content)

  return {
    props: {
      snippet,
      mdxSource,
    },
  }
}

export { getStaticProps, getStaticPaths }
export default SnippetPage
