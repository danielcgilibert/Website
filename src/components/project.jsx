import { BsBoxArrowInUpRight, BsCodeSquare, BsGithub } from 'react-icons/bs'

const Project = ({ project }) => {
  return (
    <div className="flex gap-2 justify-between items-center rounded-lg px-4 border-2 border-[#2525297c] w-full h-16 cursor-pointer hover:bg-brownLight hover:bg-opacity-30  delay-75">
      <div className="flex justify-start items-center gap-2">
        <BsCodeSquare size={20} name="website" />
        <span className="tracking-widest">{project.name}</span>
      </div>

      <div className="flex justify-center gap-2 m-0 p-0">
        <BsBoxArrowInUpRight size={20} name="website" />
        <BsGithub size={20} name="Github" />
      </div>
    </div>
  )
}

export default Project
