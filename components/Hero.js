'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../lib/LanguageContext'
import { useState, useEffect } from 'react'

export default function Hero() {
  const { t } = useLanguage()
  const [thoughtIndex, setThoughtIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setThoughtIndex((prev) => (prev + 1) % t('hero.thoughts').length)
    }, 5000) // Change every 5 seconds
    return () => clearInterval(interval)
  }, [t])

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-32 pt-40">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto"
        >
          {t('hero.description')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg italic mb-8 max-w-2xl mx-auto"
        >
          "{t('hero.thoughts')[thoughtIndex]}"
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-x-4"
        >
          <a href="#contact" className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block">{t('hero.getQuote')}</a>
          <a href="#about" className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors inline-block">{t('hero.learnMore')}</a>
        </motion.div>
      </div>
    </section>
  )
}