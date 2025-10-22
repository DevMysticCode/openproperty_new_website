import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CircleCheck as CheckCircle,
  User,
  Building,
  MessageSquare,
} from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'
import { Button } from './ui/button'
import ChipsScene from './ChipsScene'
import CTASectionNew from './CTASectionNew'
import ScrollProgressBar from './ScrollProgressBar'
import PoweredByFooter from './PoweredByFooter'

import { MessageCircle, Share2 } from 'lucide-react'

const hearAboutOptions = [
  'Google Search',
  'Social Media',
  'Referral from Friend',
  'Industry Event',
  'Online Advertisement',
  'News Article',
  'Other',
]

export default function ContactPage() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const contactInfoRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' })
  const isContactInfoInView = useInView(contactInfoRef, {
    once: true,
    margin: '-100px',
  })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    message: '',
    hearAbout: '',
    consent: false,
  })

  const [focusedField, setFocusedField] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section with Animated Logo */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex items-center justify-center w-full"
        >
          {/* src="https://my.spline.design/glassbuttonsinspiredbyreijopalmiste-2HjSVliCbO304GWbkNHuRZKQ/" */}
          <ChipsScene
            src="https://my.spline.design/abstractnirvana-YCPN2swW4b7MIb9UQYscHdb6/"
            height="100vh"
          />
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          className="absolute text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight tracking-tight mb-8"
          >
            <span className="text-white">Ready When</span>{' '}
            <span
              className="italic font-light"
              style={{
                background:
                  'linear-gradient(135deg, #00857E, #00A19A, #4DC4BD, #E0F2F1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingLeft: '8px',
              }}
            >
              You Are.
            </span>
          </motion.h1>
        </motion.div>
      </section>
      <ScrollProgressBar />
      {/* Creative Contact Form Section */}
      <section
        ref={formRef}
        className="relative py-24 pt-48 bg-gradient-to-b from-black via-[#00a19a] to-[#4DC4BD] overflow-hidden light-bg-section pb-32 last:mb-32 last:pb-0 md:pb-52 last:md:mb-52"
      >
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00a19a]/20 via-transparent to-[#00c9bf]/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00e6d6]/10 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative premium-card rounded-3xl glassmorphism overflow-hidden"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00a19a] via-[#00c9bf] to-[#00e6d6] rounded-3xl p-1">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>

              <div className="relative z-10 p-12">
                {!isSubmitted ? (
                  <div>
                    {/* Form Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="text-center mb-12"
                    >
                      <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00a19a] via-[#00c9bf] to-[#00e6d6] bg-clip-text text-transparent">
                        Start Your Journey
                      </h2>
                      <p className="text-gray-600 text-lg font-light">
                        Transform your property decisions with our intelligence
                        platform
                      </p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Name Fields - Creative Layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="relative group"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#00a19a]/20 to-[#00c9bf]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            animate={{
                              scale: focusedField === 'firstName' ? 1.05 : 1,
                            }}
                          />
                          <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 group-hover:border-[#00a19a]/50 transition-all duration-500">
                            <label className="text-sm font-semibold text-gray-700 flex items-center mb-4">
                              <User className="h-4 w-4 mr-2" />
                              First Name*
                            </label>
                            <motion.input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('firstName')}
                              onBlur={() => setFocusedField('')}
                              required
                              className="w-full bg-transparent text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-[#00a19a] outline-none pb-2 text-lg transition-all duration-300"
                              placeholder="Enter your first name"
                              whileFocus={{ scale: 1.02 }}
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="relative group"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#00c9bf]/20 to-[#00e6d6]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            animate={{
                              scale: focusedField === 'lastName' ? 1.05 : 1,
                            }}
                          />
                          <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 group-hover:border-[#00c9bf]/50 transition-all duration-500">
                            <label className="text-sm font-semibold text-gray-700 flex items-center mb-4">
                              <User className="h-4 w-4 mr-2" />
                              Last Name*
                            </label>
                            <motion.input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('lastName')}
                              onBlur={() => setFocusedField('')}
                              required
                              className="w-full bg-transparent text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-[#00c9bf] outline-none pb-2 text-lg transition-all duration-300"
                              placeholder="Enter your last name"
                              whileFocus={{ scale: 1.02 }}
                            />
                          </div>
                        </motion.div>
                      </div>

                      {/* Company Name - Full Width Creative */}
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="relative group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#00a19a]/20 via-[#00c9bf]/20 to-[#00e6d6]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          animate={{
                            scale: focusedField === 'companyName' ? 1.05 : 1,
                          }}
                        />
                        <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 group-hover:border-[#00a19a]/50 transition-all duration-500">
                          <label className="text-sm font-semibold text-gray-700 flex items-center mb-4">
                            <Building className="h-4 w-4 mr-2" />
                            Company Name*
                          </label>
                          <motion.input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('companyName')}
                            onBlur={() => setFocusedField('')}
                            required
                            className="w-full bg-transparent text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-[#00a19a] outline-none pb-2 text-lg transition-all duration-300"
                            placeholder="Your company name"
                            whileFocus={{ scale: 1.02 }}
                          />
                        </div>
                      </motion.div>

                      {/* Email - Creative Design */}
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="relative group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#00c9bf]/20 to-[#00a19a]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          animate={{
                            scale: focusedField === 'email' ? 1.05 : 1,
                          }}
                        />
                        <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 group-hover:border-[#00c9bf]/50 transition-all duration-500">
                          <label className="text-sm font-semibold text-gray-700 flex items-center mb-4">
                            <Mail className="h-4 w-4 mr-2" />
                            Email Address*
                          </label>
                          <motion.input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField('')}
                            required
                            className="w-full bg-transparent text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-[#00c9bf] outline-none pb-2 text-lg transition-all duration-300"
                            placeholder="your.email@company.com"
                            whileFocus={{ scale: 1.02 }}
                          />
                        </div>
                      </motion.div>

                      {/* Message - Large Creative Textarea */}
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="relative group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-[#00a19a]/20 via-[#00c9bf]/20 to-[#00e6d6]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          animate={{
                            scale: focusedField === 'message' ? 1.05 : 1,
                          }}
                        />
                        <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 group-hover:border-[#00a19a]/50 transition-all duration-500">
                          <label className="text-sm font-semibold text-gray-700 flex items-center mb-4">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            How Can We Help?*
                          </label>
                          <motion.textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField('')}
                            required
                            rows={6}
                            className="w-full bg-transparent text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-[#00a19a] outline-none p-4 text-lg rounded-xl transition-all duration-300 resize-none"
                            placeholder="Tell us about your property intelligence needs..."
                            whileFocus={{ scale: 1.02 }}
                          />
                        </div>
                      </motion.div>

                      {/* How Did You Hear About Us - Creative Dropdown */}
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1 }}
                        className="relative group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#00e6d6]/20 to-[#00a19a]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          animate={{
                            scale: focusedField === 'hearAbout' ? 1.05 : 1,
                          }}
                        />
                        <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 group-hover:border-[#00e6d6]/50 transition-all duration-500">
                          <label className="text-sm font-semibold text-gray-700 mb-4 block">
                            How Did You Hear About Us?
                          </label>
                          <motion.select
                            name="hearAbout"
                            value={formData.hearAbout}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('hearAbout')}
                            onBlur={() => setFocusedField('')}
                            className="w-full bg-white text-gray-900 border border-gray-300 focus:border-[#00e6d6] outline-none p-4 text-lg rounded-xl transition-all duration-300"
                            whileFocus={{ scale: 1.02 }}
                          >
                            <option value="" className="bg-white">
                              Please Select
                            </option>
                            {hearAboutOptions.map((option) => (
                              <option
                                key={option}
                                value={option}
                                className="bg-white"
                              >
                                {option}
                              </option>
                            ))}
                          </motion.select>
                        </div>
                      </motion.div>

                      {/* Consent Checkbox - Creative Design */}
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="relative group"
                      >
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group-hover:border-[#00a19a]/30 transition-all duration-500">
                          <div className="flex items-start space-x-4">
                            <motion.input
                              type="checkbox"
                              name="consent"
                              checked={formData.consent}
                              onChange={handleInputChange}
                              required
                              className="mt-1 w-5 h-5 text-[#00a19a] bg-white border-2 border-gray-300 rounded focus:ring-[#00a19a] focus:ring-2"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            />
                            <label className="text-sm text-gray-700 leading-relaxed">
                              By submitting this form, I consent to the
                              processing of the personal data that I provide
                              OpenProperty in accordance with and as described
                              in the{' '}
                              <a
                                href="#"
                                className="text-[#00a19a] underline hover:text-[#00c9bf] transition-colors"
                              >
                                Privacy Policy
                              </a>
                              .*
                            </label>
                          </div>
                        </div>
                      </motion.div>

                      {/* Creative Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="pt-8 text-center"
                      >
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative overflow-hidden bg-gradient-to-r from-[#00a19a] via-[#00c9bf] to-[#00e6d6] text-white text-lg px-16 py-5 rounded-full shadow-2xl font-semibold transition-all duration-300 group"
                        >
                          {/* Button Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#00a19a] via-[#00c9bf] to-[#00e6d6] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                          {/* Button Content */}
                          <div className="relative flex items-center justify-center">
                            <Send className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                            Send Message
                          </div>

                          {/* Animated Border */}
                          <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                        </motion.button>
                      </motion.div>
                    </form>
                  </div>
                ) : (
                  /* Creative Success Message */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.3,
                        duration: 1,
                        type: 'spring',
                        bounce: 0.5,
                      }}
                      className="w-24 h-24 bg-gradient-to-r from-[#00a19a] to-[#00c9bf] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                    >
                      <CheckCircle className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-[#00a19a] to-[#00c9bf] bg-clip-text text-transparent mb-6">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Thank you for reaching out! Our team will get back to you
                      within 24 hours with personalized insights for your
                      property intelligence needs.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-[#00a19a] to-[#00c9bf] hover:from-[#008a85] hover:to-[#00a19a] text-white px-8 py-3 rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <ScrollProgressBar />
      {/* Contact Information Section */}
      <section
        ref={contactInfoRef}
        className="relative py-24 pt-48 last:mb-32 last:pb-0 md:pb-52 last:md:mb-52 bg-gradient-to-b from-white to-gray-50 overflow-hidden light-bg-section"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isContactInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight leading-tight text-black">
              Other ways to{' '}
              <span className="bg-gradient-to-r from-[#00A19A] via-[#00c4b8] to-[#00e6d6] bg-clip-text text-transparent">
                reach us
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'info@openproperty.com',
                description: 'Send us an email anytime',
                gradient: 'from-[#00a19a] to-[#00c9bf]',
                type: 'standard',
              },
              {
                title: 'Join Us',
                content: '+44 (754) 016-9372',
                description: 'Connect with us on WhatsApp',
                gradient: 'from-[#00c9bf] to-[#00e6d6]',
                type: 'whatsapp',
              },
              {
                title: 'Check our socials',
                content: '@openproperty',
                description: 'Follow us on social media',
                gradient: 'from-[#00e6d6] to-[#00a19a]',
                type: 'social',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 100 }}
                animate={isContactInfoInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + index * 0.2,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="premium-card p-8 rounded-2xl glassmorphism hover:bg-card/90 hover:border-[#00A19A]/30 text-center h-full will-change-transform relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-2xl`}
                  ></div>

                  {item.type === 'whatsapp' ? (
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-700`}
                    >
                      <svg
                        className="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.464" />
                      </svg>
                    </motion.div>
                  ) : item.type === 'social' ? (
                    <>
                      <div className="flex space-x-1 justify-center">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-700`}
                        >
                          {/* Instagram */}
                          <svg
                            className="h-6 w-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-700`}
                        >
                          {/* Facebook */}
                          <svg
                            className="h-6 w-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-700`}
                        >
                          {/* Twitter */}
                          <svg
                            className="h-6 w-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    // Multiple Social Media Icons

                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-700`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </motion.div>
                  )}

                  <h3 className="text-xl font-bold mb-4 leading-tight text-[#00A19A] group-hover:text-[#00A19A] transition-colors duration-500">
                    {item.title}
                  </h3>

                  <p className="text-lg font-semibold text-[#00A19A] mb-2">
                    {item.content}
                  </p>

                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                  ></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASectionNew />
      <PoweredByFooter />
      <Footer />
    </div>
  )
}
