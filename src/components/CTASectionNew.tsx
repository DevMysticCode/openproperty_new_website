import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import ScrollProgressBar from './ScrollProgressBar'

export default function CTASectionNew() {
  const featuresRef = useRef(null)
  const isFeaturesInView = useInView(featuresRef, {
    once: true,
    margin: '-100px',
  })
  return (
    <>
      <ScrollProgressBar />
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
              className="space-y-12 lg:pr-8 relative z-10 text-black flex flex-col justify-center lg:justify-end"
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

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="mt-12"
              >
                <a
                  href="https://chat.whatsapp.com/F8hW6i1OuZL777j6yMRe96?mode=wwc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block" // This ensures proper button styling
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#00A19A] via-[#00c4b8] to-[#00e6d6] hover:from-[#00e6d6] hover:via-[#00c4b8] hover:to-[#00A19A] text-white text-lg px-8 py-4 rounded-full shadow-xl font-semibold transition-all duration-300 group"
                  >
                    {/* WhatsApp Icon */}
                    <svg
                      className="mr-3 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.464" />
                    </svg>
                    Join Our Community
                    <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>
              </motion.div>
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
    </>
  )
}
