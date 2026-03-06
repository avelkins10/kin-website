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
    utility: 'Florida Power & Light (formerly Gulf Power)',
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
    metaTitle: 'Solar Installation in Pensacola, FL | KIN Home',
    metaDesc: 'KIN Home installs solar panels in Pensacola, FL. FPL net metering means you get full credit for excess power. In-house crews, $0 down. Get a free estimate.',
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
    metaTitle: 'Solar Installation in Fort Myers, FL | KIN Home',
    metaDesc: 'KIN Home installs solar panels in Fort Myers, FL. FPL net metering, Florida\'s sales tax exemption on equipment, $0 down options. Get your free estimate.',
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
    metaTitle: 'Solar Installation in Tampa, FL | KIN Home',
    metaDesc: 'KIN Home installs solar panels in Tampa, FL. Tampa Electric net metering, Florida solar incentives, and $0 down financing. Get a free estimate today.',
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
    metaTitle: 'Solar Installation in Orlando, FL | KIN Home',
    metaDesc: 'KIN Home installs solar panels in Orlando, FL. Duke Energy net metering, no sales tax on solar equipment, $0 down financing. Get a free estimate today.',
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
    metaTitle: 'Solar Installation in Jacksonville, FL | KIN Home',
    metaDesc: 'KIN Home installs solar panels in Jacksonville, FL. JEA net metering, Florida\'s 6% sales tax exemption on solar gear, $0 down. Free estimate today.',
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
    metaTitle: 'Solar Installation in Sarasota, FL | KIN Home',
    metaDesc: 'KIN Home installs solar panels in Sarasota, FL. FPL net metering, Florida property tax exemption on added home value. $0 down. Get a free estimate.',
  },

  /* ── CALIFORNIA ── */
  'san-jose': {
    city: 'San Jose',
    state: 'California',
    stateCode: 'CA',
    slug: 'san-jose',
    stateSlug: 'california',
    utility: 'PG&E (Pacific Gas & Electric)',
    avgBill: 220,
    sunHours: 5.8,
    incentives: [
      'Federal Solar Investment Tax Credit (ITC) — 30% of system cost',
      'California NEM 3.0 — battery storage maximizes your solar savings',
      'SGIP (Self-Generation Incentive Program) — rebates for battery storage',
      'California Property Tax Exclusion for solar (through Jan 2027)',
      'No California sales tax on solar equipment',
    ],
    avgSavings: 175,
    permits: 'Santa Clara County requires building and electrical permits for solar. KIN Home handles all Bay Area permitting — typically 3-4 weeks.',
    nearbyAll: ['fremont', 'san-francisco', 'sacramento'],
    faqs: [
      { q: 'How much does solar cost in San Jose?', a: 'The average solar installation in San Jose costs $22,000-$35,000 before the 30% federal tax credit. After the credit, most homeowners pay $15,400-$24,500. Battery storage adds $8,000-$15,000 but qualifies for additional rebates under SGIP.' },
      { q: 'What is NEM 3.0 and how does it affect San Jose solar?', a: 'NEM 3.0 changed how California values exported solar energy. Under NEM 3.0, adding battery storage is essential to maximize your savings — store energy during the day, use it during expensive evening hours. KIN Home designs every Bay Area system with NEM 3.0 optimization.' },
      { q: 'How much can I save with solar in San Jose?', a: 'San Jose homeowners with solar + battery storage save an average of $175/month on their PG&E bill. Over 25 years, that\'s over $52,000 in savings. San Jose\'s 5.8 peak sun hours make it one of the best cities in the Bay Area for solar.' },
      { q: 'Does San Jose have good sun for solar panels?', a: 'Yes — San Jose averages 5.8 peak sun hours per day, which is excellent for solar. The South Bay gets significantly more sun than San Francisco, making it ideal for solar production.' },
      { q: 'Do I need battery storage with solar in California?', a: 'Under NEM 3.0, battery storage is strongly recommended for California solar installations. Batteries let you store energy during peak production and use it during PG&E\'s expensive evening rates, significantly increasing your savings.' },
    ],
    metaTitle: 'Solar Installation in San Jose, CA | KIN Home',
    metaDesc: 'Solar panels + battery backup for San Jose homeowners under NEM 3.0. KIN Home installs with in-house crews. SGIP rebates may apply. Free estimate.',
  },
  'fremont': {
    city: 'Fremont',
    state: 'California',
    stateCode: 'CA',
    slug: 'fremont',
    stateSlug: 'california',
    utility: 'PG&E (Pacific Gas & Electric)',
    avgBill: 210,
    sunHours: 5.5,
    incentives: [
      'Federal Solar Investment Tax Credit (ITC) — 30% of system cost',
      'California NEM 3.0 — battery storage maximizes savings',
      'SGIP rebates for battery storage',
      'California Property Tax Exclusion for solar (through Jan 2027)',
    ],
    avgSavings: 165,
    permits: 'Alameda County requires building and electrical permits. KIN Home handles all East Bay permitting — typically 3-4 weeks.',
    nearbyAll: ['san-jose', 'san-francisco', 'sacramento'],
    faqs: [
      { q: 'How much does solar cost in Fremont?', a: 'Fremont solar installations typically cost $21,000-$33,000 before the 30% federal tax credit. After: $14,700-$23,100. Battery storage recommended under NEM 3.0 adds $8,000-$15,000 with SGIP rebates available.' },
      { q: 'Is solar worth it in Fremont with NEM 3.0?', a: 'Absolutely. While NEM 3.0 changed export rates, pairing solar with battery storage means Fremont homeowners save an average of $165/month. Your system stores energy during the day and uses it during PG&E\'s expensive evening peak rates.' },
      { q: 'How much sun does Fremont get for solar?', a: 'Fremont averages 5.5 peak sun hours per day — strong for the East Bay. Solar production is excellent year-round, and PG&E\'s high rates make the savings significant.' },
      { q: 'Does KIN Home serve the East Bay?', a: 'Yes. KIN Home serves Fremont, Newark, Union City, Hayward, and the entire East Bay with local installation crews. We handle all Alameda County permitting.' },
      { q: 'What battery storage options does KIN offer in Fremont?', a: 'KIN Home installs leading battery systems optimized for NEM 3.0. Your consultant will recommend the right battery size based on your energy usage and PG&E rate schedule.' },
    ],
    metaTitle: 'Solar Installation in Fremont, CA | KIN Home',
    metaDesc: 'KIN Home installs solar panels in Fremont, CA. PG&E NEM 3.0 means battery storage maximizes your savings. In-house crews, $0 down. Free estimate.',
  },
  'san-francisco': {
    city: 'San Francisco',
    state: 'California',
    stateCode: 'CA',
    slug: 'san-francisco',
    stateSlug: 'california',
    utility: 'PG&E / SFPUC (San Francisco Public Utilities)',
    avgBill: 195,
    sunHours: 4.8,
    incentives: [
      'Federal Solar Investment Tax Credit (ITC) — 30% of system cost',
      'California NEM 3.0 — battery storage essential for max savings',
      'SGIP rebates for battery storage',
      'California Property Tax Exclusion (through Jan 2027)',
      'San Francisco local solar incentive programs (varies)',
    ],
    avgSavings: 148,
    permits: 'San Francisco requires building permits for solar. The city has streamlined solar permitting. KIN Home handles all SF permitting.',
    nearbyAll: ['san-jose', 'fremont', 'sacramento'],
    faqs: [
      { q: 'Does solar work in San Francisco with the fog?', a: 'Yes. While SF gets less direct sun than the South Bay, modern solar panels work efficiently in diffuse light. San Francisco averages 4.8 peak sun hours per day — enough for strong savings, especially given PG&E\'s high rates. Many SF homes with solar save $148+/month.' },
      { q: 'How much does solar cost in San Francisco?', a: 'SF solar installations typically cost $23,000-$36,000 before the 30% federal tax credit. After: $16,100-$25,200. Battery storage recommended under NEM 3.0. SGIP rebates available for batteries.' },
      { q: 'Can you install solar on Victorian and row house roofs?', a: 'Yes. KIN Home\'s engineering team designs custom systems for San Francisco\'s unique architecture — Victorians, row houses, flat roofs. We\'ve installed on all types of SF homes.' },
      { q: 'What about NEM 3.0 for San Francisco solar?', a: 'NEM 3.0 makes battery storage important for maximizing savings in SF. Your KIN system stores solar energy during the day and discharges during PG&E\'s expensive evening rates.' },
      { q: 'Is solar worth it in SF despite less sun?', a: 'Absolutely. PG&E\'s rates are among the highest in the nation. Even with fewer sun hours, the savings from solar + battery are significant — most SF homeowners see full payback within 7-9 years.' },
    ],
    metaTitle: 'Solar Installation in San Francisco, CA | KIN Home',
    metaDesc: 'Yes, solar works in San Francisco. KIN Home installs panels + battery backup for SF homeowners. PG&E NEM 3.0, SGIP rebates. In-house crews. Free estimate.',
  },
  'sacramento': {
    city: 'Sacramento',
    state: 'California',
    stateCode: 'CA',
    slug: 'sacramento',
    stateSlug: 'california',
    utility: 'SMUD (Sacramento Municipal Utility District)',
    avgBill: 185,
    sunHours: 6.1,
    incentives: [
      'Federal Solar Investment Tax Credit (ITC) — 30% of system cost',
      'SMUD solar incentive programs',
      'California Property Tax Exclusion for solar (through Jan 2027)',
      'No California sales tax on solar equipment',
    ],
    avgSavings: 155,
    permits: 'Sacramento County requires building and electrical permits. KIN Home handles all permitting — typically 2-3 weeks with SMUD.',
    nearbyAll: ['san-jose', 'fremont', 'san-francisco'],
    faqs: [
      { q: 'How much does solar cost in Sacramento?', a: 'Sacramento solar installations cost $19,000-$30,000 before the 30% federal tax credit. After: $13,300-$21,000. Sacramento\'s excellent sun makes solar one of the best ROI home investments here.' },
      { q: 'How is SMUD different from PG&E for solar?', a: 'SMUD (Sacramento Municipal Utility District) has its own solar program separate from PG&E\'s NEM 3.0. SMUD rates are generally lower than PG&E, but solar still provides strong savings. Your KIN consultant will explain SMUD\'s specific net metering rates.' },
      { q: 'How much sun does Sacramento get?', a: 'Sacramento averages 6.1 peak sun hours per day and 300+ sunny days per year — one of the best solar cities in California. Your panels will produce strong energy output year-round.' },
      { q: 'How much can I save with solar in Sacramento?', a: 'Sacramento homeowners save an average of $155/month with solar. Over 25 years, that\'s $46,500+ in savings. Sacramento\'s abundant sunshine means your system produces at maximum efficiency.' },
      { q: 'Does KIN Home serve all of Sacramento County?', a: 'Yes. KIN Home serves Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, and surrounding areas with local installation crews.' },
    ],
    metaTitle: 'Solar Installation in Sacramento, CA | KIN Home',
    metaDesc: 'KIN Home installs solar panels in Sacramento, CA. 300+ sun days/year. SMUD net metering, CA property tax exclusion (expires Jan 2027). Free estimate.',
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
