import Link from 'next/link'
import { useRouter } from 'next/router'

export const CustomLink = props => {
  const router = useRouter()
  const path = router.pathname.split('/')[1]
  return (
    <Link
      href={props.href}
      className={`${props.className} ${
        path == props.active ? 'opacity-100' : 'opacity-50'
      } `}>
      {props.children}
    </Link>
  )
}

export const ExternalLink = props => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={props.className}>
      {props.children}
    </a>
  )
}
