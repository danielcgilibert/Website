import { MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  className: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const Message = ({ message, isBot }) => {
  return (
    <span
      className={`${
        isBot
          ? 'col-span-2 col-start-1 w-1/2 rounded-tl-none border-2 border-darkOrange bg-lightBrown'
          : 'col-start-2     rounded-2xl rounded-tr-none border-2 border-darkOrange bg-darkOrange'
      }   rounded-2xl  p-3`}
    >
      {message}
    </span>
  )
}
export default Message
