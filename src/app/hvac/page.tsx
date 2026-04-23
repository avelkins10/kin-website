import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Shield, Wind, Zap, ThermometerSun, DollarSign, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Installation & Replacement | KIN Home',
  description: 'KIN Home installs new AC and heating systems for homeowners — standalone or bundled with solar. In-house crews. Right-sized systems. Free consultation.',
  openGraph: {
    title: 'HVAC Installation & Replacement | KIN Home',
    description: 'KIN Home installs new AC and heating systems for homeowners — standalone or bundled with solar. In-house crews. Right-sized systems. Free consultation.',
  },
  alternates: { canonical: 'https://www.kinhome.com/hvac' },
}

const hvacSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Residential HVAC Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'KIN Home',
    url: 'https://www.kinhome.com',
    telephone: '+18552640363',
    email: 'support@kinhome.com',
    address: { '@type': 'PostalAddress', addressCountry: 'US' },
    areaServed: ['FL', 'CA', 'TX', 'IA', 'MO', 'CO', 'OH', 'KY', 'UT', 'AR'],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.4', reviewCount: '909' },
  },
  serviceType: 'HVAC Installation and Replacement',
  description: 'KIN Home installs new air conditioning and heating systems for homeowners across 10 states. Standalone or bundled with solar. In-house crews, right-sized systems.',
  offers: { '@type': 'Offer', name: 'Free HVAC Consultation', price: '0', priceCurrency: 'USD' },
}

const standalonePoints = [
  { bold: 'Load calculation first', text: ' — we size the system for your actual home, not a guess' },
  { bold: 'Equipment matched to your climate', text: ' — what works in Florida is different from Colorado' },
  { bold: 'In-house installation', text: ' — no subcontractors, no third party to chase if something needs attention' },
  { bold: 'Workmanship warranty', text: ' — backed by KIN' },
  { bold: 'One number to call', text: ' — before, during, and after installation' },
]

const comfortPlanPoints = [
  'Full HVAC assessment and right-sized system recommendation',
  'High-efficiency equipment installation',
  'Energy load analysis — so you know what your system actually costs to run',
  'Integration planning with solar, if you\'re adding panels or already have them',
  'Ongoing support through KIN\'s in-house service team',
]

export default function HvacPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hvacSchema) }} />

      <Header />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/646ba412d82177fca24f9e7f_DSC03962.jpg" alt="KIN Home HVAC technician installing new air conditioning system" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-kin-sage/10 text-kin-sage text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Wind size={14} /> HVAC Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text leading-tight mb-6">
              New AC or heating?<br /><span className="text-kin-sage">We handle that. Solar optional.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed max-w-lg">
              KIN installs HVAC systems — new air conditioning, new heating, the full Comfort Plan — for any homeowner who needs it. No solar required. If you want to add panels to power your new system for free, we can do that too.
            </p>
            <Link href="/get-an-instant-estimate"
              className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
              Get a Free HVAC Quote <ArrowRight size={16} />
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-sm text-kin-text-secondary mt-6">
              <span className="flex items-center gap-1"><Star size={14} className="text-kin-gold fill-kin-gold" /> 4.4★ · 909+ reviews</span>
              <span className="flex items-center gap-1"><Shield size={14} className="text-kin-gray-blue" /> Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Standalone HVAC */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                New system. Right size. No runaround.
              </h2>
              <div className="space-y-4 text-kin-text-secondary leading-relaxed mb-8">
                <p>
                  If your AC is aging out, breaking down, or just not keeping up — we replace it. KIN installs high-efficiency HVAC systems sized correctly for your home, handled entirely by our in-house team.
                </p>
                <p className="font-medium text-kin-text">
                  No solar pitch unless you want one. If you need a new HVAC system, that&apos;s the job we&apos;ll do.
                </p>
              </div>
              <p className="text-sm font-semibold text-kin-text mb-3">What that looks like in practice:</p>
              <div className="space-y-3">
                {standalonePoints.map(point => (
                  <div key={point.bold} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-kin-sage flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-kin-text"><strong>{point.bold}</strong>{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/img/646bab8ae3028f716f7521eb_kin-truck---walking.jpg" alt="KIN Home service crew arriving for HVAC installation" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Comfort Plan */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl border border-kin-beige p-8">
                <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-4">What it includes</p>
                <div className="space-y-3">
                  {comfortPlanPoints.map(point => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="text-kin-sage flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-kin-text">{point}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-kin-text-secondary mt-6 leading-relaxed">
                  The result: a system designed for your home, installed correctly, and backed by{' '}
                  <Link href="/about" className="text-kin-sage hover:underline">one company</Link>.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                The KIN Comfort Plan.
              </h2>
              <p className="text-kin-text-secondary leading-relaxed">
                The Comfort Plan is for homeowners who want to think about heating and cooling as part of their home&apos;s bigger energy picture — not just swap one box for another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Bundle Upgrade */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-4">
              Your AC runs on electricity. Here&apos;s how you make that electricity free.
            </h2>
            <p className="text-kin-text-secondary leading-relaxed">
              You don&apos;t have to{' '}
              <Link href="/solar" className="text-kin-sage hover:underline">add solar</Link>.
              {' '}But if you&apos;re replacing your HVAC, it&apos;s worth knowing what happens when both are designed together.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Zap, title: 'Sized for Your Real Load', desc: 'Your solar is sized to cover your real load — including the new, more efficient HVAC.' },
              { icon: ThermometerSun, title: 'Peak Efficiency', desc: 'Your HVAC runs at peak efficiency, reducing what it draws from the grid.' },
              { icon: DollarSign, title: 'Combined Savings', desc: 'Your monthly savings reflect both improvements, not just one.' },
            ].map(b => (
              <div key={b.title} className="text-center p-8 rounded-2xl bg-kin-light-gray border border-kin-beige">
                <div className="w-14 h-14 rounded-2xl bg-kin-sage/10 flex items-center justify-center mx-auto mb-5">
                  <b.icon size={24} className="text-kin-sage" />
                </div>
                <h3 className="text-lg font-semibold text-kin-text mb-2">{b.title}</h3>
                <p className="text-sm text-kin-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-4 text-kin-text-secondary text-sm leading-relaxed">
            <p>
              In Florida and across the South, cooling accounts for 40–50% of a home&apos;s energy use in summer. In California, heating and cooling together can represent the majority of the monthly bill. Solar generates electricity. HVAC consumes it. When both are designed as a system, the math works.
            </p>
            <p>
              Homeowners who bundle HVAC and solar through KIN consistently see the most significant reductions in monthly energy costs of any product combination we offer.
            </p>
            <p>
              Already{' '}
              <Link href="/roofing" className="text-kin-sage hover:underline">replacing your roof too</Link>?
              {' '}We handle that as well.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Financing */}
      <section className="py-16 bg-kin-beige">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-kin-text mb-4">Flexible financing. $0 down available.</h2>
          <p className="text-kin-text-secondary leading-relaxed mb-4">
            Standalone HVAC systems can be financed through KIN&apos;s lending partners. For homeowners who add solar, $0 down lease and PPA options are available — you pay for the energy you use, not the equipment.
          </p>
          <p className="text-sm text-kin-text-secondary/70 italic">
            For solar lease and PPA customers: Federal energy tax benefits under Section 48E are passed through by our financing partners as lower monthly rates, through December 31, 2027.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get a free HVAC consultation.</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            20 minutes. We&apos;ll assess your current system, tell you what the right replacement looks like, and — only if you&apos;re interested — show you what adding solar would do to your monthly bill.
          </p>
          <Link href="/get-an-instant-estimate"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-all">
            Get a Free HVAC Quote <ArrowRight size={18} />
          </Link>
          <div className="mt-6">
            <a href="tel:+18552640363" className="text-white/40 text-sm hover:text-white/60 transition-colors inline-flex items-center gap-1.5">
              <Phone size={14} /> Call us at (855) 264-0363
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
