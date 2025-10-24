import { motion } from 'framer-motion'
import { useRef } from 'react'
import ChipsScene from './ChipsScene'
import AnimatedSection from './AnimatedSection'
import StaggeredAnimatedSection from './StaggeredAnimatedSection'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import ScrollProgressBar from './ScrollProgressBar'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        style={{ paddingBottom: '7rem' }}
      >
        <div className="relative w-full max-w-8xl mx-auto px-6 sm:px-8">
          {/* Main Content Row - Reversed order for mobile */}
          <div className="container flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mx-auto mt-24">
            {/* Text Content - Now first on mobile, left on desktop */}
            <div className="flex-1 text-left order-2 lg:order-1">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight tracking-tight mb-6"
              >
                <span className="text-white">Every</span>{' '}
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
                  move,
                </span>
                <br />
                <span className="text-white">starts with</span>{' '}
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
                  you.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="max-w-lg"
              >
                <p className="text-xl sm:text-2xl text-white/70 font-light leading-relaxed">
                  Making the future of moving, easy, transparent, fast and most
                  importantly, focused around you.
                </p>
              </motion.div>
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
            </div>

            {/* 3D Hexagonal Shape - Now second on mobile, right on desktop */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full lg:w-auto"
            >
              <div className="w-full h-[400px] lg:h-[600px]">
                <ChipsScene />
              </div>
            </motion.div>
          </div>
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

      <section className="w-full px-4 md:px-0">
        <ScrollProgressBar />
        {/* Mission Section - Below the main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-24 mt-48 hero-subtext bg-gradient-paragraph-light max-w-7xl mx-auto bg-clip-text bg-no-repeat leading-tight -tracking-4 text-transparent bg-gradient-paragraph-light pb-32 last:mb-32 last:pb-0 md:pb-52 last:md:mb-52 text-left"
        >
          <h1 className="text-white/50 font-light text-fluid-30-56">
            OUR MISSION
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-fluid-lg-24-40">
              The world is moving faster than ever. Technology and AI are
              transforming the way we live, work and connect. Entire industries
              are being reshaped, but the UK property market has been left
              behind. Burdened by outdated processes and fragmented systems, it
              struggles to serve the very people it exists for, leaving buyers
              and sellers frustrated and out of control.
            </p>

            <p className="text-fluid-lg-24-40">
              We believe it’s time for something better. A future where moving
              home is simple, transparent, and stress-free, where every step is
              digitised, every connection seamless, and every decision smarter.
              By reimagining the entire journey end to end, we’ve created a
              property experience built for the 21st century, one that saves
              time, reduces stress, and empowers consumers like never before.
            </p>

            <p className="text-fluid-lg-24-40">
              How? By getting you sale-ready now, not next month and not next
              year. Why wait until you move to prepare, when you can take
              control today? Be move-ready before the market even knows you’re
              coming. UMU, where u are sale-ready now, not someday.
            </p>
          </div>

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
      </section>
    </>
  )
}
