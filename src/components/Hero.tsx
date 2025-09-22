import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/button'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-white"
          >
            Finally, the future of property is in{' '}
            <span className="bg-gradient-to-r from-[#00a19a] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
              your hands.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg text-gray-300 leading-relaxed max-w-2xl font-light uppercase tracking-wider"
          >
            OUR CENTRALISED OPEN DATA AND PROPERTY INTELLIGENCE PLATFORM BRINGS
            TOGETHER ALL THE ESSENTIAL INFORMATION YOU NEED TO MAKE SMARTER AND
            FASTER PROPERTY DECISIONS.
          </motion.p>

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="will-change-transform"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] hover:from-[#008a85] hover:to-[#00a19a] text-white px-8 py-4 rounded-full shadow-xl group font-medium transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="will-change-transform"
            >
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300 group border border-white/20 hover:border-[#00a19a]/50"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div> */}
        </div>

        {/* Right 3D Torus Animation */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-[500px] h-[500px] flex items-center justify-center"
          >
            {/* 3D Torus Structure */}
            <div className="relative w-80 h-80">
              {/* Main Torus Ring */}
              {[...Array(36)].map((_, i) => (
                <motion.div
                  key={`torus-segment-${i}`}
                  className="absolute"
                  style={{
                    width: '20px',
                    height: '60px',
                    left: '50%',
                    top: '50%',
                    transformOrigin: '10px 160px',
                    transform: `translate(-50%, -50%) rotateZ(${i * 10}deg)`,
                  }}
                  animate={{
                    rotateX: [0, 360],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8 + i * 0.1,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.05,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: `linear-gradient(45deg, 
                        hsl(${180 + i * 5}, 70%, ${
                        60 + Math.sin(i * 0.3) * 20
                      }%), 
                        hsl(${200 + i * 3}, 80%, ${
                        70 + Math.cos(i * 0.2) * 15
                      }%))`,
                      boxShadow: `0 0 20px hsl(${180 + i * 5}, 70%, ${
                        60 + Math.sin(i * 0.3) * 20
                      }%, 0.6)`,
                      transform: `perspective(800px) rotateX(${
                        Math.sin(i * 0.2) * 30
                      }deg) rotateY(${Math.cos(i * 0.15) * 20}deg)`,
                    }}
                  />
                </motion.div>
              ))}

              {/* Inner Ring Details */}
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={`inner-ring-${i}`}
                  className="absolute"
                  style={{
                    width: '12px',
                    height: '40px',
                    left: '50%',
                    top: '50%',
                    transformOrigin: '6px 120px',
                    transform: `translate(-50%, -50%) rotateZ(${i * 15}deg)`,
                  }}
                  animate={{
                    rotateX: [360, 0],
                    rotateZ: [0, 360],
                  }}
                  transition={{
                    duration: 12 + i * 0.08,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.08,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: `linear-gradient(135deg, 
                        hsl(${160 + i * 8}, 80%, ${
                        70 + Math.sin(i * 0.4) * 15
                      }%), 
                        hsl(${190 + i * 6}, 90%, ${
                        80 + Math.cos(i * 0.3) * 10
                      }%))`,
                      boxShadow: `0 0 15px hsl(${160 + i * 8}, 80%, ${
                        70 + Math.sin(i * 0.4) * 15
                      }%, 0.5)`,
                      transform: `perspective(600px) rotateX(${
                        Math.cos(i * 0.25) * 25
                      }deg)`,
                    }}
                  />
                </motion.div>
              ))}

              {/* Outer Glow Ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <div
                  className="w-96 h-96 rounded-full border-2 opacity-30"
                  style={{
                    borderImage:
                      'linear-gradient(45deg, #00a19a, #00c9bf, #00e6d6, #00a19a) 1',
                    filter: 'blur(2px)',
                  }}
                />
              </motion.div>

              {/* Central Core */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  background:
                    'radial-gradient(circle, #00e6d6, #00c9bf, #00a19a)',
                  boxShadow: '0 0 40px #00c9bf, inset 0 0 20px #00a19a',
                }}
              />

              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: `hsl(${180 + i * 15}, 80%, 70%)`,
                    boxShadow: `0 0 10px hsl(${180 + i * 15}, 80%, 70%)`,
                  }}
                  animate={{
                    x: [
                      Math.cos(i * 0.5) * 200,
                      Math.cos(i * 0.5 + Math.PI) * 200,
                      Math.cos(i * 0.5) * 200,
                    ],
                    y: [
                      Math.sin(i * 0.5) * 200,
                      Math.sin(i * 0.5 + Math.PI) * 200,
                      Math.sin(i * 0.5) * 200,
                    ],
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 8 + i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Orbital Rings */}
              {[...Array(3)].map((_, ringIndex) => (
                <motion.div
                  key={`orbital-ring-${ringIndex}`}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-full opacity-20"
                  style={{
                    width: `${300 + ringIndex * 60}px`,
                    height: `${300 + ringIndex * 60}px`,
                    borderColor: '#00c9bf',
                    borderWidth: '1px',
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 15 + ringIndex * 5,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    scale: {
                      duration: 4 + ringIndex,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-[#00a19a] transition-colors"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-gradient-to-b from-[#00a19a] to-[#00c9bf] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
