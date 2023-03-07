import Link from 'next/link'

export const CustomLink = props => {
  return (
    <Link
      href={props.href}
      className={`${props.className} `}
      {...props}
      aria-label={props.href}>
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
      aria-label={props.href}
      className={props.className}>
      {props.children}
    </a>
  )
}
