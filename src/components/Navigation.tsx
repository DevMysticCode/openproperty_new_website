'use client'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from './theme-provider'
import { Button } from './ui/button'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [textColor, setTextColor] = useState('white')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)

      // Get all sections that might have light backgrounds
      const lightSections = document.querySelectorAll('.light-bg-section')
      let isOnLightBg = false

      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        // Check if navigation is overlapping with light background section
        if (rect.top <= 100 && rect.bottom >= 100) {
          isOnLightBg = true
        }
      })

      setTextColor(isOnLightBg ? 'black' : 'white')
    }

    // Add a small delay before setting up scroll listener to avoid conflicts
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initial check
    }, 100)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  // Handle hash scrolling when component mounts or location changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    }
  }, [location])

  if (!mounted) return null

  const textColorClass =
    textColor === 'black'
      ? 'text-black hover:text-[#00a19a]'
      : 'text-white hover:text-[#00a19a]'

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glassmorphism border-b border-[#00a19a]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="h-10 rounded-xl">
                <img
                  src={textColor === 'black' ? '/logo.svg' : '/logo.svg'}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={`text-3xl font-bold tracking-tight ${textColorClass}`}
              >
                umovingu
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12 text-18">
            <Link to="/">
              <motion.div
                whileHover={{ y: -2 }}
                className={`transition-all duration-300 font-medium ${textColorClass}`}
              >
                Home
              </motion.div>
            </Link>

            <Link to="/about">
              <motion.div
                whileHover={{ y: -2 }}
                className={`transition-all duration-300 font-medium cursor-pointer ${textColorClass}`}
              >
                About Us
              </motion.div>
            </Link>

            <Link to="/products">
              <motion.div
                whileHover={{ y: -2 }}
                className={`transition-all duration-300 font-medium ${textColorClass}`}
              >
                Product
              </motion.div>
            </Link>

            <Link to="/contact">
              <motion.div
                whileHover={{ y: -2 }}
                className={`transition-all duration-300 font-medium ${textColorClass}`}
              >
                Contact Us
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${
                textColor === 'black' ? 'text-black' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border/50 mt-4 pt-4 pb-6"
            >
              <div className="flex flex-col space-y-4">
                <Link
                  to="/about"
                  className={`transition-colors font-medium ${textColorClass}`}
                >
                  About Us
                </Link>
                <Link
                  to="/products"
                  className={`transition-colors font-medium ${textColorClass}`}
                >
                  Products
                </Link>
                <Link
                  to="/contact"
                  className={`transition-colors font-medium ${textColorClass}`}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
