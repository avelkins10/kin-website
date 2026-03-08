import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas — Solar Installation by State | KIN Home',
  description: 'KIN Home installs solar, roofing, and HVAC in 10+ states. Find your local team in FL, CA, TX, UT, OH, IA, MO, AR, OK, IL, and more.',
}

const activeStates = [
  {
    name: 'California', img: '/img/67fd9ee490e6931404c6652f_CA_3.png',
    cities: ['Bay Area', 'Riverside', 'San Diego', 'Sacramento', 'San Jose', 'Fremont'],
    link: null,
  },
  {
    name: 'Florida', img: '/img/66b3c887cab2d69363534b3a_668229fc6079aea983ac27fe_Florida-p-500.png',
    cities: ['Pensacola', 'Fort Myers', 'Orlando', 'Tampa', 'Clearwater', 'Cape Coral', 'Jacksonville', 'Sarasota'],
    link: null,
  },
  {
    name: 'Texas', img: '/img/66b3c829729995cb2e5439a9_668229fda1151e4d50583cc0_Texas.png',
    cities: ['Dallas', 'Fort Worth', 'Houston', 'Arlington', 'Lubbock'],
    link: null,
  },
  {
    name: 'Utah', img: '/img/66b3c847fd404399fede760a_utah.png',
    cities: ['Salt Lake City', 'Provo', 'St. George'],
    link: null,
  },
  {
    name: 'Ohio', img: '/img/66b3c87bdfdbed2ad1465f21_668229fca45ab01f9a315e63_Ohio-p-500.png',
    cities: ['Columbus', 'Cleveland', 'Cincinnati', 'Dayton', 'Toledo'],
    link: null,
  },
  {
    name: 'Iowa', img: '/img/66b3c870b57c38b60bec4a9d_668229fceb89f63c8ef85cf9_Iowa-p-500.png',
    cities: ['Des Moines', 'Iowa City', 'Cedar Rapids', 'Dubuque', 'Waterloo'],
    link: null,
  },
  {
    name: 'Missouri', img: '/img/676499f31c1b2ab9767f82d7_668229fd0dca7d82424e6f70_Missouri.png',
    cities: ['Kansas City', 'Raymore', 'Belton', 'Blue Springs', 'Grandview'],
    link: null,
  },
  {
    name: 'Arkansas', img: '/img/67649ca45de65559939ec5d8_668229fc4821bac3563f78f9_Arkansas.png',
    cities: ['Gentry', 'Cabot', 'Ward', 'Austin', 'Beebe'],
    link: null,
  },
  {
    name: 'Oklahoma', img: '/img/66b3c86067e3ac00ec56149d_oklahoma.png',
    cities: ['Oklahoma City', 'Tulsa', 'Norman', 'Lawton', 'Edmond'],
    link: null,
  },
  {
    name: 'Illinois', img: null,
    cities: ['Chicago', 'Aurora', 'Joliet', 'Naperville'],
    link: null,
  },
]

const comingSoon = [
  { name: 'Kentucky', img: '/img/668229fc261bb9fd067d91cb_Kentucky.png' },
  { name: 'Tennessee', img: '/img/668229fc24e911960cca5379_Tennessee.png' },
]

export default function ServiceAreasPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-20 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-kin-sage/10 text-kin-sage text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <MapPin size={14} /> 10+ States Served
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text mb-4">
              Solar in your neighborhood.
            </h1>
            <p className="text-lg text-kin-text-secondary max-w-xl mx-auto">
              Local teams who know your area, your utility, and your incentives.
            </p>
          </div>
        </div>
      </section>

      {/* States Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeStates.map(state => (
              <div key={state.name} className="rounded-2xl border border-kin-beige bg-kin-light-gray p-6 hover:shadow-lg hover:shadow-black/3 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  {state.img ? (
                    <img src={state.img} alt={state.name} className="w-16 h-16 object-contain" />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-kin-beige flex items-center justify-center">
                      <MapPin size={24} className="text-kin-text-secondary" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-kin-text">{state.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {state.cities.map(city => (
                    <span key={city} className="text-xs bg-white border border-kin-beige px-2.5 py-1 rounded-full text-kin-text-secondary">
                      {city}
                    </span>
                  ))}
                </div>
                <Link href={state.link || '/get-an-instant-estimate'}
                  className="text-kin-sage text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  {state.link ? 'View city pages' : 'Get an estimate'} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-kin-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-kin-text mb-2">Coming soon</h2>
            <p className="text-kin-text-secondary text-sm">We&apos;re expanding. These states are next.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {comingSoon.map(state => (
              <div key={state.name} className="flex flex-col items-center bg-white rounded-2xl border border-kin-beige p-6 w-48">
                <img src={state.img} alt={state.name} className="w-20 h-20 object-contain mb-3 opacity-60" />
                <h3 className="font-semibold text-kin-text">{state.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-kin-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to go solar?</h2>
          <p className="text-white/60 text-lg mb-8">Find out how much you can save with a free estimate.</p>
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
