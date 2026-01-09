import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Evolve Basics - Efficient Transport Solutions for Everyone',
  description: 'Reliable purchase partner for sand supply, material supply, and transport solutions. Serving industrial businesses, ports, and construction companies across India.',
  keywords: 'transport solutions, material supplier, sand supplier, logistics services, construction materials, industrial transport, reliable purchase partner',
  authors: [{ name: 'Evolve Basics' }],
  creator: 'Evolve Basics',
  publisher: 'Evolve Basics',
  robots: 'index, follow',
  openGraph: {
    title: 'Evolve Basics - Transport & Material Supply Solutions',
    description: 'Your reliable partner for efficient transport solutions, sand supply, and material logistics across India.',
    url: 'https://evolvebasics.in',
    siteName: 'Evolve Basics',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolve Basics - Transport Solutions',
    description: 'Reliable transport and material supply solutions for industrial businesses and construction companies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}