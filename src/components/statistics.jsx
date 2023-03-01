import { AiOutlinePlusCircle } from 'react-icons/ai'
import { GoRepo } from 'react-icons/go'

const Statistics = () => {
  return (
    <section className="flex flex-col gap-5 ">
      <h2 className="prose:text-white  flex gap-1 justify-start items-center antialiased text-sm  tracking-widest uppercase   ">
        Estadisticas GitHub
      </h2>
      <div className="prose:text-white  flex ll gap-2 justify-around items-center rounded-lg px-4 border-2 border-[#2525297c] w-full h-16 cursor-pointer hover:bg-brownLight hover:bg-opacity-30  delay-75">
        <div className="flex flex-col justify-center items-center">
          <span>Contribuciones</span>
          <span className="flex  justify-center items-center gap-1">
            491 <AiOutlinePlusCircle size={20} />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>Repositorios</span>
          <span className="flex  justify-center items-center gap-1">
            29 <GoRepo size={20} />
          </span>
        </div>
      </div>
    </section>
  )
}
export default Statistics
