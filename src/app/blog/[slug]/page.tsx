// COMPONENTS
import dynamic from 'next/dynamic'
const Markdown = dynamic(() => import('@/components/markdown'), {
  ssr: false
})

// SERVICES
import { getPosts } from '@/services/getPosts'

// TYPES
import { IPost } from '@/types/post'
import HeaderBlogPage from '@/components/header-blog-page'
import { formatDate } from '@/libs/date'
import { BsFillCalendarDateFill } from 'react-icons/bs'

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  return { title: `${params.slug}`, description: `post sobre ${params.slug}` }
}

export default async function Page(props: any) {
  const posts = await getPosts('/posts')

  const [post] = posts.filter(
    (post: IPost) => post.attributes.urlSlug === props.params.slug
  )

  return (
    <div className='px-8 md:p-0'>
      <HeaderBlogPage />
      <article className='prose mx-auto w-full'>
        <header className='mb-5 flex flex-col items-center justify-center gap-2'>
          <h1 className='m-0  text-3xl text-lightOrange md:text-4xl'>
            {post.attributes.name}
          </h1>
          <span className=' ml-1 flex items-center gap-2    md:text-lg '>
            <BsFillCalendarDateFill size={15} />
            {formatDate(post.attributes.createdAt)}
          </span>
        </header>
        <Markdown mdxSource={post.attributes.content} />
      </article>
    </div>
  )
}
