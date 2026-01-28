'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '../lib/LanguageContext'

export default function Gallery() {
  const { t } = useLanguage()

  // Images must come from the provided `public/meme` folder per project rules.
  const images = [
    { src: '/meme/image11.jpg', alt: 'Image 11' },
    { src: '/meme/image12.jpeg', alt: 'Image 12' },
    { src: '/meme/image13.jpeg', alt: 'Image 13' },
    { src: '/meme/image14.jpeg', alt: 'Image 14' },
    { src: '/meme/image15.jpeg', alt: 'Image 15' },
    { src: '/meme/image16.png', alt: 'Image 16' },
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          {t('gallery.title')}
        </motion.h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-8">
          Bananas arrive from the farm in a green stage — not yet ready for sale. We place them
          in a controlled environment where temperature, humidity, and airflow are carefully
          managed. The ripening process begins slowly, like cooking: it takes time, balance,
          and control. Gradually the bananas change from green to yellow, flavor develops
          naturally, and quality is preserved. This controlled process ensures uniform ripening,
          better taste, and safe handling.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <Image src={image.src} alt={image.alt} width={400} height={300} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}