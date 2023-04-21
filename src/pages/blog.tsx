import { ICategory } from '@/types/category'
import { IPost } from '@/types/post'
import { api } from '@/utils/api'
import { RadioGroup, Menu } from '@headlessui/react'
import { NextPage } from 'next'
import { IoIosArrowDown } from 'react-icons/io'
import { useEffect, useState } from 'react'
import ListPosts from '@/components/listPost'

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
        {/* <Menu as='div' className='relative flex justify-end'>
          <Menu.Button className='flex w-28 items-center justify-center gap-1  rounded-lg border-2 border-customGray bg-transparent py-2'>
            Fecha <IoIosArrowDown />
          </Menu.Button>
          <Menu.Items className='absolute top-12 flex  w-64  flex-col items-start justify-start gap-5 rounded border-2 border-customGray bg-darkBrown p-4  '>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`w-full ${active && 'bg-slate-400 '}`}
                  href='/account-settings'
                >
                  Fecha
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`w-full ${active && 'bg-slate-400 '}`}
                  href='/account-settings'
                >
                  Tiempo de lectura
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`w-full ${active && 'bg-slate-400 '}`}
                  href='/account-settings'
                >
                  Visitas
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu> */}
      </div>

      <ListPosts posts={filterResult} />
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
        attributes: {
          name,
          urlSlug,
          icon,
          description,
          category,
          images,
          publishedAt
        }
      } = post
      return {
        id,
        attributes: {
          name,
          urlSlug,
          icon: icon.data.attributes.url,
          description,
          category,
          images,
          publishedAt
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
