import Project from '@/components/project'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="grid md:grid-cols-1 gap-2  px-6 md:p-0   ">
      {projects.map(project => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  )
}
