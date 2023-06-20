'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IPost } from '@/types/post'
import { formatDate } from '@/libs/date'

type ListProps = {
  posts: IPost[]
}

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

const ListPosts = ({ posts }: ListProps) => {
  return (
    <motion.ul
      variants={container}
      initial='hidden'
      animate='show'
      className='grid gap-3 md:p-0  '
    >
      {posts.map((post) => {
        const {
          attributes: { name, urlSlug, icon, description, images, publishedAt },
          id
        } = post

        return (
          <motion.li
            variants={item}
            key={id}
            className=' transition delay-75 duration-100 ease-in-out hover:-translate-y-1'
          >
            <Link
              className=' flex flex-col justify-end gap-4  rounded-lg  border-2  border-lightGray p-4 hover:bg-lightBrown hover:bg-opacity-30 md:flex-row-reverse  '
              href={'blog/' + urlSlug}
            >
              <div className='h-32 md:basis-4/12'>
                <Image
                  width='0'
                  height='0'
                  sizes='100%'
                  className='h-full w-full rounded-lg object-cover	'
                  loading='lazy'
                  src={images.data?.attributes?.url}
                  alt={`image of ${name}`}
                />
              </div>

              <div className='flex basis-11/12 flex-col items-start gap-4  '>
                <h1 className='text-xl'>{name}</h1>
                <p className='max-w-lg text-sm text-gray-200   text-opacity-90 delay-100 line-clamp-2 '>
                  {description}
                </p>
                <footer className='flex gap-4'>
                  <span className='flex items-center justify-center gap-2 rounded border-[1px] border-lightBrown p-1 px-3 text-sm text-gray-300 text-opacity-80'>
                    {formatDate(publishedAt)}
                  </span>
                  {/* <span className='rounded  border-[1px]  border-lightBrown p-1 px-3 text-sm text-gray-300 text-opacity-80'>
                    4 min
                  </span> */}
                </footer>
              </div>
            </Link>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}

export default ListPosts
