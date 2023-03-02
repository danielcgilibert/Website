import { blogCategories } from '@/data/blogCategories'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import { useEffect, useId, useState } from 'react'

export default function Blog({ posts }) {
  const [selectCategory, setSelectCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [filterResult, setFilterResult] = useState([])
  const id = useId()

  useEffect(() => {
    const results = posts
      .filter(
        post =>
          post.frontMatter.category
            .toLowerCase()
            .includes(selectCategory.toLowerCase()) || selectCategory === 'all'
      )
      .filter(post =>
        post.frontMatter.title.toLowerCase().includes(search.toLowerCase())
      )
    setFilterResult(results)
  }, [search, selectCategory, posts])

  return (
    <div className="flex flex-col gap-5 px-6">
      <div className="flex gap-3">
        {blogCategories.map((category, index) => (
          <button
            className={`${
              category === selectCategory &&
              'border-white bg-brownLight bg-opacity-90'
            } px-4 p-1 text-lg rounded-lg  border-2 border-[#252529]  hover:bg-brownLight hover:bg-opacity-90 `}
            onClick={() => setSelectCategory(category)}
            key={`${id}-${index}`}>
            {category}
          </button>
        ))}
      </div>

      <form onSubmit={e => e.preventDefault()}>
        <input
          className="w-full bg-transparent border-2 border-[#252529] rounded-lg p-2 placeholder:text-zinc-700"
          type="text"
          placeholder="Search posts"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>

      <div className="grid md:grid-cols-2 gap-5  md:p-0">
        {filterResult.map((post, index) => (
          <>
            <Link
              className="grid grid-cols-2"
              key={`${id}`}
              href={'/blog/' + post.slug}
              passHref>
              <h1 className="p-4 gap-2  rounded-lg  border-2 border-[#2525297c] hover:bg-brownLight hover:bg-opacity-30  delay-75">
                {post.frontMatter.title}
              </h1>
              <Image
                width={8000}
                height={8000}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt={post.frontMatter.title}
                src="/images/posts/tailwind-css.png"
              />
            </Link>
          </>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })

  return {
    props: {
      posts,
    },
  }
}
