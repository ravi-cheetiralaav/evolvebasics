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
  title: 'Evolve Building Material Supplies Co. - Efficient Transport Solutions for Everyone',
  description: 'Evolve Building Material Supplies Co. - Your reliable partner for sand supply, building materials, and transport solutions. Serving construction companies and industrial businesses across India.',
  keywords: 'building materials supplier India, sand supplier Hyderabad, construction materials Telangana, transport solutions India, logistics services Hyderabad, coal supplier India, limestone supplier, gypsum supplier, iron ore supplier, bulk material transport, construction sand supply, river sand supplier, manufactured sand, industrial material supply, port logistics India, construction company supplier, infrastructure materials, cement industry supplier, steel industry materials, power plant coal supply, raw materials transport, building materials logistics, industrial logistics Hyderabad, bulk cargo transport, material handling services, construction materials distributor, mining materials supplier, aggregate supplier India, quarry materials, construction supply chain, industrial supply chain, material procurement services, bulk delivery services, construction materials Andhra Pradesh, building supplies South India, material transport services, heavy cargo logistics, construction equipment supplies, industrial raw materials, bulk material handling, construction project supplies, infrastructure project materials, roadway construction materials, concrete production materials, steel production raw materials',
  authors: [{ name: 'Evolve Building Material Supplies Co.' }],
  creator: 'Evolve Building Material Supplies Co.',
  publisher: 'Evolve Building Material Supplies Co.',
  robots: 'index, follow',
  openGraph: {
    title: 'Evolve Building Material Supplies Co. - Transport & Material Supply Solutions',
    description: 'Leading building materials supplier in Hyderabad, India. Professional sand supply, coal, limestone, gypsum, iron ore, and transport logistics for construction, infrastructure, and industrial projects across Telangana and Andhra Pradesh.',
    url: 'https://evolvebasics.in',
    siteName: 'Evolve Building Material Supplies Co.',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolve Building Material Supplies Co. - Transport Solutions',
    description: 'Leading supplier of construction materials, sand, coal, limestone & industrial transport services in Hyderabad. Serving construction & infrastructure projects across India.',
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