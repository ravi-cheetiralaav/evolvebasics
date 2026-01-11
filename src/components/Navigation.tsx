'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="glass-card fixed w-full z-50 top-4 left-4 right-4 mx-auto max-w-7xl">
      <div className="px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex flex-col items-start">
                <div className="relative w-16 h-10 flex items-center justify-start ml-6">
                  <Image 
                    src={`${process.env.NODE_ENV === 'production' ? '/evolvebasics' : ''}/images/logo.png`}
                    alt="Evolve Building Material Supplies Co. Logo" 
                    width={64} 
                    height={40} 
                    className="w-16 h-10 rounded object-contain group-hover:scale-110 transition-all duration-300"
                    priority
                    unoptimized
                  />
                </div>
                <span className="text-3xl font-bold text-red-600 group-hover:animate-slide-right leading-none -mt-3">EVOLVE</span>
                <span className="text-[0.6rem] font-medium text-black tracking-wide uppercase leading-tight -mt-0.5">BUILDING MATERIAL SUPPLIES CO.</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/20 rounded-lg"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-red-600 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 mt-4 pt-4 pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium hover:bg-white/20 rounded-lg transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}