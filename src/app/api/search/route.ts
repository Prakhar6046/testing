import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')

    const payload = await getPayload({ config: configPromise })

    // Build the where clause based on query
    const buildWhereClause = (query: string | null) => {
      const baseWhere: any = {
        _status: {
          equals: 'published',
        },
      }

      if (query && query.trim()) {
        baseWhere.or = [
          {
            title: {
              contains: query,
            },
          },
          {
            'meta.description': {
              contains: query,
            },
          },
        ]
      }

      return baseWhere
    }

    // Fetch published pages
    const pagesResult = await payload.find({
      collection: 'pages',
      where: buildWhereClause(query),
      limit: 50,
      select: {
        id: true,
        title: true,
        slug: true,
        meta: true,
      },
    })

    // Fetch published services
    const servicesResult = await payload.find({
      collection: 'services',
      where: buildWhereClause(query),
      limit: 50,
      select: {
        id: true,
        title: true,
        slug: true,
        meta: true,
      },
    })

    // Fetch published case studies
    const caseStudiesResult = await payload.find({
      collection: 'case-studies',
      where: buildWhereClause(query),
      limit: 50,
      select: {
        id: true,
        title: true,
        slug: true,
        meta: true,
      },
    })

    return NextResponse.json({
      pages: pagesResult.docs,
      services: servicesResult.docs,
      caseStudies: caseStudiesResult.docs,
      query: query || '',
    })
  } catch (error) {
    console.error('Error fetching search results:', error)
    return NextResponse.json(
      { error: 'Failed to fetch search results' },
      { status: 500 }
    )
  }
}