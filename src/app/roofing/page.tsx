import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Shield, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Installation & Solar-Ready Roofs | KIN Home',
  description: 'KIN Home installs roofs and bundles them with solar for maximum savings. In-house crews, one timeline, one point of contact. Get a free estimate.',
}

const benefits = [
  { title: 'Solar + Roof Bundle Savings', desc: 'Combine your roof replacement with solar installation and save on both. One crew, one project, done right.' },
  { title: 'In-House Crews', desc: 'No subcontractors. Our certified roofing teams handle every install from tear-off to final inspection.' },
  { title: 'Solar-Ready Design', desc: 'Every roof we install is optimized for solar panel placement — the right materials, pitch, and reinforcement.' },
  { title: 'Insurance & Warranty', desc: 'Full manufacturer warranties plus our workmanship guarantee. Licensed, bonded, and insured in every state we serve.' },
  { title: 'One Point of Contact', desc: 'Your project coordinator manages the entire process — roof and solar together. No finger-pointing between contractors.' },
  { title: 'Financing Available', desc: 'Roll your roof and solar into one affordable monthly payment. $0 down options available.' },
]

const process = [
  { num: '1', title: 'Free Roof Assessment', desc: 'We inspect your roof and determine if replacement is needed before solar, or if your current roof is solar-ready.' },
  { num: '2', title: 'Custom Design', desc: 'We design your new roof with solar in mind — optimizing for panel placement, structural support, and ventilation.' },
  { num: '3', title: 'Professional Install', desc: 'Our in-house crew handles tear-off, replacement, and solar mounting. Most roofs are completed in 1-3 days.' },
  { num: '4', title: 'Final Inspection', desc: 'We handle all permits and inspections. You get a new roof and solar system that\'s ready to power your home.' },
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
              New roof?<br /><span className="text-kin-sage">Make it solar-ready.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed max-w-lg">
              Need a roof before going solar? We do both — one crew, one timeline, one payment. Save time and money by bundling.
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

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Why KIN Roofing?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Your roof protects everything. We protect your roof.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="flex gap-3 p-5 rounded-2xl bg-kin-light-gray border border-kin-beige">
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

      {/* Process */}
      <section className="py-20 md:py-28 bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">From assessment to activation.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(s => (
              <div key={s.num} className="bg-white rounded-2xl border border-kin-beige p-6 hover:shadow-lg hover:shadow-black/3 transition-all">
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

      {/* Roof + Solar Bundle */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Bundle & Save</p>
              <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">
                Roof + solar.<br />One crew. One price.
              </h2>
              <p className="text-kin-text-secondary text-base mb-8 leading-relaxed">
                When you need both a roof and solar, doing them together saves time, money, and headaches. 
                We handle everything — no coordinating between contractors, no double permits, no scheduling conflicts.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Save up to 15% vs. hiring separate contractors',
                  'One project timeline — typically 3-5 days total',
                  'Single financing option for both roof and solar',
                  'Roof designed specifically to maximize solar production',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-kin-sage flex-shrink-0" />
                    <span className="text-sm text-kin-text">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/get-an-instant-estimate"
                className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all">
                Get Your Bundle Quote <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <img src="/img/67c60fdbf6258ac11834b43a_7-wavy-roof.png" alt="Solar panels on roof" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a new roof?</h2>
          <p className="text-white/60 text-lg mb-8">Free assessment. In-house crews. Solar-ready design.</p>
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
