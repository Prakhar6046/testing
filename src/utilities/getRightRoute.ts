import { CollectionSlug, getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'

interface Options {
  priority: CollectionSlug
  fallbacks: CollectionSlug[]
}

export async function getRightRoute(slug: string, options: Options) {
  const payload = await getPayload({ config: configPromise })

  const { isEnabled: draft } = await draftMode()
  const { priority, fallbacks } = options

  // Try priority collection first
  try {
    const result = await payload.find({
      collection: priority,
      draft,
      limit: 1,
      depth: 1,
      pagination: false,
      overrideAccess: draft,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (result.docs?.[0]) {
      return result.docs[0]
    }
  } catch (error: any) {
    // Check if it's a timeout error
    if (error?.code === '57014' || error?.message?.includes('timeout')) {
      console.error(`Query timeout for slug "${slug}" in priority collection "${priority}"`)
    } else {
      console.warn(`Failed to get right route for slug "${slug}" in priority collection:`, error)
    }
  }

  // Try fallback collections in order
  for (const fallback of fallbacks) {
    try {
      const where: any = {
        slug: {
          equals: slug,
        },
      }

      // Exclude blog-type resources from case-studies collection
      if (fallback === 'case-studies') {
        where.type = {
          not_equals: 'blog',
        }
      }

      const fallbackResult = await payload.find({
        collection: fallback,
        draft,
        limit: 1,
        depth: 1,
        pagination: false,
        overrideAccess: draft,
        where,
      })

      if (fallbackResult.docs?.[0]) {
        return fallbackResult.docs[0]
      }
    } catch (error: any) {
      // Check if it's a timeout error
      if (error?.code === '57014' || error?.message?.includes('timeout')) {
        console.error(`Query timeout for slug "${slug}" in fallback collection "${fallback}"`)
      } else {
        console.warn(
          `Failed to get right route for slug "${slug}" in fallback collection "${fallback}":`,
          error,
        )
      }
    }
  }

  return null
}
