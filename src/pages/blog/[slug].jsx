import SyntaxHighlighterCustom from '@/components/syntaxHighlighterCustom'
import { api } from '@/utils/api'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'

const components = { SyntaxHighlighterCustom }

const PostPage = ({ post: { attributes }, mdxSource }) => {
  const { name, createdAt } = attributes

  return (
    <div className="mx-auto px-6   prose ">
      <h1 className="text-left m-0 text-amber-400">{name}</h1>
      <span className="text-amber-500">{createdAt}</span>
      <Image
        width={800}
        height={800}
        alt={name}
        src={`/images/posts/${name}`}
        placeholder={'empty'}
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
        className="rounded-lg"
      />
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

    console.log(paths)

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
