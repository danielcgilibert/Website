import AboutMeSection from '@/components/aboutMeSection'
import ProyectsSection from '@/components/proyectsSection'
import Statistics from '@/components/statistics'
import Image from 'next/image'

import { getPlaiceholder } from 'plaiceholder'
import { useState } from 'react'

export default function Home({ repositories, totalContributions, imageProps }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[43%_auto] content-center place-content-center gap-8">
        <header>
          <Image
            alt="profile"
            width={8000}
            height={8000}
            quality={100}
            {...imageProps}
            placeholder="blur"
            className={`
               md:rounded-lg h-64 md:h-full duration-700 ease-in-out group-hover:opacity-75 
              ${isLoading ? 'blur-lg grayscale opacity-20 ' : 'blur-0'})`}
            onLoadingComplete={() => setLoading(false)}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </header>

        <div className="flex flex-col justify-between gap-12   py-2 md:p-0 px-6 md:mt-6">
          <AboutMeSection />
          <Statistics
            repositories={repositories}
            totalContributions={totalContributions}
          />
          <ProyectsSection />
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const { base64, img } = await getPlaiceholder('/images/profile.jpeg')
    const bearer = `Bearer ${process.env.ENV_GITHUBTOKEN}`

    const response = await fetch(
      'https://api.github.com/users/danielcgilibert/repos',
      {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
          Authorization: bearer,
          'Content-Type': 'application/json',
        },
      }
    )

    const responseContribu = await fetch(
      'https://github-contributions-api.deno.dev/danielcgilibert.json'
    )

    const { totalContributions } = await responseContribu.json()
    const repositories = await response.json()
    return {
      props: {
        repositories: repositories.length,
        totalContributions,
        imageProps: {
          ...img,
          blurDataURL: base64,
        },
      },
    }
  } catch (error) {
    console.log(error)
  }
}
