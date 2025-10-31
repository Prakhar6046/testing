import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import { Metadata } from 'next'
import { cache } from 'react'

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
      collection: 'services',
      draft: false,
      select: {
        slug: true,
      },
    }).catch((error: any) => {
      console.warn('Failed to fetch services for static params:', error)
      return { docs: [] }
    })
    return docs
      .filter((doc: any) => doc.slug && typeof doc.slug === 'string')
      .map((doc: any) => ({
        slug: doc.slug as string,
      }))
  } catch (error: any) {
    // If there's a timeout or other error during build, return empty array
    // Pages will be generated on-demand instead
    console.error('Error in generateStaticParams for services:', error)
    return []
  }
}

// Use dynamic rendering with ISR to avoid Next.js build timeout
export const dynamic = 'force-dynamic'
export const revalidate = 60 // 1 minute ISR

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Service({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const { isEnabled: draft } = await draftMode()
  
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
      collection: 'services',
      where: { slug: { equals: slug } },
      depth: 1, // Reduced from 3 to 1 to optimize query performance
      draft,
      limit: 1,
    })
    const service = docs[0]
    if (!service) return notFound()

    return (
      <>
        <RenderBlocks blocks={service.layout} />
      </>
    )
  } catch (error: any) {
    // Check if it's a timeout error
    if (error?.code === '57014' || error?.message?.includes('timeout')) {
      console.error(`Query timeout for service slug "${slug}"`)
      return notFound()
    } else {
      console.warn(`Failed to query service by slug "${slug}":`, error)
      return notFound()
    }
  }
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryServiceBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryServiceBySlug = cache(async ({ slug }: { slug: string }) => {
  try {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'services',
      draft,
      limit: 1,
      depth: 1, // Reduced depth to optimize query performance
      overrideAccess: draft,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  } catch (error: any) {
    // Check if it's a timeout error
    if (error?.code === '57014' || error?.message?.includes('timeout')) {
      console.error(`Query timeout for service slug "${slug}" in metadata`)
    } else {
      console.warn(`Failed to query service by slug "${slug}" in metadata:`, error)
    }
    return null
  }
})
