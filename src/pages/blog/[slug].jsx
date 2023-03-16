import SyntaxHighlighterCustom from '@/components/syntaxHighlighterCustom'
import { api } from '@/utils/api'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

const components = { SyntaxHighlighterCustom }

const PostPage = ({ post: { attributes }, mdxSource }) => {
  const { name, createdAt } = attributes
  const date = new Date(createdAt)
  const formatDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

  return (
    <div className="mx-auto px-6   prose ">
      <h1 className="text-left m-0 text-lightOrange">{name}</h1>
      <span className="text-darkOrange">{formatDate}</span>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}

const getStaticPaths = async () => {
  try {
    const {
      data: { data: posts },
    } = await api.get('/posts')

    const paths = posts.map(post => ({
      params: {
        slug: post.attributes.urlSlug,
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
  try {
    const {
      data: { data: posts },
    } = await api.get('/posts')

    const [post] = posts.filter(post => post.attributes.urlSlug === slug)
    const mdxSource = await serialize(post.attributes.content)

    return {
      props: {
        post,
        mdxSource,
      },
    }
  } catch (error) {
    return {
      props: {
        post: [],
        mdxSource: [],
      },
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
