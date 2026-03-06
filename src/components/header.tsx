'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/solar', label: 'Solar' },
  { href: '/roofing', label: 'Roofing' },
  { href: '/hvac', label: 'HVAC' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kin-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/img/66a9738039d35d1b98168b8a_KIN-Logo---Black.png"
            alt="KIN Home"
            className="h-8 md:h-10 invert"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+18005551234" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
            <Phone size={14} />
            <span className="hidden lg:inline">Call Us</span>
          </a>
          <Link
            href="/get-an-instant-estimate"
            className="bg-kin-orange hover:bg-kin-orange-light text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/20"
          >
            Get Free Estimate
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-kin-dark border-t border-white/5 animate-fade-in-up">
          <nav className="px-6 py-4 space-y-1">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="/get-an-instant-estimate"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-kin-orange hover:bg-kin-orange-light text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
