import { blogCategories } from '@/data/blogCategories'
import { api } from '@/utils/api'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
export default function Blog({ posts }) {
  const [selectCategory, setSelectCategory] = useState(blogCategories[0])
  const [search, setSearch] = useState('')
  const [filterResult, setFilterResult] = useState(posts)

  // useEffect(() => {
  //   const results = posts
  //     .filter(
  //       post =>
  //         post.frontMatter.category
  //           .toLowerCase()
  //           .includes(selectCategory.toLowerCase()) ||
  //         selectCategory.toLowerCase() === blogCategories[0]
  //     )
  //     .filter(post =>
  //       post.frontMatter.title.toLowerCase().includes(search.toLowerCase())
  //     )
  //   setFilterResult(results)
  // }, [search, selectCategory, posts])

  return (
    <div className="flex flex-col gap-5 px-6 md:p-0">
      <form onSubmit={e => e.preventDefault()}>
        <RadioGroup
          value={selectCategory}
          onChange={setSelectCategory}
          className="flex  gap-3"
          name="plan">
          {blogCategories.map(category => (
            <RadioGroup.Option
              className={`px-4 p-1  text-base rounded-lg  border-2  border-[#252529]  hover:bg-brownLight hover:bg-opacity-90 ui-checked:border-white ui-checked:bg-brownLight ui-checked:text-white ui-checked:bg-opacity-90 text-zinc-500 cursor-pointer `}
              key={category}
              value={category}>
              {category}
            </RadioGroup.Option>
          ))}
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

      <div className="grid  gap-5  md:p-0">
        {filterResult.map(post => (
          <div key={post.attributes.name}>
            <Link
              className="flex items-center p-4 gap-2  rounded-lg  border-2 border-[#2525297c] hover:bg-brownLight hover:bg-opacity-30  delay-75"
              href={'blog/' + post.attributes.urlSlug}>
              <Image
                width={30}
                height={30}
                alt={post.attributes.name}
                src={`/images/posts/${post.icon}`}
                className="rounded-full"
              />
              <h1>{post.attributes.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const {
      data: { data: posts },
    } = await api.get('/posts')

    return {
      props: {
        posts,
      },
    }
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    }
  }
}
