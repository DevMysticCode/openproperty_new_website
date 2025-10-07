import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTASectionNew() {
  const featuresRef = useRef(null)
  const isFeaturesInView = useInView(featuresRef, {
    once: true,
    margin: '-100px',
  })
  return (
    <section
      ref={featuresRef}
      className="relative pt-4 bg-gradient-to-tl from-[#000000] via-[#00A19A] to-[#caf5f2] overflow-hidden"
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isFeaturesInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="space-y-2 lg:pr-8 relative z-10 text-black flex justify-center lg:justify-end"
          >
            <div className="">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight  font-bold"
              >
                umovingu.
              </motion.h3>

              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight  font-bold"
              >
                your <span className="italic font-bold">move.</span>
              </motion.h3>

              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight  font-bold"
              >
                your <span className="italic font-bold">way.</span>
              </motion.h3>
            </div>
          </motion.div>

          {/* Right Side - Empowering Figure */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isFeaturesInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            {/* Silhouette Figure */}
            <motion.div
              // animate={{
              //   y: [0, -20, 0],
              // }}
              // transition={{
              //   duration: 4,
              //   repeat: Infinity,
              //   ease: 'easeInOut',
              // }}
              className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl"
            >
              <img
                alt="Empowering figure representing your move, your way"
                decoding="async"
                className="relative w-full h-auto object-contain"
                src="/products/ctaSection-removebg-preview.png"
                srcSet="/products/ctaSection-removebg-preview.png"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
