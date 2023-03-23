import Project from '@/components/project'
import { IProject } from '@/types/project'
import { api } from '@/utils/api'
import { NextPage } from 'next'

type ProjectsProps = {
  projects: IProject[]
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  console.log(projects)

  return (
    <div className='grid gap-2 px-6  md:grid-cols-1 md:p-0    '>
      {projects?.map((project) => (
        <Project key={project.id} project={project.attributes} />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const {
      data: { data: projects }
    } = await api.get('/projects?populate=*')

    return {
      props: {
        projects
      }
    }
  } catch (error) {
    return {
      props: {
        projects: null
      }
    }
  }
}

export default Projects