import { api } from '@/utils/api'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function Blog({ posts, categories }) {
  const [selectCategory, setSelectCategory] = useState(1)
  const [search, setSearch] = useState('')
  const [filterResult, setFilterResult] = useState(posts)

  useEffect(() => {
    const results = posts
      // filter by category
      .filter(
        post =>
          post.attributes.category.data.id === selectCategory ||
          selectCategory === 1
      )

      // filter by search
      .filter(post =>
        post.attributes.name.toLowerCase().includes(search.toLowerCase())
      )

    setFilterResult(results)
  }, [search, selectCategory, posts])

  return (
    <div className="flex flex-col gap-5 px-6 md:p-0">
      <form onSubmit={e => e.preventDefault()}>
        <RadioGroup
          value={selectCategory}
          onChange={setSelectCategory}
          className="flex  gap-3"
          name="plan">
          <RadioGroup.Option
            className={`px-4 p-1  text-base rounded-lg  border-2  border-[#252529]  hover:bg-brownLight hover:bg-opacity-90 ui-checked:border-white ui-checked:bg-brownLight ui-checked:text-white ui-checked:bg-opacity-90 text-zinc-500 cursor-pointer `}
            value={1}>
            all
          </RadioGroup.Option>
          {categories.map(category => {
            const {
              attributes: { name },
              id,
            } = category

            return (
              <RadioGroup.Option
                className={`px-4 p-1  text-base rounded-lg  border-2  border-[#252529]  hover:bg-brownLight hover:bg-opacity-90 ui-checked:border-white ui-checked:bg-brownLight ui-checked:text-white ui-checked:bg-opacity-90 text-zinc-500 cursor-pointer `}
                key={id}
                value={id}>
                {name}
              </RadioGroup.Option>
            )
          })}
        </RadioGroup>
      </form>

      <form onSubmit={e => e.preventDefault()}>
        <input
          className="w-full bg-transparent border-2 border-[#252529] rounded-lg p-2 placeholder:text-zinc-700"
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>

      <div className="grid gap-5 md:p-0">
        {filterResult.map(post => {
          const {
            attributes: { name, urlSlug },
            id,
          } = post
          return (
            <div key={id}>
              <Link
                className="flex items-center p-4 gap-2  rounded-lg  border-2 border-[#2525297c] hover:bg-brownLight hover:bg-opacity-30  delay-75"
                href={'blog/' + urlSlug}>
                <Image
                  width={30}
                  height={30}
                  alt={name}
                  src={`/images/posts/${post.icon}`}
                  className="rounded-full"
                />
                <h1>{name}</h1>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const {
      data: { data: posts },
    } = await api.get('/posts?populate=*')

    const {
      data: { data: categories },
    } = await api.get('/categories')

    return {
      props: {
        posts,
        categories,
      },
    }
  } catch (error) {
    return {
      props: {
        posts: [],
        categories: [],
      },
    }
  }
}
