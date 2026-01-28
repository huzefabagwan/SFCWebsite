import './globals.css'
import { LanguageProvider } from '../lib/LanguageContext'

export const metadata = {
  title: 'Banana Cold Storage - Premium Storage Solutions',
  description:
    'Professional banana cold storage and ripening services with controlled temperature, hygiene, and quality assurance for farmers, traders, and wholesalers.',
  keywords:
    'banana cold storage, banana ripening, cold storage services, agricultural storage, banana warehouse',
  other: {
    'google-site-verification':
      'fskwl5u7xnM02Dw3l5YzXeRFdviSaCbrWu4GYKjz25M',
  },
  openGraph: {
    title: 'Banana Cold Storage',
    description: 'Premium cold storage and ripening services for bananas.',
    url: 'https://bananacoldstorage.com',
    siteName: 'Banana Cold Storage',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5Z2GH833T2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5Z2GH833T2');
            `,
          }}
        />
      </head>

      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
