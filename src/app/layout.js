import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://photoboothcanada.com'),
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
    url: 'https://photoboothcanada.com',
    siteName: 'Photobooth Canada',
    title: 'Photobooth Canada | Premium Photo Booth Rentals',
    description: 'Premium photo booth rentals across Canada for weddings, corporate events, and parties.',
    images: [
      {
        url: '/images/1.svg',
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
    images: ['/images/1.svg']
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
        <link rel="canonical" href="https://photoboothcanada.com" />
        <link rel="icon" href="/images/1.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/1.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#111827" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
