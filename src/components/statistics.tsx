import { ExternalLink } from '@/ui/link'
import { useEffect, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { GoRepo } from 'react-icons/go'

type StatisticsProps = {
  repositories: number
  totalContributions: number
}

const Statistics = ({ repositories, totalContributions }: StatisticsProps) => {
  const [repositoriesCount, setRepositoriesCount] = useState(0)
  const [contributionsCount, setContributionsCount] = useState(0)

  useEffect(() => {
    const timeoutRepo = setTimeout(() => {
      contributionsCount < totalContributions
        ? setContributionsCount(contributionsCount + 1)
        : clearInterval(timeoutRepo)
    }, 5)

    const timeoutCont = setTimeout(() => {
      repositoriesCount < repositories
        ? setRepositoriesCount(repositoriesCount + 1)
        : clearInterval(timeoutCont)
    }, 130)
  }, [repositoriesCount, contributionsCount, repositories, totalContributions])

  return (
    <section className={`flex flex-col gap-3  `}>
      <h2 className='prose:text-white  flex items-center justify-start gap-1 text-sm uppercase  tracking-widest antialiased '>
        Estadisticas GitHub
      </h2>
      <ExternalLink href='https://github.com/danielcgilibert'>
        <div
          className={`flex  h-16 w-full items-center justify-around gap-2 rounded-lg border-2 border-lightGray px-4  delay-75 hover:bg-lightBrown  hover:bg-opacity-30`}
        >
          <div className='flex flex-col items-center justify-center'>
            <span>Contribuciones</span>
            <span className='flex  items-center justify-center gap-1'>
              {contributionsCount}{' '}
              <AiOutlinePlusCircle className='text-lightOrange' size={20} />
            </span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <span>Repositorios</span>
            <span className='flex  items-center justify-center gap-1'>
              {repositoriesCount}{' '}
              <GoRepo className='text-lightOrange ' size={20} />
            </span>
          </div>
        </div>
      </ExternalLink>
    </section>
  )
}
export default Statistics
