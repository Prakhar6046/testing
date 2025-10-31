import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import type { CaseStudy } from '@/payload-types'

export const dynamic = 'force-dynamic'
export const revalidate = 60 

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })

    // Fetch only blog-type case studies
    const blogs = await payload.find({
      collection: 'case-studies',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      where: {
        type: {
          equals: 'blog',
        },
      },
      select: {
        slug: true,
      },
    }).catch((error: any) => {
      console.warn('Failed to fetch blog posts for static params:', error)
      return { docs: [] }
    })

    const params = blogs.docs?.map(({ slug }) => ({ slug })) || []

    return params
  } catch (error: any) {
    // If there's a timeout or other error during build, return empty array
    // Pages will be generated on-demand instead
    console.error('Error in generateStaticParams for blog:', error)
    return []
  }
}

type Args = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await paramsPromise
  const url = '/blog/' + slug

  const blogPost = await queryBlogBySlug({
    slug,
  })

  if (!blogPost) {
    return <PayloadRedirects url={url} />
  }

  const { layout } = blogPost

  return (
    <article>
      {draft && <LivePreviewListener />}
      <PayloadRedirects disableNotFound url={url} />

      <RenderBlocks blocks={layout} pageData={blogPost} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise
  const blogPost = await queryBlogBySlug({
    slug,
  })

  return generateMeta({
    doc: blogPost,
  })
}

const queryBlogBySlug = cache(async ({ slug }: { slug: string }) => {
  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'case-studies',
      draft: false,
      limit: 1,
      depth: 1, // Reduce depth to optimize query performance
      overrideAccess: false,
      where: {
        slug: {
          equals: slug,
        },
        type: {
          equals: 'blog',
        },
      },
    })

    return (result.docs?.[0] as CaseStudy) || null
  } catch (error: any) {
    // Check if it's a timeout error
    if (error?.code === '57014' || error?.message?.includes('timeout')) {
      console.error(`Query timeout for blog slug "${slug}"`)
    } else {
      console.warn(`Failed to query blog by slug "${slug}":`, error)
    }
    return null
  }
})
