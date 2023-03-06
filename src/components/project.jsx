import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

const Project = ({ project }) => {
  return (
    <>
      <div
        key={project.name}
        className="grid  md:grid-cols-[70%_1fr] p-4 gap-8  rounded-lg  border-2 border-[#2525297c]   delay-75">
        <div className="flex  flex-start items-center flex-1 gap-5">
          <span> {project.icon}</span>
          <div>
            <h1>{project.name}</h1>
            <p className="text-zinc-400 text-sm">{project.desc}</p>
          </div>
        </div>

        <div className="flex gap-2 md:justify-end md:items-center">
          <span className="p-4  basis-full md:basis-0     border-2 border-[#2525297c] rounded-lg flex justify-center items-center ">
            <FiGithub size={20} name="Github" />
          </span>
          <span className="p-4  basis-full md:basis-0   border-2 border-[#2525297c] rounded-lg flex justify-center items-center">
            <BsBoxArrowInUpRight size={20} name="website" />
          </span>
        </div>
      </div>
    </>
  )
}

export default Project
