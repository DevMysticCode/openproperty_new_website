import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface StaggeredAnimatedSectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  staggerChildren?: number
  staggerDirection?: 1 | -1
}

const StaggeredAnimatedSection: React.FC<StaggeredAnimatedSectionProps> = ({
  children,
  className = '',
  threshold = 0.3,
  rootMargin = '-50px 0px -50px 0px',
  staggerChildren = 0.1,
  staggerDirection = 1,
}) => {
  const { isVisible, scrollDirection, elementRef } = useScrollAnimation({
    threshold,
    rootMargin,
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: staggerChildren * staggerDirection,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1 as -1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === 'down' ? 30 : -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    exit: {
      opacity: 0,
      y: scrollDirection === 'down' ? -30 : 30,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  // Ensure children is always an array
  const childrenArray = React.Children.toArray(children)

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={isVisible ? 'visible' : 'exit'}
      variants={containerVariants}
      className={className}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StaggeredAnimatedSection
