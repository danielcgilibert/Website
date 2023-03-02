import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineCode, AiOutlineHome } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import { BsArchive, BsCodeSquare } from 'react-icons/bs'
import { HiOutlineNewspaper } from 'react-icons/hi'

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const changeStateNav = () => {
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
        <Link
          className="flex justify-center items-center gap-1 font-medium text-2xl md:text-base"
          href="/">
          <div className=" hover:bg-brownLight bg-opacity-50 p-1  rounded-full border-2">
            <AiOutlineHome size={16} />
          </div>
        </Link>
      </span>
      <ul
        className={`bg-[#0d0d0e] md:bg-transparent w-screen md:w-full h-screen md:h-full  top-0 left-0  flex gap-4 fixed  flex-col md:flex-row justify-start md:justify-end items-center p-24 md:p-0  transition delay-150 duration-300 ease-in-out z-40  md:static ' ${
          toggleNav ? 'translate-x-0' : 'translate-x-[100vw]'
        } md:transform-none`}>
        <li className="flex  justify-center items-center gap-1 font-medium text-2xl md:text-base">
          <Link
            onClick={changeStateNav}
            className="flex justify-center items-center gap-1 font-medium text-2xl md:text-base"
            href="/projects">
            <BsCodeSquare size={20} />
            Projects
          </Link>
        </li>
        <li className="flex justify-center items-center gap-1 font-medium text-2xl md:text-base">
          <Link
            onClick={changeStateNav}
            className="flex justify-center items-center gap-1 font-medium text-2xl md:text-base"
            href="/blog">
            <HiOutlineNewspaper size={20} />
            Blog
          </Link>
        </li>
        <li>
          <Link
            onClick={changeStateNav}
            className="flex justify-center items-center gap-1 font-medium text-2xl md:text-base"
            href="/snippets">
            <AiOutlineCode size={20} />
            Snippets
          </Link>
        </li>
        <li>
          <Link
            onClick={changeStateNav}
            className="flex justify-center items-center gap-1 font-medium text-2xl md:text-base"
            href="/">
            <BsArchive size={20} />
            Resources
          </Link>
        </li>
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
