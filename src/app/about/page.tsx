import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ChevronDown, Sun, Home, Wind } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About KIN Home | Our Story, Team & FAQs',
  description: 'KIN Home has powered 4,000+ homes across 10 states since 2020. In-house everything — solar, roofing, HVAC. Meet our team and learn what makes us different.',
}

const values = [
  { title: 'We do what we say we\'ll do.', desc: 'Simple. If we commit to a timeline, a price, or a call-back — we deliver. Trust is built in the follow-through, not the sales pitch.' },
  { title: 'We own our outcomes.', desc: 'If something goes wrong on a KIN job, it\'s a KIN problem to fix. We don\'t look for someone else to blame and we don\'t make you fight for it.' },
  { title: 'We treat homes like they\'re ours.', desc: 'Every crew is trained to leave a job site cleaner than they found it, communicate proactively, and treat homeowners the way they\'d want to be treated.' },
  { title: 'We play the long game.', desc: 'We\'re not trying to close a deal. We\'re trying to earn a customer for life — and a referral from every person we serve.' },
]

const inHousePoints = [
  { title: 'One Number to Call', desc: 'Every part of your project — sales, installation, inspection, service — flows through KIN. You\'re never passed to a third party. One company, one point of contact.' },
  { title: 'Quality We Can Stand Behind', desc: 'When you control every step of the process, you can set and maintain a quality standard. Subcontractors answer to whoever\'s paying them. Our crews answer to KIN.' },
  { title: 'Communication That Doesn\'t Fall Through the Cracks', desc: 'Your project manager tracks your job from signed contract to final inspection. You always know where your project stands.' },
]

const services = [
  { icon: Sun, title: 'Solar', desc: 'Panels, inverters, battery storage, monitoring. Every system designed for your home, your roof, and your utility.' },
  { icon: Home, title: 'Roofing', desc: 'Full replacements, repairs, and solar-integrated installs. Bundled with solar or standalone.' },
  { icon: Wind, title: 'HVAC', desc: 'The KIN Comfort Plan. Right-sized equipment. High-efficiency systems. Designed to work with your solar installation.' },
]

const leadership = [
  { name: 'Austin Elkins', title: 'CEO & Founder' },
  { name: 'James Tootill', title: 'Chief Operating Officer' },
  { name: 'Blake Corbin', title: 'Chief Financial Officer' },
  { name: 'Brady Gurr', title: 'Chief Commercial Officer', img: '/img/66822586eb89f63c8ef55f27_Brady-Gurr-headshot.jpg' },
]

const faqs = [
  { q: 'Is the federal solar tax credit still available?', a: 'The 30% federal tax credit for homeowners who purchase or finance solar (Section 25D) expired on December 31, 2025. If you\'re considering a lease or PPA, federal tax benefits under Section 48E are still available through December 31, 2027 — and our financing partners pass those savings to you in the form of lower monthly rates. We\'ll walk you through the options that make sense for your situation.' },
  { q: 'How long does a solar installation take?', a: 'From signed contract to live system, most installations take 8–16 weeks. The biggest variable is your utility company\'s interconnection timeline — something largely outside anyone\'s control. Your KIN project manager will track every step and keep you updated throughout.' },
  { q: 'Does solar work in cloudy climates?', a: 'Yes. Solar panels generate electricity from daylight, not direct sunlight. Cloudy days reduce output — they don\'t eliminate it. We design every system based on your actual location\'s irradiance data, so your production estimates reflect real-world conditions.' },
  { q: 'What happens if I produce more energy than I use?', a: 'Excess energy goes back to the grid, and your utility credits you for it under net metering policies. The rules vary by state and utility — KIN will explain exactly how yours works before you sign anything.' },
  { q: 'Do I need to replace my roof before going solar?', a: 'Not always. We inspect every roof before installation. If your roof has 10+ good years left, you\'re typically fine to proceed. If it needs work, we\'ll tell you — and we can handle both as a bundled project so you don\'t have to coordinate two separate companies.' },
  { q: 'What\'s included in the warranty?', a: 'KIN\'s installations include manufacturer warranties on panels and equipment (typically 25 years on panels), plus our own workmanship warranty. Your project manager will walk through the specifics for your system.' },
  { q: 'Can I add battery storage?', a: 'Yes. Battery storage is available with most KIN installations and can be added at the time of install or retrofitted later. In states like California and Colorado where grid reliability is a concern, we typically recommend designing for battery from the start.' },
  { q: 'How does KIN compare to the national solar companies I keep seeing ads for?', a: 'The biggest difference is that we do everything in-house. Large national companies often subcontract installation in local markets, which creates accountability gaps. When you work with KIN, the same company that sold you the system is the one installing it and standing behind it.' },
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
              We started with one belief:<br /><span className="text-kin-sage">homeowners deserve better.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary leading-relaxed max-w-lg">
              Better solar. Better roofing. Better HVAC. Better communication. KIN Home was built on the idea that when you do it all in-house, everything gets better — the quality, the accountability, and the experience.
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

      {/* Company Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                How KIN got here.
              </h2>
              <div className="space-y-4 text-kin-text-secondary leading-relaxed">
                <p>
                  KIN Home was founded in 2020 with a straightforward premise: the home energy industry had too many handoffs, too many subcontractors, and not enough accountability.
                </p>
                <p>
                  Most solar companies design your system, then hand off installation to a third party, then hand off service to someone else entirely. If something goes wrong, you spend weeks figuring out who&apos;s responsible.
                </p>
                <p>
                  We built KIN differently. Our sales team, our installation crews, our project managers, our roofing and HVAC teams — all in-house, all under the same roof. When we put our name on a job, we mean it.
                </p>
                <p>
                  Since 2020, we&apos;ve completed more than 4,000 installations across 10 states. We have over 880 Google reviews and a 4.4-star rating — earned one installation at a time.
                </p>
                <p className="font-medium text-kin-text">
                  We&apos;re not the biggest solar company. We&apos;re building the one that homeowners actually trust.
                </p>
              </div>
            </div>
            <div>
              <img src="/img/6261ddc4a5e3c506eb46f398__X5A0704-copy-2.jpg" alt="Solar installation" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* In-House Everything */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">What Sets Us Apart</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">In-house everything. No exceptions.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {inHousePoints.map(p => (
              <div key={p.title} className="bg-white rounded-2xl border border-kin-beige p-8">
                <CheckCircle size={20} className="text-kin-sage mb-4" />
                <h3 className="text-lg font-semibold text-kin-text mb-2">{p.title}</h3>
                <p className="text-sm text-kin-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Install */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">What We Install</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">One company. Your whole home.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="text-center p-8 rounded-2xl bg-kin-light-gray border border-kin-beige">
                <div className="w-14 h-14 rounded-2xl bg-kin-sage/10 flex items-center justify-center mx-auto mb-5">
                  <s.icon size={24} className="text-kin-sage" />
                </div>
                <h3 className="text-lg font-semibold text-kin-text mb-2">{s.title}</h3>
                <p className="text-sm text-kin-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Core Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">How we operate.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-sm text-kin-sage font-medium">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Frequently Asked Questions</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See what 4,000+ homeowners already know.</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            We&apos;d rather show you than tell you. Start with a free consultation — no pressure, no obligation — and find out what solar, roofing, or HVAC could look like for your home.
          </p>
          <Link href="/get-an-instant-estimate"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-all">
            Get a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
