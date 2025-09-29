import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Search,
  Chrome as Home,
  FileText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
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
    mockup: {
      header: 'Explore',
      type: 'search',
      searchPlaceholder: 'City, area or postcode',
      properties: [
        {
          title: 'Seller Financed',
          subtitle: 'Find seller financed properties',
          color: 'bg-orange-100',
          icon: '🏠',
        },
        {
          title: 'Buyers Agent',
          subtitle: 'Connect with expert agents',
          color: 'bg-blue-100',
          icon: '👥',
        },
      ],
      recommendations: [
        {
          image:
            'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
          title: 'Modern Villa',
          location: 'Beverly Hills',
        },
      ],
    },
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
    mockup: {
      header: 'Property Details',
      type: 'details',
      address: '57 Riverside Walk',
      price: '£375,000',
      details: {
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1250,
        type: 'Apartment',
      },
      features: ['No Fees!', 'Parking', 'Garden', 'Furnished'],
      description: 'Beautiful riverside apartment with stunning views...',
    },
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
    mockup: {
      header: 'Property Passport Available',
      type: 'passport',
      status: 'Available',
      description:
        'This property is PPS Compliant. Our property information and reports are ready to view.',
      actions: [
        'Access property information',
        'Download comprehensive reports',
        'Get an ownership certificate',
        'Connect to financial services',
      ],
    },
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

  const renderMockupContent = (screen: (typeof appScreens)[0]) => {
    const { mockup } = screen

    if (mockup.type === 'search') {
      return (
        <div className="p-4 space-y-4 h-full bg-gray-50">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {mockup.header}
            </h3>
            <div className="w-12 h-12 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] rounded-full mx-auto mb-4 flex items-center justify-center">
              <Search className="h-6 w-6 text-white" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">Property Search</h4>
            <p className="text-sm text-gray-600 mb-3">
              Try searching for 'Property Passport' to get started
            </p>
            <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
              <input
                type="text"
                placeholder={mockup.searchPlaceholder}
                className="w-full text-sm text-gray-600 bg-transparent outline-none"
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {mockup.properties?.map((property, idx) => (
              <div key={idx} className={`${property.color} rounded-lg p-3`}>
                <div className="text-2xl mb-2">{property.icon}</div>
                <h5 className="font-semibold text-sm text-gray-900">
                  {property.title}
                </h5>
                <p className="text-xs text-gray-600">{property.subtitle}</p>
                <button className="mt-2 text-xs bg-[#00a19a] text-white px-3 py-1 rounded">
                  Start
                </button>
              </div>
            ))}
          </div>

          <div>
            <h5 className="font-semibold text-sm text-gray-900 mb-2">
              For You
            </h5>
            <p className="text-xs text-gray-600 mb-2">
              Our top picks accurately selected based on your profile
            </p>
            {mockup.recommendations?.map((rec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm"
              >
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-16 object-cover rounded mb-2"
                />
                <h6 className="font-medium text-xs text-gray-900">
                  {rec.title}
                </h6>
                <p className="text-xs text-gray-600">{rec.location}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (mockup.type === 'details') {
      return (
        <div className="p-4 space-y-4 h-full bg-gray-50">
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-600">
              {mockup.header}
            </h3>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Property"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h4 className="font-bold text-lg text-gray-900">
                {mockup.address}
              </h4>
              <p className="text-sm text-gray-600 mb-2">{mockup.price}</p>

              <div className="flex space-x-4 text-xs text-gray-600 mb-3">
                <span>🛏️ {mockup.details?.bedrooms} bed</span>
                <span>🚿 {mockup.details?.bathrooms} bath</span>
                <span>📐 {mockup.details?.sqft} sqft</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {mockup.features?.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#00a19a] text-white px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-around bg-white rounded-lg p-3 shadow-sm">
            <button className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#00a19a] rounded-full flex items-center justify-center mb-1">
                <span className="text-white text-xs">📞</span>
              </div>
              <span className="text-xs text-gray-600">Call</span>
            </button>
            <button className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#00a19a] rounded-full flex items-center justify-center mb-1">
                <span className="text-white text-xs">💬</span>
              </div>
              <span className="text-xs text-gray-600">Message</span>
            </button>
            <button className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#00a19a] rounded-full flex items-center justify-center mb-1">
                <span className="text-white text-xs">❤️</span>
              </div>
              <span className="text-xs text-gray-600">Save</span>
            </button>
          </div>
        </div>
      )
    }

    if (mockup.type === 'passport') {
      return (
        <div className="p-4 space-y-4 h-full bg-gray-50">
          <div className="flex items-center justify-between">
            <button className="text-[#00a19a]">← Back</button>
            <h3 className="text-sm font-medium text-gray-900">
              {mockup.header}
            </h3>
            <div></div>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#00a19a] rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Home className="h-10 w-10 text-white" />
            </div>
            <p className="text-sm text-gray-600 mb-6">{mockup.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-3">
              Why Unlock This Passport?
            </h4>
            <div className="space-y-3">
              {mockup.actions?.map((action, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#00a19a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">{action}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-[#00a19a] text-white py-3 rounded-lg font-semibold">
            Unlock Passport
          </button>
        </div>
      )
    }

    return null
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#00a19a]/10 border border-[#00a19a]/20 mb-8 glassmorphism"
          >
            <span className="text-[#00a19a] font-semibold text-sm tracking-wide uppercase">
              Mobile Experience
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight text-white">
            Powerful Property Intelligence,{' '}
            <span className="bg-gradient-to-r from-[#00a19a] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
              In Your Pocket
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Take the full power of OpenProperty with you. Make informed
            decisions on the go with our beautifully designed mobile experience.
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
                      {/* Status Bar */}
                      <div className="h-10 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] flex items-center justify-between px-6">
                        <span className="text-white text-sm font-medium">
                          9:41
                        </span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-white/80 rounded-sm"></div>
                          <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                          <div className="w-4 h-2 bg-white/40 rounded-sm"></div>
                        </div>
                      </div>

                      {/* Dynamic App Content */}
                      {renderMockupContent(screen)}
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
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {appScreens[activeScreen].title}
              </h3>
              <p className="text-base text-gray-300 mb-6 leading-relaxed font-light">
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
                      <span className="text-gray-300 text-sm font-light">
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
                  className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-sm px-8 py-4 rounded-xl transition-all duration-500 group text-white hover:border-[#00a19a]/50 font-semibold"
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
                  ? 'bg-[#00a19a] scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
