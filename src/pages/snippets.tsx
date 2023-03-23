import { ISnippet } from '@/types/snippet'
import { api } from '@/utils/api'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

type SnippetsProps = {
  snippets: ISnippet[]
}

const Snippets: NextPage<SnippetsProps> = ({ snippets }) => {
  return (
    <div className='grid gap-2 px-6 md:grid-cols-1 md:p-0'>
      <div className='grid gap-5 md:grid-cols-3 md:p-0'>
        {snippets.map((snippet) => {
          const {
            attributes: { name, description, urlSlug, icon }
          } = snippet
          const {
            data: {
              id,
              attributes: { formats }
            }
          } = icon

          return (
            <Link
              className='flex items-center gap-2 rounded-lg  border-2  border-[#2525297c] p-4 delay-75 hover:bg-customGray  hover:bg-opacity-30'
              key={id}
              href={'/snippets/' + urlSlug}
              passHref
            >
              <Image
                width={35}
                height={35}
                alt={name}
                src={`${formats.thumbnail.url}`}
                className='rounded-full'
              />
              <div>
                <h1>{name}</h1>
                <p className='text-sm text-zinc-400'>{description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const {
      data: { data: snippets }
    } = await api.get('/snippets?populate=*')

    const filterSnippets = snippets.map((snippet: ISnippet) => {
      return {
        id: snippet.id,
        attributes: {
          ...snippet.attributes
        }
      }
    })
    return {
      props: {
        snippets: filterSnippets
      }
    }
  } catch (error) {
    return {
      props: {
        snippets: []
      }
    }
  }
}

export default Snippets