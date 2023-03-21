import { MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  className: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`rounded-lg border-2 border-lightGray px-4 py-2 hover:bg-lightBrown ${props.className}`}
      type={props.type}
    >
      {props.children}
    </button>
  )
}
export default Button
