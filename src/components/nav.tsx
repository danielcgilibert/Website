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

  const listener = (e: UIEvent) => {
    const w = e.target as Window

    if (w.innerWidth >= 768) {
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
    <nav className='inset-0 z-10 flex flex-row  items-center justify-between p-6 md:static md:p-0 md:pt-8'>
      <div className='flex items-center justify-center gap-1'>
        <CustomLink
          className='flex items-center justify-center gap-1 text-2xl font-medium md:text-base '
          active={''}
          href='/'
        >
          <div className='rounded-full border-2 bg-opacity-50  p-1 hover:bg-lightBrown'>
            <AiOutlineHome size={16} />
          </div>
        </CustomLink>
      </div>

      <ul
        className={`fixed top-0 left-0 z-40 flex h-screen w-screen  flex-col items-center  justify-start gap-4 bg-black  bg-opacity-95 p-24 transition delay-75 duration-300 ease-in-out md:static  md:h-full md:w-full md:flex-row md:justify-end md:bg-transparent  md:p-0 ${
          openMenu ? 'translate-x-0' : 'translate-x-[100vw]'
        } md:transform-none`}
      >
        {routes.map((route) => (
          <li
            key={route.name}
            className='flex  items-center justify-center gap-1 text-2xl font-medium md:text-base'
          >
            <CustomLink
              onClick={changeStateNav}
              className={`flex items-center justify-center gap-1 text-2xl font-medium text-white  hover:text-zinc-100 hover:opacity-80 md:text-base ${
                path === route.href ? 'opacity-100' : 'opacity-50'
              }`}
              href={`/${route.href}`}
            >
              {route.icon}
              {route.name}
            </CustomLink>
          </li>
        ))}
      </ul>

      <button
        aria-controls='primary-navigation'
        className='z-50 md:hidden'
        aria-expanded='false'
        role='button'
        aria-label='toggle nav'
        onClick={changeStateNav}
      >
        {openMenu ? <AiOutlineClose size={32} /> : <BiMenuAltRight size={32} />}
      </button>
    </nav>
  )
}

export default Nav
