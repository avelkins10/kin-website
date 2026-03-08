import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MapPin, Star, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers at KIN Home | Join Our Team',
  description: 'Join KIN Home — a fast-growing solar, roofing, and HVAC company with in-house teams across 10 states. See open positions.',
}

const perks = [
  { title: 'Competitive Pay', desc: 'Top-of-market compensation for sales, installation, and operations roles.' },
  { title: 'Growth Opportunity', desc: 'We\'re growing fast across 10 states. There\'s room to advance and build your career.' },
  { title: 'In-House Culture', desc: 'No subcontracting — you\'re part of the team, not a temp. Real training, real support.' },
  { title: 'Make an Impact', desc: 'Help homeowners save money and reduce their carbon footprint. Work that matters.' },
  { title: 'Benefits', desc: 'Health insurance, PTO, and other benefits for full-time team members.' },
  { title: 'Multiple Locations', desc: 'Teams in FL, CA, TX, UT, OH, IA, MO, and more — find a role near you.' },
]

const roles = [
  { title: 'Solar Sales Representative', location: 'Multiple States', type: 'Full-time' },
  { title: 'Solar Installation Technician', location: 'FL, CA, TX, UT', type: 'Full-time' },
  { title: 'Roofing Crew Member', location: 'FL, TX, UT', type: 'Full-time' },
  { title: 'HVAC Technician', location: 'Multiple States', type: 'Full-time' },
  { title: 'Project Coordinator', location: 'Remote / HQ', type: 'Full-time' },
]

export default function CareersPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/646bab8ae3028f716f7521eb_kin-truck---walking.jpg" alt="KIN team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-kin-sage/10 text-kin-sage text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Users size={14} /> We&apos;re Hiring
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text leading-tight mb-6">
              Build your career<br /><span className="text-kin-sage">at KIN Home.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed max-w-lg">
              We&apos;re a fast-growing solar, roofing, and HVAC company with in-house teams across 10 states. If you want meaningful work with a team that has your back — we want to hear from you.
            </p>
            <a href="#open-roles"
              className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
              View Open Roles <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Why KIN?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">More than a job.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map(p => (
              <div key={p.title} className="flex gap-3 p-5 rounded-2xl bg-kin-light-gray border border-kin-beige">
                <CheckCircle size={18} className="text-kin-sage mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-kin-text text-sm mb-1">{p.title}</h3>
                  <p className="text-sm text-kin-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-20 md:py-28 bg-kin-beige scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Open Positions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Find your role.</h2>
          </div>
          <div className="space-y-3">
            {roles.map(role => (
              <a key={role.title} href="mailto:careers@kinhome.com?subject=Application: {{role.title}}"
                className="flex items-center justify-between p-5 rounded-2xl bg-white border border-kin-beige hover:shadow-lg hover:shadow-black/3 transition-all group">
                <div>
                  <h3 className="font-semibold text-kin-text group-hover:text-kin-sage transition-colors">{role.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-kin-text-secondary flex items-center gap-1">
                      <MapPin size={12} /> {role.location}
                    </span>
                    <span className="text-xs text-kin-text-secondary">{role.type}</span>
                  </div>
                </div>
                <ArrowRight size={16} className="text-kin-sage group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-kin-text-secondary">
              Don&apos;t see your role? Send us your resume at{' '}
              <a href="mailto:careers@kinhome.com" className="text-kin-sage font-medium hover:underline">careers@kinhome.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to make a difference?</h2>
          <p className="text-white/60 text-lg mb-8">Join 500+ KIN team members across 10 states.</p>
          <a href="mailto:careers@kinhome.com"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-all">
            Apply Now <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
