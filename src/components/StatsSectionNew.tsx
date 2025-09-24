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
        <div className="flex flex-col items-center first:pb-30 md:first:pb-36">
          {/* Main number with gradient */}
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

          {/* "million" text */}
          <p className="-mt-[15%] mb-2 font-sharp text-fluid-88-200 font-normal leading-none -tracking-8 text-white">
            million
          </p>

          {/* Subtitle */}
          <p className="text-fluid-20-56 -tracking-4 text-black">
            lost every year
          </p>
        </div>

        <div className="flex flex-col items-center first:pb-30 md:first:pb-36">
          {/* Main number with gradient */}
          <p
            className="inline-block bg-gradient-text-white bg-clip-text pr-6 text-fluid-200-500 font-medium leading-none -tracking-8 text-transparent"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            24.3
          </p>

          {/* "million" text */}
          <p className="-mt-[15%] mb-2 font-sharp text-fluid-88-200 font-normal leading-none -tracking-8 text-white">
            %
          </p>

          {/* Subtitle */}
          <p className="text-fluid-20-56 -tracking-4 text-black">
            fall through rate
          </p>
        </div>

        <div className="flex flex-col items-center first:pb-30 md:first:pb-36 mt-36">
          {/* Main number with gradient */}
          <p
            className="inline-block bg-gradient-text-white bg-clip-text pr-6 text-fluid-200-500 font-medium leading-none -tracking-8 text-transparent"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            590
          </p>

          {/* "million" text */}
          <p className="-mt-[15%] mb-2 font-sharp text-fluid-88-200 font-normal leading-none -tracking-8 text-white">
            million
          </p>

          {/* Subtitle */}
          <p className="text-fluid-20-56 -tracking-4 text-black">
            costs consumers per year
          </p>
        </div>

        <div className="flex flex-col items-center first:pb-30 md:first:pb-36 mt-36">
          {/* Main number with gradient */}
          <p
            className="inline-block bg-gradient-text-white bg-clip-text pr-6 text-fluid-200-500 font-medium leading-none -tracking-8 text-transparent"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            1240
          </p>

          {/* "million" text */}
          <p className="-mt-[15%] mb-2 font-sharp text-fluid-88-200 font-normal leading-none -tracking-8 text-white">
            £
          </p>

          {/* Subtitle */}
          <p className="text-fluid-20-56 -tracking-4 text-black">
            average loss per failed recent transaction
          </p>
        </div>

        <div className="flex flex-col items-center first:pb-30 md:first:pb-36 mt-36">
          {/* Main number with gradient */}
          <p
            className="inline-block bg-gradient-text-white bg-clip-text pr-6 text-fluid-200-500 font-medium leading-none -tracking-8 text-transparent"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            76.7
          </p>

          {/* "million" text */}
          <p className="-mt-[15%] mb-2 font-sharp text-fluid-88-200 font-normal leading-none -tracking-8 text-white">
            %
          </p>

          {/* Subtitle */}
          <p className="text-fluid-20-56 -tracking-4 text-black">
            people prefer to use a digital solution
          </p>
        </div>
      </motion.div>
    </section>
  )
}
