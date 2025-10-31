import type { Metadata } from 'next'
import React, { Suspense } from 'react'
import { SearchBlock } from '@/blocks/SearchBlock/Component'

export const metadata: Metadata = {
  title: 'Search | WCG',
  description: 'Search for pages, services, and case studies',
}

export default async function SearchPage() {
  return (
    <article>
      {/* Banner Section */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 border-b border-gray-200">
        <div className="py-16 px-4 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Search
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Find pages, services, and case studies across our website
          </p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="container my-16">
            <div className="max-w-5xl mx-auto text-center py-12">
              <div className="text-lg text-gray-600">Loading search...</div>
            </div>
          </div>
        }
      >
        <SearchBlock />
      </Suspense>
    </article>
  )
}
