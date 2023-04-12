import { AiOutlineCode } from 'react-icons/ai'
import {
  BsFolder,
  BsLaptop,
  BsCodeSlash,
  BsFileEarmarkText
} from 'react-icons/bs'
const SIZE = 20
export const routes = [
  {
    name: 'Projectos',
    href: 'projects',
    icon: <BsLaptop size={SIZE} />
  },
  {
    name: 'Blog',
    href: 'blog',
    icon: <BsFileEarmarkText size={SIZE} />
  },
  {
    name: 'Snippets',
    href: 'snippets',
    icon: <BsCodeSlash size={SIZE} />
  },
  {
    name: 'Recursos',
    href: 'resources',
    icon: <BsFolder size={SIZE} />
  }
]
