import AboutMeSection from '@/components/aboutMeSection'
import ProyectsSection from '@/components/proyectsSection'
import Statistics from '@/components/statistics'
import { IProject } from '@/types/project'
import { api, apiContribu, apiGitHub } from '@/utils/api'
import { NextPage } from 'next'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import { useState } from 'react'

type HomeProps = {
  repositories: number
  totalContributions: number
  imageProps: {
    blurDataURL: string
    height: number
    src: string
    type: string
    width: number
  }
  projects: IProject[]
}

const Home: NextPage<HomeProps> = ({
  repositories,
  totalContributions,
  imageProps,
  projects
}) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <>
      <div className='grid grid-cols-1 place-content-center content-center gap-8 md:grid-cols-[43%_auto]'>
        <header>
          <Image
            alt='profile'
            // width={8000}
            // height={8000}
            quality={100}
            {...imageProps}
            placeholder='blur'
            className={`
               h-64 duration-700 ease-in-out group-hover:opacity-75 md:h-full md:rounded-lg 
              ${isLoading ? 'opacity-20 blur-lg grayscale ' : 'blur-0'})`}
            onLoadingComplete={() => setLoading(false)}
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            style={{
              width: '100%',
              objectFit: 'cover'
            }}
          />
        </header>

        <div className='flex flex-col justify-between gap-12   py-2 px-6 md:mt-6 md:p-0'>
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
      data: { data: projects }
    } = await api.get('/projects')

    const { base64, img } = await getPlaiceholder('/images/profile.jpeg')

    const { data: repositories } = await apiGitHub.get('/repos')

    const {
      data: { totalContributions }
    } = await apiContribu.get('/danielcgilibert.json')

    return {
      props: {
        repositories: repositories.length,
        totalContributions,
        imageProps: {
          ...img,
          blurDataURL: base64
        },
        projects
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        repositories: 0,
        totalContributions: 0,
        imageProps: {},
        projects: []
      }
    }
  }
}
export default Home
