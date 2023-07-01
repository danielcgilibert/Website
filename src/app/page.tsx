// COMPONENTS
import ProfileImage from '@/components/profile-image'
import AboutMeSection from '@/components/about-me-section'
import ProyectsSection from '@/components/project-section'
import Statistics from '@/components/statistics'

// SERVICES
import { getContributions } from '@/services/getContributions'
import { getProjects } from '@/services/getProjects'
import { getRepositories } from '@/services/getRepositories'
import { getPlaiceholder } from 'plaiceholder'

export default async function Page() {
  const repositories = await getRepositories()
  const contributions = await getContributions()
  const projects = await getProjects('/projects')
  const { base64, img } = await getPlaiceholder('/images/profile.jpeg')

  return (
    <div className='grid grid-cols-1 place-content-center content-center gap-8 md:grid-cols-[43%_auto]'>
      <header>
        <ProfileImage base={base64} img={img} />
      </header>
      <div className='relative flex flex-col justify-between gap-12 py-2 px-6 md:mt-6 md:p-0'>
        <AboutMeSection />
        <Statistics
          repositories={repositories}
          totalContributions={contributions}
        />
        <ProyectsSection projects={projects} />
      </div>
    </div>
  )
}
