import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import CTASectionNew from './CTASectionNew'
import Footer from './Footer'
import ChipsScene from './ChipsScene'

export default function AboutUs() {
  const heroRef = useRef(null)
  const valuesRef = useRef(null)
  const journeyRef = useRef(null) // Add this
  const latestRef = useRef(null) // Add this
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' })
  const isJourneyInView = useInView(journeyRef, {
    once: true,
    margin: '-100px',
  }) // Add this
  const isLatestInView = useInView(latestRef, { once: true, margin: '-100px' })

  const coreValues = [
    {
      title: 'Dedication',
      description:
        'Always doing your best so you diligently progress toward your goal.',
    },
    {
      title: 'Long-term orientation',
      description:
        'Seeking to optimize with a long-term view, even at the expense of short-term benefits.',
    },
    {
      title: 'Optimism',
      description:
        'Believing that with the right work, you can make the future better than the present.',
    },
    {
      title: 'Ownership',
      description:
        'Feeling deeply responsible for your work, and constantly asking the question.',
    },
    {
      title: 'Passion',
      description:
        'Finding purpose and purpose in doing the work to improve the goal.',
    },
    {
      title: 'Tenacity',
      description:
        'Not giving up in the face of obstacles, treating every setback as a learning opportunity to verify after every fall.',
    },
  ]

  const values = [
    {
      title: 'Accuracy',
      description:
        "Telling the truth, and being explicit about what's a fact and what's a hypothesis.",
    },
    {
      title: 'Curiosity',
      description:
        'Seeking an understanding of the whats, hows, and whys of the world.',
    },
    {
      title: 'Imagination',
      description:
        'Envisioning how things could be, unencumbered by how they currently are.',
    },
    {
      title: 'Logic',
      description:
        'Reasoning from first principles, and structuring ideas sharply.',
    },
    {
      title: 'Meritocracy',
      description:
        "Assigning responsibilities solely based on people's ability to carry them out, and evaluating ideas regardless of where or whom they came from.",
    },
    {
      title: 'Pragmatism',
      description:
        'Optimizing for impact, finding the right scope—and the ideal balance between speed and sophistication—at all times.',
    },
    {
      title: 'Precision',
      description: 'Identifying and taking care of the details that matter.',
    },
    {
      title: 'Rationality',
      description: 'Resisting the influence of biases.',
    },
    {
      title: 'Research',
      description:
        'Gathering all relevant information, and rigorously testing hypotheses.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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
            src="https://my.spline.design/claritystream-NFVRq6xtPoGJygaEzpBvdd1x/"
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
            <span className="text-white">Not Just A</span>{' '}
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
              Move.
            </span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight tracking-tight mb-8"
          >
            <span className="text-white">A</span>{' '}
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
              Movement.
            </span>
          </motion.h1>
        </motion.div>
      </section>

      <section data-theme="Light" className="relative bg-neutral-100 pt-24 ">
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
        />
        <div className="relative overflow-hidden mx-auto px-6 sm:px-8 z-20">
          {/* Overlay Text */}
          <div className="relative z-20 flex h-full items-end max-w-7xl justify-start mx-auto mt-10 lg:mt-36">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight bg-gradient-to-r from-[#ffffff] via-[#ffffff to-[#ffffff] bg-clip-text text-transparent text-heading">
              OUR FOUNDER
            </h1>
            {/* <h2
              className="bg-clip-text px-6 pb-2 text-fluid-48-110 font-normal leading-tight -tracking-7 text-transparent md:mb-8 md:whitespace-pre md:px-[12%] text-center md:text-left"
              style={{
                backgroundImage:
                  'radial-gradient(56.91% 100% at 70.4% 100%, #000000 0%, #00A19A 64.63%, #000000 100%)',
              }}
            >
              Meet Our Founder
            </h2> */}
          </div>
          {/* Image Section */}
          <img
            alt="OpenProperty"
            // width={1440}
            height={840}
            decoding="async"
            className="relative z-10 mx-auto"
            src="/about/founder.png"
            srcSet="/about/founder.png"
            style={{ height: '800px' }}
          />

          {/* Values Grid */}
          <div className="pt-20 md:pt-0 z-20">
            <div className="px-6 pb-20 md:grid-cols-2 md:gap-x-5 text-2xl text-black md:gap-y-24 md:px-[12%] md:pb-44">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              >
                <p
                  className="italic text-center leading-relaxed"
                  // style={{
                  //   backgroundImage:
                  //     'radial-gradient(56.91% 100% at 70.4% 100%, #007A74 0%, #00A19A 64.63%, #000000 100%)',
                  //   WebkitBackgroundClip: 'text',
                  //   WebkitTextFillColor: 'transparent',
                  //   backgroundClip: 'text',
                  // }}
                >
                  "After more than 30 years in the property sector, I’ve seen
                  first-hand how the system fails — not only consumers, but
                  every party involved in the moving process - I know the
                  frustrations of working within a fragmented, inefficient
                  industry where no universal platform connects stakeholders.
                  Too often, estate agents - whose real role is to sell - are
                  dragged deep into the conveyancing process, simply because the
                  sector lacks connectivity and transparency.
                </p>
                <p
                  className="italic text-center leading-relaxed mt-12"
                  // style={{
                  //   backgroundImage:
                  //     'radial-gradient(56.91% 100% at 70.4% 100%, #00A19A  0%,  #007A74 64.63%,  #000000 100%)',
                  //   WebkitBackgroundClip: 'text',
                  //   WebkitTextFillColor: 'transparent',
                  //   backgroundClip: 'text',
                  // }}
                >
                  The result is blurred lines, broken communication, and
                  responsibilities falling between the cracks. Agents,
                  conveyancers, and consumers alike find themselves shouldering
                  tasks that were never truly theirs to begin with. And while
                  professionals struggle with inefficiency, it’s the consumer
                  who suffers the most. What should be the happiest milestone in
                  their lives — getting the keys to a new home — far too often
                  unravels into a stressful, confusing, and anxiety-inducing
                  nightmare.
                </p>
                <p
                  className="italic text-center leading-relaxed mt-12"
                  // style={{
                  //   backgroundImage:
                  //     'radial-gradient(56.91% 100% at 70.4% 100%, #007A74 0%, #00A19A 64.63%, #000000 100%)',
                  //   WebkitBackgroundClip: 'text',
                  //   WebkitTextFillColor: 'transparent',
                  //   backgroundClip: 'text',
                  // }}
                >
                  Over the years, I’ve seen it affect everyone: first-time
                  buyers, young parents, long-term partners, even businesses
                  grappling with relocations. Again and again, I watched
                  excitement transform into dread. That experience stayed with
                  me.
                </p>
                <p
                  className="italic text-center leading-relaxed mt-12"
                  // style={{
                  //   backgroundImage:
                  //     'radial-gradient(56.91% 100% at 70.4% 100%, #00A19A  0%,  #007A74 64.63%,  #000000 100%)',
                  //   WebkitBackgroundClip: 'text',
                  //   WebkitTextFillColor: 'transparent',
                  //   backgroundClip: 'text',
                  // }}
                >
                  After exiting my last business, I asked myself a simple but
                  urgent question: what if it didn’t have to be this way? I
                  poured all my time and energy into reimagining what property
                  transactions could look like. Not just a slight improvement to
                  the old system — but a full scale reappraisal of the journey
                  itself: one where transparency, simplicity and connection
                  replace fragmentation and dysfunction, so that no more
                  consumers are forced to pay the emotional or financial price
                  of a broken process.
                </p>
                <p
                  className="italic text-center leading-relaxed mt-12"
                  // style={{
                  //   backgroundImage:
                  //     'radial-gradient(56.91% 100% at 70.4% 100%, #007A74 0%, #00A19A 64.63%, #000000 100%)',
                  //   WebkitBackgroundClip: 'text',
                  //   WebkitTextFillColor: 'transparent',
                  //   backgroundClip: 'text',
                  // }}
                >
                  This mission isn’t just professional for me — it’s deeply
                  personal. I’ve lived the challenges of this industry from
                  every side, and I know it can be better. That belief is what
                  drives me every single day."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                className="mt-24"
              >
                <p className="text-3xl text-end text-black">
                  — Maxine, Founder & CEO
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={valuesRef}
        className="relative py-24 bg-white overflow-hidden"
      >
        {/* Background Pattern */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-20"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight uppercase">
              OUR WHY
            </h1>
          </motion.div>

          {/* Three Column Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
            {/* For You */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#00a19a] mb-4">
                  01.
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  For you
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-light text-lg">
                Jeton is designed with you at its core. Our goal is to create a
                product that seamlessly fits into your life, simplifying your
                finances and make money better for you.
              </p>
            </motion.div>

            {/* Accessible */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#00a19a] mb-4">
                  02.
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Accessible
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-light text-lg">
                We try to make Jeton accessible and inclusive for everyone. Our
                commitment is to ensure that our services are easy to use and
                available to all.
              </p>
            </motion.div>

            {/* Transparent */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#00a19a] mb-4">
                  03.
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Transparent
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-light text-lg">
                We believe in transparency and honesty. There are no complicated
                jargons or hard-to-understand terms here. We understand that
                money can be complex, so we are dedicated to making it
                straightforward and transparent. With Jeton, there are no hidden
                fees or surprises. What you see is truly what you get.
              </p>
            </motion.div>
          </div>

          {/* Bottom Content - Problem & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
            {/* Left Side - The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                isValuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{
                duration: 1.2,
                delay: 0.9,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="space-y-8"
            >
              {/* Problem Statement */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="premium-card p-8 rounded-2xl bg-white hover:bg-white/90 hover:border-red-400/30 transition-all duration-700 relative overflow-hidden border border-gray-200"
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-2xl">⚠️</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        The Broken System
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed font-light mb-6">
                      The property process as it stands today is broken, and the
                      numbers prove it/ it's you paying the price. Every year,
                      over a third of UK house sales collapse before completion,
                      costing consumers more than £590 million.
                    </p>

                    <p className="text-gray-700 leading-relaxed font-light">
                      The average transaction drags on for 5–6 months, leaving
                      buyers and sellers in limbo and vulnerable to chain
                      breaks. Meanwhile, updates are scarce and fragmented, with
                      information spread across estate agents, solicitors, and
                      lenders who all work to their own schedules, not yours.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isValuesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="text-center p-6 rounded-xl bg-red-50 border border-red-100"
                >
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    1/3
                  </div>
                  <div className="text-sm text-red-700">Sales Collapse</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isValuesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="text-center p-6 rounded-xl bg-orange-50 border border-orange-100"
                >
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    £590M
                  </div>
                  <div className="text-sm text-orange-700">Annual Cost</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Our Solution */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={
                isValuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{
                duration: 1.2,
                delay: 1.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="space-y-8"
            >
              {/* Our Belief */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="premium-card p-8 rounded-2xl bg-white hover:bg-white/90 hover:border-[#00a19a]/30 transition-all duration-700 relative overflow-hidden border border-gray-200"
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00a19a]/20 to-[#00c9bf]/20 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-2xl">💡</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Our Belief
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed font-light mb-6">
                      At UMU, we believe it doesn't have to be this way. We
                      believe in turning moving home from one of life's most
                      stressful journeys into one of the most empowering.
                    </p>

                    <p className="text-gray-700 leading-relaxed font-light">
                      That's why we're building more than an app, we're building
                      a movement to give consumers control, clarity, and
                      confidence in a process that has failed them for far too
                      long.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* UMU Features */}
              <div className="space-y-4">
                {[
                  {
                    icon: '⚡',
                    text: 'Real-time updates replace endless chasing',
                  },
                  {
                    icon: '📋',
                    text: 'Digital property passport keeps information organised',
                  },
                  {
                    icon: '🤖',
                    text: 'AI-powered tools validate legal documents',
                  },
                  { icon: '🎓', text: 'Education hub arms you with knowledge' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={
                      isValuesInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -100 }
                    }
                    transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-[#00a19a]/10 hover:bg-[#00a19a]/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] rounded-full flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-light">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Why Section */}
      <section
        ref={valuesRef}
        className="relative py-24 bg-gradient-to-b from-[#00a19a] to-white overflow-hidden"
      >
        {/* Background Pattern */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-start mb-20"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight uppercase">
              OUR WHY
            </h1>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
            {/* Left Side - The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                isValuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="space-y-8"
            >
              {/* Problem Statement */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="premium-card p-8 rounded-2xl bg-white hover:bg-white/90 hover:border-red-400/30 transition-all duration-700 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-2xl">⚠️</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        The Broken System
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed font-light mb-6">
                      The property process as it stands today is broken, and the
                      numbers prove it/ it's you paying the price. Every year,
                      over a third of UK house sales collapse before completion,
                      costing consumers more than £590 million.
                    </p>

                    <p className="text-gray-700 leading-relaxed font-light">
                      The average transaction drags on for 5–6 months, leaving
                      buyers and sellers in limbo and vulnerable to chain
                      breaks. Meanwhile, updates are scarce and fragmented, with
                      information spread across estate agents, solicitors, and
                      lenders who all work to their own schedules, not yours.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isValuesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-center p-6 rounded-xl bg-red-50 border border-red-100"
                >
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    1/3
                  </div>
                  <div className="text-sm text-red-700">Sales Collapse</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isValuesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="text-center p-6 rounded-xl bg-orange-50 border border-orange-100"
                >
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    £590M
                  </div>
                  <div className="text-sm text-orange-700">Annual Cost</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Our Solution */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={
                isValuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="space-y-8"
            >
              {/* Our Belief */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="premium-card p-8 rounded-2xl bg-white hover:bg-white/90 hover:border-[#00a19a]/30 transition-all duration-700 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a19a]/5 to-[#00c9bf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00a19a]/20 to-[#00c9bf]/20 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-2xl">💡</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Our Belief
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed font-light mb-6">
                      At UMU, we believe it doesn't have to be this way. We
                      believe in turning moving home from one of life's most
                      stressful journeys into one of the most empowering.
                    </p>

                    <p className="text-gray-700 leading-relaxed font-light">
                      That's why we're building more than an app, we're building
                      a movement to give consumers control, clarity, and
                      confidence in a process that has failed them for far too
                      long.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* UMU Features */}
              <div className="space-y-4">
                {[
                  {
                    icon: '⚡',
                    text: 'Real-time updates replace endless chasing',
                  },
                  {
                    icon: '📋',
                    text: 'Digital property passport keeps information organised',
                  },
                  {
                    icon: '🤖',
                    text: 'AI-powered tools validate legal documents',
                  },
                  { icon: '🎓', text: 'Education hub arms you with knowledge' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={
                      isValuesInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -100 }
                    }
                    transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-[#00a19a]/10 hover:bg-[#00a19a]/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r  from-[#00c9bf] to-white/50 rounded-full flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-light">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
            }
            transition={{ duration: 1.5, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="premium-card p-12 rounded-3xl glassmorphism bg-gradient-to-br from-[#00a19a] via-[#00c9bf]/90 to-[#00e6d6]/90 relative overflow-hidden"
            >
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="w-16 h-16 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] rounded-2xl flex items-center justify-center shadow-2xl"
                  >
                    <span className="text-white text-2xl">🚀</span>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-8 leading-tight text-gray-900">
                  Most importantly, UMU never clocks off
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <p className="text-gray-700 leading-relaxed font-light mb-6">
                      Unlike traditional processes bound by office hours and
                      paperwork bottlenecks, UMU lives in your pocket — always
                      on, always available, always with you, every step of the
                      move.
                    </p>

                    <p className="text-gray-700 leading-relaxed font-light">
                      We're not here to tweak the system. We're here to reinvent
                      it. To create a property market that works for people, not
                      against them.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed font-light mb-6">
                      One where buying or selling your home no longer means
                      stress, uncertainty, or loss, but clarity, speed, and
                      success.
                    </p>

                    <p className="text-gray-700 leading-relaxed font-light">
                      With UMU, moving home is no longer just a transaction —
                      it's a transformation. And together, we're building a
                      better way forward.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Roadmap Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #00a19a 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #00c9bf 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <div className="relative z-10 w-full px-6 sm:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-8">
                OUR JOURNEY
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed font-light max-w-4xl">
                From concept to reality, discover the milestones that shaped
                OpenProperty into the revolutionary platform it is today.
              </p>
            </motion.div>

            {/* Horizontal Curved Road */}
            <div className="relative h-[600px] w-full">
              {/* SVG Road */}
              <svg
                width="100%"
                height="600"
                viewBox="0 0 1200 600"
                className="absolute inset-0"
              >
                {/* Road Base (Asphalt) */}
                <motion.path
                  d="M 50 300 Q 300 150 600 300 Q 900 450 1150 300"
                  stroke="#2d3748"
                  strokeWidth="40"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }}
                />

                {/* Road Center Line (Dashed Yellow) */}
                <motion.path
                  d="M 50 300 Q 300 150 600 300 Q 900 450 1150 300"
                  stroke="#fbbf24"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="20,15"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 1, ease: 'easeInOut' }}
                />

                {/* Road Edges (White Lines) */}
                <motion.path
                  d="M 50 280 Q 300 130 600 280 Q 900 430 1150 280"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 0.8, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M 50 320 Q 300 170 600 320 Q 900 470 1150 320"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 0.8, ease: 'easeInOut' }}
                />
              </svg>

              {/* Milestone 1 - Genesis of UMU (Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute top-[286px] left-[70px]"
              >
                {/* Marker Pin */}
                <div className="w-16 h-20 bg-gradient-to-b from-[#00a19a] to-[#00c9bf] rounded-t-full relative shadow-2xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-[#00a19a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">💡</span>
                    </div>
                  </div>
                  {/* Pin Point */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-6 border-transparent border-t-[#00c9bf]"></div>
                </div>

                {/* Info Card - Top Left */}
                <div className="absolute -top-32 -left-8 w-80 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Genesis of UMU
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Maxine landed on the idea of UMU way back in 2019 and has
                    been developing and innovating since.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 2 - Thought + Discussion Process (Center-Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="absolute top-[220px] left-[320px]"
              >
                {/* Marker Pin */}
                <div className="w-16 h-20 bg-gradient-to-b from-[#00a19a] to-[#00c9bf] rounded-t-full relative shadow-2xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-[#00a19a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📋</span>
                    </div>
                  </div>
                  {/* Pin Point */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-6 border-transparent border-t-[#00c9bf]"></div>
                </div>

                {/* Info Card - Bottom Left */}
                <div className="absolute top-24 -left-16 w-80 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Thought + Discussion Process
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Over the following decade Maxine continued to run her own
                    estate agency whilst developing UMU alongside it, working
                    with Coventry University to build the framework.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 3 - Beta Testing (Center-Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="absolute top-[286px] left-[755px]"
              >
                {/* Marker Pin */}
                <div className="w-16 h-20 bg-gradient-to-b from-[#00a19a] to-[#00c9bf] rounded-t-full relative shadow-2xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-[#00a19a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  {/* Pin Point */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-6 border-transparent border-t-[#00c9bf]"></div>
                </div>

                {/* Info Card - Top Right */}
                <div className="absolute -top-32 -right-16 w-80 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Beta Testing
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Soon enough, the app will be launching our product very soon
                    for beta testing.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 4 - Prototype Built (Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 3 }}
                className="absolute top-[326px] right-[80px]"
              >
                {/* Marker Pin */}
                <div className="w-16 h-20 bg-gradient-to-b from-[#00a19a] to-[#00c9bf] rounded-t-full relative shadow-2xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-[#00a19a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📱</span>
                    </div>
                  </div>
                  {/* Pin Point */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-6 border-transparent border-t-[#00c9bf]"></div>
                </div>

                {/* Info Card - Bottom Right */}
                <div className="absolute top-24 -right-16 w-80 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Prototype Built
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our prototype was completed in mid 2024 and we are now
                    hoping to raise investment.
                  </p>
                </div>
              </motion.div>

              {/* Animated Car */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.5 }}
                className="absolute top-[270px] right-[40px]"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-4xl"
                >
                  🚗
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section
        ref={journeyRef}
        className="relative py-24 bg-white overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-20">
            <h2 className="text-5xl font-normal text-black mb-6">
              OUR JOURNEY
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              From concept to reality, discover the milestones that shaped
              OpenProperty into the revolutionary platform it is today.
            </p>
          </div>

          {/* Horizontal Road Timeline Container */}
          <div className="relative h-[600px]">
            {/* Horizontal Road SVG */}
            <svg
              className="absolute left-0 top-0 w-full h-full pointer-events-none"
              viewBox="0 0 1200 500"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Main Horizontal Road Path with Gentle Curves */}
              <path
                d="M 80 200
       L 200 200
       Q 300 200 300 150
       L 300 150
       Q 300 100 400 100
       L 600 100
       Q 700 100 700 180
       L 700 180
       Q 700 250 850 250
       L 1100 250
       Q 1150 250 1150 300
       L 1150 350"
                stroke="#d1d5db"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />

              {/* Road Center Dashed Line */}
              <path
                d="M 80 200
       L 200 200
       Q 300 200 300 150
       L 300 150
       Q 300 100 400 100
       L 600 100
       Q 700 100 700 180
       L 700 180
       Q 700 250 850 250
       L 1100 250
       Q 1150 250 1150 300
       L 1150 350"
                stroke="#ffffff"
                strokeWidth="3"
                fill="none"
                strokeDasharray="6,8"
                strokeLinecap="round"
              />

              {/* Creative Markers with Better Spacing */}
              {/* Genesis Marker */}
              <g className="cursor-pointer hover:scale-110 transition-transform duration-200">
                <circle
                  cx="80"
                  cy="250"
                  r="12"
                  fill="#00A19A"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <circle cx="80" cy="250" r="6" fill="#ffffff" />
                <rect
                  x="50"
                  y="210"
                  width="60"
                  height="24"
                  rx="12"
                  fill="#00A19A"
                />
                <text
                  x="80"
                  y="225"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="bold"
                >
                  2023
                </text>
              </g>

              {/* Thought + Discussion Marker */}
              <g className="cursor-pointer hover:scale-110 transition-transform duration-200">
                <circle
                  cx="400"
                  cy="150"
                  r="12"
                  fill="#00A19A"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <circle cx="400" cy="150" r="6" fill="#ffffff" />
                <rect
                  x="340"
                  y="110"
                  width="120"
                  height="24"
                  rx="12"
                  fill="#00A19A"
                />
                <text
                  x="400"
                  y="125"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="bold"
                >
                  2023-2024
                </text>
              </g>

              {/* Beta Testing Marker */}
              <g className="cursor-pointer hover:scale-110 transition-transform duration-200">
                <circle
                  cx="800"
                  cy="180"
                  r="12"
                  fill="#00A19A"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <circle cx="800" cy="180" r="6" fill="#ffffff" />
                <rect
                  x="770"
                  y="140"
                  width="60"
                  height="24"
                  rx="12"
                  fill="#00A19A"
                />
                <text
                  x="800"
                  y="155"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="bold"
                >
                  2024
                </text>
              </g>

              {/* Prototype Built Marker with Car */}
              <g className="cursor-pointer hover:scale-110 transition-transform duration-200">
                <circle
                  cx="1150"
                  cy="340"
                  r="12"
                  fill="#00A19A"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <circle cx="1150" cy="340" r="6" fill="#ffffff" />
                <rect
                  x="1110"
                  y="300"
                  width="80"
                  height="24"
                  rx="12"
                  fill="#00A19A"
                />
                <text
                  x="1150"
                  y="315"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="bold"
                >
                  2025
                </text>

                {/* Car at the last marker */}
                <g
                  transform="translate(1135, 360)"
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  {/* Car Body */}
                  <rect
                    x="0"
                    y="0"
                    width="35"
                    height="14"
                    rx="4"
                    fill="#3b82f6"
                  />
                  {/* Car Top */}
                  <rect
                    x="6"
                    y="-10"
                    width="23"
                    height="10"
                    rx="3"
                    fill="#3b82f6"
                  />
                  {/* Windows */}
                  <rect
                    x="8"
                    y="-7"
                    width="7"
                    height="5"
                    rx="1"
                    fill="#bfdbfe"
                  />
                  <rect
                    x="19"
                    y="-7"
                    width="7"
                    height="5"
                    rx="1"
                    fill="#bfdbfe"
                  />
                  {/* Wheels */}
                  <circle cx="9" cy="14" r="4" fill="#1f2937" />
                  <circle cx="26" cy="14" r="4" fill="#1f2937" />
                  {/* Headlight */}
                  <circle cx="33" cy="7" r="2" fill="#fbbf24" />
                </g>
              </g>
            </svg>

            {/* Journey Milestones - Compact Headings Only */}

            {/* Genesis of UNU */}
            <div className="group absolute left-20 top-[12rem] max-w-[250px]">
              <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-white/95 h-[60px] group-hover:h-auto group-hover:min-h-[160px] group-hover:p-6 overflow-hidden">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#00A19A] rounded-full mr-3 flex-shrink-0"></div>
                  <h3 className="text-lg font-semibold text-black group-hover:text-[#00A19A] transition-colors duration-300 whitespace-nowrap">
                    Genesis of OP
                  </h3>
                </div>
                <div className="mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-gray-700 leading-relaxed text-sm font-light">
                    Founded on the idea that property intelligence should be
                    accessible, transparent, and powerful. Our journey began in
                    2023 with a vision to revolutionize how property decisions
                    are made.
                  </p>
                </div>
              </div>
            </div>

            {/* Thought + Discussion Process */}
            <div className="group absolute left-[440px] top-[12rem] max-w-[300px]">
              <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-white/95 h-[60px] group-hover:h-auto group-hover:min-h-[180px] group-hover:p-6 overflow-hidden">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#00A19A] rounded-full mr-3 flex-shrink-0"></div>
                  <h3 className="text-lg font-semibold text-black group-hover:text-[#00A19A] transition-colors duration-300 whitespace-nowrap">
                    Research + Development
                  </h3>
                </div>
                <div className="mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-gray-700 leading-relaxed text-sm font-light">
                    Over the following months, we conducted extensive market
                    research, interviewed hundreds of property professionals,
                    and developed our core technology framework in partnership
                    with leading universities.
                  </p>
                </div>
              </div>
            </div>

            {/* Beta Testing */}
            <div className="group absolute left-[860px] top-[11rem]  max-w-[250px]">
              <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-white/95 h-[60px] group-hover:h-auto group-hover:min-h-[140px] group-hover:p-6 overflow-hidden">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#00A19A] rounded-full mr-3 flex-shrink-0"></div>
                  <h3 className="text-lg font-semibold text-black group-hover:text-[#00A19A] transition-colors duration-300 whitespace-nowrap">
                    Alpha Testing
                  </h3>
                </div>
                <div className="mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-gray-700 leading-relaxed text-sm font-light">
                    October 2024: We are launching our alpha version with select
                    property professionals for comprehensive testing and
                    feedback collection.
                  </p>
                </div>
              </div>
            </div>

            {/* Prototype Built */}
            <div className="group absolute right-[6rem] top-[23rem]  max-w-[250px]">
              <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-white/95 h-[60px] group-hover:h-auto group-hover:min-h-[140px] group-hover:p-6 overflow-hidden">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#00A19A] rounded-full mr-3 flex-shrink-0"></div>
                  <h3 className="text-lg font-semibold text-black group-hover:text-[#00A19A] transition-colors duration-300 whitespace-nowrap">
                    Full Platform Launch
                  </h3>
                </div>
                <div className="mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-gray-700 leading-relaxed text-sm font-light">
                    Our comprehensive platform launched in early 2025, featuring
                    AI-powered analytics, real-time market data, and the
                    revolutionary Property Passport system that's transforming
                    the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section
        ref={journeyRef}
        className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      >
        {/* Background Pattern */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-start mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-8 text-black">
              OUR JOURNEY
              {/* <span
                className="font-light"
                style={{
                  background:
                    'linear-gradient(135deg, #00A19A, #00c9bf, #00e6d6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                JOURNEY
              </span> */}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              From concept to reality, discover the milestones that shaped
              OpenProperty into the revolutionary platform it is today.
            </p>
          </motion.div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00A19A" />
                  <stop offset="50%" stopColor="#00c9bf" />
                  <stop offset="100%" stopColor="#00e6d6" />
                </linearGradient>
              </defs>

              {/* Desktop connecting lines */}
              <g className="hidden lg:block">
                <motion.path
                  d="M 200 150 Q 400 100 600 200 Q 800 300 1000 150"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="10,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isJourneyInView
                      ? { pathLength: 1, opacity: 0.6 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 3, delay: 1 }}
                />
                <motion.path
                  d="M 1000 150 Q 800 50 600 250 Q 400 450 200 300"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="10,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isJourneyInView
                      ? { pathLength: 1, opacity: 0.6 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 3, delay: 1.5 }}
                />
              </g>
            </svg>

            {/* Journey Milestones */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Genesis of OpenProperty */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={
                  isJourneyInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.8, y: 100 }
                }
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative group"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon Pin */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00A19A] to-[#00c9bf] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[#00A19A]/40 transition-all duration-500">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#00A19A] to-[#00c9bf] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            💡
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    {/* Pin Tail */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#00A19A] to-transparent"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00A19A] transition-colors duration-300">
                      Genesis of OpenProperty
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-4">
                      Founded on the idea that property intelligence should be
                      accessible, transparent, and powerful. Our journey began
                      in 2023 with a vision to revolutionize how property
                      decisions are made.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00A19A]/10 border border-[#00A19A]/20">
                      <span className="text-[#00A19A] font-semibold text-sm">
                        2023 - Foundation
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Research + Development Process */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={
                  isJourneyInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 1.2,
                  delay: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative group lg:mt-24"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon Pin */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00c9bf] to-[#00e6d6] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[#00c9bf]/40 transition-all duration-500">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#00c9bf] to-[#00e6d6] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            📋
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    {/* Pin Tail */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#00c9bf] to-transparent"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00c9bf] transition-colors duration-300">
                      Research + Development Process
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-4">
                      Over the following months, we conducted extensive market
                      research, interviewed hundreds of property professionals,
                      and developed our core technology framework in partnership
                      with leading universities.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c9bf]/10 border border-[#00c9bf]/20">
                      <span className="text-[#00c9bf] font-semibold text-sm">
                        2023-2024 - R&D Phase
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Alpha Testing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={
                  isJourneyInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 1.2,
                  delay: 0.9,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative group"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon Pin */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00e6d6] to-[#00A19A] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[#00e6d6]/40 transition-all duration-500">
                      <motion.div
                        animate={{ rotate: [0, -360] }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#00e6d6] to-[#00A19A] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            ✓
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    {/* Pin Tail */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#00e6d6] to-transparent"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00e6d6] transition-colors duration-300">
                      Alpha Testing
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-4">
                      October 2024: We are launching our alpha version with
                      select property professionals for comprehensive testing
                      and feedback collection.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00e6d6]/10 border border-[#00e6d6]/20">
                      <span className="text-[#00e6d6] font-semibold text-sm">
                        October 2024 - Alpha Launch
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Platform Launch */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={
                  isJourneyInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 1.2,
                  delay: 1.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative group lg:mt-24"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon Pin */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00A19A] via-[#00c9bf] to-[#00e6d6] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[#00A19A]/40 transition-all duration-500">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#00A19A] via-[#00c9bf] to-[#00e6d6] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            📱
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    {/* Pin Tail */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#00A19A] to-transparent"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00A19A] transition-colors duration-300">
                      Full Platform Launch
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-4">
                      Our comprehensive platform launched in early 2025,
                      featuring AI-powered analytics, real-time market data, and
                      the revolutionary Property Passport system that's
                      transforming the industry.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00A19A]/10 border border-[#00A19A]/20">
                      <span className="text-[#00A19A] font-semibold text-sm">
                        2025 - Full Launch
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1.5, delay: 2, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center justify-center p-8 rounded-2xl glassmorphism max-w-4xl mx-auto bg-gradient-to-r from-[#00A19A]/10 via-[#00c9bf]/10 to-[#00e6d6]/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 leading-tight text-gray-900">
                  Join us on our{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #00A19A, #00c9bf)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    continuing journey
                  </span>
                </h3>
                <p className="text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
                  We're just getting started. Be part of the revolution that's
                  transforming property intelligence and decision-making
                  worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UMU Latest Section */}
      <section
        ref={latestRef}
        className="relative py-24 bg-gradient-to-b from-white to-[#00A19A]/90 overflow-hidden"
      >
        {/* Animated Background Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(35)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `linear-gradient(135deg, 
                  ${
                    i % 3 === 0
                      ? '#ffffff'
                      : i % 3 === 1
                      ? '#00a19a'
                      : '#00c9bf'
                  }, 
                  ${
                    i % 3 === 0
                      ? '#00a19a'
                      : i % 3 === 1
                      ? '#00c9bf'
                      : '#00e6d6'
                  })`,
              }}
              animate={{
                x: [0, 60, 0],
                y: [0, -30, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeInOut',
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Background Pattern */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              isLatestInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-start mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight text-black">
              THE LATEST
              {/* <span
                className="font-light"
                style={{
                  background:
                    'linear-gradient(135deg, #00A19A, #00c9bf, #00e6d6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Connected
              </span> */}
            </h2>
          </motion.div>
          <div className="max-w-4xl text-center mx-auto text-[32px]">
            <p className="text-black leading-relaxed font-light mb-6">
              The team welcome investment proposals from founders, companies or
              organisations in the PropTech/FinTech/EdTech space.
            </p>

            <p className="text-black leading-relaxed font-light mb-6">
              Sign up to our mailing list to receive our monthly newsletters,
              featuring the latest developments in umovingu's flagship product.
            </p>
          </div>

          {/* Content Grid */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                isLatestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                className="premium-card p-8 rounded-2xl bg-white hover:bg-white/90 hover:border-[#00a19a]/30 transition-all duration-700 relative overflow-hidden h-full"
              >
               
                <div className="absolute inset-0 bg-gradient-to-br from-[#00a19a]/5 to-[#00c9bf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      className="w-12 h-12 bg-gradient-to-r from-[#00a19a]/20 to-[#00c9bf]/20 rounded-2xl flex items-center justify-center mr-4"
                    >
                      <motion.span
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="text-2xl"
                      >
                        💼
                      </motion.span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00a19a] transition-colors duration-500">
                      Investment Opportunities
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed font-light mb-6">
                    The team welcome investment proposals from founders,
                    companies or organisations in the PropTech/FinTech/EdTech
                    space.
                  </p>

                  <div className="bg-gradient-to-r from-[#00a19a]/10 to-[#00c9bf]/10 rounded-xl p-4 border border-[#00a19a]/20">
                    <p className="text-sm text-gray-600 mb-2">
                      Please address any email enquiries to:
                    </p>
                    <a
                      href="mailto:hello@penproperty.io"
                      className="text-[#00a19a] font-semibold hover:text-[#00c9bf] transition-colors duration-300 text-lg"
                    >
                      hello@penproperty.io
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={
                isLatestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              }
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                className="premium-card p-8 rounded-2xl bg-white hover:bg-white/90 hover:border-[#00c9bf]/30 transition-all duration-700 relative overflow-hidden h-full"
              >
              
                <div className="absolute inset-0 bg-gradient-to-br from-[#00c9bf]/5 to-[#00e6d6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -8 }}
                      className="w-12 h-12 bg-gradient-to-r from-[#00c9bf]/20 to-[#00e6d6]/20 rounded-2xl flex items-center justify-center mr-4"
                    >
                      <motion.span
                        animate={{
                          y: [0, -2, 0],
                          rotate: [0, 2, -2, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="text-2xl"
                      >
                        📬
                      </motion.span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00c9bf] transition-colors duration-500">
                      Monthly Newsletter
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed font-light mb-6">
                    Sign up to our mailing list to receive our monthly
                    newsletters, featuring the latest developments in umovingu's
                    flagship product.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#00c9bf] to-[#00e6d6] hover:from-[#00a19a] hover:to-[#00c9bf] text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center">
                      <span className="mr-2">Subscribe Now</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div> */}
        </div>
      </section>

      <CTASectionNew />
      {/* Footer */}
      <Footer />
    </div>
  )
}
