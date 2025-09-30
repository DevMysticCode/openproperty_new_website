import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  Users,
  Shield,
  Zap,
  BookOpen,
  Star,
  MapPin,
  FileText,
  Bell,
  Brain,
  Award,
  Heart,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import { Button } from './ui/button'
import ChipsScene from './ChipsScene'
import React from 'react'

const features = [
  {
    icon: FileText,
    title: 'Property Hub',
    subtitle: 'Your material information command centre',
    description:
      'Get your home transaction-ready upfront, preventing unnecessary fall-throughs and weeks of wasted time and money.',
    highlights: [
      'Document Storage - All property documents stored in app',
      'Journey Mapping - Visual representation of steps needed',
      'Progress Trackers - Monitor progress on different forms',
      'Point Reward System - Incentivize getting sale ready upfront',
      'Collaborate with your partner/cohabitant',
      'AI Document Automation - Documents verified via AI',
    ],
    gradient: 'from-[#00A19A] to-[#00c9bf]',
  },
  {
    icon: MapPin,
    title: 'Smarter Moves',
    subtitle: 'Property information that gives you confidence',
    description:
      'In-depth information about crime rates, schools, transport links integrated into our explore setting.',
    highlights: [
      'Favourite Properties - Save and track properties',
      'Tap Owner - Connect with property owners directly',
      'Register Interest - Express interest seamlessly',
      'Access Passports - View property documentation',
    ],
    gradient: 'from-[#008a85] to-[#00A19A]',
  },
  {
    icon: Bell,
    title: 'Transparent Transactions',
    subtitle: 'Share property data across the whole transaction',
    description:
      'Push notifications and chain visibility with open data sharing replaces current hidden process.',
    highlights: [
      'Personalised reminders for progress tracking',
      'Everyone sees the same information',
      'Reduces mistrust, duplication, and delays',
      'Complete transparency throughout the process',
    ],
    gradient: 'from-[#00c4b8] to-[#00e6d6]',
  },
  {
    icon: Brain,
    title: 'Personalised Tools',
    subtitle: 'Robust, feature-rich workspaces',
    description:
      "AI anticipates bottlenecks and automates repetitive tasks, accelerating progress in ways traditional platforms can't.",
    highlights: [
      'Predictive analytics for transaction bottlenecks',
      'Automated repetitive task handling',
      'Smart document processing',
      'Intelligent workflow optimization',
    ],
    gradient: 'from-[#00A19A] to-[#007a75]',
  },
  {
    icon: BookOpen,
    title: 'Rewards',
    subtitle: 'Populate TA forms with ease',
    description:
      'Seamlessly built into the process, our free bite-sized videos simplify legal forms and provide clear guidance.',
    highlights: [
      'Bite-sized educational videos',
      'Clear guidance on legal forms',
      'Integrated into user journey',
      'Demystify property transactions',
    ],
    gradient: 'from-[#00c9bf] to-[#00A19A]',
  },
]

const differentiators = [
  {
    title: 'Innovation-Predicated Product',
    description:
      'Our product is predicated on innovation, not preserving profitable problems.',
  },
  {
    title: 'Interoperable Ecosystem',
    description:
      'Buyers, sellers, conveyancers, solicitors, stakeholders are united in our ecosystem.',
  },
  {
    title: 'Reimagining Transactions',
    description:
      "We're developing solutions to the market's systemic problems rather than digitalizing them.",
  },
  {
    title: 'Consumer First Approach',
    description:
      'Consumer first, not industry first - consumers control their own journey.',
  },
  {
    title: 'Pre-Market Readiness',
    description:
      'Focusing on pre-market readiness with upfront document upload.',
  },
  {
    title: 'Educational Excellence',
    description: 'Our educational resources are next to none in the industry.',
  },
]

export default function ProductPage() {
  const heroRef = useRef(null)
  const platformRef = useRef(null)
  const differentiatorRef = useRef(null)
  const featuresRef = useRef(null)
  const [activeFeature, setActiveFeature] = useState(0)

  const [activeTab, setActiveTab] = useState(0)

  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const isPlatformInView = useInView(platformRef, {
    once: true,
    margin: '-100px',
  })
  const isDifferentiatorInView = useInView(differentiatorRef, {
    once: true,
    margin: '-100px',
  })
  const isFeaturesInView = useInView(featuresRef, {
    once: true,
    margin: '-100px',
  })

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Animated Logo */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-20"
      >
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex items-center justify-center w-full"
        >
          <ChipsScene
            src="https://my.spline.design/earthdayandnight-su7zroT2N8ApljcTl8Fyf8xb/"
            height="100vh"
          />
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          className="absolute text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight tracking-tight mb-8"
          >
            <span className="text-white">Your</span>{' '}
            <span
              className="italic font-light"
              style={{
                background:
                  'linear-gradient(135deg, #00857E, #00A19A, #4DC4BD, #E0F2F1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingLeft: '8px',
              }}
            >
              Next Move.
            </span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight mb-8"
          >
            <span className="text-white">In The Palm Of</span>{' '}
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
              Your Hand.
            </span>
          </motion.h1>
        </motion.div>
      </section>

      {/* UMU Platform Section */}
      <section
        ref={platformRef}
        className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      >
        <img
          alt="Background glows"
          loading="lazy"
          decoding="async"
          className="absolute left-0 top-0 z-10 h-full w-full object-fill"
          style={{ color: 'transparent' }}
          src="/Gradient_Background.png"
        />
        {/* Gradient overlay */}
        <div
          className="absolute left-0 top-0 z-10 h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(0, 0, 0) 0%, #FFFFFF00 35.44%)',
          }}
        />{' '}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isPlatformInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-start mb-16"
          >
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-start align-top">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isPlatformInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="space-y-12"
              >
                <motion.div>
                  <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-8 text-white tracking-tight leading-tight text-foreground">
                    UMU{' '}
                    <span className="bg-gradient-to-r from-[#00A19A] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
                      Platform
                    </span>
                  </h2>

                  <p className="text-3xl text-white/90 max-w-7xl mx-auto leading-relaxed font-light mb-12">
                    State of the art features and technology streamlined into
                    one cutting-edge platform, connecting, all the parties in
                    the journey, with you at the centre. Experience the future
                    of property transactions today.
                  </p>
                </motion.div>

                {/* Add your left side content here */}
                {/* <div className="text-white">
                  <h3 className="text-2xl font-semibold mb-4">
                    Your Left Content
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Add your text, features, or other content here that should
                    appear on the left side.
                  </p>
                </div> */}

                {/* WhatsApp CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isPlatformInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="mt-12"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#00A19A] via-[#00c4b8] to-[#00e6d6] hover:from-[#00e6d6] hover:via-[#00c4b8] hover:to-[#00A19A] text-white text-lg px-8 py-4 rounded-full shadow-xl font-semibold transition-all duration-300"
                  >
                    <Users className="mr-3 h-5 w-5" />
                    Join our WhatsApp community for sneak peeks
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isPlatformInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-6 shadow-2xl">
                  <img
                    alt="OpenProperty"
                    width={1440}
                    height={840}
                    decoding="async"
                    className="relative rounded-2xl w-full object-cover"
                    src="/products/product_img.webp"
                    srcSet="/products/product_img.webp"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section
        ref={differentiatorRef}
        className="relative py-24 bg-gradient-to-b from-[#28B0A9] to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isDifferentiatorInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                {/* Browser Header */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 ml-4">
                    <span className="text-sm text-gray-600">
                      OpenProperty Dashboard
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      Property Setup Progress
                    </span>
                    <span className="text-sm text-[#00A19A] font-bold">
                      85%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#00A19A] to-[#00c9bf] h-3 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#00A19A]/10 to-[#00c9bf]/10 rounded-xl p-4">
                    <div className="w-8 h-8 bg-[#00A19A] rounded-lg mb-3"></div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      Documents
                    </h4>
                    <p className="text-gray-600 text-xs">12/15 Complete</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg mb-3"></div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      Notifications
                    </h4>
                    <p className="text-gray-600 text-xs">3 New Updates</p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-gradient-to-r from-[#00A19A]/5 to-[#00c9bf]/5 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        Property Passport
                      </h4>
                      <p className="text-gray-600 text-xs">Ready for sharing</p>
                    </div>
                    <div className="w-12 h-12 bg-[#00A19A] rounded-xl flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isDifferentiatorInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight text-black">
                  What makes us{' '}
                  <span className="text-black/90">different?</span>
                </h2>
              </div>

              <div className="space-y-6">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isDifferentiatorInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.7 + index * 0.1,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-[#00A19A] rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2 group-hover:text-black/90 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-black/80 leading-relaxed font-light text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="relative py-24 bg-gradient-to-br from-white to-white overflow-hidden"
      >
        <div className="max-w-8xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-20 "
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight text-black">
              Robust, feature-rich{' '}
              <span className="bg-gradient-to-r from-[#00A19A] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
                workspaces
              </span>
            </h2>
          </motion.div>

          {/* Single Feature Carousel */}
          <div className="gap-16 items-center max-w-7xl mx-auto">
            {/* Left Side - Interactive Visual Container */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isFeaturesInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 shadow-2xl overflow-hidden"
              >
                {/* Gradient Border */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#00A19A] via-[#00c9bf] to-[#00e6d6] rounded-3xl p-1">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl"></div>
                </div> */}

                {/* Content */}
                <div className="relative z-10">
                  {/* Top Navigation Tabs - Moved above the row */}
                  <div className="flex space-x-4 mb-8 justify-center">
                    {features.map((feature, tabIndex) => (
                      <button
                        key={feature.title}
                        onClick={() => setActiveFeature(tabIndex)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          tabIndex === activeFeature
                            ? 'bg-[#00A19A] text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 cursor-pointer'
                        }`}
                      >
                        {feature.title}
                      </button>
                    ))}
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Content */}
                    <div>
                      {/* Dynamic Feature Visual */}
                      <motion.div
                        key={`feature-visual-${activeFeature}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                      >
                        {/* Mock Phone Interface */}
                        <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl p-1 mb-6 max-w-xs">
                          <div className="bg-black rounded-2xl p-4">
                            <div className="text-white text-sm mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <span>9:41</span>
                                <div className="flex space-x-1">
                                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                                  <div className="w-1 h-2 bg-white rounded-sm"></div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              {features[activeFeature].highlights
                                .slice(0, 3)
                                .map((highlight, index) => (
                                  <div
                                    key={index}
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3"
                                  >
                                    <div className="flex items-center space-x-2 mb-2">
                                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                        {React.createElement(
                                          features[activeFeature].icon,
                                          {
                                            className:
                                              'h-3 w-3 text-purple-500',
                                          }
                                        )}
                                      </div>
                                      <span className="text-white text-xs font-medium">
                                        OpenProperty
                                      </span>
                                    </div>
                                    <p className="text-white text-xs">
                                      {highlight}
                                    </p>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Navigation Arrows */}
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={prevFeature}
                          className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                        >
                          <span className="text-white text-sm">←</span>
                        </button>
                        <button
                          onClick={nextFeature}
                          className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                        >
                          <span className="text-white text-sm">→</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Column - Dynamic Feature Content */}
                    <motion.div
                      key={`feature-content-${activeFeature}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                      className="space-y-6"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 8 }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${features[activeFeature].gradient} shadow-lg`}
                      >
                        {React.createElement(features[activeFeature].icon, {
                          className: 'h-8 w-8 text-white',
                        })}
                      </motion.div>

                      <div>
                        <h3 className="text-2xl font-bold mb-2 leading-tight text-white">
                          {features[activeFeature].title}
                        </h3>

                        <p className="text-lg font-semibold text-[#00A19A] mb-4">
                          {features[activeFeature].subtitle}
                        </p>

                        <p className="text-gray-300 mb-6 leading-relaxed font-light">
                          {features[activeFeature].description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-3">
                          {features[activeFeature].highlights
                            .slice(0, 4)
                            .map((highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-[#00A19A] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-300 font-light">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Feature Navigation Indicators */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center justify-center space-x-4 mt-16"
          >
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeFeature
                    ? 'bg-[#00A19A] scale-125'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </motion.div> */}
        </div>
      </section>

      <Footer />
    </div>
  )
}
