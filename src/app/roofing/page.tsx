import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Shield, Home, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Installation & Solar-Ready Roofs | KIN Home',
  description: 'KIN Home installs roofs and bundles them with solar — one crew, one warranty, one phone number. In-house crews across 10 states. Get a free roof assessment.',
}

const bundleBenefits = [
  { title: 'Save on Labor', desc: 'Scheduling roofing and solar separately means two crews, two mobilizations, two sets of costs. Bundle them and the labor math changes significantly.' },
  { title: 'Perfect Integration', desc: 'A roof installed specifically to support solar is designed differently than a standard replacement. Penetrations are sealed correctly from day one. No retrofitting. No warranty gray areas.' },
  { title: 'One Warranty That Covers Everything', desc: 'When KIN installs your roof and your solar system, there\'s no ambiguity about who\'s responsible if something needs attention. We stand behind both.' },
]

const steps = [
  { num: '1', title: 'Free Roof Assessment', desc: 'A KIN expert walks your roof and gives you an honest evaluation. If you don\'t need a replacement, we\'ll tell you that too.' },
  { num: '2', title: 'Scope and Schedule', desc: 'We put together a clear scope of work with materials, timeline, and pricing — no surprises. We coordinate roofing and solar on a single project schedule.' },
  { num: '3', title: 'Installation and Inspection', desc: 'Our crew completes both projects with the same quality standards we apply to every solar installation across our 4,000+ completed jobs.' },
]

export default function RoofingPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/67c23e69611073b0de2ebd2b_A7402606.jpg" alt="KIN Home roof installation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-kin-sage/10 text-kin-sage text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Home size={14} /> Roofing Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text leading-tight mb-6">
              Your roof.<br /><span className="text-kin-sage">Done right.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed max-w-lg">
              Whether you need a new roof before going solar, or just need a roof — KIN does both. Standalone roofing or bundled with solar — one crew, one warranty either way. All in-house, all covered for decades.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-an-instant-estimate"
                className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
                Get a Free Roof Assessment <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-kin-text-secondary mt-6">
              <span className="flex items-center gap-1"><Star size={14} className="text-kin-gold fill-kin-gold" /> 4.4★ · 882+ reviews</span>
              <span className="flex items-center gap-1"><Shield size={14} className="text-kin-gray-blue" /> Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why KIN for Roofing */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Why KIN Roofing?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                A roofing company that does it all.
              </h2>
              <div className="space-y-4 text-kin-text-secondary leading-relaxed">
                <p>
                  KIN does standalone roof replacements — you don&apos;t need solar to work with us. Need a roof? We&apos;ll handle it with the same quality and accountability we bring to every job.
                </p>
                <p>
                  Going solar too? Even better. When you bundle roof and solar, we inspect every square foot, design the roof to support your panels, and handle both projects as one — saving you time and money.
                </p>
                <p>
                  Either way, you&apos;re dealing with one team, one warranty, and one phone number. No subcontractors. No finger-pointing.
                </p>
              </div>
            </div>
            <div>
              <img src="/img/67c60fdbf6258ac11834b43a_7-wavy-roof.png" alt="Solar panels on roof" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Benefits */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Bundle & Save</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Two projects. One crew. One trip up your roof.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bundleBenefits.map(b => (
              <div key={b.title} className="bg-white rounded-2xl border border-kin-beige p-8 hover:shadow-lg hover:shadow-black/3 transition-all">
                <CheckCircle size={20} className="text-kin-sage mb-4" />
                <h3 className="text-lg font-semibold text-kin-text mb-2">{b.title}</h3>
                <p className="text-sm text-kin-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Three steps. No surprises.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(s => (
              <div key={s.num} className="bg-white rounded-2xl border border-kin-beige p-8 hover:shadow-lg hover:shadow-black/3 transition-all">
                <div className="w-10 h-10 rounded-full bg-kin-sage/10 flex items-center justify-center text-kin-sage font-bold text-lg mb-4">
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold text-kin-text mb-2">{s.title}</h3>
                <p className="text-sm text-kin-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to protect your home from the top down?</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            A free roof assessment costs you nothing. And knowing where you stand before you go solar? That&apos;s the kind of decision that pays for itself.
          </p>
          <Link href="/get-an-instant-estimate"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-all">
            Schedule Your Free Assessment <ArrowRight size={18} />
          </Link>
          <div className="mt-6">
            <a href="tel:855-264-0363" className="text-white/40 text-sm hover:text-white/60 transition-colors inline-flex items-center gap-1.5">
              <Phone size={14} /> Questions? Call (855) 264-0363
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
