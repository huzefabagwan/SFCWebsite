'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../lib/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          {t('about.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          {t('about.description')}
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {t('about.cards').map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : index === 1 ? 0 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}