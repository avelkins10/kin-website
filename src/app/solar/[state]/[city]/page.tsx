import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SavingsCalculator from '@/components/savings-calculator'
import Link from 'next/link'
import { getCityData, getAllCitySlugs } from '@/lib/city-data'
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { Star, Shield, ArrowRight, CheckCircle, MapPin, Zap, Sun, ChevronDown } from 'lucide-react'

interface Props {
  params: Promise<{ state: string; city: string }>
}

export async function generateStaticParams() {
  return getAllCitySlugs()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const data = getCityData(citySlug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    openGraph: { title: data.metaTitle, description: data.metaDesc },
  }
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params
  const data = getCityData(citySlug)
  if (!data) notFound()

  const { city, state, stateCode, utility, avgBill, sunHours, incentives, avgSavings, permits, nearbyAll, faqs } = data

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(city, state, stateCode)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: 'https://kinhome.com' },
        { name: 'Solar', url: 'https://kinhome.com/solar' },
        { name: `${state} Solar`, url: `https://kinhome.com/solar/${data.stateSlug}` },
        { name: `${city} Solar`, url: `https://kinhome.com/solar/${data.stateSlug}/${citySlug}` },
      ])) }} />

      <Header />

      {/* Breadcrumbs */}
      <div className="bg-kin-light-gray border-b border-kin-beige pt-20">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-xs text-kin-text-secondary">
            <Link href="/" className="hover:text-kin-charcoal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/solar" className="hover:text-kin-charcoal transition-colors">Solar</Link>
            <span>/</span>
            <Link href={`/solar/${data.stateSlug}`} className="hover:text-kin-charcoal transition-colors">{state}</Link>
            <span>/</span>
            <span className="text-kin-charcoal">{city}</span>
          </nav>
        </div>
      </div>

      {/* ════ HERO ════ */}
      <section className="bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-kin-sage/10 text-kin-sage text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <MapPin size={14} />
              Your {city} Solar Team
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-kin-charcoal leading-tight tracking-tight mb-6">
              Solar Installation<br />in {city}, {stateCode}
            </h1>

            <p className="text-lg text-kin-text-secondary mb-6 leading-relaxed">
              Go solar with KIN Home — your local {city} installer. We handle design, permits, installation, and monitoring.
              {city} averages {sunHours} peak sun hours per day — excellent for solar.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-kin-text-secondary mb-8">
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-kin-gold fill-kin-gold" />
                4.4★ · 882+ reviews
              </span>
              <span className="flex items-center gap-1.5">
                <Shield size={14} className="text-kin-gray-blue" />
                BBB A+
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-kin-sage" />
                ${avgSavings}/mo avg savings
              </span>
            </div>

            <Link href="/get-an-instant-estimate"
              className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
              Get Your Free {city} Estimate <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <SavingsCalculator />
          </div>
        </div>
      </section>

      {/* ════ LOCAL STATS ════ */}
      <section className="bg-white border-y border-kin-beige">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-kin-charcoal">{sunHours}h</div>
              <div className="text-xs text-kin-text-secondary mt-0.5">Avg Daily Sun Hours</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-kin-charcoal">${avgSavings}</div>
              <div className="text-xs text-kin-text-secondary mt-0.5">Avg Monthly Savings</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-kin-charcoal">${avgBill}</div>
              <div className="text-xs text-kin-text-secondary mt-0.5">Avg Electric Bill</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-kin-charcoal">30%</div>
              <div className="text-xs text-kin-text-secondary mt-0.5">Federal Tax Credit</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ UTILITY & INCENTIVES ════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Your Local Utility</p>
              <h2 className="text-2xl md:text-3xl font-bold text-kin-charcoal mb-4">{utility}</h2>
              <p className="text-kin-text-secondary leading-relaxed mb-6">
                {city} homeowners served by {utility} can take advantage of net metering to earn credits for excess solar energy.
                Your KIN consultant will optimize your system for {utility}&apos;s specific rate structure.
              </p>
              <p className="text-sm text-kin-text-secondary">
                <strong className="text-kin-text-secondary">Permitting:</strong> {permits}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">{city} Solar Incentives</p>
              <div className="space-y-3">
                {incentives.map((inc, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle size={16} className="text-kin-sage mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-kin-text-secondary leading-relaxed">{inc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ HOW IT WORKS ════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-2xl md:text-3xl font-bold text-kin-charcoal">
              Going solar in {city} is easy.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '1', t: 'Free Consultation', d: `A KIN representative reviews your ${city} home and designs a custom system sized for your energy needs. In person or virtual — your choice.` },
              { n: '2', t: 'Design & Permitting', d: `We handle engineering, ${stateCode === 'FL' ? 'Florida Building Code' : 'local'} permits, and ${utility} paperwork. You don't touch a thing.` },
              { n: '3', t: 'Install & Power On', d: `Our certified crew installs your system — usually in one day. We activate it with ${utility} and walk you through the monitoring app.` },
            ].map(s => (
              <div key={s.n} className="bg-kin-light-gray rounded-2xl border border-kin-beige p-8">
                <div className="w-10 h-10 rounded-full bg-kin-sage/10 flex items-center justify-center text-kin-sage font-bold mb-4">{s.n}</div>
                <h3 className="text-lg font-semibold text-kin-charcoal mb-2">{s.t}</h3>
                <p className="text-sm text-kin-text-secondary leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-kin-charcoal">
              Common questions about solar in {city}
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-kin-beige overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-sm font-medium text-kin-charcoal hover:bg-kin-light-gray/50 transition-colors list-none">
                  {faq.q}
                  <ChevronDown size={16} className="text-kin-text-secondary group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5 text-sm text-kin-text-secondary leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════ NEARBY CITIES ════ */}
      <section className="py-12 bg-white border-t border-kin-beige">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-4 text-center">Also Serving Nearby</p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAll.map(slug => {
              const nearby = getCityData(slug)
              if (!nearby) return null
              return (
                <Link key={slug} href={`/solar/${nearby.stateSlug}/${slug}`}
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-kin-light-gray border border-kin-beige text-kin-text-secondary hover:border-kin-charcoal/20 hover:text-kin-charcoal transition-all">
                  {nearby.city}, {nearby.stateCode} Solar
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="py-16 md:py-24 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to go solar in {city}?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation estimate. See how much you could save with {utility} net metering and the 30% federal tax credit.
          </p>
          <Link href="/get-an-instant-estimate"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/30">
            Get Your Free {city} Estimate <ArrowRight size={18} />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-white/40">
            <span>✓ No obligation</span>
            <span>✓ $0-down financing</span>
            <span>✓ 882+ five-star reviews</span>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-kin-beige px-4 py-3">
        <Link href="/get-an-instant-estimate"
          className="block w-full text-center bg-kin-sage text-white font-semibold py-3.5 rounded-full">
          Get Free {city} Estimate
        </Link>
      </div>
    </>
  )
}
