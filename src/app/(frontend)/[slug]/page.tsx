import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { getRightRoute } from '@/utilities/getRightRoute'

// Use dynamic rendering with ISR to avoid Next.js build timeout for complex pages
export const dynamic = 'force-dynamic'
export const revalidate = 60 // 1 minute ISR

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })

    // Fetch pages
    const pages = await payload.find({
      collection: 'pages',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    }).catch((error: any) => {
      console.warn('Failed to fetch pages for static params:', error)
      return { docs: [] }
    })

    // Fetch services
    const services = await payload.find({
      collection: 'services',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    }).catch((error: any) => {
      console.warn('Failed to fetch services for static params:', error)
      return { docs: [] }
    })

    // Fetch case studies (excluding blog-type resources)
    const caseStudies = await payload.find({
      collection: 'case-studies',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      where: {
        type: {
          not_equals: 'blog',
        },
      },
      select: {
        slug: true,
      },
    }).catch((error: any) => {
      console.warn('Failed to fetch case studies for static params:', error)
      return { docs: [] }
    })

    // Combine all params
    const params = [
      ...pages.docs?.filter((doc) => doc.slug !== 'home').map(({ slug }) => ({ slug })) || [],
      ...services.docs?.map(({ slug }) => ({ slug })) || [],
      ...caseStudies.docs?.map(({ slug }) => ({ slug })) || [],
    ]

    return params
  } catch (error: any) {
    // If there's a timeout or other error during build, return empty array
    // Pages will be generated on-demand instead
    console.error('Error in generateStaticParams:', error)
    return []
  }
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home' } = await paramsPromise
  const url = '/' + slug

  const page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { layout } = page as RequiredDataFromCollectionSlug<'pages' | 'services' | 'case-studies'>

  return (
    <article>
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderBlocks blocks={layout} pageData={page} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return {}
  }

  return generateMeta({
    doc: page as RequiredDataFromCollectionSlug<'pages' | 'services' | 'case-studies'>,
  })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const result = await getRightRoute(slug, {
    priority: 'pages',
    fallbacks: ['services', 'case-studies'],
  })

  return result || null
})
