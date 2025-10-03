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
    title: 'Your home`s, second home',
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
    image: '/products/PropertyHub.png',
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
    image: '/products/SmarterMoves.png',
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
    image: '/products/TransparentTransactions.png',
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
    image: '/products/PersonalisedTools.png',
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
    image: '/products/PropertyHub.png',
  },
]

const differentiators = [
  {
    title: 'Innovation at the core',
    description:
      'Built with cutting-edge technology designed to fix the failures of today’s property process, making the whole process faster, smarter and simpler.',
  },
  {
    title: 'Seamless interoperability ',
    description:
      'Buyers, sellers, conveyancers, solicitors, stakeholders are united in our ecosystem.',
  },
  {
    title: 'One-click data sharing',
    description:
      "We're developing solutions to the market's systemic problems rather than digitalizing them.",
  },
  {
    title: 'Your data, saved once',
    description:
      "We're developing solutions to the market's systemic problems rather than digitalizing them.",
  },
  {
    title: 'AI-powered intelligence',
    description:
      'Smart tools that verify legal documents, flag risks, and answer queries in real time',
  },
  {
    title: 'Made personal',
    description:
      'Features tailored to your property journey, like progress updates, favourited properties, and reminders that keep you one step ahead.',
  },
  {
    title: 'Unified platform',
    description:
      'No more juggling different systems or paperwork, everything you need for your move, brought together in one sleek, easy-to-use app.',
  },
  {
    title: 'Secure by design',
    description:
      'Your data is protected with the highest standards, giving you confidence and peace of mind at every step.',
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
                    The filing cabinet your home has{' '}
                    <span className="bg-gradient-to-r from-[#00A19A] via-[#585757] to-[#000000] bg-clip-text text-transparent">
                      always wanted!
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
                    src="/products/UMUPlatform.png"
                    srcSet="/products/UMUPlatform.png"
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
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-16 tracking-tight leading-tight text-black text-center">
              What makes us{' '}
              <span className="text-black/90 italic">different?</span>
            </h2>
          </div>
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
              <img
                alt="OpenProperty"
                width={1440}
                height={840}
                decoding="async"
                className="relative rounded-2xl w-full object-cover"
                src="/products/differences.png"
                srcSet="/products/differences.png"
              />
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
                      {/* <ul className="list-disc list-inside mt-2 space-y-1 text-black/80 leading-relaxed font-light text-sm">
                        {item.subheading1 && <li>{item.subheading1}</li>}
                        {item.subheading2 && <li>{item.subheading2}</li>}
                        {item.subheading3 && <li>{item.subheading3}</li>}
                      </ul> */}
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
            animate={
              isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight text-black">
              Intelligent tools to{' '}
              <span className="bg-gradient-to-r from-[#00A19A] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
                power your move
              </span>
            </h2>
          </motion.div>

          {/* Single Feature Carousel */}
          <div className="gap-16 items-center max-w-7xl mx-auto">
            {/* Left Side - Interactive Visual Container */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                isFeaturesInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -100 }
              }
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
                {/* Content */}
                <div className="relative z-10">
                  {/* Top Navigation Tabs */}
                  <div className="flex space-x-4 mb-8 justify-center flex-wrap gap-2">
                    {features.map((feature, tabIndex) => (
                      <button
                        key={feature.title}
                        onClick={() => setActiveFeature(tabIndex)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          tabIndex === activeFeature
                            ? 'bg-[#00A19A] text-white shadow-lg'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 cursor-pointer'
                        }`}
                      >
                        {feature.title}
                      </button>
                    ))}
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Dynamic Feature Visual */}
                    <div>
                      <motion.div
                        key={`feature-visual-${activeFeature}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="relative"
                      >
                        <img
                          alt={features[activeFeature].title}
                          width={600}
                          height={400}
                          decoding="async"
                          className="relative rounded-2xl w-full h-auto object-cover shadow-lg"
                          src={features[activeFeature].image}
                          srcSet={features[activeFeature].image}
                        />
                        {/* Image Label */}
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-xs text-white font-medium">
                            {features[activeFeature].title} Preview
                          </span>
                        </div>
                      </motion.div>

                      {/* Navigation Arrows */}
                      <div className="flex justify-center space-x-4 mt-6">
                        <button
                          onClick={prevFeature}
                          className="w-12 h-12 bg-gray-700 hover:bg-[#00A19A] rounded-full flex items-center justify-center transition-all duration-300 group"
                        >
                          <span className="text-white text-lg group-hover:scale-110 transition-transform">
                            ←
                          </span>
                        </button>
                        <div className="flex items-center px-4">
                          <span className="text-gray-400 text-sm">
                            {activeFeature + 1} / {features.length}
                          </span>
                        </div>
                        <button
                          onClick={nextFeature}
                          className="w-12 h-12 bg-gray-700 hover:bg-[#00A19A] rounded-full flex items-center justify-center transition-all duration-300 group"
                        >
                          <span className="text-white text-lg group-hover:scale-110 transition-transform">
                            →
                          </span>
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
                              <motion.li
                                key={highlightIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: highlightIndex * 0.1 }}
                                className="flex items-start space-x-3 group"
                              >
                                <div className="w-2 h-2 bg-[#00A19A] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                <span className="text-sm text-gray-300 font-light group-hover:text-white transition-colors">
                                  {highlight}
                                </span>
                              </motion.li>
                            ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - With Overlap */}
      <section className="relative py-32 bg-gradient-to-br from-[#00A19A] via-[#00c4b8] to-[#00e6d6] overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isFeaturesInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="space-y-8 italic lg:pr-4 relative z-10"
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-black"
              >
                umovingu.
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-black"
              >
                your move
              </motion.h3>

              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-black"
              >
                your way.
              </motion.h3>
            </motion.div>

            {/* Right Side - Empowering Figure - Overlapping */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isFeaturesInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative flex justify-center lg:justify-start items-center lg:-ml-32 xl:-ml-48"
            >
              {/* Silhouette Figure - Much Larger with Overlap */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full max-w-2xl lg:max-w-none lg:w-[160%] xl:w-[180%]"
              >
                <img
                  alt="Empowering figure representing your move, your way"
                  decoding="async"
                  className="relative w-full h-auto object-contain scale-125 lg:scale-150"
                  src="/products/ctaSection-removebg-preview.png"
                  srcSet="/products/ctaSection-removebg-preview.png"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
