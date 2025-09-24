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
        src="/default_glow.webp"
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
            lost every year
          </p>
        </div>

        {/* Container for the four items in a single row */}
        <div className="flex flex-row flex-wrap justify-center gap-6 md:gap-8 mt-8">
          {/* 24.3% item */}
          <div className="flex flex-col items-center flex-1 min-w-[180px] max-w-[240px]">
            <p
              className="inline-block bg-gradient-text-white bg-clip-text pr-4 text-fluid-xs-40-100 font-medium leading-none -tracking-5 text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              24.3
            </p>
            <p className="-mt-[15%] mb-1 font-sharp text-fluid-xs-18-40 font-normal leading-none -tracking-5 text-white">
              %
            </p>
            <p className="text-fluid-xs-12-16 -tracking-2 text-black text-center px-2">
              fall through rate
            </p>
          </div>

          {/* 590 million item */}
          <div className="flex flex-col items-center flex-1 min-w-[180px] max-w-[240px]">
            <p
              className="inline-block bg-gradient-text-white bg-clip-text pr-4 text-fluid-xs-40-100 font-medium leading-none -tracking-5 text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              590
            </p>
            <p className="-mt-[15%] mb-1 font-sharp text-fluid-xs-18-40 font-normal leading-none -tracking-5 text-white">
              million
            </p>
            <p className="text-fluid-xs-12-16 -tracking-2 text-black text-center px-2">
              costs consumers per year
            </p>
          </div>

          {/* 1240 pounds item */}
          <div className="flex flex-col items-center flex-1 min-w-[180px] max-w-[240px]">
            <p
              className="inline-block bg-gradient-text-white bg-clip-text pr-4 text-fluid-xs-40-100 font-medium leading-none -tracking-5 text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              1240
            </p>
            <p className="-mt-[15%] mb-1 font-sharp text-fluid-xs-18-40 font-normal leading-none -tracking-5 text-white">
              pounds
            </p>
            <p className="text-fluid-xs-12-16 -tracking-2 text-black text-center px-2">
              average loss per failed transaction
            </p>
          </div>

          {/* 76.7% item */}
          <div className="flex flex-col items-center flex-1 min-w-[180px] max-w-[240px]">
            <p
              className="inline-block bg-gradient-text-white bg-clip-text pr-4 text-fluid-xs-40-100 font-medium leading-none -tracking-5 text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              76.7
            </p>
            <p className="-mt-[15%] mb-1 font-sharp text-fluid-xs-18-40 font-normal leading-none -tracking-5 text-white">
              %
            </p>
            <p className="text-fluid-xs-12-16 -tracking-2 text-black text-center px-2">
              people prefer digital solution
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
