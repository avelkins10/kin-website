import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Sun, Home, Wind, Star, Shield, MapPin, ArrowRight, CheckCircle, Zap, TrendingUp, DollarSign } from 'lucide-react'

/* ── Trust stats ─────────────────────────────────── */
const stats = [
  { value: '4,000+', label: 'Homes Powered', icon: Home },
  { value: '882+', label: 'Five-Star Reviews', icon: Star },
  { value: '10', label: 'States Served', icon: MapPin },
  { value: 'A+', label: 'BBB Rating', icon: Shield },
]

/* ── Services ────────────────────────────────────── */
const services = [
  {
    icon: Sun,
    title: 'Solar',
    desc: 'Custom-designed systems that cut your electric bill from day one. 25+ year warranty. We handle everything — design, permits, install, activation.',
    href: '/solar',
    img: '/img/6261e9983f4f1e24f8efb86c_shutterstock_1561073777-2-copy-2.jpg',
  },
  {
    icon: Home,
    title: 'Roofing',
    desc: 'Need a new roof before going solar? We do both — saving you time and money with a single crew, single timeline, single point of contact.',
    href: '/roofing',
    img: '/img/67c23e69611073b0de2ebd2b_A7402606.jpg',
  },
  {
    icon: Wind,
    title: 'HVAC',
    desc: 'Our Comfort Plan pairs high-efficiency heating and cooling with solar to maximize your energy savings and home comfort year-round.',
    href: '/hvac',
    img: '/img/646ba412d82177fca24f9e7f_DSC03962.jpg',
  },
]

/* ── Why KIN ─────────────────────────────────────── */
const reasons = [
  { icon: DollarSign, title: 'Cut Your Electric Bill', desc: 'Generate free power for 25+ years. Most homeowners save $100-200/month from day one.' },
  { icon: TrendingUp, title: 'Increase Home Value', desc: 'Homes with solar sell for more. It\'s one of the best ROI home improvements you can make.' },
  { icon: Shield, title: 'Lock In Your Rate', desc: 'Energy costs rise every year. Solar locks in your electricity price today — permanently.' },
  { icon: Zap, title: 'Hassle-Free Process', desc: 'We handle permits, design, install, and activation. You don\'t lift a finger.' },
]

/* ── Reviews (static for now — will be GBP API) ─── */
const reviews = [
  { name: 'Bennett Luke', text: 'KIN Home made the entire process seamless. From the initial consultation to the final installation, every step was professional and timely. Highly recommend!', stars: 5 },
  { name: 'Jorge Sevilla', text: 'Best decision we made for our home. The team was knowledgeable, responsive, and the install was done in a single day. Our electric bill is practically zero now.', stars: 5 },
  { name: 'Brady Gurr', text: 'I was skeptical about solar but the KIN team walked me through everything. The ROI projections they showed me were accurate — we\'re saving more than expected.', stars: 5 },
]

/* ── Process ─────────────────────────────────────── */
const steps = [
  { num: '01', title: 'Free Consultation', desc: 'A KIN representative reviews your energy usage and designs a custom system — in person or virtually.' },
  { num: '02', title: 'Design & Permitting', desc: 'We handle the custom engineering, permits, and utility paperwork. You don\'t touch a thing.' },
  { num: '03', title: 'Install & Activate', desc: 'Our certified crew installs your system, and we walk you through the monitoring app. Start saving immediately.' },
]

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/img/6261ddc4a5e3c506eb46f398__X5A0704-copy-2.jpg"
            alt="Solar panels on roof"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-kin-orange/10 border border-kin-orange/20 text-kin-orange text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Zap size={14} />
              4,000+ homes powered across 10 states
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Power your home
              <br />
              <span className="text-kin-orange">with confidence.</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-lg leading-relaxed">
              Solar, roofing, and HVAC from a team that puts you first.
              Custom-designed systems. Expert installation. Real people who answer the phone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/get-an-instant-estimate"
                className="inline-flex items-center justify-center gap-2 bg-kin-orange hover:bg-kin-orange-light text-white font-semibold text-base px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Get Your Free Estimate
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/service-areas"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-base px-8 py-4 rounded-xl hover:bg-white/5 transition-all"
              >
                View Service Areas
              </Link>
            </div>

            {/* Inline trust */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                4.4 stars · 882+ reviews
              </span>
              <span className="flex items-center gap-1.5">
                <Shield size={14} className="text-kin-sage" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-green-400" />
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ TRUST BAR ════════ */}
      <section className="bg-kin-dark-2 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <s.icon size={20} className="mx-auto mb-2 text-kin-orange" />
                <div className="text-3xl md:text-4xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-neutral-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-orange uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-bold">One company. Three ways to save.</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
              Solar, roofing, and HVAC — all under one roof. Literally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map(s => (
              <Link key={s.title} href={s.href} className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-kin-orange/30 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon size={18} className="text-kin-orange" />
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 text-kin-orange text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHY KIN ════════ */}
      <section className="py-20 md:py-28 bg-kin-dark-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-kin-orange uppercase tracking-widest mb-3">Why Go Solar?</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Your energy bill isn&apos;t getting cheaper.
              </h2>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                Electricity costs rise every year. Solar locks in your rate, increases your home value, and pays for itself — usually within 7-10 years. After that? It&apos;s free power for decades.
              </p>
              <div className="space-y-6">
                {reasons.map(r => (
                  <div key={r.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-kin-orange/10 flex items-center justify-center">
                      <r.icon size={18} className="text-kin-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-0.5">{r.title}</h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/646bab8ae3028f716f7521eb_kin-truck---walking.jpg"
                alt="KIN Home truck and technician"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-kin-dark border border-white/10 rounded-2xl p-5 shadow-2xl">
                <div className="text-3xl font-bold text-kin-orange">$150+</div>
                <div className="text-sm text-neutral-400">avg. monthly savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ REVIEWS ════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-orange uppercase tracking-widest mb-3">Customer Reviews</p>
            <h2 className="text-3xl md:text-5xl font-bold">Don&apos;t take our word for it.</h2>
            <p className="text-neutral-400 mt-4">
              882+ verified Google reviews from real homeowners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(r => (
              <div key={r.name} className="bg-kin-dark-2 border border-white/5 rounded-2xl p-6 hover:border-kin-orange/20 transition-colors">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-kin-orange/20 flex items-center justify-center text-sm font-semibold text-kin-orange">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{r.name}</div>
                    <div className="text-xs text-neutral-500">Verified Google Review</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=kin+home+solar+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kin-orange text-sm font-medium hover:underline inline-flex items-center gap-1"
            >
              See all 882+ reviews on Google <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section className="py-20 md:py-28 bg-kin-dark-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-orange uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold">Three steps to solar.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(s => (
              <div key={s.num} className="relative">
                <div className="text-6xl font-bold text-kin-orange/10 mb-4">{s.num}</div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to power your home <span className="text-kin-orange">with confidence?</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate in minutes. See how much you could save with solar, roofing, or HVAC from KIN Home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-an-instant-estimate"
              className="inline-flex items-center justify-center gap-2 bg-kin-orange hover:bg-kin-orange-light text-white font-semibold text-lg px-10 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
            >
              Get Your Free Estimate
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-neutral-500">
            <span>✓ No obligation</span>
            <span>✓ 2-minute form</span>
            <span>✓ Custom system design</span>
            <span>✓ Financing available</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
