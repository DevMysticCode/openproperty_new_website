
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    number: 50,
    suffix: '%',
    label: 'Faster Decisions',
    description: 'Reduce research time with centralized data'
  },
  {
    number: 10000,
    suffix: '+',
    label: 'Properties Analyzed',
    description: 'Comprehensive market coverage'
  },
  {
    number: 99.9,
    suffix: '%',
    label: 'Data Accuracy',
    description: 'Verified, reliable information'
  },
  {
    number: 500,
    suffix: '+',
    label: 'Active Users',
    description: 'Trusted by professionals'
  }
];

function AnimatedCounter({ 
  target, 
  suffix = '', 
  isInView,
  index
}: { 
  target: number; 
  suffix?: string; 
  isInView: boolean;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || typeof window === 'undefined') return;

    const element = countRef.current;
    if (!element) return;

    // GSAP counter animation tied to scroll position
    gsap.fromTo(element, 
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        delay: index * 0.2,
        ease: "power2.out",
        snap: { textContent: 1 },
        onUpdate: function() {
          const value = Math.floor(this.targets()[0].textContent);
          element.textContent = value.toLocaleString() + suffix;
        }
      }
    );
  }, [target, suffix, isInView, index]);

  return (
    <span ref={countRef} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (typeof window !== 'undefined' && sectionRef.current) {
      // Create parallax effect for the entire section
      gsap.to(sectionRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 pure-black-section overflow-hidden"
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00a19a 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #00c9bf 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#00a19a]/10 border border-[#00a19a]/20 mb-8 glassmorphism"
          >
            <span className="text-[#00a19a] font-semibold text-sm tracking-wide uppercase">
              Proven Impact
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight text-white">
            Numbers that{' '}
            <span className="bg-gradient-to-r from-[#00a19a] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
              speak volumes
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Our platform delivers measurable results that transform how property professionals work
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1.2, 
                delay: 0.5 + index * 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="premium-card p-8 rounded-2xl glassmorphism hover:bg-white/5 transition-all duration-700 will-change-transform relative overflow-hidden"
              >
                {/* Animated Number */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ 
                    duration: 1, 
                    delay: 0.7 + index * 0.2,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00a19a] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-700"
                >
                  <AnimatedCounter 
                    target={stat.number} 
                    suffix={stat.suffix}
                    isInView={isInView}
                    index={index}
                  />
                </motion.div>
                
                {/* Label */}
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 1, 
                    delay: 0.9 + index * 0.2,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="text-lg font-bold text-white mb-3 group-hover:text-[#00c4b8] transition-colors duration-500"
                >
                  {stat.label}
                </motion.h3>
                
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 1, 
                    delay: 1.1 + index * 0.2,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="text-gray-300 text-sm leading-relaxed font-light"
                >
                  {stat.description}
                </motion.p>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] origin-left"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00a19a]/5 to-[#00c9bf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 2, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Join the growing community of property professionals who trust OpenProperty 
            to accelerate their success
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] hover:from-[#008a85] hover:to-[#00a19a] text-white text-lg px-10 py-4 rounded-full shadow-xl font-semibold transition-all duration-300">
              See How It Works
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}