import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function PartnersSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const partners = [
    { name: 'RICS', logo: '/partners/rics.png' },
    {
      name: 'Ministry of Housing',
      logo: '/partners/ministeryOfHousing.png',
    },
    { name: 'CFIT', logo: '/partners/cfit.png' },
    {
      name: 'Open Property Data',
      logo: '/partners/open-properties-logo.png',
    },
    { name: 'Coventry University', logo: '/partners/coventry.svg' },
    {
      name: 'Warwick Business School',
      logo: '/partners/warwikBusinessSchool.svg',
    },
    {
      name: 'University of Warwick',
      logo: '/partners/warwikUniversity.svg',
    },
    {
      name: 'Land Registry',
      logo: '/partners/HMLR_logo.png',
    },
    {
      name: 'Department of Science and Digital',
      logo: '/partners/dept_of_science_andDigital.webp',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden  light-bg-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,161,154,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,201,191,0.03),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-bold tracking-[0.3em] text-[#F4A460] mb-6 uppercase"
          >
            Associations / Members
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Who we work with
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto mb-4 leading-relaxed"
          >
            We operate at the heart of the property data network. Our close
            collaborations span from data sources to end-users, and extend to
            the framework providers where we hold active memberships. This
            360-degree engagement with the ecosystem, including key government
            bodies, guarantees that our guidance is not only best-practice but
            also future-proof
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Government departments and other bodies we engage with:
          </motion.p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex"
          >
            <motion.div
              animate={{
                x: [0, -1800],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
              className="flex gap-12 items-center pr-12"
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group relative flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-6 rounded-xl bg-none transition-all duration-300 w-[200px]"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-auto max-w-[180px] object-contain group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
