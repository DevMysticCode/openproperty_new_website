
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Bell, BarChart3, PieChart, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const appScreens = [
  {
    id: 'dashboard',
    title: 'Portfolio Dashboard',
    description: 'Monitor all your properties and investments in one comprehensive view with real-time data',
    features: ['Real-time valuations', 'Performance tracking', 'Market insights'],
    mockup: {
      header: 'Portfolio Overview',
      stats: [
        { label: 'Total Value', value: '$2.4M', change: '+12.5%' },
        { label: 'Properties', value: '24', change: '+3' },
        { label: 'ROI', value: '18.2%', change: '+2.1%' }
      ],
      chart: true,
      properties: [
        { name: 'Downtown Loft', value: '$450K', status: 'rising' },
        { name: 'Suburban Villa', value: '$680K', status: 'stable' },
        { name: 'City Apartment', value: '$320K', status: 'rising' }
      ]
    }
  },
  {
    id: 'analytics',
    title: 'Market Analytics',
    description: 'Deep insights into market trends and investment opportunities with AI-powered predictions',
    features: ['Predictive modeling', 'Comparative analysis', 'Risk assessment'],
    mockup: {
      header: 'Market Insights',
      stats: [
        { label: 'Market Growth', value: '+8.4%', change: 'YoY' },
        { label: 'Avg. Price/sqft', value: '$285', change: '+5.2%' },
        { label: 'Days on Market', value: '32', change: '-12%' }
      ],
      chart: true,
      heatmap: true
    }
  },
  {
    id: 'alerts',
    title: 'Smart Alerts',
    description: 'Never miss important market changes or investment opportunities with intelligent notifications',
    features: ['Price alerts', 'Market notifications', 'Custom triggers'],
    mockup: {
      header: 'Recent Alerts',
      alerts: [
        { type: 'price', message: 'Downtown Loft value increased 3.2%', time: '2h ago' },
        { type: 'market', message: 'New properties in your area', time: '4h ago' },
        { type: 'opportunity', message: 'Investment opportunity detected', time: '6h ago' }
      ]
    }
  },
  {
    id: 'search',
    title: 'Property Search',
    description: 'Find and analyze properties with advanced filtering and AI recommendations',
    features: ['AI-powered search', 'Advanced filters', 'Instant valuations'],
    mockup: {
      header: 'Property Search',
      searchResults: [
        { address: '123 Main St', price: '$425K', sqft: '1,200', beds: 2 },
        { address: '456 Oak Ave', price: '$380K', sqft: '1,100', beds: 2 },
        { address: '789 Pine Rd', price: '$520K', sqft: '1,400', beds: 3 }
      ]
    }
  }
];

const features = [
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Get instant notifications on market shifts and your saved properties."
  },
  {
    icon: BarChart3,
    title: "On-The-Go Analytics",
    description: "Access critical property data and insights from anywhere."
  },
  {
    icon: PieChart,
    title: "Portfolio Tracking",
    description: "Monitor the performance of all your assets in a single, simple view."
  },
  {
    icon: Download,
    title: "Offline Access",
    description: "Download property reports and access key data even without internet."
  }
];

export default function MobileAppSection() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && galleryRef.current) {
      // Horizontal scroll animation tied to vertical scroll
      const gallery = galleryRef.current;
      const screens = gallery.children;
      
      gsap.to(screens, {
        xPercent: -100 * (screens.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: gallery,
          pin: true,
          scrub: 1,
          snap: 1 / (screens.length - 1),
          end: () => "+=" + gallery.offsetWidth,
          onUpdate: (self) => {
            const progress = self.progress;
            const newActiveScreen = Math.round(progress * (screens.length - 1));
            if (newActiveScreen !== activeScreen) {
              setActiveScreen(newActiveScreen);
            }
          }
        }
      });
    }
  }, [activeScreen]);

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % appScreens.length);
  };

  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + appScreens.length) % appScreens.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #00a19a 1px, transparent 1px),
                           linear-gradient(-45deg, #00c9bf 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8" ref={ref}>
        {/* Section Header */}
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
              Mobile Experience
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight text-white">
            Powerful Property Intelligence,{' '}
            <span className="bg-gradient-to-r from-[#00a19a] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
              In Your Pocket
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Take the full power of OpenProperty with you. Make informed decisions 
            on the go with our beautifully designed mobile experience.
          </p>
        </motion.div>

        {/* Horizontal Scroll Gallery */}
        <div className="relative mb-20">
          <div 
            ref={galleryRef}
            className="flex w-[400vw] horizontal-scroll"
          >
            {appScreens.map((screen, index) => (
              <div 
                key={screen.id}
                className="w-screen flex items-center justify-center px-16 horizontal-scroll-item"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl">
                  {/* App Mockup */}
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="relative flex justify-center"
                  >
                    <div className="app-mockup animate-float-gentle">
                      {/* Phone Frame */}
                      <div className="w-72 h-[580px] bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-[3rem] p-3 shadow-2xl shadow-[#00a19a]/40">
                        {/* Screen */}
                        <div className="w-full h-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black rounded-[2.5rem] overflow-hidden relative">
                          {/* Status Bar */}
                          <div className="h-10 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] flex items-center justify-between px-6">
                            <span className="text-white text-sm font-medium">9:41</span>
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-2 bg-white/80 rounded-sm"></div>
                              <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                              <div className="w-4 h-2 bg-white/40 rounded-sm"></div>
                            </div>
                          </div>
                          
                          {/* Dynamic App Content */}
                          <div className="p-6 space-y-4 h-full bg-gray-50 dark:bg-gray-900">
                            <div className="text-center">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                {screen.mockup.header}
                              </h3>
                            </div>
                            
                            {/* Stats Grid */}
                            {screen.mockup.stats && (
                              <div className="grid grid-cols-2 gap-3">
                                {screen.mockup.stats.map((stat, statIndex) => (
                                  <div
                                    key={statIndex}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700 shadow-sm"
                                  >
                                    <div className="text-lg font-bold text-[#00a19a]">{stat.value}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                                    {stat.change && (
                                      <div className="text-xs text-green-600">{stat.change}</div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {/* Chart Placeholder */}
                            {screen.mockup.chart && (
                              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="h-24 bg-gradient-to-r from-[#00a19a]/20 to-[#00c9bf]/20 rounded-lg flex items-end justify-center">
                                  <BarChart3 className="h-12 w-12 text-[#00a19a]/60" />
                                </div>
                              </div>
                            )}
                            
                            {/* Property List */}
                            {screen.mockup.properties && (
                              <div className="space-y-2">
                                {screen.mockup.properties.map((property, propIndex) => (
                                  <div
                                    key={propIndex}
                                    className="flex items-center space-x-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                                  >
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] rounded-lg"></div>
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-900 dark:text-white text-sm">{property.name}</div>
                                      <div className="text-xs text-gray-500">{property.value}</div>
                                    </div>
                                    <div className={`w-2 h-2 rounded-full ${
                                      property.status === 'rising' ? 'bg-green-500' : 'bg-yellow-500'
                                    }`}></div>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {/* Alerts */}
                            {screen.mockup.alerts && (
                              <div className="space-y-2">
                                {screen.mockup.alerts.map((alert, alertIndex) => (
                                  <div
                                    key={alertIndex}
                                    className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                                  >
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">{alert.message}</div>
                                    <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Features & Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="space-y-8"
                  >
                    {/* Dynamic Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                        {screen.title}
                      </h3>
                      <p className="text-base text-gray-300 mb-6 leading-relaxed font-light">
                        {screen.description}
                      </p>
                      
                      <div className="space-y-3">
                        {screen.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-4"
                          >
                            <div className="w-3 h-3 bg-[#00a19a] rounded-full"></div>
                            <span className="text-gray-300 text-sm font-light">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          size="lg" 
                          className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] hover:from-[#008a85] hover:to-[#00a19a] text-white text-sm px-8 py-4 rounded-xl shadow-xl group font-semibold transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <span className="text-sm font-bold">📱</span>
                            </div>
                            <div className="text-left">
                              <div className="text-xs opacity-90">Download on the</div>
                              <div className="text-sm font-bold">App Store</div>
                            </div>
                          </div>
                        </Button>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-sm px-8 py-4 rounded-xl transition-all duration-500 group text-white hover:border-[#00a19a]/50 font-semibold"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-[#00a19a]/20 rounded-lg flex items-center justify-center">
                              <span className="text-sm font-bold">🤖</span>
                            </div>
                            <div className="text-left">
                              <div className="text-xs opacity-70">Get it on</div>
                              <div className="text-sm font-bold">Google Play</div>
                            </div>
                          </div>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center justify-center space-x-4"
        >
          {appScreens.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveScreen(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeScreen 
                  ? 'bg-[#00a19a] scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}