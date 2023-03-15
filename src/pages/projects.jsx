import Project from '@/components/project'
import { api } from '@/utils/api'

export default function Projects({ projects }) {
  return (
    <div className="grid md:grid-cols-1 gap-2  px-6 md:p-0    ">
      {projects?.map(project => (
        <Project key={project.id} project={project.attributes} />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const {
      data: { data: projects },
    } = await api.get('/projects')

    return {
      props: {
        projects,
      },
    }
  } catch (error) {
    return {
      props: {
        projects: null,
      },
    }
  }
}
