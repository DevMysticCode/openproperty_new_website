
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { BarChart3, Building2, Zap, Shield, TrendingUp, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: BarChart3,
    title: "Market Analytics",
    description: "Advanced analytics and insights to identify trends, opportunities, and risks in real-time with AI-powered predictions.",
    gradient: "from-[#00a19a] to-[#00c4b8]",
    stats: "98% accuracy rate"
  },
  {
    icon: Building2,
    title: "Portfolio Management",
    description: "Comprehensive tools to track, analyze, and optimize your entire property portfolio performance across all markets.",
    gradient: "from-[#008a85] to-[#00a19a]",
    stats: "Track 1000+ properties"
  },
  {
    icon: Zap,
    title: "Instant Valuations",
    description: "AI-powered property valuations with accuracy that beats traditional appraisal methods by leveraging real-time data.",
    gradient: "from-[#00c4b8] to-[#00e6d6]",
    stats: "Sub-second results"
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Comprehensive risk analysis using verified data to protect your investment decisions and minimize exposure.",
    gradient: "from-[#00a19a] to-[#007a75]",
    stats: "99.9% data accuracy"
  },
  {
    icon: TrendingUp,
    title: "Predictive Modeling",
    description: "Machine learning algorithms predict market movements and property value changes up to 12 months in advance.",
    gradient: "from-[#00c9bf] to-[#00a19a]",
    stats: "12-month forecasts"
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Deep neighborhood insights including demographics, amenities, and development plans that impact property values.",
    gradient: "from-[#007a75] to-[#00c4b8]",
    stats: "50+ data points"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  useEffect(() => {
    if (typeof window !== 'undefined' && sectionRef.current) {
      // SVG icon draw animation
      const icons = sectionRef.current.querySelectorAll('.feature-icon');
      icons.forEach((icon, index) => {
        gsap.fromTo(icon, 
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: 0.5 + index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: icon,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 light-section overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-mesh-premium opacity-30"></div>

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
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#00a19a]/10 border border-[#00a19a]/20 mb-8 glassmorphism"
          >
            <span className="text-[#00a19a] font-semibold text-sm tracking-wide uppercase">
              Powerful Features
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight text-foreground">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-[#00a19a] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
              dominate property
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Our comprehensive platform combines cutting-edge technology with verified data 
            to give you the ultimate competitive advantage in property investment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1.2, 
                delay: 0.3 + index * 0.15,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="group cursor-pointer"
            >
              <motion.div 
                whileHover={{ y: -16, scale: 1.03 }}
                className="relative premium-card p-8 rounded-2xl glassmorphism hover:bg-card/90 hover:border-[#00a19a]/30 overflow-hidden h-full will-change-transform"
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-1000`}></div>
                
                {/* Animated Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className={`feature-icon inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-700 relative overflow-hidden`}
                >
                  <feature.icon className="h-8 w-8 text-white relative z-10" />
                  
                  {/* Icon Glow Effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00a19a] group-hover:to-[#00c9bf] group-hover:bg-clip-text transition-all duration-700">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-base leading-relaxed mb-6 font-light">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-[#00a19a]/10 border border-[#00a19a]/20 group-hover:bg-[#00a19a]/20 group-hover:border-[#00a19a]/40 transition-all duration-500 glassmorphism"
                >
                  <span className="text-[#00a19a] font-semibold text-sm">{feature.stats}</span>
                </motion.div>

                {/* Hover Effect Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00a19a] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c9bf] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-200 origin-center"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#00a19a]/20 group-hover:border-[#00a19a]/60 transition-colors duration-500 rounded-tr-2xl"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 2, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center justify-center p-12 rounded-2xl glassmorphism max-w-4xl mx-auto premium-card bg-gradient-to-r from-[#00a19a]/10 via-[#00c9bf]/10 to-[#00a19a]/10"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 leading-tight text-foreground">
                Experience property intelligence{' '}
                <span className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] bg-clip-text text-transparent">
                  like never before
                </span>
              </h3>
              
              <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                Join thousands of property professionals who have transformed their decision-making 
                process with our comprehensive intelligence platform.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] hover:from-[#008a85] hover:to-[#00a19a] text-white text-lg px-10 py-4 rounded-full shadow-xl font-semibold transition-all duration-300"
              >
                Start Your Free Trial
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}