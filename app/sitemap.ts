import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marvellauniversity.vercel.app'
  const locales = ['en', 'es', 'fr', 'de', 'ru', 'lt']
  
  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/course',
    '/global-campus',
    '/global-campus/cross-cultural-exchange',
    '/global-campus/multilingual-support',
    '/global-campus/global-research-collaborations',
    '/global-campus/leadership-development',
    '/global-campus/international-student-network',
  ]
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // Add all localized routes
  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      })
    }
  }
  
  return sitemap
} 