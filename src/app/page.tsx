import Header from '@/components/header'
import Footer from '@/components/footer'
import SavingsCalculator from '@/components/savings-calculator'
import Link from 'next/link'
import { Star, Shield, MapPin, ArrowRight, CheckCircle, Sun, Home, Wind } from 'lucide-react'
import { organizationSchema } from '@/lib/schema'
import { getHomepageTestimonials, getHeroTestimonial } from '@/lib/testimonials'

const stats = [
  { value: '4,000+', label: 'Homes Powered' },
  { value: '882+', label: 'Google Reviews' },
  { value: '10', label: 'States Served' },
  { value: 'A+', label: 'BBB Rating' },
  { value: '6', label: 'Years in Business' },
]

const services = [
  { icon: Sun, title: 'Solar', desc: 'Custom-designed systems that cut your electric bill from day one. We handle design, permits, install, and monitoring.', href: '/solar', img: '/img/6261e9983f4f1e24f8efb86c_shutterstock_1561073777-2-copy-2.jpg' },
  { icon: Home, title: 'Roofing', desc: 'Need a new roof before solar? One crew, one timeline, one point of contact. Save time and money.', href: '/roofing', img: '/img/67c23e69611073b0de2ebd2b_A7402606.jpg' },
  { icon: Wind, title: 'HVAC', desc: 'Our Comfort Plan pairs high-efficiency heating and cooling with solar for maximum energy savings.', href: '/hvac', img: '/img/646ba412d82177fca24f9e7f_DSC03962.jpg' },
]

const heroTestimonial = getHeroTestimonial()
const homepageReviews = getHomepageTestimonials()

const steps = [
  { num: '1', title: 'Free Consultation', desc: 'A KIN representative reviews your home and energy usage to design a custom system — in person or virtually. No pressure, no obligation.' },
  { num: '2', title: 'Custom Design & Permitting', desc: 'We handle the engineering, permits, and utility paperwork. Your system is designed specifically for your roof and energy needs.' },
  { num: '3', title: 'Install & Activate', desc: 'Our certified crew installs your system, typically in one day. We walk you through the monitoring app and you start saving immediately.' },
]

const whyKin = [
  { title: 'In-House Everything', desc: 'Sales, design, install, and service — all KIN employees. No subcontractors, no runaround.' },
  { title: 'Local Teams', desc: 'Real people in your community, not a distant call center. Your neighbors work here.' },
  { title: 'Proven Track Record', desc: '4,000+ installs and 882 five-star reviews. Our work speaks for itself.' },
  { title: 'Whole Home Energy', desc: 'Solar, roofing, and HVAC under one roof. We power, protect, and cool your home.' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <Header />

      {/* ════ HERO ════ */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/img/6261e9983f4f1e24f8efb86c_shutterstock_1561073777-2-copy-2.jpg"
            alt="Craftsman home with solar panels at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30 md:from-white/85 md:via-white/50 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-kin-sage/10 text-kin-sage text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Star size={14} className="text-kin-gold fill-kin-gold" />
              882+ five-star reviews
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kin-text leading-[1.08] tracking-tight mb-6">
              Your home.
              <br />Your energy.
              <br /><span className="text-kin-sage">Your savings.</span>
            </h1>

            <p className="text-lg text-kin-text-secondary mb-8 max-w-lg leading-relaxed">
              Solar, roofing, and HVAC from a team that treats your home like their own.
              4,000+ installs across 10 states. In-house everything.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-kin-text-secondary">
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-kin-gold fill-kin-gold" />
                4.4★ Google
              </span>
              <span className="flex items-center gap-1.5">
                <Shield size={14} className="text-kin-gray-blue" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-kin-sage" />
                FL · CA · TX + 7 more
              </span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <SavingsCalculator />
          </div>
        </div>
      </section>

      {/* ════ TRUST BAR ════ */}
      <section className="bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-kin-text">{s.value}</div>
                <div className="text-xs text-kin-text-secondary mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ HOW IT WORKS ════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Three steps. We handle the rest.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(s => (
              <div key={s.num} className="bg-kin-light-gray rounded-2xl border border-kin-beige p-8 hover:shadow-lg hover:shadow-black/3 transition-all">
                <div className="w-12 h-12 rounded-full bg-kin-sage/10 flex items-center justify-center text-kin-sage font-bold text-lg mb-5">
                  {s.num}
                </div>
                <h3 className="text-xl font-semibold text-kin-text mb-2">{s.title}</h3>
                <p className="text-sm text-kin-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-sm text-kin-text-secondary">We handle permits, design, installation, and monitoring. <strong className="text-kin-text">You don&apos;t lift a finger.</strong></p>
          </div>
        </div>
      </section>

      {/* ════ SERVICES ════ */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">One company. Your whole home.</h2>
            <p className="text-kin-text-secondary mt-3 max-w-xl mx-auto">Solar, roofing, and HVAC — all under one roof. One team. One call.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(s => (
              <Link key={s.title} href={s.href}
                className="group rounded-2xl border border-kin-beige bg-white overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon size={18} className="text-kin-sage" />
                    <h3 className="text-lg font-semibold text-kin-text">{s.title}</h3>
                  </div>
                  <p className="text-sm text-kin-text-secondary leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-kin-sage text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════ REAL RESULTS ════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero stat */}
          {heroTestimonial && (
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-4">Real Results</p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-kin-gold fill-kin-gold" />
                ))}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-kin-text mb-2">
                <span className="text-kin-text-secondary line-through decoration-2">${heroTestimonial.savingsBefore}</span>
                {' → '}
                <span className="text-kin-sage">${heroTestimonial.savingsAfter}</span>
                <span className="text-xl md:text-2xl text-kin-text-secondary font-normal">/mo</span>
              </h2>
              <p className="text-kin-text-secondary mt-2 max-w-lg mx-auto">
                &ldquo;{heroTestimonial.quote}&rdquo;
              </p>
              <p className="text-sm text-kin-text-secondary/60 mt-2">— {heroTestimonial.name} · Verified Google Review</p>
            </div>
          )}

          {/* Review cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {homepageReviews.filter(r => !r.use.includes('hero')).slice(0, 6).map(r => (
              <div key={r.name} className="bg-kin-light-gray rounded-2xl border border-kin-beige p-6 hover:shadow-lg hover:shadow-black/3 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} size={14} className="text-kin-gold fill-kin-gold" />
                    ))}
                  </div>
                  {r.savingsText && (
                    <span className="text-xs font-semibold text-kin-sage bg-kin-sage/10 px-2.5 py-1 rounded-full">
                      {r.savingsText}
                    </span>
                  )}
                  {!r.savingsText && r.systemKw && (
                    <span className="text-xs font-medium text-kin-text-secondary bg-kin-beige px-2.5 py-1 rounded-full">
                      {r.systemKw} kW system
                    </span>
                  )}
                </div>
                <p className="text-sm text-kin-text/70 leading-relaxed mb-5">&ldquo;{r.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-kin-beige flex items-center justify-center text-sm font-semibold text-kin-text-secondary">{r.name[0]}</div>
                  <div>
                    <div className="text-sm font-medium text-kin-text">{r.name}</div>
                    <div className="text-xs text-kin-text-secondary">
                      {[r.city, r.state].filter(Boolean).join(', ') || 'KIN Customer'} · Google Review
                      {r.verified === 'qb' && ' · ✓ Verified'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://www.google.com/search?q=kin+home+solar+reviews" target="_blank" rel="noopener noreferrer"
              className="text-kin-sage text-sm font-medium hover:underline inline-flex items-center gap-1">
              Read all 882+ reviews on Google <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ════ WHY KIN ════ */}
      <section className="py-20 md:py-28 bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Why KIN?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                Not a faceless corporation.<br />Your local energy team.
              </h2>
              <p className="text-kin-text-secondary text-base mb-10 leading-relaxed">
                KIN Home was built by people who believe solar should be simple, honest, and done right.
                No subcontractors. No runaround. Just a team that cares about your home as much as you do.
              </p>
              <div className="space-y-5">
                {whyKin.map(w => (
                  <div key={w.title} className="flex gap-3">
                    <CheckCircle size={18} className="text-kin-sage mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-kin-text text-sm">{w.title}</h4>
                      <p className="text-sm text-kin-text-secondary leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/img/646bab8ae3028f716f7521eb_kin-truck---walking.jpg" alt="KIN Home crew and branded truck"
                className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ════ SERVICE AREAS ════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Service Areas</p>
          <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-4">Solar in your neighborhood.</h2>
          <p className="text-kin-text-secondary mb-12 max-w-xl mx-auto">
            We serve homeowners across 10 states with local teams who know your area, your utility, and your incentives.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Florida', 'California', 'Texas', 'Iowa', 'Missouri', 'Colorado', 'Ohio', 'Kentucky', 'Utah', 'Arkansas'].map(state => (
              <Link key={state} href="/service-areas"
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  state === 'Florida' || state === 'California'
                    ? 'bg-kin-charcoal text-white border-kin-charcoal'
                    : 'bg-white text-kin-text-secondary border-kin-beige hover:border-kin-charcoal/30'
                }`}>
                {state}
              </Link>
            ))}
          </div>
          <Link href="/service-areas" className="text-kin-sage text-sm font-medium hover:underline inline-flex items-center gap-1">
            Find solar in your area <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ════ BOTTOM CTA ════ */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to power your home with confidence?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation estimate in minutes. See how much you could save with KIN Home.
          </p>
          <Link href="/get-an-instant-estimate"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/30 hover:-translate-y-0.5">
            Get Your Free Estimate <ArrowRight size={18} />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-white/40">
            <span>✓ No obligation</span>
            <span>✓ 2-minute form</span>
            <span>✓ Custom design</span>
            <span>✓ Financing available</span>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-kin-beige px-4 py-3">
        <Link href="/get-an-instant-estimate"
          className="block w-full text-center bg-kin-sage text-white font-semibold py-3.5 rounded-full">
          Get Your Free Estimate
        </Link>
      </div>
    </>
  )
}
