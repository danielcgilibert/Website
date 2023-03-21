import Link from 'next/link'
import { MouseEventHandler, ReactNode } from 'react'

type CustomLinkProps = {
  children: ReactNode
  href: string
  className: string
  active?: string
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

type ExternalLinkProps = {
  children: ReactNode
  href: string
  className?: string
}

export const CustomLink = (props: CustomLinkProps) => {
  return (
    <Link
      {...props}
      href={props.href}
      className={`${props.className} `}
      aria-label={props.href}
    >
      {props.children}
    </Link>
  )
}

export const ExternalLink = (props: ExternalLinkProps) => {
  return (
    <a
      href={props.href}
      target='_blank'
      rel='noreferrer'
      aria-label={props.href}
      className={props.className}
    >
      {props.children}
    </a>
  )
}
