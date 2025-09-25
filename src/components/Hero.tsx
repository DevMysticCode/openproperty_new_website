import { motion } from 'framer-motion'
import { useRef } from 'react'
import ChipsScene from './ChipsScene'
import AnimatedSection from './AnimatedSection'
import StaggeredAnimatedSection from './StaggeredAnimatedSection'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Hexagonal Shape */}
      <div className="relative w-full">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex items-center justify-center"
        >
          <ChipsScene />
        </motion.div>
      </div>

      {/* Main Text */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight tracking-tight mb-8"
        >
          <span className="text-white">Impossible.</span>{' '}
          <span
            className="italic font-light"
            style={{
              background:
                'linear-gradient(135deg, #00857E, #00A19A, #4DC4BD, #E0F2F1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Maybe.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-48 mt-48 hero-subtext bg-gradient-paragraph-light max-w-4xl mx-auto bg-clip-text bg-no-repeat pb-1 text-fluid-30-56 leading-tight -tracking-4 text-transparent bg-gradient-paragraph-light pb-32 last:mb-32 last:pb-0 md:pb-52 last:md:mb-52 text-left"
        >
          <p>Finally, the future of property is in your hands.</p>

          <p>
            Our centralized open data and property intelligence platform brings
            together all the essential information you need to make smarter and
            faster property decisions.
          </p>

          {/* <p>
            We own and operate leading digital products, including Evernote,
            komoot, Meetup, Remini, StreamYard, and WeTransfer. And we develop
            the technology to power them.
          </p>

          <p>
            Our products have served nearly a billion people across the globe.
            Still, we've only just crossed the starting line on the road to
            building an all-time great company.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-24 mt-48 hero-subtext bg-gradient-paragraph-light max-w-4xl mx-auto bg-clip-text bg-no-repeat pb-1 text-fluid-30-56 leading-tight -tracking-4 text-transparent bg-gradient-paragraph-light pb-32 last:mb-32 last:pb-0 md:pb-52 last:md:mb-52 text-left"
        >
          <h1 className="text-white/50 font-light">OUR MISSION</h1>
          <p>
            The world is accelerating. Technology and AI are rewriting the rules
            of how we live, work, and connect. Entire industries are being
            reshaped — but the UK property market has been left behind. Burdened
            by outdated processes and fragmented systems, it struggles to serve
            the very people it exists for.
          </p>

          <p>
            We believe it’s time for something different. A future where moving
            home is simple, transparent, and stress-free. Where every step is
            digitised, every connection seamless, and every decision faster and
            smarter. By reimagining the entire journey end to end, we’re
            creating a property experience built for the 21st century — one that
            saves time, reduces stress, and empowers consumers like never
            before.
          </p>

          {/* <p>
            We own and operate leading digital products, including Evernote,
            komoot, Meetup, Remini, StreamYard, and WeTransfer. And we develop
            the technology to power them.
          </p>

          <p>
            Our products have served nearly a billion people across the globe.
            Still, we've only just crossed the starting line on the road to
            building an all-time great company.
          </p> */}
        </motion.div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </section>
  )
}
