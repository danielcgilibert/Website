'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type TransitionProps = {
  children: ReactNode
}
const AnimationSettings = {
  transition: { duration: 0.2 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}
const Transition = ({ children }: TransitionProps) => {
  const pathname = usePathname()
  return (
    <motion.div key={pathname} {...AnimationSettings}>
      {children}
    </motion.div>
  )
}

export default Transition
