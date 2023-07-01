//COMPONENTS
import Project from '@/components/project'

//SERVICES
import { getProjects } from '@/services/getProjects'

// TYPES
import { IProject } from '@/types/project'

export default async function Page() {
  const projects = await getProjects('/projects?populate=*')

  return (
    <div className='grid gap-2 px-6  md:grid-cols-1 md:p-0'>
      <div className='grid gap-2 px-6  md:grid-cols-1 md:p-0    '>
        {projects
          ?.sort(function (a: IProject, b: IProject) {
            return (
              new Date(b.attributes.publishedAt).valueOf() -
              new Date(a.attributes.publishedAt).valueOf()
            )
          })
          .map((project: IProject) => (
            <Project key={project.id} project={project.attributes} />
          ))}
      </div>
    </div>
  )
}
