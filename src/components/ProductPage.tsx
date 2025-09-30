import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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

const features = [
  {
    icon: FileText,
    title: 'Property Passport',
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
    title: 'Explore Property Insights',
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
    title: 'Real Time Updates',
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
    title: 'AI Layer',
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
    title: 'Free Education',
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
  {
    icon: Award,
    title: 'Premium Education',
    subtitle: 'Expert-curated professional resources',
    description:
      'A collection of expert-curated resources, crafted to a professional standard, empowering users beyond the basics.',
    highlights: [
      'Professional standard content',
      'Expert-curated resources',
      'Advanced property knowledge',
      'Elevate your understanding',
    ],
    gradient: 'from-[#007a75] to-[#00c4b8]',
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
                className="space-y-12 h-full"
              >
                <motion.div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 text-white tracking-tight leading-tight text-foreground">
                    UMU{' '}
                    <span className="bg-gradient-to-r from-[#00A19A] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
                      Platform
                    </span>
                  </h2>

                  <p className="text-lg text-white/90 max-w-7xl mx-auto leading-relaxed font-light mb-12">
                    State of the art features and technology streamlined into
                    one cutting-edge platform. Experience the future of property
                    transactions today.
                  </p>
                </motion.div>

                {/* Add your left side content here */}
                <div className="text-white">
                  <h3 className="text-2xl font-semibold mb-4">
                    Your Left Content
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Add your text, features, or other content here that should
                    appear on the left side.
                  </p>
                </div>

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
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isDifferentiatorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-start mb-16 "
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight text-foreground">
              What makes us{' '}
              <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                different?
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 100 }}
                animate={isDifferentiatorInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="premium-card p-8 rounded-2xl glassmorphism hover:bg-card/90 hover:border-[#00A19A]/30 transition-all duration-700 h-full will-change-transform"
                >
                  <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-[#00A19A] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A19A] to-[#00c9bf] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight text-foreground">
              Powerful{' '}
              <span className="bg-gradient-to-r from-[#00A19A] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
                Features
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive tools designed to revolutionize your property
              journey from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 100 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + index * 0.15,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="premium-card p-8 rounded-2xl glassmorphism hover:bg-card/90 hover:border-[#00A19A]/30 overflow-hidden h-full will-change-transform relative"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-700`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-[#00A19A] transition-colors duration-500">
                    {feature.title}
                  </h3>

                  <p className="text-lg font-semibold text-[#00A19A] mb-4">
                    {feature.subtitle}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-[#00A19A] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground font-light">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A19A] to-[#00c9bf] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
