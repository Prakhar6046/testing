'use client'

import { useState, useMemo, useEffect, Suspense, useRef, useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import type { CaseStudy, Page } from '@/payload-types'

import ResourceCard from './Card'
import ResourceFilter from './Filter'
import ResourceSearch from './Search'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const USE_PAGINATION = false

type LinkType = NonNullable<
  Extract<Page['layout'][0], { blockType: 'resources' }>['seeMoreBtn']
>['link']

type SeeMoreButtonType = {
  enabled?: boolean | null
  text?: string | null
  link?: LinkType | null
}

type SearchSettingsType = {
  enableSearch?: boolean | null
  enableIndustryFilter?: boolean | null
}

interface ResourcesClientProps {
  caseStudies: CaseStudy[]
  heading: string
  searchSettings?: SearchSettingsType
  seeMoreButton?: SeeMoreButtonType
}

interface MappedResource {
  title: string
  description: string
  image: string
  type: string
  industry: string
  date: string
  slug: string
  readTime: number
  categories: string[]
}

// Define available filter options
// Topics are more general/industry-focused
const AVAILABLE_TOPICS = [
  'FedRAMP',
  'Compliance',
  'Cybersecurity',
  'Risk Management',
  'IT Governance',
  'Cloud Computing',
  'Data Analytics',
  'Corporate',
  'Culture',
  'Privacy',
  'Threat Detection',
]

// Types are content format types
const AVAILABLE_TYPES = [
  'Blog',
  'Case Study',
  'E-book',
  'Info Sheet',
  'Press Release',
  'White Paper',
  'Whitepaper',
  'Video',
  'Blogs',
]

function ResourcesClientInner({
  caseStudies,
  heading,
  searchSettings,
  seeMoreButton,
}: ResourcesClientProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initialize from URL params or default to empty (show all)
  const getInitialTopics = () => {
    const urlTopics = searchParams.get('topics')
    if (urlTopics) {
      return urlTopics.split(',')
    }
    return []
  }

  const getInitialTypes = () => {
    const urlTypes = searchParams.get('types')
    if (urlTypes) {
      return urlTypes.split(',')
    }
    return []
  }

  const getInitialPage = () => {
    const urlPage = searchParams.get('page')
    return urlPage ? parseInt(urlPage, 10) : 1
  }

  const ITEMS_PER_PAGE = 9

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTopics, setSelectedTopics] = useState<string[]>(getInitialTopics())
  const [selectedTypes, setSelectedTypes] = useState<string[]>(getInitialTypes())
  const [currentPage, setCurrentPage] = useState(getInitialPage())

  // Infinite scroll state
  const [displayedItemsCount, setDisplayedItemsCount] = useState(ITEMS_PER_PAGE)
  const observerTarget = useRef<HTMLDivElement>(null)

  // Sync URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedTopics.length > 0) {
      params.set('topics', selectedTopics.join(','))
    } else {
      params.delete('topics')
    }

    if (selectedTypes.length > 0) {
      params.set('types', selectedTypes.join(','))
    } else {
      params.delete('types')
    }

    if (currentPage > 1) {
      params.set('page', currentPage.toString())
    } else {
      params.delete('page')
    }

    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
    router.replace(newUrl, { scroll: false })
  }, [selectedTopics, selectedTypes, currentPage, pathname, router])

  // Reset to page 1 when filters change (pagination mode)
  // Reset displayed items count when filters change (infinite scroll mode)
  useEffect(() => {
    if (USE_PAGINATION) {
      setCurrentPage(1)
    } else {
      setDisplayedItemsCount(ITEMS_PER_PAGE)
    }
  }, [searchQuery, selectedTopics, selectedTypes])

  const mappedResources: MappedResource[] = useMemo(() => {
    return caseStudies.map((caseStudy) => {
      const coverImage = caseStudy['cover-image']
      let imageUrl = '/images/resource_feat.png'

      // Handle both populated objects and IDs
      if (coverImage) {
        if (typeof coverImage === 'object' && coverImage.url) {
          imageUrl = coverImage.url
        } else if (typeof coverImage === 'number') {
          // If it's just an ID, construct the API URL
          imageUrl = `/api/media/file/${coverImage}`
        }
      }

      const formatCategory = (cat: string) => {
        return cat
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }

      const categories = Array.isArray(caseStudy.categories) ? caseStudy.categories : []

      const type = caseStudy.type
        ? formatCategory(caseStudy.type)
        : caseStudy.type
          ? formatCategory(caseStudy.type)
          : 'Case Study'

      const industry = categories.length > 0 ? formatCategory(categories[0]) : 'Other'

      return {
        title: caseStudy.title,
        description: caseStudy.description || `No description available`,
        image: imageUrl,
        type,
        industry,
        date: caseStudy.datePublished
          ? new Date(caseStudy.datePublished).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : '',
        slug: type.toLowerCase() === 'blog' ? `/blog/${caseStudy.slug}` : `/${caseStudy.slug}`,
        readTime: caseStudy.readTime || 5,
        categories: categories.map(formatCategory),
      }
    })
  }, [caseStudies])

  const toggleFilter = (list: string[], value: string, setList: (v: string[]) => void) => {
    const isCurrentlySelected = list.includes(value)

    if (isCurrentlySelected) {
      // Deselect the item
      setList(list.filter((item) => item !== value))
    } else {
      // Select the item
      setList([...list, value])
    }
  }

  const filteredResources = mappedResources.filter((resource) => {
    const matchesSearch =
      searchSettings?.enableSearch !== false &&
      (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()))

    // Topics filter: Check against Case Studies 'categories' field
    const topicMatch =
      !searchSettings?.enableIndustryFilter ||
      selectedTopics.length === 0 ||
      resource.categories.some((cat) => selectedTopics.includes(cat))

    // Types filter: Check against Case Studies 'type' or 'resourceType' field
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(resource.type)

    return (!searchSettings?.enableSearch || matchesSearch) && topicMatch && typeMatch
  })

  // Pagination calculations (for pagination mode)
  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedResources = filteredResources.slice(startIndex, endIndex)

  // Infinite scroll: slice resources based on displayed items count
  const infiniteScrollResources = filteredResources.slice(0, displayedItemsCount)

  // Choose which resources to display based on USE_PAGINATION
  const displayedResources = USE_PAGINATION ? paginatedResources : infiniteScrollResources

  // Load more callback for infinite scroll
  const loadMoreItems = useCallback(() => {
    if (!USE_PAGINATION && displayedItemsCount < filteredResources.length) {
      setDisplayedItemsCount((prev) => prev + ITEMS_PER_PAGE)
    }
  }, [displayedItemsCount, filteredResources.length])

  // Intersection observer for infinite scroll
  useEffect(() => {
    if (USE_PAGINATION) return // Skip if using pagination

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreItems()
        }
      },
      { threshold: 0.1 },
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [loadMoreItems])

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      if (currentPage > 3) {
        pages.push('ellipsis')
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (currentPage < totalPages - 2) {
        pages.push('ellipsis')
      }

      // Always show last page
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col justify-between gap-6 items-center md:mb-14 mb-9">
          <h2 className="md:text-6xl text-3xl font-medium text-black md:w-[35%] w-full">
            {heading}
          </h2>
          {searchSettings?.enableSearch !== false && (
            <div className="md:w-[65%] w-full">
              <ResourceSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {searchSettings?.enableIndustryFilter !== false && (
            <aside className="md:w-[25%] w-full">
              <ResourceFilter
                selectedTopics={selectedTopics}
                selectedTypes={selectedTypes}
                onTopicChange={(topic) => toggleFilter(selectedTopics, topic, setSelectedTopics)}
                onTypeChange={(type) => toggleFilter(selectedTypes, type, setSelectedTypes)}
                availableTopics={AVAILABLE_TOPICS}
                availableTypes={AVAILABLE_TYPES}
              />
            </aside>
          )}
          <div
            className={`${searchSettings?.enableIndustryFilter !== false ? 'md:w-[70%]' : 'w-full'}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {displayedResources.length > 0 ? (
                displayedResources.map((item, idx) => (
                  <ResourceCard key={`${item.slug}-${idx}`} {...item} />
                ))
              ) : (
                <p className="text-2xl font-normal text-black col-span-full text-center pt-10">
                  No resources found.
                </p>
              )}
            </div>

            {/* Infinite Scroll Observer Target */}
            {!USE_PAGINATION && displayedItemsCount < filteredResources.length && (
              <div
                ref={observerTarget}
                className="flex justify-center items-center py-8 col-span-full"
              >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary"></div>
              </div>
            )}

            {/* Pagination */}
            {USE_PAGINATION && totalPages > 1 && displayedResources.length > 0 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          if (currentPage > 1) {
                            setCurrentPage(currentPage - 1)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }
                        }}
                        className={
                          currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'
                        }
                      />
                    </PaginationItem>

                    {getPageNumbers().map((page, idx) => (
                      <PaginationItem key={idx}>
                        {page === 'ellipsis' ? (
                          <PaginationEllipsis />
                        ) : (
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              setCurrentPage(page)
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            isActive={currentPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        )}
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          if (currentPage < totalPages) {
                            setCurrentPage(currentPage + 1)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }
                        }}
                        className={
                          currentPage === totalPages
                            ? 'pointer-events-none opacity-50'
                            : 'cursor-pointer'
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}

            {seeMoreButton?.enabled && (
              <div className="mt-16">
                <button className="secondary_btn">
                  {seeMoreButton.text || 'See More Resources'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ResourcesClient(props: ResourcesClientProps) {
  return (
    <Suspense fallback={<div className="py-16">Loading...</div>}>
      <ResourcesClientInner {...props} />
    </Suspense>
  )
}
