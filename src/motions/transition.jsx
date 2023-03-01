import { motion } from 'framer-motion'
const AnimationSettings = {
  transition: { duration: 0.2 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}
const Transition = ({ children }) => {
  return <motion.div {...AnimationSettings}>{children}</motion.div>
}

export default Transition
