import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import ChipsScene from './ChipsScene'

export default function AboutUs() {
  const heroRef = useRef(null)
  const valuesRef = useRef(null)
  const scientistsRef = useRef(null)
  const missionRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' })
  const isScientistsInView = useInView(scientistsRef, {
    once: true,
    margin: '-100px',
  })
  const isMissionInView = useInView(missionRef, {
    once: true,
    margin: '-100px',
  })

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

  const scientistValues = [
    {
      title: 'Accuracy',
      description:
        'Telling the truth, and being explicit about what is fact and what is hypothesis.',
    },
    {
      title: 'Curiosity',
      description:
        'Seeking an understanding of the whats, hows, and whys of the world.',
    },
    {
      title: 'Imagination',
      description:
        'Thinking outside the box, and being unencumbered by how they currently are.',
    },
    {
      title: 'Logic',
      description:
        'Reasoning from solid principles, and articulating ideas clearly.',
    },
    {
      title: 'Meritocracy',
      description: 'Judging ideas by their merit, not by who proposed them.',
    },
    {
      title: 'Pragmatism',
      description: 'Focusing on what works in practice, not just in theory.',
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
          <ChipsScene src="https://my.spline.design/worldplanet-VTZdezlhAm6GPszZkmoFlVK1/" />
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
              }}
            >
              Next Move.
            </span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight mb-8"
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

      <section data-theme="Light" className="bg-neutral-100">
        <div className="relative overflow-hidden">
          {/* Image Section */}
          <img
            alt="OpenProperty"
            width={1440}
            height={840}
            decoding="async"
            className="relative z-10 aspect-[16/10] w-full object-cover"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
            srcSet="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />

          {/* Overlay Text */}
          <div className="relative z-20 flex h-full items-end justify-center -mt-10 lg:-mt-48 bg-gradient-to-t from-neutral-100 via-neutral-100 to-transparent via-[30%]">
            <h2
              className="bg-clip-text px-6 pb-2 text-fluid-48-110 font-normal leading-tight -tracking-7 text-transparent md:mb-12 md:whitespace-pre md:px-[12%] text-center md:text-left"
              style={{
                backgroundImage:
                  'radial-gradient(56.91% 100% at 70.4% 100%, #FFB798 0%, #00A19A 64.63%, #000000 100%)',
              }}
            >
              Meet Our Founder
            </h2>
          </div>
        </div>

        {/* Values Grid */}
        <div className="pt-20 md:pt-0">
          <div className="px-6 pb-20 md:grid-cols-2 md:gap-x-5 text-2xl md:gap-y-24 md:px-[12%] md:pb-44">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            >
              <p
                className="italic text-center leading-relaxed"
                style={{
                  backgroundImage:
                    'radial-gradient(56.91% 100% at 70.4% 100%, #007A74 0%, #00A19A 64.63%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                "After more than 30 years in the property sector, I've seen
                first-hand how the system fails, not only consumers, but all
                parties involved in the home moving process. Having spent over
                two decades as an estate agent, I know the frustration of
                working within a fragmented and inefficient system where no
                universal platform connecting stakeholders exists. Estate
                agents, whose job is to sell, are too often dragged into the
                conveyancing process simply because the industry lacks
                connectivity and transparency. Ultimately, they aren't the only
                ones who find themselves doing a job that was never there's to
                begin with. Lines are blurred and consumers are confused,
                stressed and tired. What should be the happiest time of their
                lives, slowly turns into a nightmare.
              </p>
              <p
                className="italic text-center leading-relaxed mt-12"
                style={{
                  backgroundImage:
                    'radial-gradient(56.91% 100% at 70.4% 100%, #00A19A  0%,  #007A74 64.63%,  #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Technology should already be enabling seamless communication and
                coordination, but instead, it’s people, primarily consumers,
                holding everything together. That’s why I founded umovingu, to
                fix these inefficiencies and finally put the power back into the
                hands of consumers. With umovingu, we’re building the future of
                moving—one that’s faster, clearer, and fairer for everyone."
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
      </section>

      {/* Scientists Section */}
      <section
        ref={scientistsRef}
        className="relative min-h-screen flex items-end"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 w-full pb-20">
          <div className="max-w-7xl mx-auto px-6 py-36 sm:px-8">
            {/* Main Quote */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isScientistsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                We're{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00A19A, #00c9bf)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  scientists
                </span>
              </h2>
            </motion.div>

            {/* Scientists Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {scientistValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 100 }}
                  animate={isScientistsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.6 + index * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="text-white"
                >
                  <h3 className="text-2xl font-bold mb-6 text-[#00A19A]">
                    {value.title}
                  </h3>
                  <p className="text-lg leading-relaxed font-light opacity-90">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Background Image */}
      <section
        ref={valuesRef}
        className="relative min-h-screen flex items-end"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 w-full pb-20">
          <div className="max-w-7xl mx-auto px-6 py-36 sm:px-8">
            {/* Main Quote */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                We're innovators
              </h2>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 100 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.6 + index * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="text-white"
                >
                  <h3 className="text-2xl font-bold mb-6 text-[#00A19A]">
                    {value.title}
                  </h3>
                  <p className="text-lg leading-relaxed font-light opacity-90">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={missionRef}
        className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-8xl mx-auto px-6 py-24 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
              It's not all <span className="text-gray-400">about us</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
              We're thankful for the opportunities the world affords us, and
              strive to improve things for others.
            </p>
          </motion.div>

          {/* Join Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="text-left">
              <h3 className="text-3xl font-light text-white mb-8">
                Join our team
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Explore careers
              </motion.button>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team collaboration"
                className="w-80 h-60 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
