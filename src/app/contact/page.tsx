'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
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
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text mb-4">We&apos;d love to hear from you.</h1>
            <p className="text-lg text-kin-text-secondary max-w-xl mx-auto">
              Have a question? Need support? Want a free estimate? Reach out — our team is here to help.
            </p>
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
                    <p className="text-kin-text-secondary text-sm">855-264-0363</p>
                  </div>
                </a>
                <a href="mailto:info@kinhome.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-kin-sage/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-kin-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kin-text group-hover:text-kin-sage transition-colors">Email</h3>
                    <p className="text-kin-text-secondary text-sm">info@kinhome.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-kin-sage/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-kin-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kin-text">Office</h3>
                    <p className="text-kin-text-secondary text-sm">Lindon, Utah</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-kin-sage/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-kin-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kin-text">Hours</h3>
                    <p className="text-kin-text-secondary text-sm">Mon–Fri: 8am–6pm MST</p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
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
                  <h3 className="text-2xl font-bold text-kin-text mb-2">Message sent!</h3>
                  <p className="text-kin-text-secondary">We&apos;ll get back to you within one business day.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-kin-text mb-1">Send us a message</h3>
                  <p className="text-sm text-kin-text-secondary mb-6">We&apos;ll respond within one business day.</p>
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
