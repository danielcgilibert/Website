import { AiOutlineCode } from 'react-icons/ai'
import { BsArchive, BsCodeSquare } from 'react-icons/bs'
import { HiOutlineNewspaper } from 'react-icons/hi'

export const routes = [
  {
    name: 'Projects',
    href: 'projects',
    icon: <BsCodeSquare size={20} />
  },
  {
    name: 'Blog',
    href: 'blog',
    icon: <HiOutlineNewspaper size={20} />
  },
  {
    name: 'Snippets',
    href: 'snippets',
    icon: <AiOutlineCode size={20} />
  },
  {
    name: 'Resources',
    href: 'resources',
    icon: <BsArchive size={20} />
  }
]
