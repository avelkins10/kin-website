import Link from 'next/link'

const footerLinks = {
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
    { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-kin-dark-2 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/img/66a9738039d35d1b98168b8a_KIN-Logo---Black.png"
              alt="KIN Home"
              className="h-10 invert mb-4"
            />
            <p className="text-sm text-neutral-500 mb-6 max-w-xs">
              Powering homes with confidence since 2020. Solar, roofing, and HVAC across 10 states.
            </p>
            <div className="flex items-center gap-4 text-neutral-500">
              <span className="text-sm">882+ Reviews</span>
              <span className="text-kin-orange">★ 4.4</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-neutral-300 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-neutral-500 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} KIN Home, Inc. All rights reserved.
          </p>
          <p className="text-sm text-neutral-600">
            Licensed & Insured · BBB A+ Rated
          </p>
        </div>
      </div>
    </footer>
  )
}
