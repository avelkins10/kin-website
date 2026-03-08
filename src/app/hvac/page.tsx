import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Shield, Wind, Zap, ThermometerSun, DollarSign, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Installation — Standalone or Comfort Plan | KIN Home',
  description: 'KIN Home installs HVAC systems — standalone or bundled with solar via the Comfort Plan. In-house crews, $0 down financing. Get a free HVAC quote.',
}

const standalonePoints = [
  'A load calculation done before we recommend anything',
  'Equipment matched to your home\'s square footage, insulation, and climate',
  'Clean install, no subcontractors, workmanship backed by KIN',
  'One number to call if anything needs attention afterward',
]

const comfortPlanPoints = [
  'Full HVAC assessment and right-sized system recommendation',
  'High-efficiency equipment installation',
  'Integration planning with solar if you\'re adding or have panels',
  'Ongoing support through KIN\'s in-house service team',
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
              New AC or heat?<br /><span className="text-kin-sage">We handle that. Solar optional.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed max-w-lg">
              KIN installs HVAC systems — new air conditioning, heating, and the full Comfort Plan — for any homeowner who needs it. No solar required. And if you want to pair your new system with solar to slash the electric bill it runs on, we can do that too.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-an-instant-estimate"
                className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
                Get a Free HVAC Quote <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-kin-text-secondary mt-6">
              <span className="flex items-center gap-1"><Star size={14} className="text-kin-gold fill-kin-gold" /> 4.4★ · 882+ reviews</span>
              <span className="flex items-center gap-1"><Shield size={14} className="text-kin-gray-blue" /> Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone HVAC */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Standalone HVAC</p>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                New system. Right size. No runaround.
              </h2>
              <div className="space-y-4 text-kin-text-secondary leading-relaxed mb-8">
                <p>
                  If your AC is aging out, breaking down, or just not keeping up — we replace it. KIN installs high-efficiency HVAC systems sized correctly for your home, handled entirely by our in-house team.
                </p>
                <p className="font-medium text-kin-text">
                  No upsell to solar unless you want it. If you just need a new HVAC system, that&apos;s the job we&apos;ll do.
                </p>
              </div>
              <div className="space-y-3">
                {standalonePoints.map(point => (
                  <div key={point} className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-kin-sage flex-shrink-0" />
                    <span className="text-sm text-kin-text">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/img/646bab8ae3028f716f7521eb_kin-truck---walking.jpg" alt="KIN Home crew" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Comfort Plan */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl border border-kin-beige p-8">
                <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-4">Includes</p>
                <div className="space-y-3">
                  {comfortPlanPoints.map(point => (
                    <div key={point} className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-kin-sage flex-shrink-0" />
                      <span className="text-sm text-kin-text">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">The Comfort Plan</p>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                Your whole home&apos;s energy, handled.
              </h2>
              <div className="space-y-4 text-kin-text-secondary leading-relaxed">
                <p>
                  The KIN Comfort Plan is for homeowners who want to think about heating and cooling as part of a bigger picture — not just a box on the wall, but a system designed around your home&apos;s energy use.
                </p>
                <p>
                  The result: a home that runs efficiently, a system that was installed correctly, and one company that stands behind all of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Upgrade */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">The Smart Upgrade</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Your AC runs on electricity. This is how you make that electricity free.</h2>
            <p className="text-kin-text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
              You don&apos;t have to add solar. But if you&apos;re replacing your HVAC anyway, it&apos;s worth knowing what happens when both are designed together.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Sized for Your Real Load', desc: 'Your solar is sized to cover your real load — including the new, more efficient HVAC. Nothing gets left out.' },
              { icon: ThermometerSun, title: 'Peak Efficiency', desc: 'Your HVAC runs at peak efficiency, reducing what it draws. Modern high-SEER systems use dramatically less energy than what\'s in most homes.' },
              { icon: DollarSign, title: 'Combined Savings', desc: 'Homeowners who bundle HVAC + solar through KIN consistently report the most dramatic reductions in their monthly energy bills.' },
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
          <p className="text-sm text-kin-text-secondary text-center mt-8 max-w-2xl mx-auto">
            In Florida and across the South, cooling accounts for 40–50% of a home&apos;s energy use in summer. In California, heating and cooling together can represent the majority of the bill. Solar generates electricity. HVAC consumes it. Design both together and the math works.
          </p>
        </div>
      </section>

      {/* Financing */}
      <section className="py-16 bg-kin-beige">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Financing</p>
          <h2 className="text-2xl md:text-3xl font-bold text-kin-text mb-4">Flexible options. $0 down available.</h2>
          <p className="text-kin-text-secondary leading-relaxed mb-4">
            HVAC systems — standalone or bundled — can be financed through KIN&apos;s lending partners. For homeowners who add solar, $0 down lease and PPA options are available where you pay for the energy you use, not the equipment.
          </p>
          <p className="text-sm text-kin-text-secondary/70 italic">
            For solar lease and PPA customers: Federal energy tax benefits under Section 48E are passed through by our financing partners as lower monthly rates, through December 31, 2027.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start with a free HVAC consultation.</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            20 minutes. We&apos;ll assess your current system, tell you what the right replacement looks like, and — only if you&apos;re interested — show you what adding solar would do to the math.
          </p>
          <Link href="/get-an-instant-estimate"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-all">
            Get a Free HVAC Quote <ArrowRight size={18} />
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
