import { IProject } from '@/types/project'
import { ExternalLink } from '@/ui/link'
import { BsBoxArrowInUpRight, BsCodeSquare, BsGithub } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'

type ProyectsSectionProps = {
  projects: IProject[]
}

const ProyectsSection = ({ projects }: ProyectsSectionProps) => {
  return (
    <section className='flex flex-col  gap-3'>
      <header>
        <h2 className='flex items-center justify-start gap-1 text-sm uppercase tracking-widest antialiased  '>
          últimos proyectos
        </h2>
      </header>
      <div className='grid  gap-4 md:grid-cols-2 md:grid-rows-2 [&>*:nth-child(4)]:hidden md:[&>*:nth-child(4)]:flex  '>
        {projects?.slice(0, 4).map((project) => {
          const {
            attributes: { name, urlCode, urlWeb }
          } = project

          return (
            <div
              className='flex h-16 w-full items-center justify-between gap-2 rounded-lg border-2 border-lightGray px-4  delay-75 hover:bg-lightBrown  hover:bg-opacity-30'
              key={name}
            >
              <ExternalLink href={urlCode}>
                <span className='flex items-center justify-start gap-2 tracking-widest'>
                  <BsCodeSquare size={20} name='website' />
                  {name}
                </span>
              </ExternalLink>

              <div className='m-0 flex justify-center gap-2 p-0  '>
                <ExternalLink
                  href={urlWeb ? urlWeb : ' '}
                  className={`${!urlWeb && 'pointer-events-none  opacity-20 '}`}
                >
                  <TfiWorld size={20} name='website' />
                </ExternalLink>
                <ExternalLink href={urlCode}>
                  <BsGithub size={20} name='Github' />
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
