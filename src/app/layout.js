import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://photoboothcanada.ca'),
  title: {
    default: 'Photobooth Canada | Premium Photo Booth Rentals Across Canada',
    template: '%s | Photobooth Canada'
  },
  description: 'Premium photo booth rentals across Canada for weddings, corporate events, and parties. Open air, mirror, and 360° booths with instant printing and custom layouts.',
  keywords: 'photo booth rental Canada, wedding photo booth, corporate photo booth, party photo booth, photo booth Toronto, photo booth Vancouver, photo booth Montreal',
  authors: [{ name: 'Photobooth Canada' }],
  creator: 'Photobooth Canada',
  publisher: 'Photobooth Canada',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://photoboothcanada.ca',
    siteName: 'Photobooth Canada',
    title: 'Photobooth Canada | Premium Photo Booth Rentals',
    description: 'Premium photo booth rentals across Canada for weddings, corporate events, and parties.',
    images: [
      {
        url: '/images/photobooth-canada-logo.png',
        width: 1200,
        height: 630,
        alt: 'Photobooth Canada - Premium Photo Booth Rentals'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photobooth Canada | Premium Photo Booth Rentals',
    description: 'Premium photo booth rentals across Canada for weddings, corporate events, and parties.',
    creator: '@photoboothcanada',
    images: ['/images/photobooth-canada-logo.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="canonical" href="https://photoboothcanada.ca" />
        <link rel="icon" href="/images/photobooth-canada-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/photobooth-canada-logo.png" />
        <link rel="shortcut icon" href="/images/photobooth-canada-logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#111827" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Photobooth Canada",
              "image": "https://photoboothcanada.ca/images/photobooth-canada-logo.png",
              "url": "https://photoboothcanada.ca",
              "telephone": "+1-416-555-0123",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.6532,
                "longitude": -79.3832
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 43.6532,
                  "longitude": -79.3832
                },
                "geoRadius": "100000"
              },
              "priceRange": "$$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              },
              "sameAs": [
                "https://www.facebook.com/photoboothcanada",
                "https://www.instagram.com/photoboothcanada"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
