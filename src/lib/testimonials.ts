export interface Testimonial {
  name: string
  city?: string
  state?: string
  systemKw?: number
  savingsBefore?: number
  savingsAfter?: number
  savingsText?: string
  quote: string
  stars: number
  verified: 'qb' | 'crm-pending' | 'last-name'
  /** Where to use: 'hero' | 'homepage' | 'city-fl' | 'city-ia' | 'city-ca' */
  use: string[]
}

/**
 * Real Results data — Google reviewers matched to QuickBase records.
 * Source: Scout's testimonial-sheet-FINAL-2026-03-01.md
 *
 * ⚠️ ALL DATA REQUIRES AUSTIN APPROVAL BEFORE GOING LIVE.
 * CRM:Pending entries need QB second-pass for system sizes.
 */
export const testimonials: Testimonial[] = [
  // ── GROUP 1: QB-VERIFIED ──
  {
    name: 'Lonnie Appleby',
    state: 'Iowa',
    systemKw: 7.2,
    quote: 'Panels on my roof 5 days after we talked. Entire process took 10 days at the most.',
    stars: 5,
    verified: 'qb',
    use: ['homepage', 'city-ia'],
  },
  {
    name: 'Robert Turner',
    state: 'Florida',
    systemKw: 8.9,
    quote: 'From the day I talked to Brice to panels on our roof was less than 18 days. 20 out of 10.',
    stars: 5,
    verified: 'qb',
    use: ['homepage', 'city-fl'],
  },
  {
    name: 'Corey Coons',
    state: 'Florida',
    systemKw: 8.0,
    quote: 'Everything went according to what we were told. Would definitely recommend Kin for solar needs.',
    stars: 5,
    verified: 'qb',
    use: ['city-fl'],
  },
  {
    name: 'Robyn Hunter',
    state: 'Iowa',
    systemKw: 5.7,
    quote: 'They made a challenging decision easy to understand. 25-year warranties. Love our panels.',
    stars: 5,
    verified: 'qb',
    use: ['city-ia'],
  },
  {
    name: 'Lynn Williams',
    state: 'Utah',
    systemKw: 4.0,
    quote: "At 78 years old it isn't easy but they help me out a lot. Felt confident after talking with Alex.",
    stars: 5,
    verified: 'qb',
    use: ['homepage'],
  },

  // ── GROUP 2: SAVINGS REVIEWS (CRM:Pending) ──
  {
    name: 'Kevin Roberts',
    savingsBefore: 300,
    savingsAfter: 4.67,
    savingsText: '$300/mo → $4.67/mo',
    quote: 'Just got my first power bill after going live — went from $300.00 last month to $4.67 this month.',
    stars: 5,
    verified: 'crm-pending',
    use: ['hero', 'homepage'],
  },
  {
    name: 'Hazel K.',
    state: 'Florida',
    city: 'Central Florida',
    savingsBefore: 100,
    savingsAfter: 3.50,
    savingsText: '$100/mo → $3.50/mo',
    quote: "Last month my electric bill was about $3.50. Last year at the same time it was well over $100.",
    stars: 5,
    verified: 'crm-pending',
    use: ['homepage', 'city-fl'],
  },
  {
    name: 'Tyler Winters',
    state: 'Florida',
    city: 'Kissimmee',
    systemKw: 5.3,
    savingsBefore: 343,
    savingsText: '$343 Duke bill → solar',
    quote: "He showed us how we'd wipe out our highest Duke bill of $343 and replace it with a fixed solar payment.",
    stars: 5,
    verified: 'last-name',
    use: ['homepage', 'city-fl'],
  },
  {
    name: 'Logan Waggoner',
    savingsAfter: 0,
    savingsText: '$0 electric bill',
    quote: 'My system was up and running and now I have no electric bill!',
    stars: 5,
    verified: 'crm-pending',
    use: ['homepage'],
  },
  {
    name: 'Rick Donath',
    state: 'Iowa',
    city: 'Dubuque',
    savingsBefore: 140,
    savingsAfter: 97,
    savingsText: '$140/mo → $97/mo',
    quote: 'Reduced our electric bill from $140 to $97/mo. Very impressive.',
    stars: 5,
    verified: 'crm-pending',
    use: ['city-ia'],
  },
]

/** Get testimonials for homepage carousel */
export function getHomepageTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.use.includes('homepage'))
}

/** Get the hero testimonial (Kevin Roberts $300→$4.67) */
export function getHeroTestimonial(): Testimonial | undefined {
  return testimonials.find(t => t.use.includes('hero'))
}

/** Get testimonials for a specific state's city pages */
export function getCityTestimonials(stateKey: string): Testimonial[] {
  return testimonials.filter(t => t.use.includes(`city-${stateKey}`))
}
