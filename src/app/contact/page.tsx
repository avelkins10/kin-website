'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Clock } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <>
      <Header />

      <section className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text mb-4">Let&apos;s talk.</h1>
            <p className="text-lg text-kin-text-secondary max-w-xl mx-auto">
              Whether you have a question about solar, want to check on your project, or just want to know if KIN is a good fit for your home — we&apos;re easy to reach.
            </p>
          </div>

          {/* Intro copy */}
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <p className="text-kin-text-secondary leading-relaxed mb-4">
              No runaround. No call center script. When you reach out to KIN, you&apos;re talking to someone who can actually help.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-kin-light-gray border border-kin-beige">
                <h3 className="font-semibold text-kin-text text-sm mb-1">New customers</h3>
                <p className="text-xs text-kin-text-secondary leading-relaxed">
                  Call or fill out the form to get a free consultation. We&apos;ll walk you through what solar, roofing, or HVAC could look like for your home.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-kin-light-gray border border-kin-beige">
                <h3 className="font-semibold text-kin-text text-sm mb-1">Existing customers</h3>
                <p className="text-xs text-kin-text-secondary leading-relaxed">
                  Have a question about your installation or project? Reach us at{' '}
                  <a href="mailto:support@kinhome.com" className="text-kin-sage hover:underline">support@kinhome.com</a>
                  {' '}and a member of your project team will follow up.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-kin-text mb-6">Get in touch</h2>
              <div className="space-y-6 mb-10">
                <a href="tel:855-264-0363" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-kin-sage/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-kin-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kin-text group-hover:text-kin-sage transition-colors">Phone</h3>
                    <p className="text-kin-text-secondary text-sm">(855) 264-0363</p>
                  </div>
                </a>
                <a href="mailto:support@kinhome.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-kin-sage/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-kin-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kin-text group-hover:text-kin-sage transition-colors">Email</h3>
                    <p className="text-kin-text-secondary text-sm">support@kinhome.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-kin-sage/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-kin-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kin-text">Hours</h3>
                    <p className="text-kin-text-secondary text-sm">Monday–Friday, 8am–6pm (local time)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-kin-sage/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-kin-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kin-text">Office</h3>
                    <p className="text-kin-text-secondary text-sm">Lindon, Utah</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-kin-beige h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.5!2d-111.72!3d40.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIwJzI0LjAiTiAxMTHCsDQzJzEyLjAiVw!5e0!3m2!1sen!2sus!4v1"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="KIN Home Office"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-kin-light-gray rounded-3xl border border-kin-beige p-8 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-kin-sage/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-kin-sage" />
                  </div>
                  <h3 className="text-2xl font-bold text-kin-text mb-2">Thanks!</h3>
                  <p className="text-kin-text-secondary mb-4">
                    We&apos;ll be in touch within one business day.
                  </p>
                  <p className="text-sm text-kin-text-secondary">
                    In the meantime, take a look at the{' '}
                    <Link href="/blog" className="text-kin-sage font-medium hover:underline">KIN blog</Link>
                    {' '}for straight talk on how solar works and what it costs.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-kin-text mb-1">Get a Free Consultation</h3>
                  <p className="text-sm text-kin-text-secondary mb-6">Tell us a little about your home and we&apos;ll be in touch within one business day.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="c-name" className="block text-sm font-medium text-kin-text mb-1.5">Name</label>
                      <input id="c-name" type="text" required placeholder="Your name"
                        value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-kin-beige bg-white text-kin-text placeholder:text-kin-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-kin-sage/30 focus:border-kin-sage transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="block text-sm font-medium text-kin-text mb-1.5">Email</label>
                      <input id="c-email" type="email" required placeholder="you@example.com"
                        value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-kin-beige bg-white text-kin-text placeholder:text-kin-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-kin-sage/30 focus:border-kin-sage transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-phone" className="block text-sm font-medium text-kin-text mb-1.5">Phone (optional)</label>
                      <input id="c-phone" type="tel" placeholder="(555) 123-4567"
                        value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-kin-beige bg-white text-kin-text placeholder:text-kin-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-kin-sage/30 focus:border-kin-sage transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-message" className="block text-sm font-medium text-kin-text mb-1.5">Message</label>
                      <textarea id="c-message" required rows={4} placeholder="How can we help?"
                        value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-kin-beige bg-white text-kin-text placeholder:text-kin-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-kin-sage/30 focus:border-kin-sage transition-all resize-none"
                      />
                    </div>
                    <button type="submit" disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 bg-kin-sage hover:bg-kin-sage-light disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
                      {status === 'submitting' ? 'Sending...' : (
                        <>Send Message <ArrowRight size={16} /></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
