import AboutMeSection from '@/components/aboutMeSection'
import ProyectsSection from '@/components/proyectsSection'
import Statistics from '@/components/statistics'
import { api, apiContribu, apiGitHub } from '@/utils/api'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import { useState } from 'react'

export default function Home({
  repositories,
  totalContributions,
  imageProps,
  projects,
}) {
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
          <ProyectsSection projects={projects} />
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const {
      data: { data: projects },
    } = await api.get('/projects')

    const { base64, img } = await getPlaiceholder('/images/profile.jpeg')

    const { data: repositories } = await apiGitHub.get('/repos')

    const {
      data: { totalContributions },
    } = await apiContribu.get('/danielcgilibert.json')

    return {
      props: {
        repositories: repositories.length,
        totalContributions,
        imageProps: {
          ...img,
          blurDataURL: base64,
        },
        projects,
      },
    }
  } catch (error) {
    console.log(error)
  }
}
