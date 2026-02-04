import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Noelle Laser | Premium Laser Hair Removal in Johannesburg',
    template: '%s | Noelle Laser',
  },
  description: 'Experience smooth, confident skin with Noelle Laser. Premium laser hair removal services in Johannesburg, South Africa. Safe, effective, and long-lasting results.',
  keywords: ['laser hair removal', 'Johannesburg', 'South Africa', 'beauty', 'skincare', 'hair removal', 'Sandton'],
  authors: [{ name: 'Noelle Laser' }],
  openGraph: {
    title: 'Noelle Laser | Premium Laser Hair Removal in Johannesburg',
    description: 'Experience smooth, confident skin with Noelle Laser. Premium laser hair removal services in Johannesburg, South Africa.',
    url: 'https://noellelaser.co.za',
    siteName: 'Noelle Laser',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noelle Laser | Premium Laser Hair Removal in Johannesburg',
    description: 'Experience smooth, confident skin with Noelle Laser. Premium laser hair removal services in Johannesburg, South Africa.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
