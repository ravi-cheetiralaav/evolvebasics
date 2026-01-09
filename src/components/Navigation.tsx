'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, TruckIcon } from '@heroicons/react/24/outline'

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
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <TruckIcon className="h-8 w-8 text-red-600 group-hover:animate-truck-drive transition-all duration-300" />
                <div className="absolute -right-1 top-1 w-6 h-1 bg-gradient-to-r from-red-500 to-transparent rounded opacity-70 group-hover:animate-speed-lines"></div>
                <div className="absolute -right-2 top-3 w-4 h-0.5 bg-gradient-to-r from-red-400 to-transparent rounded opacity-50 group-hover:animate-speed-lines" style={{animationDelay: '0.1s'}}></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text group-hover:animate-slide-right">Evolve Basics</span>
                <span className="text-xs font-medium text-red-600 tracking-wide uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">Speed Meets Trust</span>
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