import type { MetadataRoute } from 'next'

// Florida cities (priority 1)
const flCities = ['pensacola', 'fort-myers', 'tampa', 'orlando', 'jacksonville', 'sarasota']
// California cities (priority 2)
const caCities = ['san-jose', 'fremont', 'san-francisco', 'sacramento']
// Other states/cities added later

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kinhome.com'

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/solar`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/roofing`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/hvac`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/reviews`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/service-areas`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/get-an-instant-estimate`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  ]

  const statePages = [
    { url: `${base}/solar/florida`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${base}/solar/california`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
  ]

  const cityPages = [
    ...flCities.map(city => ({
      url: `${base}/solar/florida/${city}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...caCities.map(city => ({
      url: `${base}/solar/california/${city}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  return [...staticPages, ...statePages, ...cityPages]
}
