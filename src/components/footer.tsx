import Link from 'next/link'

const cols = {
  Services: [
    { href: '/solar', label: 'Solar' },
    { href: '/roofing', label: 'Roofing' },
    { href: '/hvac', label: 'HVAC' },
    { href: '/get-an-instant-estimate', label: 'Get an Estimate' },
  ],
  Company: [
    { href: '/about', label: 'About & FAQs' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  Resources: [
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Our Work' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-and-conditions', label: 'Terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-kin-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <img src="/img/66a9738039d35d1b98168b8a_KIN-Logo---Black.png" alt="KIN Home" className="h-10 invert mb-4" />
            <p className="text-sm text-white/50 mb-4 max-w-xs leading-relaxed">
              Solar, roofing, and HVAC for homeowners who want it done right. Since 2020.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-400">★</span>
              <span className="text-white/70">4.4 · 882+ Google Reviews</span>
            </div>
          </div>
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white/80 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">© {new Date().getFullYear()} KIN Home, Inc. All rights reserved.</p>
          <p className="text-sm text-white/30">Licensed & Insured · BBB A+ Rated</p>
        </div>
      </div>
    </footer>
  )
}
