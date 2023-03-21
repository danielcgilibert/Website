import { motion } from 'framer-motion'
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
  return <motion.div {...AnimationSettings}>{children}</motion.div>
}

export default Transition
