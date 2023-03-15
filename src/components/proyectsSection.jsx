import { ExternalLink } from '@/ui/link'
import { BsBoxArrowInUpRight, BsCodeSquare, BsGithub } from 'react-icons/bs'

const ProyectsSection = ({ projects }) => {
  return (
    <section className="flex flex-col  gap-3">
      <header>
        <h2 className="flex gap-1 justify-start items-center antialiased text-sm tracking-widest uppercase  ">
          últimos proyectos
        </h2>
      </header>
      <div className="grid  md:grid-cols-2 md:grid-rows-2 gap-4 [&>*:nth-child(4)]:hidden md:[&>*:nth-child(4)]:flex  ">
        {projects?.slice(0, 4).map(project => {
          const {
            attributes: { name, urlCode, urlWeb },
          } = project

          return (
            <div
              className="flex gap-2 justify-between items-center rounded-lg px-4 border-2 border-[#2525297c] w-full h-16  hover:bg-brownLight hover:bg-opacity-30  delay-75"
              key={name}>
              <ExternalLink href={urlCode}>
                <span className="flex justify-start items-center gap-2 tracking-widest">
                  <BsCodeSquare size={20} name="website" />
                  {name}
                </span>
              </ExternalLink>

              <div className="flex justify-center gap-2 m-0 p-0  ">
                <ExternalLink
                  href={urlWeb}
                  className={`${
                    !urlWeb && 'opacity-20  pointer-events-none '
                  }`}>
                  <BsBoxArrowInUpRight size={20} name="website" />
                </ExternalLink>
                <ExternalLink href={urlCode}>
                  <BsGithub size={20} name="Github" />
                </ExternalLink>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default ProyectsSection
