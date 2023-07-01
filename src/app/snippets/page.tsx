//COMPONENTS
import Image from 'next/image'
import Link from 'next/link'

//SERVICES
import { getSnippets } from '@/services/getSnippets'

// TYPES
import { ISnippet } from '@/types/snippet'

export default async function Page() {
  const snippets: ISnippet[] = await getSnippets('/snippets?populate=*')
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
