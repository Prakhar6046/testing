import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { config as siteConfig } from '@/config/Config'
import { unstable_cache } from 'next/cache'

const getCaseStudiesSitemap = unstable_cache(
  async () => {
    try {
      const payload = await getPayload({ config })
      const SITE_URL =
        process.env.NEXT_PUBLIC_SERVER_URL ||
        process.env.VERCEL_PROJECT_PRODUCTION_URL ||
        siteConfig.serverURL

      const results = await payload.find({
        collection: 'case-studies',
        overrideAccess: false,
        draft: false,
        depth: 0,
        limit: 1000,
        pagination: false,
        where: {
          _status: {
            equals: 'published',
          },
        },
        select: {
          slug: true,
          updatedAt: true,
        },
      })

      const dateFallback = new Date().toISOString()

      const sitemap = results.docs
        ? results.docs
            .filter((caseStudy) => Boolean(caseStudy?.slug))
            .map((caseStudy) => ({
              loc: `${SITE_URL}/${caseStudy?.slug}`,
              lastmod: caseStudy.updatedAt || dateFallback,
            }))
        : []

      return sitemap
    } catch (error) {
      console.error('Failed to generate case studies sitemap:', error)
      return []
    }
  },
  ['case-studies-sitemap'],
  {
    tags: ['case-studies-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getCaseStudiesSitemap()

  return getServerSideSitemap(sitemap)
}
