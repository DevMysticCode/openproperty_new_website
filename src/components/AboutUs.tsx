import { motion, useInView, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import CTASectionNew from './CTASectionNew'
import Footer from './Footer'
import ChipsScene from './ChipsScene'
import ScrollProgressBar from './ScrollProgressBar'
import PoweredByFooter from './PoweredByFooter'

export default function AboutUs() {
  const heroRef = useRef(null)
  const valuesRef = useRef(null)
  const founderRef = useRef(null)
  const whyRef = useRef(null)
  const journeyRef = useRef(null) // Add this
  const latestRef = useRef(null) // Add this
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' })
  const isFounderInView = useInView(founderRef, {
    once: true,
    margin: '-100px',
  })
  const isJourneyInView = useInView(journeyRef, {
    once: true,
    margin: '-100px',
  }) // Add this
  const isLatestInView = useInView(latestRef, { once: true, margin: '-100px' })
  const isWhyInView = useInView(whyRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: whyRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  const item1Y = useTransform(scrollYProgress, [0, 1], ['0px', '0px'])
  const item2Y = useTransform(scrollYProgress, [0, 1], ['50px', '-50px'])
  const item3Y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px'])
  const item4Y = useTransform(scrollYProgress, [0, 1], ['150px', '-150px'])
  const item5Y = useTransform(scrollYProgress, [0, 1], ['200px', '-200px'])
  const itemYTransforms = [item1Y, item2Y, item3Y, item4Y, item5Y]

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

  const whyItems = [
    {
      number: '01.',
      title: 'The Now',
      description:
        'The property process as it stands today is broken - the numbers prove it and it’s you paying the price. Every year, over a third of UK house sales collapse before completion, costing consumers more than £590 million. The average transaction drags on for 5–6 months, leaving buyers and sellers in limbo and vulnerable to chain breaks. Meanwhile, updates are scarce and fragmented, with information spread across estate agents, solicitors, and lenders who all work to their own schedules, not yours. The result? Stress, wasted time, lost money, and a system that leaves you powerless during one of the most important moments of your life.',
      delay: 0,
    },
    {
      number: '02.',
      title: 'The Future',
      description:
        'At UMU, we believe it doesn’t have to be this way. We believe in turning moving home from one of life’s most stressful journeys into one of the most empowering and exciting one. That’s why we’re building more than an app, we’re building a movement to give consumers control, clarity, and confidence in a process that has failed them for far too long. UMU is designed to tackle the root causes of the problem.',
      delay: 50,
    },
    {
      number: '03.',
      title: 'Features',
      description:
        'Real-time updates replace endless chasing. A digital property passport keeps your information organised and ready from day one. AI- powered tools validate legal documents and reduce risk. An education hub arms you with the knowledge to make smarter decisions. And a secure, connected platform means every party stays aligned, cutting sales from months to weeks and reducing fall-throughs.',
      delay: 100,
    },
    {
      number: '04.',
      title: 'How',
      description:
        'Most importantly, UMU never clocks off. Unlike traditional processes bound by office hours and paperwork bottlenecks, UMU lives in your pocket — always on, always available, always with you, every step of the move.',
      delay: 150,
    },
    {
      number: '05.',
      title: 'The Result',
      description:
        'We’re not here to tweak the system. We’re here to reinvent it. To create a property market that works for people, not against them. One where buying or selling your home no longer means stress, uncertainty, or loss, but clarity, speed, and success. With UMU, moving home is no longer just a transaction — it’s a transformation. And together, we’re building a better way forward.',
      delay: 200,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
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

      <section
        ref={founderRef}
        data-theme="Light"
        className="relative bg-neutral-100 pt-24 "
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
            style={{ height: '440px' }}
          />

          {/* Values Grid */}
          <div className="pt-20 md:pt-0 z-20">
            <div className="px-6 pb-20 md:grid-cols-2 md:gap-x-5 text-2xl text-black md:gap-y-24 md:px-[12%] md:pb-44">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
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
                  the old system — but a reinvention of the journey itself: one
                  where transparency, simplicity and connection replace
                  fragmentation and dysfunction, so that no more consumers are
                  forced to pay the emotional or financial price of a broken
                  process.
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

      {/* OUR Why section */}
      <section
        ref={whyRef}
        className="relative py-24 bg-gradient-to-b from-[#28B0A9] via-[#28B0A9] to-[#28B0A9] overflow-hidden mx-auto px-6 sm:px-8"
      >
        <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(0, 230, 214, 0.3) 0%, transparent 40%)`,
              backgroundSize: '100% 100%',
            }}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isWhyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-start mb-20 max-w-7xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight uppercase ">
            OUR WHY
          </h1>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10"
          style={{ opacity }}
        >
          <div className="space-y-0">
            {whyItems.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -100 }}
                animate={isWhyInView ? { opacity: 1, x: 0 } : {}}
                style={{ y: itemYTransforms[index] }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16 border-b border-white/20 last:border-b-0"
              >
                <div className="lg:col-span-1 flex items-start">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isWhyInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.3 + 0.3,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="text-white/80 text-3xl lg:text-5xl font-light tracking-tight"
                  >
                    {item.number}
                  </motion.span>
                </div>

                <div className="lg:col-span-4">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: index * 0.3 + 0.4,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="text-white text-3xl lg:text-5xl font-light tracking-tight leading-tight"
                  >
                    {item.title}
                  </motion.h3>
                </div>

                <div className="lg:col-span-7">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: index * 0.3 + 0.5,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="text-white/95 text-xl lg:text-2xl font-light leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Why Section */}
      {/* <section
        ref={valuesRef}
        className="relative py-24 bg-gradient-to-b from-[#00a19a] to-white overflow-hidden"
      >
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

        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
          
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
            
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="premium-card p-8 rounded-2xl bg-white hover:bg-white/90 hover:border-red-400/30 transition-all duration-700 relative overflow-hidden"
                >
               
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
           
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="premium-card p-8 rounded-2xl bg-white hover:bg-white/90 hover:border-[#00a19a]/30 transition-all duration-700 relative overflow-hidden"
                >
                 
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
      </section> */}

      {/* UMU Latest Section */}
      <section
        ref={latestRef}
        className="relative py-24 bg-white overflow-hidden"
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
              <span
                className="font-light"
                style={{
                  background:
                    'linear-gradient(135deg, #00A19A, #00c9bf, #00A19A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                THE LATEST
              </span>
            </h2>
          </motion.div>
          <div
            className="max-w-4xl text-center mx-auto text-[32px]"
            style={{
              background: 'linear-gradient(135deg, #00A19A, #1e6864, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
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
      <PoweredByFooter />
      {/* Footer */}
      <Footer />
    </div>
  )
}
