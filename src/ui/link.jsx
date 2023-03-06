import Link from 'next/link'
import { useRouter } from 'next/router'

export const CustomLink = props => {
  return (
    <Link href={props.href} className={`${props.className} `} {...props}>
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
