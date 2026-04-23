import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SavingsCalculator from '@/components/savings-calculator'
import Link from 'next/link'
import { Star, ArrowRight, CheckCircle, Sun, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation for Homeowners | KIN Home',
  description: 'KIN Home installs residential solar panels in FL, CA, and 8 states. In-house crews, $0 down options, and 909 reviews. Get your free solar estimate.',
}

const benefits = [
  { title: 'Cut Your Electric Bill', desc: 'Most homeowners save $100-200/month from day one. Generate free power for 25+ years.' },
  { title: 'Increase Home Value', desc: 'Homes with solar sell for more. It\'s one of the best ROI home improvements you can make.' },
  { title: 'Lock In Your Rate', desc: 'Energy costs rise 3-5% every year. Solar locks in your price today.' },
  { title: 'In-House Installation', desc: 'No subcontractors. Our certified crews install your system — typically in one day.' },
  { title: '25+ Year Warranty', desc: 'Your system is warrantied for decades. We stand behind every install.' },
  { title: '$0 Down Financing', desc: 'Multiple financing options available. Start saving immediately with no upfront cost.' },
]

const flCities = [
  { name: 'Pensacola', slug: 'pensacola' },
  { name: 'Fort Myers', slug: 'fort-myers' },
  { name: 'Tampa', slug: 'tampa' },
  { name: 'Orlando', slug: 'orlando' },
  { name: 'Jacksonville', slug: 'jacksonville' },
  { name: 'Sarasota', slug: 'sarasota' },
]
const caCities = [
  { name: 'San Jose', slug: 'san-jose' },
  { name: 'Fremont', slug: 'fremont' },
  { name: 'San Francisco', slug: 'san-francisco' },
  { name: 'Sacramento', slug: 'sacramento' },
]

export default function SolarPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/6261e9983f4f1e24f8efb86c_shutterstock_1561073777-2-copy-2.jpg"
            alt="Home with solar panels" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-kin-sage/10 text-kin-sage text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Sun size={14} /> Residential Solar
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text leading-tight mb-6">
              Solar panels that <span className="text-kin-sage">pay for themselves.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed">
              Custom-designed for your home. Installed by our in-house crews. Saving you money from day one. 4,000+ homes powered across 10 states.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-kin-text-secondary">
              <span className="flex items-center gap-1"><Star size={14} className="text-kin-gold fill-kin-gold" /> 4.4★ · 909+ reviews</span>
              <span className="flex items-center gap-1"><Shield size={14} className="text-kin-gray-blue" /> BBB A+</span>
              <span className="flex items-center gap-1"><Zap size={14} className="text-kin-sage" /> $0 down</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <SavingsCalculator />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Why Solar?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Your energy bill isn&apos;t getting cheaper.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="flex gap-3 p-5 rounded-2xl bg-kin-light-gray border border-kin-beige">
                <CheckCircle size={18} className="text-kin-sage mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-kin-text text-sm mb-1">{b.title}</h3>
                  <p className="text-sm text-kin-text-secondary leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28 bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Service Areas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Find solar in your city.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-kin-text mb-4">Florida</h3>
              <div className="space-y-2">
                {flCities.map(c => (
                  <Link key={c.slug} href={`/solar/florida/${c.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-kin-beige hover:shadow-md transition-all group">
                    <span className="text-sm font-medium text-kin-text">{c.name}, FL</span>
                    <ArrowRight size={14} className="text-kin-sage group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-kin-text mb-4">California</h3>
              <div className="space-y-2">
                {caCities.map(c => (
                  <Link key={c.slug} href={`/solar/california/${c.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-kin-beige hover:shadow-md transition-all group">
                    <span className="text-sm font-medium text-kin-text">{c.name}, CA</span>
                    <ArrowRight size={14} className="text-kin-sage group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to go solar?</h2>
          <p className="text-white/60 text-lg mb-8">Free estimate. $0 down financing. In-house installation.</p>
          <Link href="/get-an-instant-estimate"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-all">
            Get Your Free Estimate <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
