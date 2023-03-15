import { api } from '@/utils/api'
import Image from 'next/image'
import Link from 'next/link'

export default function Snippets({ snippets }) {
  console.log(snippets)

  return (
    <div className="grid md:grid-cols-1  gap-2 px-6 md:p-0  ">
      <div className="grid md:grid-cols-3 gap-5 md:p-0">
        {snippets.map((snippet, index) => {
          const {
            attributes: { name, urlSlug, icon },
          } = snippet
          const {
            data: {
              id,
              attributes: { formats },
            },
          } = icon

          return (
            <Link
              className="flex items-center p-4 gap-2  rounded-lg  border-2 border-[#2525297c] hover:bg-brownLight hover:bg-opacity-30  delay-75"
              key={`${index}`}
              href={'/snippets/' + urlSlug}
              passHref>
              <Image
                width={35}
                height={35}
                alt={name}
                src={`${formats.thumbnail.url}`}
                className="rounded-full"
              />
              <div>
                <h1>{name}</h1>
                <p className="text-sm text-zinc-400">{snippet.description}</p>
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
      data: { data: snippets },
    } = await api.get('/snippets?populate=*')

    const filterSnippets = snippets.map(snippet => {
      return {
        id: snippet.id,
        attributes: {
          ...snippet.attributes,
        },
      }
    })
    return {
      props: {
        snippets: filterSnippets,
      },
    }
  } catch (error) {
    return {
      props: {
        snippets: [],
      },
    }
  }
}
