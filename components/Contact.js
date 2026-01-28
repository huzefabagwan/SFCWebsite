'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        // try to read error detail from server
        let msg = 'Failed to send message'
        try {
          const body = await response.json()
          msg = body.detail || body.message || JSON.stringify(body)
        } catch (e) {
          // ignore json parse errors
        }
        alert(msg)
        console.error('Server error:', response.status, msg)
      }
    } catch (error) {
      alert('Error sending message. Please try again later.')
      console.error('Network error:', error)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          {t('contact.title')}
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-secondary mr-4" />
                <div>
                  <h3 className="font-semibold text-primary">{t('contact.addressTitle')}</h3>
                  <p className="text-gray-600">{t('locations.address')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-secondary mr-4" />
                <div>
                  <h3 className="font-semibold text-primary">{t('contact.phoneTitle')}</h3>
                  <p className="text-gray-600">{t('contact.phone')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-secondary mr-4" />
                <div>
                  <h3 className="font-semibold text-primary">{t('contact.emailTitle')}</h3>
                  <p className="text-gray-600">{t('contact.email')}</p>
                </div>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <textarea
                name="message"
                placeholder={t('contact.message')}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              ></textarea>
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors w-full"
              >
                {t('contact.send')}
              </button>
            </motion.form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center space-x-4"
          >
            <a
              href="tel:+919823029397"
              className="inline-flex items-center bg-secondary text-primary px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('contact.callNow')}
            </a>
            <a
              href="https://wa.me/919823029397?text=Hello%20Siddique%20Fruit%20Company"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('contact.whatsapp')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}