'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { motion } from 'framer-motion'
import { useLanguage } from '../lib/LanguageContext'

const containerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 20.5937, // Example: Mumbai, India - adjust for actual location
  lng: 78.9629
}

export default function Locations() {
  const { t } = useLanguage()

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          {t('locations.title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Main Facility</h3>
            <p className="mb-4 text-gray-600">Located in the heart of major banana growing regions, our main facility offers state-of-the-art storage solutions with capacity for thousands of tons.</p>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium">Location 1 — Kanhaya Kunj</h4>
                <p className="text-gray-700"><strong>Address:</strong> Marimata Mandir, Bagwan Gali, Kanhaya Kunj, Bhusawal, Maharashtra 425201</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 98230 29397 / +91 98222 23172</p>
              </div>
              <div>
                <h4 className="text-xl font-medium">Location 2 — Talele Colony</h4>
                <p className="text-gray-700"><strong>{t('locations.address')}</strong></p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 98230 29397 / +91 98222 23172</p>
              </div>
              <p className="text-gray-700"><strong>Email:</strong> bananacoldstorage99@gmail.com</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY_HERE' ? (
              <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            ) : (
              // Fallback: simple Google Maps embed by address (works without Maps JS key)
              <div className="w-full h-96">
                <iframe
                  title="Location Map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    'Marimata Mandir, Bagwan Gali, Kanhaya Kunj, Bhusawal, Maharashtra 425201'
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}