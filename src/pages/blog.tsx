import { ICategory } from '@/types/category'
import { IPost } from '@/types/post'
import { api } from '@/utils/api'
import { RadioGroup } from '@headlessui/react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

type BlogProps = {
  posts: IPost[]
  categories: ICategory[]
}

const Blog: NextPage<BlogProps> = ({ posts, categories }) => {
  const [selectCategory, setSelectCategory] = useState(1)
  const [search, setSearch] = useState('')
  const [filterResult, setFilterResult] = useState(posts)

  useEffect(() => {
    const results = posts
      // filter by category
      .filter(
        (post) =>
          post.attributes.category.data.id === selectCategory ||
          selectCategory === 1
      )

      // filter by search
      .filter((post) =>
        post.attributes.name.toLowerCase().includes(search.toLowerCase())
      )

    setFilterResult(results)
  }, [search, selectCategory, posts])

  return (
    <div className='flex flex-col gap-5 px-6 md:p-0'>
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
          {categories.map((category) => {
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
        <span className='text-white text-opacity-50'>
          {`${filterResult.length}`} Post
        </span>
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
      <motion.ul
        variants={container}
        initial='hidden'
        animate='show'
        className='grid gap-3 md:p-0  '
      >
        {filterResult.map((post) => {
          const {
            attributes: { name, urlSlug, icon },
            id
          } = post

          return (
            <motion.li
              variants={item}
              key={id}
              className=' transition delay-75 duration-100 ease-in-out hover:-translate-y-1'
            >
              <Link
                className='flex items-center gap-2 rounded-lg  border-2  border-lightGray p-4 hover:bg-lightBrown hover:bg-opacity-30  '
                href={'blog/' + urlSlug}
              >
                <Image
                  width={30}
                  height={30}
                  alt={name}
                  src={icon}
                  className='rounded-full'
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
      data: { data: posts }
    } = await api.get('/posts?populate=*')

    const filterPosts = posts.map((post: any) => {
      const {
        id,
        attributes: { name, urlSlug, icon, description, category }
      } = post
      return {
        id,
        attributes: {
          name,
          urlSlug,
          icon: icon.data.attributes.url,
          description,
          category
        }
      }
    })
    const {
      data: { data: categories }
    } = await api.get('/categories')

    return {
      props: {
        posts: filterPosts,
        categories
      }
    }
  } catch (error) {
    return {
      props: {
        posts: [],
        categories: []
      }
    }
  }
}

export default Blog
