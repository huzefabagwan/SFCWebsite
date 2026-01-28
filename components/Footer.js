'use client'

import { useLanguage } from '../lib/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('header.logo')}</h3>
            <p className="text-gray-300">Premium cold storage and controlled ripening services. Owners: Siddique Bagwan, Sajid Bagwan.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{t('services.items')[0].title}</li>
              <li>{t('services.items')[1].title}</li>
              <li>{t('services.items')[2].title}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-secondary transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Banana Lane</li>
              <li>Tropic City, TC 12345</li>
              <li>Siddique Bagwan — +91 98230 29397</li>
              <li>Sajid Bagwan — +91 98222 23172</li>
              <li>bananacoldstorage99@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}