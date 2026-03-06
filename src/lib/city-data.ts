// City-specific data for programmatic SEO pages
// Each city gets UNIQUE content — not template with city swapped

export interface CityData {
  city: string
  state: string
  stateCode: string
  slug: string
  stateSlug: string
  utility: string
  avgBill: number
  sunHours: number // avg daily peak sun hours
  incentives: string[]
  avgSavings: number // monthly
  permits: string
  nearbyAll: string[] // nearby city slugs for internal linking
  faqs: { q: string; a: string }[]
  metaTitle: string
  metaDesc: string
}

export const cityData: Record<string, CityData> = {
  'pensacola': {
    city: 'Pensacola',
    state: 'Florida',
    stateCode: 'FL',
    slug: 'pensacola',
    stateSlug: 'florida',
    utility: 'Gulf Power (NextEra Energy)',
    avgBill: 185,
    sunHours: 5.3,
    incentives: [
      'Federal Solar Investment Tax Credit (ITC) — 30% of system cost',
      'Florida Sales Tax Exemption on solar equipment',
      'Florida Property Tax Exemption — solar doesn\'t increase your property tax',
      'Gulf Power net metering — earn credits for excess energy',
    ],
    avgSavings: 142,
    permits: 'Escambia County requires building permits for solar installations. KIN Home handles all permitting as part of our standard process — typically 2-3 weeks.',
    nearbyAll: ['fort-myers', 'tampa', 'orlando', 'jacksonville'],
    faqs: [
      { q: 'How much does solar cost in Pensacola?', a: 'The average solar installation in Pensacola costs $18,000-$28,000 before the 30% federal tax credit. After the credit, most homeowners pay $12,600-$19,600. KIN Home offers $0-down financing options.' },
      { q: 'How much can I save with solar in Pensacola?', a: 'The average Pensacola homeowner saves approximately $142/month on their electric bill with solar. Over 25 years, that\'s over $42,000 in savings.' },
      { q: 'Does solar work during Florida hurricanes?', a: 'Solar panels are tested to withstand 140+ mph winds and installed to Florida Building Code standards. During a hurricane, your system automatically shuts down for safety. With battery backup, you can keep critical systems running during outages.' },
      { q: 'How long does solar installation take in Pensacola?', a: 'From signing to powering on, the typical timeline is 30-60 days. The actual installation is usually completed in one day. Most of the timeline is permitting and utility approval, which KIN handles for you.' },
      { q: 'Does Gulf Power offer net metering?', a: 'Yes. Gulf Power (NextEra Energy) offers net metering for residential solar customers. Excess energy your panels produce is credited to your account at the full retail rate.' },
    ],
    metaTitle: 'Pensacola Solar Installation | KIN Home — 882+ Five-Star Reviews',
    metaDesc: 'Get solar panels installed in Pensacola, FL by KIN Home. 4,000+ installs, 882+ five-star reviews. Free estimate, $0-down financing. Gulf Power net metering.',
  },
  'fort-myers': {
    city: 'Fort Myers',
    state: 'Florida',
    stateCode: 'FL',
    slug: 'fort-myers',
    stateSlug: 'florida',
    utility: 'Florida Power & Light (FPL)',
    avgBill: 198,
    sunHours: 5.7,
    incentives: [
      'Federal Solar Investment Tax Credit (ITC) — 30% of system cost',
      'Florida Sales Tax Exemption on solar equipment',
      'Florida Property Tax Exemption — solar doesn\'t increase your property tax',
      'FPL net metering — earn credits for excess energy at retail rate',
    ],
    avgSavings: 156,
    permits: 'Lee County requires building and electrical permits for solar installations. KIN Home handles all permitting — typically 2-4 weeks in Lee County.',
    nearbyAll: ['tampa', 'sarasota', 'orlando', 'pensacola'],
    faqs: [
      { q: 'How much does solar cost in Fort Myers?', a: 'The average solar installation in Fort Myers costs $19,000-$30,000 before the 30% federal tax credit. After the credit, most homeowners pay $13,300-$21,000. KIN Home offers $0-down financing.' },
      { q: 'How much can I save with solar in Fort Myers?', a: 'Fort Myers gets more sun than most of Florida. The average homeowner saves approximately $156/month with solar — over $46,000 over 25 years.' },
      { q: 'Does FPL offer net metering in Fort Myers?', a: 'Yes. FPL offers net metering at the full retail rate for residential solar customers. Excess energy is credited to your next bill.' },
      { q: 'Is solar worth it after Hurricane Ian?', a: 'Absolutely. Solar panels are built to withstand 140+ mph winds. Many Fort Myers solar installations survived Hurricane Ian intact. With battery backup, solar provides energy independence during outages — a real advantage in Southwest Florida.' },
      { q: 'How long does solar installation take in Fort Myers?', a: 'Typical timeline from signing to power-on is 30-60 days. Actual roof installation is usually one day. Lee County permitting is the main timeline factor, and KIN handles it all.' },
    ],
    metaTitle: 'Fort Myers Solar Installation | KIN Home — FPL Net Metering Experts',
    metaDesc: 'Solar panel installation in Fort Myers, FL. 882+ five-star reviews, FPL net metering, $0-down financing. Free estimate from KIN Home — your local solar team.',
  },
  'tampa': {
    city: 'Tampa',
    state: 'Florida',
    stateCode: 'FL',
    slug: 'tampa',
    stateSlug: 'florida',
    utility: 'Tampa Electric (TECO)',
    avgBill: 192,
    sunHours: 5.5,
    incentives: [
      'Federal Solar Investment Tax Credit (ITC) — 30% of system cost',
      'Florida Sales Tax Exemption on solar equipment',
      'Florida Property Tax Exemption',
      'TECO net metering — credits for excess solar production',
    ],
    avgSavings: 148,
    permits: 'Hillsborough County requires building and electrical permits. KIN Home handles all Tampa-area permitting, typically 2-3 weeks.',
    nearbyAll: ['sarasota', 'orlando', 'fort-myers', 'jacksonville'],
    faqs: [
      { q: 'How much does solar cost in Tampa?', a: 'The average Tampa solar installation costs $18,500-$29,000 before the 30% federal tax credit. After the credit, expect to pay $12,950-$20,300. $0-down financing available.' },
      { q: 'How much will I save with solar in Tampa?', a: 'Tampa homeowners save an average of $148/month on electricity with solar. That\'s $44,400+ over the 25-year warranty period.' },
      { q: 'Does TECO offer net metering?', a: 'Yes. Tampa Electric (TECO) offers net metering for residential solar. Excess energy is credited at the avoided cost rate. Your KIN consultant will explain exactly what this means for your bill.' },
      { q: 'How many solar panels do I need for my Tampa home?', a: 'The average Tampa home needs 20-30 panels (8-12 kW system). Your KIN consultant designs a custom system based on your roof, energy usage, and goals.' },
      { q: 'Can I add battery storage in Tampa?', a: 'Yes. Battery backup is increasingly popular in the Tampa Bay area for storm preparedness. KIN Home installs battery systems alongside solar to keep your critical systems running during outages.' },
    ],
    metaTitle: 'Tampa Solar Installation | KIN Home — TECO Net Metering & $0 Down',
    metaDesc: 'Get solar panels in Tampa, FL with KIN Home. 882+ reviews, TECO net metering, $0-down financing. Free estimate — your local Tampa solar installation team.',
  },
  'orlando': {
    city: 'Orlando',
    state: 'Florida',
    stateCode: 'FL',
    slug: 'orlando',
    stateSlug: 'florida',
    utility: 'Duke Energy Florida / OUC',
    avgBill: 178,
    sunHours: 5.4,
    incentives: [
      'Federal Solar Investment Tax Credit (ITC) — 30% of system cost',
      'Florida Sales Tax Exemption on solar equipment',
      'Florida Property Tax Exemption',
      'Duke Energy / OUC net metering programs',
    ],
    avgSavings: 138,
    permits: 'Orange County requires building permits for solar. KIN Home manages all Orlando-area permitting — typically 2-3 weeks.',
    nearbyAll: ['tampa', 'jacksonville', 'fort-myers', 'sarasota'],
    faqs: [
      { q: 'How much does solar cost in Orlando?', a: 'Orlando solar installations typically cost $17,500-$27,000 before the 30% federal tax credit. After the credit: $12,250-$18,900. Financing available with $0 down.' },
      { q: 'How much can I save with solar in Orlando?', a: 'The average Orlando homeowner saves about $138/month with solar — over $41,000 across the 25-year system warranty.' },
      { q: 'Which utility serves Orlando for solar?', a: 'Most of Orlando is served by Duke Energy Florida or OUC (Orlando Utilities Commission). Both offer net metering programs. Your KIN consultant will verify your utility and optimize your system accordingly.' },
      { q: 'Is Orlando good for solar?', a: 'Orlando averages 5.4 peak sun hours per day — excellent for solar. The Sunshine State lives up to its name, and Central Florida is one of the best regions for solar energy production.' },
      { q: 'Does KIN Home serve all of Central Florida?', a: 'Yes. KIN Home serves Orlando, Kissimmee, Winter Park, Sanford, Daytona Beach, and all of Central Florida with local installation teams.' },
    ],
    metaTitle: 'Orlando Solar Installation | KIN Home — Duke Energy & OUC Net Metering',
    metaDesc: 'Solar panels for Orlando, FL homes. 882+ five-star reviews, Duke Energy/OUC net metering, $0-down financing. Get your free estimate from KIN Home.',
  },
  'jacksonville': {
    city: 'Jacksonville',
    state: 'Florida',
    stateCode: 'FL',
    slug: 'jacksonville',
    stateSlug: 'florida',
    utility: 'JEA (Jacksonville Electric Authority)',
    avgBill: 175,
    sunHours: 5.2,
    incentives: [
      'Federal Solar Investment Tax Credit (ITC) — 30% of system cost',
      'Florida Sales Tax Exemption on solar equipment',
      'Florida Property Tax Exemption',
      'JEA net metering — credits for excess solar production',
    ],
    avgSavings: 132,
    permits: 'Duval County requires building permits for solar installations. KIN Home handles all Jacksonville-area permitting.',
    nearbyAll: ['orlando', 'tampa', 'sarasota', 'pensacola'],
    faqs: [
      { q: 'How much does solar cost in Jacksonville?', a: 'Jacksonville solar installations average $17,000-$26,000 before the 30% federal tax credit. After: $11,900-$18,200. $0-down financing available.' },
      { q: 'Does JEA offer net metering?', a: 'Yes. JEA offers net metering for residential solar customers. Excess energy is credited to your bill. Your KIN consultant will explain the specific rates and program details.' },
      { q: 'How much sun does Jacksonville get for solar?', a: 'Jacksonville averages 5.2 peak sun hours per day — plenty for strong solar production. Northeast Florida is excellent for solar energy.' },
      { q: 'How long does solar installation take in Jacksonville?', a: 'From contract to power-on: typically 30-60 days. The rooftop installation is usually completed in one day. KIN handles all Duval County permitting.' },
      { q: 'Can solar panels withstand Jacksonville storms?', a: 'Yes. Solar panels are rated for 140+ mph winds and installed to Florida Building Code. Many Jacksonville installations have withstood severe storms without damage.' },
    ],
    metaTitle: 'Jacksonville Solar Installation | KIN Home — JEA Net Metering Experts',
    metaDesc: 'Solar panel installation in Jacksonville, FL. JEA net metering, 882+ five-star reviews, $0-down financing. Get your free estimate from KIN Home today.',
  },
  'sarasota': {
    city: 'Sarasota',
    state: 'Florida',
    stateCode: 'FL',
    slug: 'sarasota',
    stateSlug: 'florida',
    utility: 'Florida Power & Light (FPL)',
    avgBill: 195,
    sunHours: 5.6,
    incentives: [
      'Federal Solar Investment Tax Credit (ITC) — 30% of system cost',
      'Florida Sales Tax Exemption on solar equipment',
      'Florida Property Tax Exemption',
      'FPL net metering at retail rate',
    ],
    avgSavings: 152,
    permits: 'Sarasota County requires building permits for solar installations. KIN Home manages all permitting — typically 2-3 weeks.',
    nearbyAll: ['tampa', 'fort-myers', 'orlando', 'jacksonville'],
    faqs: [
      { q: 'How much does solar cost in Sarasota?', a: 'Sarasota solar installations typically cost $19,000-$30,000 before the 30% federal tax credit. After: $13,300-$21,000. $0-down financing available.' },
      { q: 'Is Sarasota good for solar panels?', a: 'Excellent. Sarasota averages 5.6 peak sun hours per day — one of the best in Florida for solar production. Your system will generate strong returns year-round.' },
      { q: 'How much can I save with solar in Sarasota?', a: 'The average Sarasota homeowner saves about $152/month with solar. Over 25 years, that\'s $45,600+ in savings.' },
      { q: 'Does FPL net metering work in Sarasota?', a: 'Yes. FPL offers net metering at the full retail rate for Sarasota County solar customers. Excess energy credits roll over to your next bill.' },
      { q: 'How long is solar installation in Sarasota?', a: 'Contract to power-on is typically 30-60 days. Roof installation is usually one day. KIN handles all Sarasota County permitting.' },
    ],
    metaTitle: 'Sarasota Solar Installation | KIN Home — FPL Net Metering & Free Estimates',
    metaDesc: 'Solar panels for Sarasota, FL homes. 882+ reviews, FPL net metering, $0-down financing. Free estimate from KIN Home — your local Sarasota solar company.',
  },
}

export function getCityData(slug: string): CityData | undefined {
  return cityData[slug]
}

export function getAllCitySlugs(): { state: string; city: string }[] {
  return Object.values(cityData).map(c => ({
    state: c.stateSlug,
    city: c.slug,
  }))
}
