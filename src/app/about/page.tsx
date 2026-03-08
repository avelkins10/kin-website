import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About KIN Home | Our Story, Team & FAQs',
  description: 'KIN Home has powered 4,000+ homes across 10 states since 2020. Meet our leadership team and learn why we\'re different.',
}

const values = [
  { title: 'In-House Everything', desc: 'Sales, design, installation, and service — all KIN employees. No subcontractors, no finger-pointing, no runaround.' },
  { title: 'Local Teams', desc: 'Real people in your community. Your neighbors work here. We know your area, your utility, and your incentives.' },
  { title: 'Homeowner-First', desc: 'We built this company because we believe solar should be simple, honest, and done right. Every decision starts with what\'s best for you.' },
  { title: 'Long-Term Partnership', desc: 'We\'re not here to sell you something and disappear. We monitor your system, answer your calls, and stand behind every install for decades.' },
]

const leadership = [
  { name: 'Austin Elkins', title: 'CEO & Founder', desc: 'Founded KIN in 2020 with a vision to make solar simple and honest. Leads strategy, culture, and growth.' },
  { name: 'James Tootill', title: 'Chief Operating Officer', desc: 'Oversees daily operations across all 10 states. Ensures every install meets KIN\'s quality standards.' },
  { name: 'Blake Corbin', title: 'Chief Financial Officer', desc: 'Manages financial strategy, forecasting, and the systems that keep KIN scaling sustainably.' },
  { name: 'Brady Gurr', title: 'Chief Commercial Officer', desc: 'Leads sales strategy and team development. Drives KIN\'s door-to-door and referral programs.', img: '/img/66822586eb89f63c8ef55f27_Brady-Gurr-headshot.jpg' },
]

const faqs = [
  { q: 'How much does solar cost?', a: 'The cost depends on your home\'s energy usage, roof size, and location. Most KIN homeowners pay $0 down and save money from day one with financing. Get a free estimate to see your exact pricing.' },
  { q: 'How long does installation take?', a: 'Most solar installations are completed in one day. The full process — from consultation to activation — typically takes 4-8 weeks, depending on permits and utility approval in your area.' },
  { q: 'Do you offer financing?', a: 'Yes! We offer multiple $0 down financing options. Most homeowners replace their electric bill with a lower solar payment — saving money from month one.' },
  { q: 'What happens if I need a new roof?', a: 'We handle that too. KIN installs roofs and solar together, saving you time and money. One crew, one timeline, one payment. We\'ll assess your roof during your free consultation.' },
  { q: 'What states do you serve?', a: 'KIN Home currently serves homeowners in Florida, California, Texas, Utah, Ohio, Iowa, Missouri, Arkansas, Kentucky, and Oklahoma — with more states coming soon.' },
  { q: 'Do I own my solar panels?', a: 'With most of our financing options, yes — you own your panels. We also offer lease and PPA options in select markets. Your KIN consultant will walk you through the best option for your situation.' },
  { q: 'What warranties do you offer?', a: 'Your solar panels come with a 25-year manufacturer warranty, and KIN provides a workmanship warranty on every installation. We stand behind our work for decades.' },
  { q: 'How do I monitor my solar production?', a: 'We set you up with a monitoring app during installation. You can see real-time production, energy savings, and system health from your phone — 24/7.' },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/646bab8ae3028f716f7521eb_kin-truck---walking.jpg" alt="KIN Home team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-4">About KIN Home</p>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text leading-tight mb-6">
              Built by homeowners,<br /><span className="text-kin-sage">for homeowners.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary leading-relaxed max-w-lg">
              Since 2020, KIN Home has powered over 4,000 homes across 10 states — with in-house crews, honest pricing, and a team that treats your home like their own.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              { value: '2020', label: 'Founded' },
              { value: '4,000+', label: 'Homes Powered' },
              { value: '10', label: 'States' },
              { value: '882+', label: 'Google Reviews' },
              { value: 'A+', label: 'BBB Rating' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-kin-text">{s.value}</div>
                <div className="text-xs text-kin-text-secondary mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                Solar should be simple.
              </h2>
              <div className="space-y-4 text-kin-text-secondary leading-relaxed">
                <p>
                  KIN Home was founded in 2020 with a straightforward belief: going solar shouldn&apos;t be complicated, expensive, or full of surprises.
                </p>
                <p>
                  Too many solar companies subcontract everything — installation, sales, even customer service. The homeowner ends up stuck between a salesperson who promised one thing and an installer who delivers another.
                </p>
                <p>
                  We built KIN differently. Every person you interact with — from your first consultation to the crew on your roof — is a KIN employee. We design, permit, install, and monitor your system. One company, one standard, one point of contact.
                </p>
                <p>
                  Today, we&apos;ve powered over 4,000 homes across 10 states. We&apos;ve expanded into roofing and HVAC because homeowners kept asking us to handle more. And we&apos;ve earned 882+ five-star reviews because we do what we say we&apos;ll do.
                </p>
              </div>
            </div>
            <div>
              <img src="/img/6261ddc4a5e3c506eb46f398__X5A0704-copy-2.jpg" alt="Solar installation" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">What makes KIN different.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map(v => (
              <div key={v.title} className="flex gap-4 p-6 rounded-2xl bg-white border border-kin-beige">
                <CheckCircle size={20} className="text-kin-sage mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-kin-text mb-1">{v.title}</h3>
                  <p className="text-sm text-kin-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">The team behind KIN.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map(person => (
              <div key={person.name} className="text-center p-6 rounded-2xl bg-kin-light-gray border border-kin-beige">
                {person.img ? (
                  <img src={person.img} alt={person.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-kin-beige flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-kin-text-secondary">{person.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                )}
                <h3 className="font-semibold text-kin-text">{person.name}</h3>
                <p className="text-sm text-kin-sage font-medium mb-2">{person.title}</p>
                <p className="text-xs text-kin-text-secondary leading-relaxed">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-kin-beige">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Common questions.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(faq => (
              <details key={faq.q} className="group bg-white rounded-2xl border border-kin-beige overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-kin-text pr-4">{faq.q}</span>
                  <ChevronDown size={18} className="text-kin-text-secondary flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 text-sm text-kin-text-secondary leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to join 4,000+ KIN homeowners?</h2>
          <p className="text-white/60 text-lg mb-8">Get a free, no-obligation estimate in minutes.</p>
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
