import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Shield, Wind, Zap, ThermometerSun, DollarSign, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Installation & Comfort Plan | KIN Home',
  description: 'KIN Home\'s Comfort Plan pairs high-efficiency HVAC with solar — lower bills, one crew, one payment. $0 down financing. Get a free Comfort Plan quote.',
}

export default function HvacPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/646ba412d82177fca24f9e7f_DSC03962.jpg" alt="HVAC system installation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-kin-sage/10 text-kin-sage text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Wind size={14} /> HVAC Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text leading-tight mb-6">
              Need a new AC?<br /><span className="text-kin-sage">We do that.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed max-w-lg">
              KIN installs high-efficiency HVAC systems — standalone or bundled with solar. Need a new AC? We do that. Want to pair it with solar and cut your bill to near zero? We do that too. The Comfort Plan is our premium bundle, but we&apos;re happy to handle HVAC on its own.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-an-instant-estimate"
                className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
                Get a Comfort Plan Quote <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-kin-text-secondary mt-6">
              <span className="flex items-center gap-1"><Star size={14} className="text-kin-gold fill-kin-gold" /> 4.4★ · 882+ reviews</span>
              <span className="flex items-center gap-1"><Shield size={14} className="text-kin-gray-blue" /> Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort Plan Pitch */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">The Comfort Plan</p>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                Standalone HVAC or the full Comfort Plan.
              </h2>
              <div className="space-y-4 text-kin-text-secondary leading-relaxed">
                <p>
                  Need a new heating or cooling system? KIN installs high-efficiency HVAC equipment with in-house crews — no subcontractors, no runaround. You don&apos;t need solar to work with us.
                </p>
                <p>
                  But if you want to go further, the Comfort Plan pairs your new HVAC with solar — so the biggest electricity draw in your home runs on free energy from your roof. Sized correctly, installed by the same company, and financed as one package.
                </p>
                <p className="font-medium text-kin-text">
                  Either way: lower bills, a more comfortable home, and one company responsible for all of it.
                </p>
              </div>
            </div>
            <div>
              <img src="/img/646bab8ae3028f716f7521eb_kin-truck---walking.jpg" alt="KIN Home crew" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Solar + HVAC Case */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Solar + HVAC</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Your AC runs on electricity. Make that electricity free.</h2>
            <p className="text-kin-text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
              In Florida and across the South, cooling accounts for 40-50% of a home&apos;s energy use in summer. In California, heating and cooling together can represent the majority of a household&apos;s electricity bill.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Sized for Your Real Load', desc: 'Your solar system is sized to cover your real load — not an underestimate. When both are designed together, nothing gets left out.' },
              { icon: ThermometerSun, title: 'Peak Efficiency', desc: 'Your HVAC runs at peak efficiency, reducing what it consumes. Modern high-SEER systems use dramatically less energy than what\'s in most homes.' },
              { icon: DollarSign, title: 'Combined Savings', desc: 'Your monthly savings reflect both improvements, not just one. Homeowners who bundle solar + HVAC report the most consistent bill reductions.' },
            ].map(b => (
              <div key={b.title} className="text-center p-8 rounded-2xl bg-white border border-kin-beige">
                <div className="w-14 h-14 rounded-2xl bg-kin-sage/10 flex items-center justify-center mx-auto mb-5">
                  <b.icon size={24} className="text-kin-sage" />
                </div>
                <h3 className="text-lg font-semibold text-kin-text mb-2">{b.title}</h3>
                <p className="text-sm text-kin-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Financing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">$0 down. One monthly payment.</h2>
          <p className="text-kin-text-secondary leading-relaxed mb-4">
            The Comfort Plan uses the same financing options as our solar installations — including $0 down lease and PPA options where you pay for the energy you use, not the equipment. For homeowners who want to own the system outright, loan options are available through our lending partners.
          </p>
          <p className="text-sm text-kin-text-secondary/70 italic">
            For lease and PPA customers: Federal energy tax benefits under Section 48E are passed through by our financing partners in the form of lower rates, through December 31, 2027.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stop treating your energy bills like they&apos;re fixed.</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            They&apos;re not. A free Comfort Plan consultation takes about 20 minutes and gives you a clear picture of what you&apos;d save with solar, HVAC, or both.
          </p>
          <Link href="/get-an-instant-estimate"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-all">
            Get a Comfort Plan Quote <ArrowRight size={18} />
          </Link>
          <div className="mt-6">
            <a href="tel:855-264-0363" className="text-white/40 text-sm hover:text-white/60 transition-colors inline-flex items-center gap-1.5">
              <Phone size={14} /> Call us at (855) 264-0363
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
