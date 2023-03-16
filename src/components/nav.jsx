import { routes } from '@/data/routes'
import { CustomLink } from '@/ui/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()
  const path = router.pathname.split('/')[1]

  useEffect(() => {
    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  const listener = e => {
    if (e.target.innerWidth >= 768) {
      setOpenMenu(false)
      document.body.classList.remove('overflow-hidden')
    }
  }

  const changeStateNav = () => {
    if (window.innerWidth < 768) {
      document.body.classList.toggle('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    setOpenMenu(!openMenu)
  }

  return (
    <nav className="z-10 p-6 md:p-0 md:pt-8  flex flex-row justify-between items-center inset-0 md:static">
      <div className="flex justify-center items-center gap-1">
        <CustomLink
          className="flex justify-center items-center gap-1 font-medium text-2xl md:text-base "
          active={''}
          href="/">
          <div className="hover:bg-lightBrown bg-opacity-50 p-1  rounded-full border-2">
            <AiOutlineHome size={16} />
          </div>
        </CustomLink>
      </div>

      <ul
        className={`bg-black bg-opacity-95 md:bg-transparent w-screen md:w-full h-screen md:h-full  top-0 left-0  flex gap-4 fixed  flex-col md:flex-row justify-start md:justify-end items-center p-24 md:p-0  transition delay-75 duration-300 ease-in-out z-40  md:static ${
          openMenu ? 'translate-x-0' : 'translate-x-[100vw]'
        } md:transform-none`}>
        {routes.map(route => (
          <li
            key={route.name}
            className="flex  justify-center items-center gap-1 font-medium text-2xl md:text-base">
            <CustomLink
              onClick={changeStateNav}
              className={`flex justify-center items-center gap-1 font-medium text-2xl text-white  md:text-base hover:text-zinc-100 hover:opacity-80 ${
                path == route.href ? 'opacity-100' : 'opacity-50'
              }`}
              href={`/${route.href}`}>
              {route.icon}
              {route.name}
            </CustomLink>
          </li>
        ))}
      </ul>

      <button
        aria-controls="primary-navigation"
        className="z-50 md:hidden"
        aria-expanded="false"
        role="button"
        aria-label="toggle nav"
        onClick={changeStateNav}>
        {openMenu ? <AiOutlineClose size={32} /> : <BiMenuAltRight size={32} />}
      </button>
    </nav>
  )
}

export default Nav
