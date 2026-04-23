import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Star, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Work — Completed Solar Installations | KIN Home',
  description: 'See completed solar, roofing, and HVAC projects from KIN Home. 4,000+ homes powered across 10 states.',
}

const projects = [
  { img: '/img/6272d02a1332972113954824_24-p-800.jpeg', title: 'Residential Solar Install', location: 'Florida', kw: '8.4 kW', type: 'Solar' },
  { img: '/img/6272d045ce88bbb007158f59_26-p-800.jpeg', title: 'Roof + Solar Bundle', location: 'California', kw: '10.2 kW', type: 'Solar + Roof' },
  { img: '/img/6272d052532beb9ecaaa49a5_27-p-800.jpeg', title: 'Solar Panel System', location: 'Texas', kw: '7.8 kW', type: 'Solar' },
  { img: '/img/6261e9983f4f1e24f8efb86c_shutterstock_1561073777-2-copy-2.jpg', title: 'Ground-Mount Solar', location: 'Utah', kw: '12.0 kW', type: 'Solar' },
  { img: '/img/67c23e69611073b0de2ebd2b_A7402606.jpg', title: 'New Roof Installation', location: 'Florida', kw: null, type: 'Roofing' },
  { img: '/img/6261ddc4a5e3c506eb46f398__X5A0704-copy-2.jpg', title: 'Residential Solar', location: 'Ohio', kw: '9.6 kW', type: 'Solar' },
  { img: '/img/67c60fdbf6258ac11834b43a_7-wavy-roof.png', title: 'Solar-Ready Roof', location: 'Arkansas', kw: null, type: 'Roofing' },
  { img: '/img/646ba412d82177fca24f9e7f_DSC03962.jpg', title: 'HVAC + Solar Comfort Plan', location: 'Missouri', kw: '8.0 kW', type: 'Solar + HVAC' },
  { img: '/img/68f290430fecbae226edfe49_sam-jotham-sutharson-gSvCiyLnCeU-unsplash.jpg', title: 'Residential Solar System', location: 'Iowa', kw: '11.2 kW', type: 'Solar' },
]

export default function ProjectsPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-20 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Our Work</p>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text mb-4">
              4,000+ homes powered.
            </h1>
            <p className="text-lg text-kin-text-secondary max-w-xl mx-auto">
              Every project is designed, installed, and monitored by our in-house team. Here&apos;s a look at recent work.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="group rounded-2xl border border-kin-beige bg-white overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-kin-beige">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-kin-text text-sm">{p.title}</h3>
                    <span className="text-xs font-medium text-kin-sage bg-kin-sage/10 px-2.5 py-1 rounded-full">{p.type}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-kin-text-secondary">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {p.location}</span>
                    {p.kw && <span>{p.kw} system</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              { value: '4,000+', label: 'Installs Completed' },
              { value: '10', label: 'States' },
              { value: '909+', label: 'Five-Star Reviews' },
              { value: '1 Day', label: 'Typical Install' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-kin-text">{s.value}</div>
                <div className="text-xs text-kin-text-secondary mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your home could be next.</h2>
          <p className="text-white/60 text-lg mb-8">Get a free estimate and see what solar looks like on your roof.</p>
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
