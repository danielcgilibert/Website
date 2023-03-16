import { api } from '@/utils/api'
import { RadioGroup } from '@headlessui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

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
          className="flex gap-3"
          name="plan">
          <RadioGroup.Option
            className={`px-4 p-1  text-base rounded-lg  border-2  border-[#252529]  hover:bg-brownLight hover:bg-opacity-90 ui-checked:border-white ui-checked:bg-brownLight ui-checked:text-white ui-checked:bg-opacity-90 text-zinc-500 cursor-pointer `}
            value={1}>
            All
          </RadioGroup.Option>
          {categories.map(category => {
            const {
              attributes: { name },
              id,
            } = category

            return (
              <RadioGroup.Option
                className={`px-4 p-1 text-base rounded-lg  border-2  border-[#252529]  hover:bg-brownLight hover:bg-opacity-90 ui-checked:border-white ui-checked:bg-brownLight ui-checked:text-white ui-checked:bg-opacity-90 text-zinc-500 cursor-pointer `}
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
          className="w-full bg-transparent border-2 border-[#252529] rounded-lg p-2 placeholder:text-zinc-700 shadow-none    outline-none focus:border-white focus:border-opacity-30 transition-colors delay-75  "
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-5 md:p-0  ">
        {filterResult.map(post => {
          const {
            attributes: { name, urlSlug, icon },
            id,
          } = post

          return (
            <motion.li variants={item} key={id}>
              <Link
                className="flex items-center p-4 gap-2  rounded-lg  border-2 border-[#2525297c] hover:bg-brownLight hover:bg-opacity-30  "
                href={'blog/' + urlSlug}>
                <Image
                  width={30}
                  height={30}
                  alt={name}
                  src={icon.data.attributes.url}
                  className="rounded-full"
                />
                <h1>{name}</h1>
              </Link>
            </motion.li>
          )
        })}
      </motion.ul>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const {
      data: { data: posts },
    } = await api.get('/posts?populate=*')

    const filterPosts = posts.map(post => {
      const {
        id,
        attributes: { name, urlSlug, icon, description, category },
      } = post
      return {
        id,
        attributes: {
          name,
          urlSlug,
          icon,
          description,
          category,
        },
      }
    })
    const {
      data: { data: categories },
    } = await api.get('/categories')

    return {
      props: {
        posts: filterPosts,
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
