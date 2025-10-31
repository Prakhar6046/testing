'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import { cn } from '@/utilities/ui'

interface SearchResult {
  id: string
  title: string
  slug: string
  meta?: {
    description?: string
    image?: any
  }
}

interface SearchResults {
  pages: SearchResult[]
  services: SearchResult[]
  caseStudies: SearchResult[]
  query: string
}

export const SearchBlockClient: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const queryParam = searchParams.get('q') || ''

  const [searchQuery, setSearchQuery] = useState(queryParam)
  const [results, setResults] = useState<SearchResults>({
    pages: [],
    services: [],
    caseStudies: [],
    query: '',
  })
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    setSearchQuery(queryParam)
    if (queryParam) {
      performSearch(queryParam)
    }
  }, [queryParam])

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setResults({ pages: [], services: [], caseStudies: [], query: '' })
      setHasSearched(false)
      return
    }

    setLoading(true)
    setHasSearched(true)

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      if (response.ok) {
        const data = await response.json()
        setResults(data)
      }
    } catch (error) {
      console.error('Failed to fetch search results:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const totalResults =
    (results.pages?.length || 0) +
    (results.services?.length || 0) +
    (results.caseStudies?.length || 0)

  return (
    <div className="my-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for pages, services, or case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 pl-6 pr-16 text-lg rounded-2xl border-2 border-gray-300 focus:border-primary shadow-sm focus:shadow-md transition-all"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary hover:bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center transition-all shadow-md hover:shadow-lg"
              aria-label="Search"
            >
              <FaSearch className="text-base" />
            </button>
          </div>
        </form>

        {/* Results */}
        {loading && (
          <div className="text-center py-12">
            <div className="text-lg text-gray-600">Searching...</div>
          </div>
        )}

        {!loading && hasSearched && (
          <>
            <div className="mb-8 pb-6 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900">
                {totalResults > 0
                  ? `${totalResults} result${totalResults !== 1 ? 's' : ''} found`
                  : 'No results found'}
              </h2>
              {results.query && (
                <p className="text-gray-500 mt-2 text-lg">
                  Showing results for &quot;<span className="font-medium text-gray-700">{results.query}</span>&quot;
                </p>
              )}
            </div>

            {/* Pages */}
            {results.pages && results.pages.length > 0 && (
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-5 text-gray-900 flex items-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-semibold">
                    {results.pages.length}
                  </span>
                  Pages
                </h3>
                <div className="space-y-3">
                  {results.pages.map((page) => (
                    <SearchResultCard
                      key={page.id}
                      title={page.title}
                      description={page.meta?.description}
                      href={`/${page.slug}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Services */}
            {results.services && results.services.length > 0 && (
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-5 text-gray-900 flex items-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-semibold">
                    {results.services.length}
                  </span>
                  Services
                </h3>
                <div className="space-y-3">
                  {results.services.map((service) => (
                    <SearchResultCard
                      key={service.id}
                      title={service.title}
                      description={service.meta?.description}
                      href={`/${service.slug}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Case Studies */}
            {results.caseStudies && results.caseStudies.length > 0 && (
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-5 text-gray-900 flex items-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-semibold">
                    {results.caseStudies.length}
                  </span>
                  Case Studies
                </h3>
                <div className="space-y-3">
                  {results.caseStudies.map((caseStudy) => (
                    <SearchResultCard
                      key={caseStudy.id}
                      title={caseStudy.title}
                      description={caseStudy.meta?.description}
                      href={`/${caseStudy.slug}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {!loading && !hasSearched && (
          <div className="text-center py-20">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <FaSearch className="text-5xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Start Your Search</h3>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Enter a search term above to find pages, services, and case studies across our website
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

interface SearchResultCardProps {
  title: string
  description?: string
  href: string
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ title, description, href }) => {
  return (
    <Link
      href={href}
      className={cn(
        'block p-6 bg-white border border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 group',
      )}
    >
      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
        {title}
      </h4>
      {description && (
        <p className="text-gray-600 line-clamp-2 leading-relaxed">{description}</p>
      )}
    </Link>
  )
}
