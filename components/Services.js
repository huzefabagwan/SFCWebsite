'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../lib/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          {t('services.title')}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t('services.items').map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-6xl mb-6">{service.title.split(' ')[0]}</div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}