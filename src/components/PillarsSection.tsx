import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
} from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  Play,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  Users,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import ScrollProgressBar from './ScrollProgressBar'

const pillars = [
  {
    id: 1,
    title: 'Consumer Power',
    subtitle: 'Shifting control from the industry to you.',
    type: 'video',
    video: '/pillars/ConsumerPowerLicensed.mp4',
    videoPlaceholder: true,
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Radical Transparency',
    subtitle: 'No hidden steps, no surprises.',
    type: 'video',
    video: '/pillars/RadicalTransparencyLicensed.mp4',
    videoPlaceholder: true,
    icon: Shield,
    gradient: 'from-blue-500 to-cyan-500',
  },

  {
    id: 3,
    title: 'Faster Moves',
    subtitle: 'Because moving faster means living sooner.',
    type: 'video',
    video: '/pillars/FasterMovesPreview.mp4',
    videoPlaceholder: true,
    icon: Users,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'True Control',
    subtitle:
      'Manage your move your way with tools that put you in the driver’s seat.',
    type: 'video',
    video: '/pillars/TrueControlPreview.mp4',
    videoPlaceholder: true,
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Smart Savings',
    subtitle:
      'Our tech helps you save on what matters most - time, money and peace of mind.',
    type: 'video',
    video: '/pillars/SmartSavingsPreveiw.mp4',
    videoPlaceholder: true,
    icon: BarChart3,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Effortless Learning',
    subtitle: 'Learning made simple with our AI powered education hub.',
    type: 'video',
    video: '/pillars/LearningLicensed.mp4',
    videoPlaceholder: true,
    icon: Building2,
    gradient: 'from-teal-500 to-blue-500',
  },
]

export default function PillarsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const [currentPosition, setCurrentPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Calculate how many pages we have (3 cards per page)
  const cardsPerPage = 3
  const totalPages = Math.ceil(pillars.length / cardsPerPage)

  const handleCardClick = (direction: 'left' | 'right') => {
    if (isDragging) return

    setIsDragging(true)
    const newPosition =
      direction === 'right'
        ? (currentPosition + 1) % totalPages
        : (currentPosition - 1 + totalPages) % totalPages

    setCurrentPosition(newPosition)

    setTimeout(() => setIsDragging(false), 500)
  }

  const handleDotClick = (position: number) => {
    setCurrentPosition(position)
  }

  const nextCard = () => handleCardClick('right')
  const prevCard = () => handleCardClick('left')

  // Get current page cards
  const startIndex = currentPosition * cardsPerPage
  const currentPageCards = pillars.slice(startIndex, startIndex + cardsPerPage)

  return (
    <>
      <ScrollProgressBar />
      <motion.section
        ref={containerRef}
        className="relative py-24 pt-48 bg-gradient-to-b from-[#28B0A9] via-gray-50 to-white overflow-hidden light-bg-section"
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
            className="text-start mb-20 w-full max-w-7xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight bg-gradient-to-r from-[#000000] to-[#000000] bg-clip-text text-transparent text-heading">
              OUR PILLARS
            </h1>

            <div className="max-w-4xl mx-auto mt-16">
              <p className="mx-auto leading-relaxed font-light text-2xl sm:text-3xl lg:text-4xl font-light mb-8 tracking-tight leading-tight text-black">
                At our core, we believe in empowering people to take charge of
                their property journey, with the tools, education, and support
                to become sale-ready on their own terms. No more waiting for
                someone else to start your journey.
              </p>
            </div>
          </motion.div>

          {/* Cards Container */}
          <div className="relative h-[600px]">
            {/* Current Page Cards */}
            <div className="grid grid-cols-3 gap-8 justify-items-center">
              {currentPageCards.map((pillar, index) => {
                const positions = [
                  { top: '5%', rotation: -0, zIndex: 10 },
                  { top: '5%', rotation: 0, zIndex: 20 },
                  { top: '5%', rotation: -0, zIndex: 15 },
                ]

                const position = positions[index]

                return (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 100, rotate: position.rotation }}
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
                    className="relative group cursor-pointer"
                    style={{
                      top: position.top,
                      zIndex: position.zIndex,
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick('right')
                    }}
                  >
                    <motion.div
                      whileHover={{
                        y: -16,
                        scale: 1.05,
                        rotate: 0,
                        zIndex: 50,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-80 h-[30rem] premium-card rounded-3xl card-container bg-[#e0dee0] hover:border-[#00a19a]/40 overflow-hidden will-change-transform relative shadow-2xl"
                    >
                      {/* Media Container */}
                      <div className="absolute inset-0 z-0">
                        {pillar.type === 'image' ? (
                          <div className="relative h-full w-full">
                            <div className="absolute bottom-0 left-0 h-2/3 w-4/5 justify-end">
                              <motion.img
                                src={pillar.video}
                                alt={pillar.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
                            {/* Video Placeholder */}
                            <motion.div className="relative w-full h-full flex items-center justify-center">
                              <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                              >
                                <source src={pillar.video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
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
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div> */}
                      </div>

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-start p-6">
                        {/* Icon */}
                        {/* <motion.div
                        whileHover={{ scale: 1.1, rotate: 8 }}
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${pillar.gradient} shadow-lg group-hover:shadow-xl transition-all duration-500`}
                      >
                        <pillar.icon className="h-5 w-5 text-white" />
                      </motion.div> */}

                        {/* Title */}
                        <h3
                          className={`text-2xl font-bold ${
                            pillar.type === 'video'
                              ? 'text-white'
                              : 'text-black'
                          }  transition-colors duration-300 mt-2`}
                        >
                          {pillar.title}
                        </h3>

                        {/* Subtitle */}
                        <p
                          className={`text-lg ${
                            pillar.type === 'video'
                              ? 'text-white'
                              : 'text-black'
                          }  font-medium leading-relaxed mt-2`}
                        >
                          {pillar.subtitle}
                        </p>

                        {/* Click Hint */}
                        {/* <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                        <span className="text-xs text-white/60">
                          Click to navigate
                        </span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-white/60"
                        >
                          →
                        </motion.div>
                      </div> */}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevCard}
              className="p-3 rounded-full bg-[#00a19a] text-white shadow-lg hover:bg-[#00857E] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dot Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPosition
                      ? 'bg-[#00a19a] scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextCard}
              className="p-3 rounded-full bg-[#00a19a] text-white shadow-lg hover:bg-[#00857E] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.section>
    </>
  )
}
