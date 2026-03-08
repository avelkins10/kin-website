import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The KIN Blog — Solar, Energy & Home Tips | KIN Home',
  description: 'Straight talk about solar — what it costs, how it works, what the incentives actually look like after the tax credit expired, and honest answers to the things people are nervous to ask.',
}

const posts = [
  {
    slug: 'solar-fears-honest-answers',
    title: '9 Honest Answers to the Things People Are Actually Afraid of Before Going Solar',
    excerpt: 'Roof damage, locked-in leases, company going out of business, bill savings that don\'t pan out — real answers to the real fears homeowners have about solar.',
    date: 'January 2026',
    img: '/img/69a2a55be98f8517b4880805_63d2bc6a866250e8376d091d_1.png',
  },
  {
    slug: 'how-solar-panels-work',
    title: 'How Solar Panels Work: A Homeowner\'s Guide',
    excerpt: 'How solar panels actually work, what\'s on your roof, what to expect during installation, and how the savings show up on your bill. No engineering degree required.',
    date: 'December 2025',
    img: '/img/6261e9983f4f1e24f8efb86c_shutterstock_1561073777-2-copy-2.jpg',
  },
  {
    slug: 'solar-incentives-2026',
    title: 'Solar Incentives in 2026: What\'s Actually Still Available After the Federal Tax Credit Ended',
    excerpt: 'The federal 30% solar tax credit expired at the end of 2025. Here\'s what incentives are still available in Florida and California — and why solar still makes financial sense.',
    date: 'November 2025',
    img: '/img/6272d02a1332972113954824_24-p-800.jpeg',
  },
  {
    slug: 'solar-cost-florida-2026',
    title: 'How Much Does Solar Cost in Florida in 2026?',
    excerpt: 'What does solar actually cost in Florida in 2026? Real numbers on lease, PPA, and loan options — plus honest payback math after the federal tax credit expired.',
    date: 'October 2025',
    img: '/img/6272d045ce88bbb007158f59_26-p-800.jpeg',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-20 bg-kin-light-gray">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-kin-sage uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold text-kin-text mb-4">
              The KIN Blog.
            </h1>
            <p className="text-lg text-kin-text-secondary leading-relaxed">
              Straight talk about solar — what it costs, how it works, what the incentives actually look like after the tax credit expired, and honest answers to the things people are nervous to ask.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map(post => (
              <Link key={post.slug} href={`/post/${post.slug}`}
                className="group rounded-2xl border border-kin-beige bg-white overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden bg-kin-beige">
                  <img src={post.img} alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs font-medium text-kin-text-secondary mb-2">{post.date}</p>
                  <h2 className="text-lg md:text-xl font-semibold text-kin-text mb-3 group-hover:text-kin-sage transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-kin-text-secondary leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-kin-sage text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* More coming */}
          <div className="text-center mt-12 p-8 rounded-2xl bg-kin-light-gray border border-kin-beige">
            <p className="text-kin-text-secondary">
              More coming soon. We publish practical guides on solar costs, incentives, and how it all actually works — no fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-kin-beige">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-kin-text mb-3">Stay in the loop.</h2>
          <p className="text-kin-text-secondary mb-6">Get solar tips, savings insights, and KIN updates straight to your inbox.</p>
          <a href="http://eepurl.com/h_JQVX" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all">
            Sign Up for Our Newsletter <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
