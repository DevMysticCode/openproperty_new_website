
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "PropertyPlus", logo: "PP" },
  { name: "InvestWise", logo: "IW" },
  { name: "RealtyMax", logo: "RM" },
  { name: "DataVentures", logo: "DV" },
  { name: "PropTech", logo: "PT" },
  { name: "UrbanCapital", logo: "UC" },
  { name: "SmartInvest", logo: "SI" }
];

const testimonials = [
  {
    quote: "OpenProperty transformed our investment strategy completely. The data accuracy and insights are unmatched in the industry. We've increased our portfolio performance by 40% in just 6 months.",
    author: "Sarah Chen",
    role: "Portfolio Manager",
    company: "InvestWise Capital",
    rating: 5,
    image: "SC"
  },
  {
    quote: "Finally, a platform that centralizes everything we need. Our decision-making speed increased by 400% and we're identifying opportunities our competitors miss entirely.",
    author: "Michael Rodriguez",
    role: "Senior Analyst", 
    company: "PropertyPlus",
    rating: 5,
    image: "MR"
  },
  {
    quote: "The risk assessment tools alone have saved us from multiple bad investments. The AI predictions are incredibly accurate - worth every penny and more.",
    author: "Emma Thompson",
    role: "Investment Director",
    company: "RealtyMax Group",
    rating: 5,
    image: "ET"
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-muted/20 via-muted/10 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(45deg, #00a19a 1px, transparent 1px),
                             linear-gradient(-45deg, #00c9bf 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#00a19a]/10 border border-[#00a19a]/20 mb-12 glassmorphism"
          >
            <span className="text-[#00a19a] font-semibold text-sm tracking-wide uppercase">
              Trusted Worldwide
            </span>
          </motion.div>
          
          <p className="text-base text-muted-foreground mb-12 uppercase tracking-wider font-medium">
            Trusted by leading property professionals globally
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 1, 
                  delay: 0.4 + index * 0.1,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -6 }}
                  className="w-20 h-20 bg-gradient-to-r from-[#00a19a]/20 to-[#00c9bf]/20 rounded-2xl flex items-center justify-center group-hover:from-[#00a19a]/40 group-hover:to-[#00c9bf]/40 transition-all duration-700 glassmorphism group-hover:shadow-xl"
                >
                  <span className="font-bold text-xl text-[#00a19a] group-hover:text-[#00c9bf] transition-colors duration-500">
                    {client.logo}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight text-foreground">
            What our{' '}
            <span className="bg-gradient-to-r from-[#00a19a] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
              clients say
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Don't just take our word for it. Here's what property professionals 
            are saying about their experience with OpenProperty.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1.2, 
                delay: 1.3 + index * 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="group"
            >
              <motion.div 
                whileHover={{ y: -12, scale: 1.02 }}
                className="premium-card p-8 rounded-2xl glassmorphism hover:bg-card/90 hover:border-[#00a19a]/30 h-full will-change-transform relative overflow-hidden"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 1.5 + index * 0.2, duration: 1 }}
                  className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-[#00a19a]/20 to-[#00c9bf]/20 rounded-full flex items-center justify-center group-hover:from-[#00a19a]/30 group-hover:to-[#00c9bf]/30 transition-all duration-500"
                >
                  <Quote className="h-6 w-6 text-[#00a19a]" />
                </motion.div>
                
                {/* Rating Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.6 + index * 0.2 + i * 0.1, duration: 0.4 }}
                    >
                      <Star className="h-5 w-5 text-[#00a19a] fill-current" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-base mb-8 leading-relaxed font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-500">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg group-hover:shadow-xl transition-all duration-500 text-sm"
                  >
                    {testimonial.image}
                  </motion.div>
                  <div>
                    <div className="font-bold text-lg mb-1 group-hover:text-[#00a19a] transition-colors duration-500">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-muted-foreground font-medium text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00a19a]/5 to-[#00c9bf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 2.5, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 text-center"
        >
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#00a19a] to-[#00c9bf] bg-clip-text text-transparent mb-3">
              4.9/5
            </div>
            <div className="text-muted-foreground text-base">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#00a19a] to-[#00c9bf] bg-clip-text text-transparent mb-3">
              500+
            </div>
            <div className="text-muted-foreground text-base">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#00a19a] to-[#00c9bf] bg-clip-text text-transparent mb-3">
              98%
            </div>
            <div className="text-muted-foreground text-base">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}