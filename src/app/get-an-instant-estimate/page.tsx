'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Shield, Phone } from 'lucide-react'

export default function GetAnInstantEstimatePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', smsConsent: false })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission — replace with real API
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/6261ddc4a5e3c506eb46f398__X5A0704-copy-2.jpg" alt="Solar home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-start">
          {/* Left — value prop */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 bg-kin-sage/10 text-kin-sage text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Star size={14} className="text-kin-gold fill-kin-gold" />
              Free · No obligation · 2 minutes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text leading-tight mb-6">
              Get your free<br /><span className="text-kin-sage">solar estimate.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed max-w-md">
              Find out how much you could save with solar. We&apos;ll design a custom system for your home — no pressure, no commitment.
            </p>
            <div className="space-y-3 mb-8">
              {[
                'Custom system design for your roof',
                'Financing options with $0 down',
                'Local team — not a call center',
                '4,000+ homes powered across 10 states',
              ].map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={16} className="text-kin-sage flex-shrink-0" />
                  <span className="text-sm text-kin-text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-kin-text-secondary">
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-kin-gold fill-kin-gold" />
                4.4★ · 882+ reviews
              </span>
              <span className="flex items-center gap-1.5">
                <Shield size={14} className="text-kin-gray-blue" />
                BBB A+
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-kin-beige p-8 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-kin-sage/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-kin-sage" />
                </div>
                <h3 className="text-2xl font-bold text-kin-text mb-2">You&apos;re all set!</h3>
                <p className="text-kin-text-secondary mb-6">
                  A KIN energy consultant will reach out within 24 hours to discuss your custom solar design.
                </p>
                <p className="text-sm text-kin-text-secondary">
                  Questions? Call us at{' '}
                  <a href="tel:855-264-0363" className="text-kin-sage font-medium hover:underline">855-264-0363</a>
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-kin-text mb-1">Get Your Free Estimate</h3>
                <p className="text-sm text-kin-text-secondary mb-6">Fill out the form below and we&apos;ll be in touch.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-kin-text mb-1.5">Full Name</label>
                    <input
                      id="name" type="text" required placeholder="John Smith"
                      value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-kin-beige bg-kin-light-gray text-kin-text placeholder:text-kin-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-kin-sage/30 focus:border-kin-sage transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-kin-text mb-1.5">Email</label>
                    <input
                      id="email" type="email" required placeholder="john@example.com"
                      value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-kin-beige bg-kin-light-gray text-kin-text placeholder:text-kin-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-kin-sage/30 focus:border-kin-sage transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-kin-text mb-1.5">Phone</label>
                    <input
                      id="phone" type="tel" required placeholder="(555) 123-4567"
                      value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-kin-beige bg-kin-light-gray text-kin-text placeholder:text-kin-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-kin-sage/30 focus:border-kin-sage transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-kin-text mb-1.5">Home Address</label>
                    <input
                      id="address" type="text" required placeholder="123 Main St, City, State"
                      value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-kin-beige bg-kin-light-gray text-kin-text placeholder:text-kin-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-kin-sage/30 focus:border-kin-sage transition-all"
                    />
                  </div>
                  <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={form.smsConsent}
                      onChange={e => setForm(f => ({ ...f, smsConsent: e.target.checked }))}
                      className="mt-0.5 w-4 h-4 rounded border-kin-beige text-kin-sage focus:ring-kin-sage/30 accent-kin-sage"
                    />
                    <span className="text-xs text-kin-text-secondary leading-relaxed">
                      I agree to receive SMS messages from KIN Home about my solar estimate. Message & data rates may apply. Reply STOP to opt out.
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-kin-sage hover:bg-kin-sage-light disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20 mt-2"
                  >
                    {status === 'submitting' ? 'Submitting...' : (
                      <>Get My Free Estimate <ArrowRight size={16} /></>
                    )}
                  </button>
                </form>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center mt-3">Something went wrong. Please try again or call us.</p>
                )}
                <p className="text-[11px] text-kin-text-secondary/60 text-center mt-4">
                  No spam. No obligation. Your info is never shared.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              { value: '4,000+', label: 'Homes Powered' },
              { value: '882+', label: 'Google Reviews' },
              { value: '10', label: 'States Served' },
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

      {/* Prefer to call */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-kin-text mb-3">Prefer to talk to someone?</h2>
          <p className="text-kin-text-secondary mb-6">Our team is ready to help — no call centers, no scripts.</p>
          <a href="tel:855-264-0363"
            className="inline-flex items-center gap-2 bg-kin-charcoal hover:bg-kin-text text-white font-semibold px-8 py-3.5 rounded-full transition-all">
            <Phone size={16} />
            Call 855-264-0363
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
