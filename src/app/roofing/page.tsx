import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Shield, Home, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Replacement Services | KIN Home',
  description: 'KIN Home installs full residential roof replacements with in-house crews, honest assessments, and no subcontractors. Solar optional. Free assessment.',
  openGraph: {
    title: 'Roof Replacement Services | KIN Home',
    description: 'KIN Home installs full residential roof replacements with in-house crews, honest assessments, and no subcontractors. Solar optional. Free assessment.',
  },
  alternates: { canonical: 'https://www.kinhome.com/roofing' },
}

const roofingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Residential Roof Replacement',
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
  serviceType: 'Roof Replacement',
  description: 'KIN Home provides full residential roof replacements with in-house crews across 10 states. No subcontractors. Honest assessments. Solar-ready if needed.',
  offers: { '@type': 'Offer', name: 'Free Roof Assessment', price: '0', priceCurrency: 'USD' },
}

const standalonePoints = [
  { bold: 'In-house crews', text: ' — no subcontractors, no finger-pointing' },
  { bold: 'Honest assessments', text: ' — if your roof has years left, we\'ll tell you' },
  { bold: 'Clean job sites', text: ' — we treat your home like ours' },
  { bold: 'Clear communication', text: ' — you know what\'s happening and when' },
  { bold: 'Workmanship warranty', text: ' — backed by KIN directly' },
]

const bundleBenefits = [
  { title: 'Save on labor.', desc: 'Two separate projects mean two crews, two mobilizations, two sets of staging costs. Do them together and you cut most of that overlap. The savings are real.' },
  { title: 'Built right from day one.', desc: 'A roof installed to support solar is done differently than a standard replacement — penetrations sealed correctly upfront, structural considerations addressed before a single panel goes up. No retrofitting later. No warranty gray areas between your roofer and your solar company.' },
  { title: 'One warranty covers everything.', desc: 'When KIN installs both, there\'s no ambiguity about who\'s responsible if something needs attention years from now.' },
  { title: 'One point of contact.', desc: 'One project manager. One schedule. One phone number.' },
]

export default function RoofingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roofingSchema) }} />

      <Header />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/67c23e69611073b0de2ebd2b_A7402606.jpg" alt="KIN Home crew installing new roof on residential home" className="w-full h-full object-cover" />
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
              KIN installs full residential roof replacements — no solar required. If you ever want to add panels, we can do that too. One company, one crew, one warranty either way.
            </p>
            <Link href="/get-an-instant-estimate"
              className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
              Get a Free Roof Assessment <ArrowRight size={16} />
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-sm text-kin-text-secondary mt-6">
              <span className="flex items-center gap-1"><Star size={14} className="text-kin-gold fill-kin-gold" /> 4.4★ · 909+ reviews</span>
              <span className="flex items-center gap-1"><Shield size={14} className="text-kin-gray-blue" /> Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What KIN Roofing Covers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                Full replacements. Not just a patch.
              </h2>
              <div className="space-y-4 text-kin-text-secondary leading-relaxed mb-8">
                <p>
                  KIN does complete roof replacements for homeowners who need a new roof — period. Storm damage, age, leaks, or a roof that&apos;s just done. We&apos;ll walk it, assess it honestly, and give you a clear scope and price before anything starts.
                </p>
                <p className="font-medium text-kin-text">
                  No solar required. If all you need is a new roof, that&apos;s the job we&apos;ll do.
                </p>
              </div>
              <p className="text-sm font-semibold text-kin-text mb-3">What we bring to every job:</p>
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
              <img src="/img/67c60fdbf6258ac11834b43a_7-wavy-roof.png" alt="New residential roof with solar-ready design by KIN Home" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bundle Upgrade */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-4">
              Already replacing your roof? This is the best time to go solar.
            </h2>
            <p className="text-kin-text-secondary leading-relaxed">
              You don&apos;t have to{' '}
              <Link href="/solar" className="text-kin-sage hover:underline">add solar at the same time</Link>.
              {' '}But if you&apos;ve ever thought about it, replacing your roof is the smartest moment to act.
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

      {/* Section 3: Process */}
      <section className="py-20 md:py-28 bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-12 text-center">How it works.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '1', title: 'Free Roof Assessment', desc: 'A KIN expert walks your roof and gives you a straight assessment: what it needs, what it\'ll cost, and whether it\'s ready for solar if that\'s on your radar. No obligation.' },
              { num: '2', title: 'Clear Scope and Pricing', desc: 'You get a full scope of work with materials, timeline, and price upfront. No surprises mid-job. If you\'re bundling solar, we coordinate both on a single project schedule.' },
              { num: '3', title: 'Installation', desc: <>Our in-house crew handles the full install. Same quality standards we bring to every one of our <Link href="/about" className="text-kin-sage hover:underline">4,000+ completed projects</Link> across 10 states.</> },
            ].map(s => (
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
            <a href="tel:+18552640363" className="text-white/40 text-sm hover:text-white/60 transition-colors inline-flex items-center gap-1.5">
              <Phone size={14} /> Questions? Call (855) 264-0363
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
