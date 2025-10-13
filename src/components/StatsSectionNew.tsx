// components/StatsSection.tsx
import { motion } from 'framer-motion'

interface StatsSectionProps {
  delay?: number
}

export default function StatsSectionNew({ delay = 0 }: StatsSectionProps) {
  return (
    <section className="relative">
      {/* Background glows */}
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

      {/* Main content */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay, ease: [0.23, 1, 0.32, 1] }}
        className="container relative z-20 flex flex-col items-center pb-20 pt-32 md:pb-52 md:pt-80 mx-auto"
      >
        <div className="flex flex-col items-start mb-8 w-full max-w-7xl">
          <h1 className="text-white font-light text-heading text-left">
            THE PROBLEM
          </h1>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <p className="mx-auto leading-relaxed font-light text-2xl sm:text-3xl lg:text-4xl font-light mb-8 tracking-tight leading-tight text-white">
            The real cost of a broken market, where the numbers speak for
            themselves, and no one speaks for the consumer.
          </p>
        </div>

        {/* First item - kept as is with original sizes */}
        <div className="flex flex-col items-center first:pb-30 md:first:pb-36">
          <p
            className="inline-block bg-gradient-text-white bg-clip-text pr-6 text-fluid-200-500 font-medium leading-none -tracking-8 text-transparent"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            1000
          </p>
          <p className="-mt-[15%] mb-2 font-sharp text-fluid-88-200 font-normal leading-none -tracking-8 text-white">
            million
          </p>
          <p className="text-fluid-20-56 -tracking-4 text-black">
            is what the economy loses per year for failed transactions
          </p>
        </div>

        {/* Container for the four items in a single row */}
        <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-16 mt-36">
          {/* 24.3% item */}
          <div className="flex flex-col items-center">
            <p
              className="inline-block bg-gradient-text-white bg-clip-text pr-6 text-fluid-sm-100-300 font-medium leading-none -tracking-8 text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              24.3
            </p>
            <p className="-mt-[15%] mb-2 font-sharp text-fluid-sm-44-100 font-normal leading-none -tracking-8 text-white">
              %
            </p>
            <p className="text-fluid-sm-16-28 -tracking-4 text-black text-center">
              of property transactions fall through in the UK
            </p>
          </div>

          {/* 590 million item */}
          <div className="flex flex-col items-center">
            <p
              className="inline-block bg-gradient-text-white bg-clip-text pr-6 text-fluid-sm-100-300 font-medium leading-none -tracking-8 text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              590
            </p>
            <p className="-mt-[15%] mb-2 font-sharp text-fluid-sm-44-100 font-normal leading-none -tracking-8 text-white">
              million
            </p>
            <p className="text-fluid-sm-16-28 -tracking-4 text-black text-center">
              is what failed transactions cost consumers per year
            </p>
          </div>

          {/* 1240 pounds item */}
          <div className="flex flex-col items-center">
            <p
              className="inline-block bg-gradient-text-white bg-clip-text pr-6 text-fluid-sm-100-300 font-medium leading-none -tracking-8 text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              1240
            </p>
            <p className="-mt-[15%] mb-2 font-sharp text-fluid-sm-44-100 font-normal leading-none -tracking-8 text-white">
              pounds
            </p>
            <p className="text-fluid-sm-16-28 -tracking-4 text-black text-center">
              the average loss per failed transaction
            </p>
          </div>

          {/* 76.7% item */}
          <div className="flex flex-col items-center">
            <p
              className="inline-block bg-gradient-text-white bg-clip-text pr-6 text-fluid-sm-100-300 font-medium leading-none -tracking-8 text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              76.7
            </p>
            <p className="-mt-[15%] mb-2 font-sharp text-fluid-sm-44-100 font-normal leading-none -tracking-8 text-white">
              %
            </p>
            <p className="text-fluid-sm-16-28 -tracking-4 text-black text-center">
              are open to the creation of a digital solution
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
