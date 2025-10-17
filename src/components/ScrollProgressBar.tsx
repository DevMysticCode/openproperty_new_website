import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="h-1 bg-gradient-to-r from-[#00A19A] via-[#00c9bf] to-[#00e6d6] origin-left z-[100]"
      style={{ scaleX, zIndex: 100 }}
    />
  )
}
