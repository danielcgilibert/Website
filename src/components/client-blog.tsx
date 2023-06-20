'use client'
//DEPENDENCIES
import { useState } from 'react'

//COMPONENTS
import FilterBlog from '@/components/filter-category'
import ListPosts from '@/components/list-post'

//TYPES
import { IPost } from '@/types/post'
import { ICategory } from '@/types/category'

export default function ClientBlog({
  posts,
  categories
}: {
  posts: IPost[]
  categories: ICategory[]
}) {
  const [filterResult, setFilterResult] = useState(posts)

  return (
    <>
      <FilterBlog
        posts={posts}
        filterResult={filterResult}
        setFilterResult={setFilterResult}
        categories={categories}
      />
      <ListPosts posts={filterResult} />
    </>
  )
}
