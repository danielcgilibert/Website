import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'

export default function Snippets({ snippets }) {
  return (
    <div className="grid md:grid-cols-1  gap-2 px-6 md:p-0  ">
      <div className="grid md:grid-cols-3 gap-5 md:p-0">
        {snippets.map((snippet, index) => (
          <Link
            className="flex items-center p-4 gap-2  rounded-lg  border-2 border-[#2525297c] hover:bg-brownLight hover:bg-opacity-30  delay-75"
            key={`${index}`}
            href={'/snippets/' + snippet.slug}
            passHref>
            <Image
              width={35}
              height={35}
              alt={snippet.frontMatter.title}
              src={`/images/snippets/${snippet.frontMatter.thumbnailUrl}`}
              className="rounded-full"
            />
            <div>
              <h1>{snippet.frontMatter.title}</h1>
              <p className="text-sm text-zinc-400">
                react component description
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('snippets'))

  const snippets = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join('snippets', filename),
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
      snippets,
    },
  }
}
