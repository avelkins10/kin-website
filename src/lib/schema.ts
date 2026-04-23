// JSON-LD structured data generators

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'KIN Home',
    url: 'https://kinhome.com',
    logo: 'https://kinhome.com/img/66a9738039d35d1b98168b8a_KIN-Logo---Black.png',
    description: 'Residential solar, HVAC, and roofing installation company serving FL, CA, and 8 other states.',
    foundingDate: '2020',
    telephone: '+1-800-555-1234', // TODO: get real number
    areaServed: [
      'Florida', 'California', 'Texas', 'Iowa', 'Missouri',
      'Colorado', 'Ohio', 'Kentucky', 'Utah', 'Arkansas',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.4',
      reviewCount: '909',
      bestRating: '5',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Energy Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solar Panel Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HVAC Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roofing' } },
      ],
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

export function localBusinessSchema(city: string, state: string, stateCode: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `KIN Home - ${city}, ${stateCode}`,
    description: `Solar panel installation, HVAC, and roofing services in ${city}, ${state}.`,
    url: `https://kinhome.com/solar/${state.toLowerCase().replace(/ /g, '-')}/${city.toLowerCase().replace(/ /g, '-')}/`,
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: state },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.4',
      reviewCount: '909',
      bestRating: '5',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'KIN Home',
      url: 'https://kinhome.com',
    },
  }
}

export function articleSchema(title: string, slug: string, date: string, author: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    url: `https://kinhome.com/blog/${slug}/`,
    datePublished: date,
    dateModified: date,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'KIN Home',
      logo: { '@type': 'ImageObject', url: 'https://kinhome.com/img/66a9738039d35d1b98168b8a_KIN-Logo---Black.png' },
    },
    description,
  }
}
