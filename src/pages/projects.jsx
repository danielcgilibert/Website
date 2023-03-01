import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2  gap-2 px-6 md:p-0  ">
      {projects.map(project => (
        <div
          key={project.name}
          className="flex flex-col justify-between p-4 gap-2  rounded-lg  border-2 border-[#2525297c] hover:bg-brownLight hover:bg-opacity-30  delay-75">
          <span className="tracking-widest">{project.name}</span>
          <span className="font-light">{project.desc}</span>
          <div className="flex flex-wrap gap-1 gap-y-2 ">
            {project.stack.map(technology => (
              <span
                className="rounded-lg border-2 p-2 border-[#2525297c] font-light"
                key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
