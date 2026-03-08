import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

const posts: Record<string, { title: string; date: string; readTime: string; img: string; content: string[] }> = {
  'solar-fears-honest-answers': {
    title: '9 Honest Answers to the Things People Are Actually Afraid of Before Going Solar',
    date: 'January 15, 2026',
    readTime: '8 min read',
    img: '/img/69a2a55be98f8517b4880805_63d2bc6a866250e8376d091d_1.png',
    content: [
      'Going solar is a big decision, and it\'s normal to have concerns. We hear the same fears from homeowners every day — and they deserve straight answers, not sales pitches.',
      '1. "What if solar damages my roof?" — KIN inspects every roof before installation. If your roof needs work, we\'ll tell you before we touch it. Our in-house crews install to manufacturer specs, and every install is backed by our workmanship warranty. We\'ve done 4,000+ installations without a structural issue.',
      '2. "What if the company goes out of business?" — It\'s a valid concern in an industry with a lot of startups. KIN is vertically integrated — we own the whole process from sales to installation to service. We\'re in 10 states and growing. Your panel and inverter warranties are backed by the manufacturers regardless.',
      '3. "Will I actually save money?" — We design every system based on your real energy usage and your utility\'s actual rates. The savings estimate you get isn\'t a guess — it\'s based on your bill, your roof, and your sun exposure. Most KIN homeowners save $130-$175/month.',
      '4. "What about locked-in leases?" — KIN offers multiple financing options including loans (you own the system) and leases/PPAs (lower commitment). We explain every option clearly before you sign anything. There\'s no bait-and-switch.',
      '5. "What if I sell my house?" — Solar increases home value. Studies show solar homes sell for 4-6% more. If you own your system, it transfers with the home. Lease/PPA agreements can transfer to the buyer.',
      '6. "Do panels work on cloudy days?" — Yes. Solar panels generate electricity from daylight, not just direct sunlight. Production drops on overcast days, but it doesn\'t stop. We design your system for your actual climate, not best-case scenarios.',
      '7. "What about hail and hurricanes?" — Solar panels are tested to withstand 1-inch hail at 50+ mph and winds of 140+ mph. Florida installations follow Florida Building Code. Many KIN systems have survived major storms without damage.',
      '8. "The tax credit expired — is solar still worth it?" — The 30% federal tax credit for purchase/loan expired at the end of 2025. But solar still saves money because utility rates keep rising. TECO rates are up 82% since 2020. FPL keeps adding surcharges. Solar locks in your cost. For lease/PPA customers, Section 48E credits through 2027 keep monthly costs low.',
      '9. "What if the technology changes?" — Solar panel technology is mature and stable. The panels we install today will produce power for 25+ years. Waiting for "better" technology costs you money every month in utility bills you could have avoided.',
      'The bottom line: every one of these fears has a straight answer. If you have more questions, talk to a KIN consultant. No pressure, no scripts — just honest answers.',
    ],
  },
  'how-solar-panels-work': {
    title: 'How Solar Panels Work: A Homeowner\'s Guide',
    date: 'December 10, 2025',
    readTime: '6 min read',
    img: '/img/6261e9983f4f1e24f8efb86c_shutterstock_1561073777-2-copy-2.jpg',
    content: [
      'Solar panels convert sunlight into electricity. Here\'s how it actually works, without the engineering jargon.',
      'The basics: Solar panels are made of photovoltaic (PV) cells — usually silicon. When sunlight hits these cells, it knocks electrons loose, creating an electrical current. That\'s it. Light in, electricity out.',
      'What\'s on your roof: A typical residential system has 20-30 panels, each about 3.5 by 5.5 feet. They\'re mounted on racking that attaches to your roof structure. Modern all-black panels look clean and sleek.',
      'The inverter: Your panels produce DC (direct current) electricity, but your home runs on AC (alternating current). An inverter converts DC to AC. Some systems use one central inverter; others use microinverters on each panel for better performance.',
      'Net metering: When your panels produce more electricity than you\'re using, the excess goes back to the grid. Your utility gives you credits for that energy. When the sun goes down or on cloudy days, you draw from the grid using those credits. It\'s like a bank account for electricity.',
      'Battery storage: Optional but increasingly popular. A battery stores excess solar energy so you can use it at night or during outages instead of sending it to the grid. In California under NEM 3.0, batteries are practically essential for maximizing savings.',
      'How it shows up on your bill: Most solar homeowners see their electric bill drop to the minimum utility charge — often $10-$15/month. Your solar payment replaces most or all of your old electric bill, and in most cases it\'s lower.',
      'Monitoring: KIN sets up a monitoring app during installation. You can see real-time production, daily and monthly energy generation, and system health — all from your phone.',
      'What about maintenance? Solar panels have no moving parts. Rain handles most cleaning. KIN monitors your system and will alert you if production drops unexpectedly. Most systems run trouble-free for decades.',
    ],
  },
  'solar-incentives-2026': {
    title: 'Solar Incentives in 2026: What\'s Actually Still Available After the Federal Tax Credit Ended',
    date: 'November 20, 2025',
    readTime: '7 min read',
    img: '/img/6272d02a1332972113954824_24-p-800.jpeg',
    content: [
      'The federal 30% solar tax credit (Section 25D) expired on December 31, 2025. If you\'re a homeowner considering solar in 2026, here\'s what incentives are actually still available.',
      'Section 48E (lease/PPA customers): If you go solar through a lease or PPA — where a financing company owns the system — federal tax benefits under Section 48E are still available through December 31, 2027. These savings are passed to you as lower monthly payments.',
      'Florida incentives: Florida offers a sales tax exemption on solar equipment (saving you roughly 6% on the system cost) and a property tax exemption — meaning solar won\'t increase your property tax assessment. Both are still active in 2026. Net metering programs through FPL, TECO, Duke Energy, and JEA remain available.',
      'California incentives: California\'s property tax exclusion for solar is still active but expires January 1, 2027. After that, your solar system could increase your property taxes. California has no sales tax on solar equipment. The SGIP program offers rebates for battery storage. NEM 3.0 is the current net metering framework — battery storage is strongly recommended.',
      'State-by-state net metering: Most states KIN operates in still offer some form of net metering, where you get credits for excess solar energy sent to the grid. The specifics vary by utility — your KIN consultant will explain exactly how yours works.',
      'Why solar still makes financial sense without the ITC: Utility rates keep climbing. TECO rates are up 82% since 2020. PG&E has $6.3 billion in pending rate increases. SCE rates jumped ~13% in 2025 with another 12.9% projected for 2026. Solar locks in your energy cost today and protects you from decades of increases.',
      'The math is simple: even without the 30% tax credit, solar saves most homeowners $130-$175/month compared to their utility bill. Over 25 years, that\'s $39,000-$52,000+ in savings. The tax credit made solar a great deal. Rising utility rates make it a necessary one.',
      'Bottom line: The incentive landscape has changed, but the economics of solar are still strong — especially with utility rates rising faster than ever. Talk to a KIN consultant to see the real numbers for your home.',
    ],
  },
  'solar-cost-florida-2026': {
    title: 'How Much Does Solar Cost in Florida in 2026?',
    date: 'October 5, 2025',
    readTime: '6 min read',
    img: '/img/6272d045ce88bbb007158f59_26-p-800.jpeg',
    content: [
      'If you\'re a Florida homeowner considering solar in 2026, here\'s what it actually costs — real numbers, not marketing fluff.',
      'System cost: The average residential solar installation in Florida costs $18,000-$30,000 depending on system size (typically 8-12 kW). That\'s the full installed price before any financing.',
      'What changed in 2026: The federal 30% tax credit (Section 25D) expired at the end of 2025. For homeowners who purchase or finance with a loan, the full system cost is your cost. For lease/PPA customers, Section 48E credits through 2027 keep monthly payments competitive.',
      'Financing options: Most Florida homeowners go solar with $0 down. Loan: You own the system, build equity, typical payments $120-$200/month. Lease/PPA: A financing company owns the system, you pay for the energy at a fixed rate, typically $100-$160/month. Cash: Highest long-term savings, fastest payback (typically 8-11 years in Florida).',
      'Monthly savings: The average Florida homeowner saves $130-$160/month with solar. Your actual savings depend on your current bill, system size, and utility. FPL customers typically save the most due to favorable net metering at retail rates.',
      'Florida incentives still available: Sales tax exemption on solar equipment (~6% savings on system cost). Property tax exemption — solar doesn\'t increase your assessed value. Net metering through FPL, TECO, Duke Energy, JEA, and others.',
      'Why Florida solar costs are worth it: Florida gets 5.2-5.7 peak sun hours per day — excellent for solar production. Utility rates are climbing: TECO rates up 82% since 2020, with another $5.50/month added in January 2026. FPL has locked base rates through 2029 but fuel surcharges keep pushing total bills higher.',
      'The payback math: At $150/month in savings, a $22,000 system pays for itself in about 12 years with financing, or 9-10 years with cash. After payback, you\'re getting free electricity for the remaining 15+ years of your panel warranty.',
      'Get your actual numbers: Every home is different. Roof orientation, shade, energy usage, and utility all affect your cost and savings. A free KIN consultation gives you exact numbers for your home — no guessing.',
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}
  return { title: `${post.title} | KIN Home Blog`, description: post.content[0] }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <>
      <Header />

      <article className="pt-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-kin-text-secondary mb-8">
            <Link href="/" className="hover:text-kin-charcoal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-kin-charcoal transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-kin-charcoal truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-kin-text leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-kin-text-secondary mb-8">
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-10">
            <img src={post.img} alt={post.title} className="w-full aspect-[16/9] object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-5">
            {post.content.map((p, i) => (
              <p key={i} className={`text-kin-text-secondary leading-relaxed ${i === 0 ? 'text-lg' : ''}`}>{p}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-kin-light-gray border border-kin-beige text-center">
            <h3 className="text-xl font-bold text-kin-text mb-2">Ready to see your numbers?</h3>
            <p className="text-sm text-kin-text-secondary mb-4">Get a free, no-obligation estimate for your home.</p>
            <Link href="/get-an-instant-estimate"
              className="inline-flex items-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold px-8 py-3.5 rounded-full transition-all">
              Get Your Free Estimate <ArrowRight size={16} />
            </Link>
          </div>

          {/* Back to blog */}
          <div className="mt-8">
            <Link href="/blog" className="text-kin-sage text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              <ArrowLeft size={14} /> Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
