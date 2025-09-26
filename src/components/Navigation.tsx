'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './theme-provider'
import { Button } from './ui/button'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <div className="h-10rounded-xl shadow-lg">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-3xl font-bold tracking-tight">umovingu</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12 text-18">
            <Link to="/">
              <motion.div
                whileHover={{ y: -2 }}
                className="text-white hover:text-[#00a19a] transition-all duration-300 font-medium"
              >
                Home
              </motion.div>
            </Link>

            <Link to="/about">
              <motion.div
                whileHover={{ y: -2 }}
                className="text-white hover:text-[#00a19a] transition-all duration-300 font-medium cursor-pointer"
              >
                About Us
              </motion.div>
            </Link>
            <motion.a
              href="#services"
              whileHover={{ y: -2 }}
              className="text-white hover:text-[#00a19a] transition-all duration-300 font-medium"
            >
              Product
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ y: -2 }}
              className="text-white hover:text-[#00a19a] transition-all duration-300 font-medium"
            >
              Services
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ y: -2 }}
              className="text-white hover:text-[#00a19a] transition-all duration-300 font-medium"
            >
              Contact Us
            </motion.a>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 hover:bg-[#00a19a]/10 rounded-xl"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] hover:from-[#008a85] hover:to-[#00a19a] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                CONTACT US
              </Button>
            </motion.div> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
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
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-[#00a19a] transition-colors font-medium"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-[#00a19a] transition-colors font-medium"
                >
                  Services
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="justify-start p-0 h-auto font-medium text-muted-foreground hover:text-[#00a19a]"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-4 w-4 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
                <Button className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] hover:from-[#008a85] hover:to-[#00a19a] text-white font-semibold mt-4 rounded-full">
                  CONTACT
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
