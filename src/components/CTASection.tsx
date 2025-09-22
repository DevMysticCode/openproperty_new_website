
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Mail, Calendar, Zap } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-br from-[#00a19a]/10 via-background to-[#00c9bf]/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#00a19a]/20 rounded-full"
            animate={{
              x: [0, 120, 0],
              y: [0, -80, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          {/* Main CTA Container */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative premium-card rounded-3xl glassmorphism overflow-hidden"
          >
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00a19a]/5 via-transparent to-[#00c9bf]/5"></div>
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <motion.div
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  repeatType: 'reverse',
                  ease: 'linear'
                }}
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(45deg, #00a19a 1px, transparent 1px),
                                   linear-gradient(-45deg, #00c9bf 1px, transparent 1px)`,
                  backgroundSize: '60px 60px'
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center py-20 px-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#00a19a]/10 border border-[#00a19a]/20 mb-8 glassmorphism"
              >
                <Zap className="h-5 w-5 text-[#00a19a] mr-2" />
                <span className="text-[#00a19a] font-semibold text-sm tracking-wide uppercase">
                  Ready to Transform?
                </span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight text-foreground"
              >
                Ready to transform your{' '}
                <span className="bg-gradient-to-r from-[#00a19a] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
                  property decisions?
                </span>
              </motion.h2>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Join thousands of property professionals who are already making smarter, 
                faster decisions with OpenProperty's comprehensive intelligence platform.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="will-change-transform"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] hover:from-[#008a85] hover:to-[#00a19a] text-white text-lg px-12 py-4 rounded-full shadow-xl group font-semibold transition-all duration-300"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    Get Started Free
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="will-change-transform"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/10 backdrop-blur-md border border-border hover:bg-white/20 text-lg px-12 py-4 rounded-full transition-all duration-700 group text-foreground hover:border-[#00a19a]/50 font-semibold"
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    Schedule Demo
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 1.1, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#00a19a] to-[#00c9bf] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                    10,000+
                  </div>
                  <div className="text-muted-foreground text-base">Properties Analyzed</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#00a19a] to-[#00c9bf] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                    500+
                  </div>
                  <div className="text-muted-foreground text-base">Active Users</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#00a19a] to-[#00c9bf] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                    99.9%
                  </div>
                  <div className="text-muted-foreground text-base">Data Accuracy</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#00a19a]/20 rounded-tl-2xl"></div>
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#00c9bf]/20 rounded-tr-2xl"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#00a19a]/20 rounded-bl-2xl"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#00c9bf]/20 rounded-br-2xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}