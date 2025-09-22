
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Database, Clock, AlertTriangle, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const problems = [
  {
    icon: Database,
    title: "Fragmented Data Sources",
    description: "Property information scattered across multiple platforms makes research time-consuming and incomplete.",
    impact: "73% of professionals waste 5+ hours weekly"
  },
  {
    icon: Clock,
    title: "Time-Consuming Research",
    description: "Hours spent manually gathering data from different sources delays crucial investment decisions.",
    impact: "Average 12 hours per property analysis"
  },
  {
    icon: AlertTriangle,
    title: "Unverified Information",
    description: "Lack of data accuracy and reliability leads to poor decision-making and increased risks.",
    impact: "42% report data inconsistencies"
  },
  {
    icon: Target,
    title: "Limited Market Insights",
    description: "Without comprehensive analytics, it's difficult to identify optimal investment opportunities.",
    impact: "Missing 60% of market opportunities"
  }
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && sectionRef.current) {
      // Parallax effect for background elements
      gsap.to(sectionRef.current.querySelector('.gradient-mesh-premium'), {
        yPercent: -50,
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
      className="relative py-24 overflow-hidden dark-section-with-texture"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 gradient-mesh-premium"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 mb-8 glassmorphism"
          >
            <span className="text-red-400 font-semibold text-sm tracking-wide uppercase">
              The Problem
            </span>
          </motion.div>
          
          <div className="text-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight text-white">
              <span>Cut through the </span>
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                chaos of property data
              </span>
            </h2>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Traditional property research is broken. Multiple data sources, unreliable information, 
            and time-consuming processes hold back smart investors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1.2, 
                delay: 0.5 + index * 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="group"
            >
              <motion.div 
                whileHover={{ y: -12, scale: 1.02 }}
                className="premium-card p-8 rounded-2xl glassmorphism hover:bg-white/5 hover:border-red-400/30 transition-all duration-700 h-full will-change-transform relative overflow-hidden"
              >
                {/* Animated Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="relative w-16 h-16 mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-3xl blur-xl"></div>
                  <div className="relative w-full h-full bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center group-hover:from-red-500/40 group-hover:to-orange-500/40 transition-all duration-500">
                    <problem.icon className="h-8 w-8 text-red-400" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-red-400 transition-colors duration-500 text-white">
                  {problem.title}
                </h3>
                
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  {problem.description}
                </p>
                
                {/* Impact Stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.8 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 glassmorphism"
                >
                  <span className="text-red-400 font-semibold text-sm">{problem.impact}</span>
                </motion.div>

                {/* Hover Effect Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-200 origin-center"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Solution Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center justify-center p-12 rounded-2xl glassmorphism max-w-4xl mx-auto premium-card bg-gradient-to-r from-[#00a19a]/10 via-[#00c9bf]/10 to-[#00a19a]/10"
          >
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.8, duration: 1 }}
                className="w-16 h-16 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] rounded-2xl flex items-center justify-center mx-auto mb-8 animate-pulse-glow"
              >
                <Target className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-6 leading-tight text-white">
                Our platform delivers verified, centralized data and powerful analytics{' '}
                <span className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] bg-clip-text text-transparent">
                  in one place
                </span>
              </h3>
              
              <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed font-light">
                Stop wasting time on fragmented research. Make smarter property decisions with comprehensive, 
                real-time intelligence at your fingertips.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}