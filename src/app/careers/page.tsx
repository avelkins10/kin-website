import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MapPin, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers at KIN Home | Join Our Team',
  description: 'Join KIN Home — 100+ installs/month across 10 states. Sales, installation, operations. In-house everything. Real career paths. See open positions.',
}

const culture = [
  { title: 'Accountability over excuses.', desc: 'We don\'t have time for blame-shifting. If you own a result, you own it — good or bad. The people who thrive here are the ones who step up when things get hard.' },
  { title: 'Pride in the craft.', desc: 'Our installation teams take real pride in clean, well-executed work. Our sales teams take pride in setting accurate expectations. Our project managers take pride in communication that doesn\'t leave homeowners guessing.' },
  { title: 'Team-first mentality.', desc: 'Solar is a team sport. No one closes a job, installs a system, or gets a customer through permitting alone. We win together or we don\'t win.' },
  { title: 'Room to grow.', desc: 'We promote from within. Sales reps become team leads. Project coordinators become managers. If you\'re good and you want more responsibility, we\'ll find a way to give it to you.' },
]

const differentiators = [
  { title: 'In-house everything', desc: 'You\'re learning the full business, not just one slice of it.' },
  { title: 'Real volume', desc: '100–170 installations a month means you\'re not waiting around for experience to accumulate.' },
  { title: 'A company in growth mode', desc: 'KIN expanded to 10 states in five years. If you want to grow alongside a company, the timing is right.' },
  { title: 'People who care about quality', desc: 'We attract people who give a damn about doing the job right. That makes the work better and the team better.' },
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
              Build something real<br /><span className="text-kin-sage">at KIN.</span>
            </h1>
            <p className="text-lg text-kin-text-secondary mb-8 leading-relaxed max-w-lg">
              We&apos;re a fast-growing home energy company doing 100+ installations a month across 10 states. We need people who take pride in their work, own their results, and want to grow with a company that&apos;s actually going somewhere.
            </p>
            <a href="#open-roles"
              className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
              See Open Roles <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* The KIN Opportunity */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">The Opportunity</p>
          <h2 className="text-3xl md:text-4xl font-bold text-kin-text mb-6">What it means to work here.</h2>
          <div className="space-y-4 text-kin-text-secondary leading-relaxed">
            <p>
              KIN isn&apos;t a franchise. It&apos;s not a subcontractor operation. Every person who works here — from sales to installation to project management — is part of one company building one thing together.
            </p>
            <p>
              That matters because it means your work is visible. Your results are tracked. When you do well, it gets noticed. When something doesn&apos;t go right, the people responsible fix it — not a third party, not &ldquo;the installer.&rdquo;
            </p>
            <p>
              We&apos;ve grown from zero to 4,000+ installs since 2020. That growth has created real career paths in solar sales, project management, installation, operations, and customer experience. If you want to grow as we grow, there&apos;s room here.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 md:py-28 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Culture, not slogans.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {culture.map(c => (
              <div key={c.title} className="flex gap-4 p-6 rounded-2xl bg-white border border-kin-beige">
                <CheckCircle size={20} className="text-kin-sage mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-kin-text mb-1">{c.title}</h3>
                  <p className="text-sm text-kin-text-secondary leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes KIN Different */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Why KIN?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">What makes KIN different as an employer.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map(d => (
              <div key={d.title} className="p-6 rounded-2xl bg-kin-light-gray border border-kin-beige">
                <h3 className="font-semibold text-kin-text mb-2">{d.title}</h3>
                <p className="text-sm text-kin-text-secondary leading-relaxed">{d.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-kin-text">Ready to join?</h2>
            <p className="text-kin-text-secondary mt-3">
              We&apos;re hiring across sales, operations, installation, and support. If you don&apos;t see something that fits, reach out anyway.
            </p>
          </div>
          <div className="space-y-3">
            {roles.map(role => (
              <a key={role.title} href={`mailto:support@kinhome.com?subject=Application: ${role.title}`}
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
              Questions? Email us at{' '}
              <a href="mailto:support@kinhome.com" className="text-kin-sage font-medium hover:underline">support@kinhome.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build your career at KIN.</h2>
          <p className="text-white/60 text-lg mb-8">4,000+ installs. 10 states. One team. Room to grow.</p>
          <a href="mailto:support@kinhome.com?subject=Career Inquiry"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-all">
            View Open Positions <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
