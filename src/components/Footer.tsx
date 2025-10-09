import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
  Instagram,
  Youtube,
  Music,
} from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Mobile App', href: '#mobile' },
    { name: 'API', href: '#api' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' },
    { name: 'Blog', href: '#blog' },
  ],
  resources: [
    { name: 'Documentation', href: '#docs' },
    { name: 'Help Center', href: '#help' },
    { name: 'Community', href: '#community' },
    { name: 'Status', href: '#status' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'GDPR', href: '#gdpr' },
  ],
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      ref={ref}
      className="relative bg-black border-t border-border/30 overflow-hidden py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00a19a 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #00c9bf 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00a19a]/20 rounded-full"
            animate={{
              x: [0, 80, 0],
              y: [0, -50, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 8 }}
                className="w-13 h-13 rounded-xl shadow-lg"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <span className="text-2xl font-bold tracking-tight text-white">
                umovingu
              </span>
            </div>

            <p className="text-gray-300 mb-4 max-w-lg leading-relaxed text-base font-light">
              The future of property intelligence. Centralized data, powerful
              analytics, and verified insights to transform your property
              decisions.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center text-gray-300 text-base group mb-4"
            >
              <Mail className="h-6 w-6 text-white mr-4" />
              <div>
                <div className="text-gray-400">hello@openproperty.io</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/company/umovingu/?viewAsMember=true',
                },
                { icon: Youtube, href: 'https://www.youtube.com/@umovingu' },
                {
                  icon: Instagram,
                  href: 'https://www.instagram.com/umovingu/',
                },
                { icon: FaTiktok, href: 'https://www.tiktok.com/@umovingu' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -6 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-r from-[#00a19a]/20 to-[#00c9bf]/20 rounded-xl flex items-center justify-center hover:from-[#00a19a]/40 hover:to-[#00c9bf]/40 transition-all duration-500 glassmorphism group"
                >
                  <social.icon className="h-6 w-6 text-gray-300 group-hover:text-[#00c9bf] transition-colors duration-500" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks)
            .slice(0, 3)
            .map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.2 + categoryIndex * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <h3 className="font-bold mb-6 text-lg text-white capitalize tracking-wide">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        target="_blank"
                        whileHover={{ x: 8, color: '#00c9bf' }}
                        className="text-gray-300 hover:text-[#00c9bf] transition-all duration-500 text-base block font-light"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-8"
        >
          <p className="text-gray-400 text-base mb-4 md:mb-0">
            &copy; 2025 OpenProperty. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 group"
          >
            <ArrowUp className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
