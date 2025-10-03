import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const appScreens = [
  {
    id: 'search',
    title: 'Property Search',
    description:
      'Discover properties with our intelligent search engine. Filter by location, price, size, and get instant AI-powered recommendations tailored to your investment goals.',
    features: [
      'AI-powered search',
      'Advanced filters',
      'Instant results',
      'Location intelligence',
    ],
    image: '/mobileAppImages/screen1.png',
  },
  {
    id: 'details',
    title: 'Property Details',
    description:
      'Get comprehensive property insights with detailed analytics, market comparisons, and investment potential analysis. Make informed decisions with verified data.',
    features: [
      'Detailed analytics',
      'Market comparisons',
      'Investment metrics',
      'Verified data',
    ],
    image: '/mobileAppImages/screen2.png',
  },
  {
    id: 'passport',
    title: 'Property Passport',
    description:
      'Access comprehensive property documentation and reports. Get instant property passports with all essential information in one secure, shareable document.',
    features: [
      'Digital documentation',
      'Instant reports',
      'Secure sharing',
      'Complete history',
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
          className="text-start mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-24 tracking-tight leading-tight text-black">
            OUR PRODUCT{' '}
          </h2>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 tracking-tight leading-tight text-black">
            Powerful Property Intelligence{' '}
            <span className="bg-gradient-to-r from-[#00a19a] via-[#00c4b8] to-[#00a19a] bg-clip-text text-transparent">
              In Your Pocket
            </span>
          </h2>

          <p className="text-lg text-black/90 mx-auto leading-relaxed font-light">
            The current process keeps you waiting and out of control. UMU puts
            the power in your pocket. Always on, always with you, every step of
            your move.
          </p>
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
              <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                {appScreens[activeScreen].title}
              </h3>
              <p className="text-base text-black/90 mb-6 leading-relaxed font-light">
                {appScreens[activeScreen].description}
              </p>

              <div className="space-y-3">
                {appScreens[activeScreen].features.map(
                  (feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-3 h-3 bg-[#00a19a] rounded-full"></div>
                      <span className="text-black/90 text-sm font-light">
                        {feature}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

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
