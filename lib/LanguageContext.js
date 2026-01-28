'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('hinglish')

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase()
    let detectedLang = 'hinglish'

    if (browserLang.startsWith('hi')) {
      detectedLang = 'hindi'
    } else if (browserLang.startsWith('mr')) {
      detectedLang = 'marathi'
    } else if (browserLang.startsWith('ur')) {
      detectedLang = 'urdu'
    } else if (browserLang.startsWith('en')) {
      detectedLang = 'english'
    }

    setLanguage(detectedLang)
  }, [])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}