import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const appScreens = [
  {
    id: 'search',
    title: 'Your data. Your move. Your way',
    features: [
      'At umovingu we are on a mission to equip you with the tools to make buying or selling your home as easy as snapping your fingers.',
      'Democratisation of tools, knowledge and data, will make buying and selling homes: faster, fairer, and accessible for all/ everyone',
    ],
    image: '/mobileAppImages/screen1.png',
  },
  {
    id: 'details',
    title: 'Its you, just moving better',
    features: [
      'We believe the key to a successful move isn’t just technology, it’s knowledge and confidence. Our app gives you the tools, but the real power lies within you.',
      'With the right education and guidance, you are empowered to take control of your own move and ensure property failure is a thing of the past',
    ],
    image: '/mobileAppImages/screen2.png',
  },
  {
    id: 'passport',
    title: 'Impossible? Not anymore.',
    features: [
      'We’ve created a secure digital platform designed to tackle the biggest frustrations in property transactions, from slow sales and lack of transparency to limited buyer or seller knowledge and outdated processes. ',
      'Want all your property documents in one place? umovingu has it. Need real-time updates on the progress of your move? Done. Legal paperwork validated in an instant? Absolutely. Seamless communication between every party involved? Built in. Better yet, everything works togetherseamlessly, so you stay in control without the endless chasing.',
      'umovingu delivers a faster, smarter, more confident move all in the palm of your hand.',
      'Whether you want faster sales, fewer fall-throughs, or total clarity from start to finish, umovingu has you covered.',
    ],
    image: '/mobileAppImages/screen3.png',
  },
]

export default function MobileAppSection() {
  const ref = useRef(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })
  const [activeScreen, setActiveScreen] = useState(0)

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % appScreens.length)
  }

  const prevScreen = () => {
    setActiveScreen(
      (prev) => (prev - 1 + appScreens.length) % appScreens.length
    )
  }

  const getScreenPosition = (index: number) => {
    const diff = index - activeScreen
    if (diff === 0) return { scale: 1, x: 0, z: 20, opacity: 1 } // Active (center)
    if (diff === 1 || diff === -(appScreens.length - 1))
      return { scale: 0.8, x: 200, z: 10, opacity: 0.7 } // Right
    if (diff === -1 || diff === appScreens.length - 1)
      return { scale: 0.8, x: -200, z: 10, opacity: 0.7 } // Left
    return { scale: 0.6, x: diff > 0 ? 400 : -400, z: 0, opacity: 0 } // Hidden
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white via-[#ffffff] to-[#00c9bf] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #00a19a 1px, transparent 1px),
                           linear-gradient(-45deg, #00c9bf 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-start mb-20 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-24 tracking-tight leading-tight text-black">
            OUR PRODUCT{' '}
          </h2>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 tracking-tight leading-tight text-black">
              Powerful Property Intelligence{' '}
              <span className="bg-gradient-to-r from-[#00a19a] via-[#00c4b8] to-[#00a19a] bg-clip-text text-transparent">
                In Your Pocket
              </span>
            </h2>

            <p className="text-lg text-black/90 mx-auto leading-relaxed font-light">
              The current process keeps you waiting and out of control. UMU puts
              the power in your pocket. Always on, always with you, every step
              of your move.
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Phone Mockups Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex justify-center items-center h-[600px]"
          >
            {/* Phone Mockups */}
            {appScreens.map((screen, index) => {
              const position = getScreenPosition(index)
              return (
                <motion.div
                  key={screen.id}
                  animate={{
                    scale: position.scale,
                    x: position.x,
                    zIndex: position.z,
                    opacity: position.opacity,
                  }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute cursor-pointer"
                  onClick={() => setActiveScreen(index)}
                >
                  {/* Phone Frame */}
                  <div className="w-72 h-[580px] bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-[3rem] p-3 shadow-2xl shadow-[#00a19a]/40">
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-white to-gray-50 rounded-[2.5rem] overflow-hidden relative">
                      {/* App Screenshot */}
                      <div className="w-full h-full">
                        <img
                          src={screen.image}
                          alt={screen.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Navigation Controls */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <motion.button
                onClick={prevScreen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </motion.button>

              <motion.button
                onClick={nextScreen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </motion.button>
            </div>
          </motion.div>

          {/* Dynamic Content */}
          <motion.div
            key={`content-${activeScreen}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-black mb-4 leading-tight">
                {appScreens[activeScreen].title}
              </h3>

              <div className="space-y-3">
                {appScreens[activeScreen].features.map(
                  (feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-3 h-3 bg-[#00a19a] rounded-full"></div>
                      <span className="text-black/90 text-lg font-light">
                        {feature}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Discover More Features Link - Creative Animation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-6 border-t border-gray-200/50"
            >
              <a
                href="/product"
                className="group relative inline-flex items-center space-x-3 px-6 py-2 rounded-2xl bg-gradient-to-r from-[#00a19a]/10 to-[#00000]/10 hover:from-[#00a19a]/20 hover:to-[#00c9bf]/20 border border-[#00a19a]/20 hover:border-[#00a19a]/40 transition-all duration-500 overflow-hidden"
              >
                {/* Animated background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Pulsing dot */}
                <motion.div
                  className="w-2 h-2 bg-[#00a19a] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Text with gradient animation */}
                <div className="relative">
                  <motion.span
                    className="text-lg font-medium bg-gradient-to-r from-[#00857E] to-[#000000] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0%', '200%', '0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  >
                    Discover more features
                  </motion.span>
                </div>

                {/* Animated arrows container */}
                <div className="relative flex items-center">
                  {/* Main arrow with continuous movement */}
                  <motion.svg
                    className="w-5 h-5 text-[#00a19a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>

                  {/* Trailing dot */}
                  <motion.div
                    className="absolute -left-2 w-1 h-1 bg-[#00c9bf] rounded-full opacity-0"
                    animate={{
                      opacity: [0, 1, 0],
                      x: [0, 8, 16],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.3,
                      ease: 'easeOut',
                    }}
                  />
                </div>

                {/* Floating particles */}
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-[#00a19a] rounded-full opacity-60"
                  animate={{
                    y: [0, -3, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#00c9bf] rounded-full opacity-60"
                  animate={{
                    y: [0, 2, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </a>
            </motion.div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] hover:from-[#008a85] hover:to-[#00a19a] text-white text-sm px-8 py-4 rounded-xl shadow-xl group font-semibold transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">📱</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-90">Download on the</div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-sm px-8 py-4 rounded-xl transition-all duration-500 group text-black hover:border-[#00a19a]/50 font-semibold"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#00a19a]/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">🤖</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-70">Get it on</div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </div>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center justify-center space-x-4 mt-16"
        >
          {appScreens.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveScreen(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeScreen
                  ? 'bg-white scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
