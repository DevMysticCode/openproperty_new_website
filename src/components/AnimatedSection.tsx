import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
  rootMargin?: string
  variants?: Variants
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  threshold = 0.3,
  delay = 0,
  rootMargin = '-50px 0px -50px 0px',
  variants = defaultVariants,
}) => {
  const { isVisible, scrollDirection, elementRef } = useScrollAnimation({
    threshold,
    rootMargin,
  })

  // Adjust variants based on scroll direction
  const adjustedVariants: Variants = {
    ...variants,
    hidden: {
      ...variants.hidden,
      y: scrollDirection === 'down' ? 50 : -50,
    },
    exit: {
      ...variants.exit,
      y: scrollDirection === 'down' ? -50 : 50,
    },
  }

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={isVisible ? 'visible' : 'exit'}
      variants={adjustedVariants}
      className={className}
      custom={delay}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
