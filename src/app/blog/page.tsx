//COMPONENTS
import ClientBlog from '@/components/client-blog'

//SERVICES
import { getPosts } from '@/services/getPosts'
import { getCategories } from '@/services/getCategories'

// TYPES
import { IPost } from '@/types/post'
import { ICategory } from '@/types/category'

export default async function Page() {
  const posts: IPost[] = await getPosts('/posts?populate=*')
  const categories: ICategory[] = await getCategories()

  return (
    <div className='flex flex-col gap-5 px-6 md:p-0'>
      <ClientBlog posts={posts} categories={categories} />
    </div>
  )
}
