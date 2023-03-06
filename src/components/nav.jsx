import { routes } from '@/data/routes'
import { CustomLink } from '@/ui/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'

const Nav = () => {
  const router = useRouter()
  const path = router.pathname.split('/')[1]

  const [toggleNav, setToggleNav] = useState(false)
  const changeStateNav = () => {
    console.log(toggleNav)
    if (!toggleNav) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
    setToggleNav(!toggleNav)
  }
  return (
    <nav className=" z-10 p-6 md:p-0 md:pt-8  flex flex-row justify-between items-center inset-0 md:static  ">
      <span className="flex justify-center items-center gap-1">
        <CustomLink
          className="flex justify-center items-center gap-1 font-medium text-2xl md:text-base "
          active={''}
          href="/">
          <div className=" hover:bg-brownLight bg-opacity-50 p-1  rounded-full border-2">
            <AiOutlineHome size={16} />
          </div>
        </CustomLink>
      </span>
      <ul
        className={`bg-[#0d0d0e] md:bg-transparent w-screen md:w-full h-screen md:h-full  top-0 left-0  flex gap-4 fixed  flex-col md:flex-row justify-start md:justify-end items-center p-24 md:p-0  transition delay-150 duration-300 ease-in-out z-40  md:static ' ${
          toggleNav ? 'translate-x-0' : 'translate-x-[100vw]'
        } md:transform-none`}>
        {routes.map(route => (
          <li
            key={route.name}
            className="flex  justify-center items-center gap-1 font-medium text-2xl md:text-base">
            <CustomLink
              onClick={changeStateNav}
              className={`flex justify-center items-center gap-1 font-medium text-2xl text-white  md:text-base ${
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
        onClick={changeStateNav}>
        {toggleNav ? (
          <AiOutlineClose size={32} />
        ) : (
          <BiMenuAltRight size={32} />
        )}
      </button>
    </nav>
  )
}

export default Nav
