'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '../lib/LanguageContext'
import { languageNames } from '../lib/translations'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md fixed w-full z-10"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-bold text-primary">{t('header.logo')}</Link>
          <p className="text-sm text-gray-600 mt-1 max-w-md">
            {t('header.tagline')}
          </p>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">{t('nav.about')}</a>
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">{t('nav.services')}</a>
          <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">{t('nav.gallery')}</a>
          <a href="#locations" className="text-gray-700 hover:text-primary transition-colors">{t('nav.locations')}</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">{t('nav.contact')}</a>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded border"
          >
            {Object.entries(languageNames).map(([key, name]) => (
              <option key={key} value={key}>{name}</option>
            ))}
          </select>
        </nav>
        <button className="md:hidden text-primary">Menu</button>
      </div>
    </motion.header>
  )
}