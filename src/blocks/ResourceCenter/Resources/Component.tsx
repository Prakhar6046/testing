import type { CaseStudy, Page } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import ResourcesClient from './Component.client'
import { unstable_cache } from 'next/cache'

type ResourcesBlockProps = Extract<Page['layout'][0], { blockType: 'resources' }> & {
  id?: string
  pageData?: Page | CaseStudy | any
}

// Cached function to fetch all case studies
const getCaseStudies = unstable_cache(
  async (industries?: string[]) => {
    const payload = await getPayload({ config: configPromise })

    const where: any = {
      _status: {
        equals: 'published',
      },
      searchable: {
        equals: true,
      },
    }

    // Add industry filter if specified
    if (industries && industries.length > 0) {
      where.industry = {
        in: industries,
      }
    }

    const fetchedCaseStudies = await payload.find({
      collection: 'case-studies',
      depth: 1, // Need depth 1 to populate media URLs
      limit: 100, // Reduced from 1000 for better performance
      where,
      sort: '-publishedAt', // Sort by newest first
      select: {
        title: true,
        description: true,
        slug: true,
        type: true,
        categories: true,
        datePublished: true,
        readTime: true,
        'cover-image': true,
      },
    })

    return fetchedCaseStudies.docs
  },
  ['case-studies-resources'],
  {
    tags: ['case-studies-resources'],
    revalidate: 60, // Revalidate every 60 seconds
  },
)

export default async function Resources(props: ResourcesBlockProps) {
  const { heading, populateBy, industries, selectedCaseStudies, searchSettings, seeMoreBtn } = props

  let caseStudies: CaseStudy[] = []

  if (populateBy === 'selection') {
    // Handle manual selection
    if (selectedCaseStudies?.length) {
      const filteredSelectedCaseStudies = selectedCaseStudies
        .map((caseStudy) => {
          if (typeof caseStudy === 'object') return caseStudy
        })
        .filter(Boolean) as CaseStudy[]

      caseStudies = filteredSelectedCaseStudies
    }
  } else {
    // Default: Fetch all case studies automatically with caching
    caseStudies = (await getCaseStudies(industries || undefined)) as CaseStudy[]
  }

  return (
    <ResourcesClient
      caseStudies={caseStudies}
      heading={heading || 'Our Resources'}
      searchSettings={searchSettings}
      seeMoreButton={seeMoreBtn}
    />
  )
}
