'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Clock } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

export default function Highlights() {
  const { t } = useLanguage()

  const highlights = [
    { icon: Shield, title: t('highlights.items')[0] },
    { icon: Award, title: t('highlights.items')[1] },
    { icon: Users, title: t('highlights.items')[2] },
    { icon: Clock, title: t('highlights.items')[3] },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          {t('highlights.title')}
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white p-6 rounded-lg shadow-md"
            >
              <item.icon className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}