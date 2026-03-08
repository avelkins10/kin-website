import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Shield, Wind, Zap, ThermometerSun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Installation & Comfort Plan | KIN Home',
  description: 'KIN Home\'s Comfort Plan pairs high-efficiency HVAC with solar for maximum energy savings. In-house crews. $0 down financing. Get a free estimate.',
}

const comfortPlanBenefits = [
  { icon: ThermometerSun, title: 'Year-Round Comfort', desc: 'High-efficiency heating and cooling systems that keep your home comfortable in every season — without the energy bill shock.' },
  { icon: Zap, title: 'Solar + HVAC Savings', desc: 'Pair your HVAC with solar panels and power your heating and cooling with free energy from your roof.' },
  { icon: Wind, title: 'Energy Efficient Systems', desc: 'We install top-rated systems with high SEER ratings that use less energy and cost less to operate.' },
]

const benefits = [
  { title: 'The Comfort Plan', desc: 'Our signature bundle pairs a high-efficiency HVAC system with solar panels — so your heating and cooling is powered by free energy.' },
  { title: 'In-House Installation', desc: 'No subcontractors. Our certified HVAC technicians handle every install, from ductwork to thermostat setup.' },
  { title: 'Lower Energy Bills', desc: 'A new high-efficiency system can cut your heating and cooling costs by 30-50%. Add solar and you\'re close to zero.' },
  { title: '$0 Down Financing', desc: 'Finance your HVAC system, solar panels, or both — with affordable monthly payments and $0 down options.' },
  { title: 'Whole Home Energy', desc: 'We look at your entire energy picture — solar, HVAC, and roofing — to design the most efficient home possible.' },
  { title: 'Warranty & Support', desc: 'Manufacturer warranties plus our workmanship guarantee. We\'re here for the long haul.' },
]

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
              Cool your home.<br /><span className="text-kin-sage">Power it free.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed max-w-lg">
              KIN&apos;s Comfort Plan pairs a high-efficiency HVAC system with solar — so you stay comfortable without the high energy bills.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-an-instant-estimate"
                className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
                Get Free Estimate <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-kin-text-secondary mt-6">
              <span className="flex items-center gap-1"><Star size={14} className="text-kin-gold fill-kin-gold" /> 4.4★ · 882+ reviews</span>
              <span className="flex items-center gap-1"><Shield size={14} className="text-kin-gray-blue" /> Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort Plan Highlights */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">The Comfort Plan</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">HVAC + Solar. The smartest home upgrade.</h2>
            <p className="text-kin-text-secondary mt-3 max-w-xl mx-auto">
              Why pay for energy to heat and cool your home when your roof can produce it for free?
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {comfortPlanBenefits.map(b => (
              <div key={b.title} className="text-center p-8 rounded-2xl bg-kin-light-gray border border-kin-beige">
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

      {/* Benefits Grid */}
      <section className="py-20 md:py-28 bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Why KIN HVAC?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Comfort without compromise.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="flex gap-3 p-5 rounded-2xl bg-white border border-kin-beige">
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

      {/* How it works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img src="/img/646bab8ae3028f716f7521eb_kin-truck---walking.jpg" alt="KIN Home crew" className="rounded-2xl w-full shadow-lg" />
            </div>
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                Simple. Efficient.<br />Done right.
              </h2>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Energy Assessment', desc: 'We evaluate your home\'s heating and cooling needs, ductwork, and insulation.' },
                  { num: '2', title: 'System Design', desc: 'We recommend the right system for your home — sized correctly for maximum efficiency.' },
                  { num: '3', title: 'Professional Install', desc: 'Our in-house HVAC team installs your system. Clean, fast, certified.' },
                  { num: '4', title: 'Pair with Solar', desc: 'Add solar panels to power your new HVAC system with free energy from your roof.' },
                ].map(step => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-kin-sage/10 flex items-center justify-center text-kin-sage font-bold text-sm flex-shrink-0 mt-0.5">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-kin-text">{step.title}</h4>
                      <p className="text-sm text-kin-text-secondary leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for the Comfort Plan?</h2>
          <p className="text-white/60 text-lg mb-8">HVAC + Solar. One team. Maximum savings.</p>
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
