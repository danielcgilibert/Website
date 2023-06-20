'use client'
//DEPENDENCIES
import { useEffect, useState } from 'react'

//COMPONENTS
import { RadioGroup, Menu } from '@headlessui/react'

//TYPES
import { ICategory } from '@/types/category'
import { IPost } from '@/types/post'

export default function FilterBlog({
  posts,
  categories,
  filterResult,
  setFilterResult
}: {
  posts: IPost[]
  categories: ICategory[]
  filterResult: IPost[]
  setFilterResult: any
}) {
  const [selectCategory, setSelectCategory] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const results = posts
      // filter by category
      .filter(
        (post: IPost) =>
          post.attributes.category.data.id === selectCategory ||
          selectCategory === 1
      )

      // filter by search
      .filter((post: IPost) =>
        post.attributes.name.toLowerCase().includes(search.toLowerCase())
      )

    setFilterResult(results)
  }, [search, selectCategory, posts])

  return (
    <>
      <form
        className='flex items-center justify-between'
        onSubmit={(e) => e.preventDefault()}
      >
        <RadioGroup
          value={selectCategory}
          onChange={setSelectCategory}
          className='flex gap-3'
          name='plan'
        >
          <RadioGroup.Option
            className={`cursor-pointer rounded-lg  border-2 border-customGray  p-1  px-4  text-base text-zinc-500 hover:bg-lightBrown hover:bg-opacity-90 ui-checked:border-white ui-checked:bg-lightBrown ui-checked:bg-opacity-90 ui-checked:text-white `}
            value={1}
          >
            All
          </RadioGroup.Option>
          {categories.map((category: ICategory) => {
            const {
              attributes: { name },
              id
            } = category

            return (
              <RadioGroup.Option
                className={`cursor-pointer rounded-lg border-2 border-customGray  p-1  px-4  text-base text-zinc-500 hover:bg-lightBrown hover:bg-opacity-90 ui-checked:border-white ui-checked:bg-lightBrown ui-checked:bg-opacity-90 ui-checked:text-white `}
                key={id}
                value={id}
              >
                {name}
              </RadioGroup.Option>
            )
          })}
        </RadioGroup>
      </form>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className='w-full rounded-lg border-2 border-customGray bg-transparent p-2 shadow-none outline-none    transition-colors delay-75 placeholder:text-zinc-700 focus:border-white focus:border-opacity-30  '
          type='text'
          placeholder='Buscar posts...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className='flex items-center justify-between'>
        <span className='text-lg text-white text-opacity-50'>
          {`${filterResult.length}`} Post
        </span>
      </div>
    </>
  )
}
