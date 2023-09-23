import { Laptop2, PenSquare, Code, Folder } from 'lucide-preact'

const SIZE = 20
export const routes = [
	{
		name: 'Home',
		href: ''
	},
	{
		name: 'Proyectos',
		href: 'projects',
		icon: <Laptop2 size={SIZE} />
	},
	{
		name: 'Blog',
		href: 'blog',
		icon: <PenSquare size={SIZE} />
	},
	{
		name: 'Snippets',
		href: 'snippets',
		icon: <Code size={SIZE} />
	},
	,
	{
		name: 'About Me',
		href: 'snippets',
		icon: <Code size={SIZE} />
	},
	{
		name: 'Contacto',
		href: 'snippets',
		icon: <Code size={SIZE} />
	}
]
