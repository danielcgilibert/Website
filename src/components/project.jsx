import { FiGithub } from 'react-icons/fi'

const Project = ({ project }) => {
  return (
    <>
      <div
        key={project.name}
        className="grid md:grid-cols-[70%_1fr] p-4 gap-8  rounded-lg  border-2 border-[#2525297c] hover:bg-brownLight hover:bg-opacity-30  delay-75">
        <div>
          <h1 className="tracking-widest font-bold text-lg">{project.name}</h1>
          <p className=" text-sm font-thin ">{project.desc}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:justify-end md:items-center">
          <span className="p-3 border-2 border-[#2525297c] rounded-lg flex justify-center">
            <FiGithub size={20} name="Github" />
          </span>
          <span className="p-3 border-2 border-[#2525297c] rounded-lg flex justify-center">
            <FiGithub size={20} name="Github" />
          </span>
        </div>
      </div>
    </>
  )
}

export default Project
