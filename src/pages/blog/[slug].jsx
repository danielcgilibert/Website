import SyntaxHighlighterCustom from '@/components/syntaxHighlighterCustom'
import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import path from 'path'

const components = { SyntaxHighlighterCustom }

const PostPage = ({ frontMatter: { title, date, img }, mdxSource }) => {
  return (
    <div className="mx-auto px-6   prose ">
      <h1 className="text-left m-0 text-amber-400">{title}</h1>
      <span className="text-amber-500">{date}</span>
      <Image
        width={800}
        height={800}
        alt={title}
        src={`/images/posts/${img}`}
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
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  console.log(frontMatter)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
