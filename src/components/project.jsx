import { ExternalLink } from '@/ui/link'
import Image from 'next/image'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

const Project = ({ project }) => {
  const { name, urlCode, urlWeb, desc, icon } = project
  const {
    data: {
      attributes: { url }
    }
  } = icon

  return (
    <>
      <div
        key={name}
        className='grid  gap-8 rounded-lg border-2  border-[#2525297c]  p-4 delay-75   md:grid-cols-[70%_1fr]'
      >
        <div className='flex-start  flex flex-1 items-center gap-5'>
          <Image width={25} height={25} src={url} alt={name} />
          <div>
            <h1>{name}</h1>
            <p className='text-sm text-zinc-400'>{desc}</p>
          </div>
        </div>
        <div className='flex gap-2 md:items-center md:justify-end'>
          <ExternalLink
            className='flex basis-full items-center justify-center rounded-lg border-2 border-[#2525297c] p-2 hover:bg-zinc-800 md:basis-0 '
            href={urlCode}
          >
            <span>
              <FiGithub size={20} name='Github' />
            </span>
          </ExternalLink>

          <ExternalLink
            className={`flex  basis-full items-center justify-center rounded-lg border-2 border-[#2525297c] p-2 hover:bg-zinc-800 md:basis-0 ${
              !urlWeb && 'pointer-events-none  opacity-20 '
            }`}
            href={urlWeb}
          >
            <span>
              <BsBoxArrowInUpRight size={20} name='website' />
            </span>
          </ExternalLink>
        </div>
      </div>
    </>
  )
}

export default Project
