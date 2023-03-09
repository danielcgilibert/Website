import { ExternalLink } from '@/ui/link'
import { useEffect, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { GoRepo } from 'react-icons/go'

const Statistics = ({ repositories, totalContributions }) => {
  const [repositoriesCount, setRepositoriesCount] = useState(0)
  const [contributionsCount, setContributionsCount] = useState(0)
  const [positionMouse, setPositionMouse] = useState(0)

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
    <section className={`flex flex-col gap-5 `}>
      <h2 className="prose:text-white  flex gap-1 justify-start items-center antialiased text-sm  tracking-widest uppercase ">
        Estadisticas GitHub
      </h2>
      <ExternalLink href="https://github.com/danielcgilibert">
        <div
          className={`flex  gap-2 justify-around items-center rounded-lg px-4 border-2 border-[#2525297c] w-full h-16  hover:bg-brownLight hover:bg-opacity-30  delay-75`}>
          <div className="flex flex-col justify-center items-center">
            <span>Contribuciones</span>
            <span className="flex  justify-center items-center gap-1">
              {contributionsCount}{' '}
              <AiOutlinePlusCircle className="text-[#ffd2b4] " size={20} />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>Repositorios</span>
            <span className="flex  justify-center items-center gap-1">
              {repositoriesCount}{' '}
              <GoRepo className="text-[#ffd2b4] " size={20} />
            </span>
          </div>
        </div>
      </ExternalLink>
    </section>
  )
}
export default Statistics
