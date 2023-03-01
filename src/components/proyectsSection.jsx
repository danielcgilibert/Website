import { projects } from '@/data/projects'
import Project from './project'

const ProyectsSection = () => {
  return (
    <section className="flex flex-col  gap-3">
      <header>
        <h2 className="flex gap-1 justify-start items-center antialiased text-sm tracking-widest uppercase  ">
          últimos proyectos
        </h2>
      </header>
      <div className="grid  md:grid-cols-2 md:grid-rows-2 gap-4 [&>*:nth-child(4)]:hidden md:[&>*:nth-child(4)]:flex  ">
        {projects.slice(0, 4).map(project => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
export default ProyectsSection
