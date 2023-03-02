import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

export default function Snippets({ snippets }) {
  return (
    <div className="grid md:grid-cols-2  gap-2 px-6 md:p-0  ">
      <div className="grid md:grid-cols-2 gap-5  md:p-0">
        {snippets.map((snippet, index) => (
          <>
            <Link
              className="grid grid-cols-2"
              key={`${index}`}
              href={'/snippets/' + snippet.slug}
              passHref>
              <h1 className="p-4 gap-2  rounded-lg  border-2 border-[#2525297c] hover:bg-brownLight hover:bg-opacity-30  delay-75">
                {snippet.frontMatter.title}
              </h1>
            </Link>
          </>
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
