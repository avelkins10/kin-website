'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/solar', label: 'Solar' },
  { href: '/roofing', label: 'Roofing' },
  { href: '/hvac', label: 'HVAC' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kin-warm-white/90 backdrop-blur-xl border-b border-kin-cream">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center">
          <img src="/img/66a9738039d35d1b98168b8a_KIN-Logo---Black.png" alt="KIN Home" className="h-8 md:h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className="px-4 py-2 text-sm font-medium text-kin-charcoal/60 hover:text-kin-charcoal transition-colors rounded-lg hover:bg-kin-cream/50">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/get-an-instant-estimate"
            className="bg-kin-orange hover:bg-kin-orange-light text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-orange-200/50">
            Get Free Estimate
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-kin-charcoal" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-kin-cream animate-fade-in-up">
          <nav className="px-6 py-4 space-y-1">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-4 py-3 text-base font-medium text-kin-charcoal/70 hover:text-kin-charcoal hover:bg-kin-cream/30 rounded-lg transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-kin-cream">
              <Link href="/get-an-instant-estimate" onClick={() => setOpen(false)}
                className="block w-full text-center bg-kin-orange text-white font-semibold py-3 rounded-full">
                Get Free Estimate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
