import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  Play,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  Users,
  BarChart3,
} from 'lucide-react'

const pillars = [
  {
    id: 1,
    title: 'Radical Transparency',
    subtitle: 'Data sharing between stakeholders promotes full transparency',
    type: 'image',
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Shield,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Faster Moves',
    subtitle: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    type: 'video',
    videoPlaceholder: true,
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Consumer Power',
    subtitle: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    type: 'image',
    image:
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Users,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Smart Savings',
    subtitle: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    type: 'video',
    videoPlaceholder: true,
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Learn & Earn',
    subtitle: 'Earn rewards when you learn with our AI powered education hub',
    type: 'image',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: BarChart3,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Property Intelligence',
    subtitle: 'Advanced analytics and market insights for smarter decisions',
    type: 'video',
    videoPlaceholder: true,
    icon: Building2,
    gradient: 'from-teal-500 to-blue-500',
  },
]

export default function PillarsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // **FADE IN/OUT ANIMATION CODE - Apply this pattern throughout the app**
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  // const scale = useTransform(
  //   scrollYProgress,
  //   [0, 0.2, 0.8, 1],
  //   [0.8, 1, 1, 0.8]
  // )

  // Horizontal scroll transform
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%'])

  return (
    <motion.section
      ref={containerRef}
      // style={{ opacity, scale }} // **FADE ANIMATION APPLIED HERE**
      className="relative py-24 bg-gradient-to-b from-[#28B0A9] via-gray-50 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #00a19a 1px, transparent 1px),
                           linear-gradient(-45deg,  #00c9bf 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-start mb-20 w-full max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight bg-gradient-to-r from-[#000000] via-[#68f1ebff] to-[#ffffff] bg-clip-text text-transparent">
            OUR PILLARS
          </h2>

          <p className="text-black text-18 mx-auto leading-relaxed font-light">
            The core principles that drive our mission to revolutionize property
            intelligence and empower smarter decision-making.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative h-[800px] overflow-hidden">
          {/* Scattered Cards Layout */}
          <motion.div
            ref={scrollRef}
            style={{ x }}
            className="absolute inset-0 w-[200%]"
          >
            {pillars.map((pillar, index) => {
              // Define positions for scattered layout
              const positions = [
                { top: '10%', left: '15%', rotation: 0, zIndex: 10 },
                { top: '25%', left: '20%', rotation: 0, zIndex: 20 },
                { top: '5%', left: '35%', rotation: 0, zIndex: 15 },
                { top: '35%', left: '50%', rotation: 0, zIndex: 25 },
                { top: '15%', left: '65%', rotation: 0, zIndex: 18 },
                { top: '45%', left: '80%', rotation: 0, zIndex: 22 },
              ]

              const position = positions[index]

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 100, rotate: 0 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          rotate: position.rotation,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + index * 0.15,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="absolute group cursor-pointer"
                  style={{
                    top: position.top,
                    left: position.left,
                    zIndex: position.zIndex,
                  }}
                >
                  <motion.div
                    whileHover={{
                      y: -16,
                      scale: 1.05,
                      rotate: 0,
                      zIndex: 50,
                    }}
                    className="w-72 h-[30rem] premium-card rounded-3xl glassmorphism hover:bg-card/95 hover:border-[#00a19a]/40 overflow-hidden will-change-transform relative shadow-2xl"
                  >
                    {/* Media Container */}
                    <div className="absolute inset-0 z-0">
                      {pillar.type === 'image' ? (
                        <motion.img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          whileHover={{ scale: 1.1 }}
                        />
                      ) : (
                        <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
                          {/* Video Placeholder with Animation */}
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className={`w-16 h-16 bg-gradient-to-r ${pillar.gradient} rounded-full flex items-center justify-center shadow-2xl`}
                          >
                            <Play className="h-6 w-6 text-white ml-1" />
                          </motion.div>

                          {/* Animated Particles */}
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
                              animate={{
                                x: [
                                  Math.cos(i * 0.8) * 60,
                                  Math.cos(i * 0.8 + Math.PI) * 60,
                                  Math.cos(i * 0.8) * 60,
                                ],
                                y: [
                                  Math.sin(i * 0.8) * 60,
                                  Math.sin(i * 0.8 + Math.PI) * 60,
                                  Math.sin(i * 0.8) * 60,
                                ],
                                opacity: [0.3, 0.8, 0.3],
                              }}
                              transition={{
                                duration: 4 + i * 0.2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 8 }}
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${pillar.gradient} shadow-lg group-hover:shadow-xl transition-all duration-500`}
                      >
                        <pillar.icon className="h-5 w-5 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground group-hover:text-[#00a19a] transition-colors duration-300">
                        {pillar.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Scroll down to explore our pillars
          </p>
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center space-x-2 text-[#00a19a]"
          >
            <span className="text-sm font-medium">Scroll to see more</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#00a19a] rounded-full"></div>
              <div className="w-2 h-2 bg-[#00a19a]/60 rounded-full"></div>
              <div className="w-2 h-2 bg-[#00a19a]/30 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
