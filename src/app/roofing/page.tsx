import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Shield, Home, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Installation — Standalone or Solar-Bundled | KIN Home',
  description: 'KIN Home does complete roof replacements — with or without solar. In-house crews, one warranty, honest assessments. Get a free roof assessment.',
}

const standalonePoints = [
  'In-house crews (no subcontractors)',
  'Clean job sites and clear communication throughout',
  'Workmanship warranty backed by KIN directly',
  'Honest assessments — if your roof has years left, we\'ll tell you',
]

const bundleBenefits = [
  { title: 'Save Significantly on Labor', desc: 'Two separate projects mean two crews, two mobilizations, two sets of staging costs. Do them together and you eliminate most of that overlap. The savings are real.' },
  { title: 'Built Right From Day One', desc: 'A roof installed to support solar is done differently than a standard replacement — penetrations sealed correctly, structural considerations addressed upfront. No retrofitting. No warranty gray areas.' },
  { title: 'One Warranty That Covers Everything', desc: 'When KIN installs both, there\'s no ambiguity about who\'s responsible if something needs attention years from now. We stand behind the roof and the system.' },
  { title: 'One Point of Contact', desc: 'No coordinating between a roofer and a solar company. One project manager, one schedule, one phone number.' },
]

const steps = [
  { num: '1', title: 'Free Roof Assessment', desc: 'A KIN expert walks your roof and gives you an honest evaluation. We\'ll tell you what it needs, what it\'ll cost, and whether you\'re a candidate for solar if that\'s on your radar.' },
  { num: '2', title: 'Scope and Schedule', desc: 'Clear scope of work, materials, timeline, and pricing upfront. No surprises. If you\'re bundling solar, we coordinate both on a single project schedule.' },
  { num: '3', title: 'Installation and Inspection', desc: 'Our in-house crew handles the full install. Same quality standards we bring to every one of our 4,000+ completed projects across 10 states.' },
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
              A new roof, done right.<br /><span className="text-kin-sage">Solar ready if you want it.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed max-w-lg">
              KIN installs roofs. Full replacements, top-to-bottom. No solar required. And if you ever want to add panels down the road — or do both at once — we can handle that too. One company, one crew, one warranty either way.
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

      {/* Standalone Roofing */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">KIN Roofing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                Full replacement. Not just a patch.
              </h2>
              <div className="space-y-4 text-kin-text-secondary leading-relaxed mb-8">
                <p>
                  KIN does complete roof replacements for homeowners who need a new roof — period. Whether you&apos;re dealing with storm damage, age, leaks, or a roof that&apos;s just done, we&apos;ll assess it honestly and give you a clear scope of work and price before anything starts.
                </p>
                <p className="font-medium text-kin-text">
                  No solar pitch required. If all you need is a new roof, that&apos;s what we&apos;ll do.
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
              <img src="/img/67c60fdbf6258ac11834b43a_7-wavy-roof.png" alt="Roof installation" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Upgrade */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">The Smart Upgrade</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Already replacing your roof? This is the smart time to go solar.</h2>
            <p className="text-kin-text-secondary mt-4 max-w-2xl mx-auto">
              You don&apos;t have to add solar. But if you&apos;ve ever considered it, replacing your roof is the best moment to do it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {bundleBenefits.map(b => (
              <div key={b.title} className="flex gap-4 p-6 rounded-2xl bg-white border border-kin-beige">
                <CheckCircle size={20} className="text-kin-sage mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-kin-text mb-1">{b.title}</h3>
                  <p className="text-sm text-kin-text-secondary leading-relaxed">{b.desc}</p>
                </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start with a free roof assessment.</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            It costs nothing and takes about 20 minutes. You&apos;ll know exactly where your roof stands — and what it would take to fix it, with or without solar.
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
