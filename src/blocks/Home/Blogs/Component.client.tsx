'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Media } from '@/payload-types'
import AnimateOnScroll, { useAutoDelay } from '@/components/AnimateOnScroll'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { usePathname } from 'next/navigation'

interface FeaturedResource {
  id?: string | null
  image: number | Media
  tag?: string | null
  title: string
  description: string
  linkType?: 'external' | 'internal' | 'none' | null
  externalUrl?: string | null
  internalPage?: any
}

export function BlogsClient({
  title,
  featuredResources,
}: {
  title: string
  featuredResources: FeaturedResource[]
}) {
  const getDelay = useAutoDelay()

  const pathname = usePathname()

  const wilsonTeamLogo = getMediaUrl('/images/logo-blue-white.png')

  const getResourceLink = (resource: FeaturedResource): string => {
    if (resource.linkType === 'external' && resource.externalUrl) {
      return resource.externalUrl
    }
    if (resource.linkType === 'internal' && resource.internalPage) {
      return typeof resource.internalPage === 'string'
        ? `/${resource.internalPage}`
        : `/${resource.internalPage?.slug}`
    }
    return '#'
  }

  const getImageUrl = (image: number | Media): string => {
    if (typeof image === 'number') return '/images/placeholder.png'
    return image?.url || '/images/placeholder.png'
  }

  const getImageAlt = (image: number | Media, title: string): string => {
    if (typeof image === 'number') return title
    return image?.alt || title
  }

  if (!featuredResources || featuredResources.length === 0) {
    return null
  }

  return (
    <section className={`py-16 ${pathname.startsWith('/services') ? 'bg-background' : 'bg-white'}`}>
      <div className="container mx-auto md:px-5 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-medium text-black">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredResources.map((resource, index) => {
            const resourceLink = getResourceLink(resource)
            const hasLink = resource.linkType !== 'none'

            return (
              <AnimateOnScroll key={index} type="fade-up" delay={getDelay()}>
                <div>
                  <div>
                    {hasLink ? (
                      <Link
                        href={resourceLink}
                        {...(resource.linkType === 'external'
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        <Image
                          src={getImageUrl(resource.image)}
                          alt={getImageAlt(resource.image, resource.title)}
                          width={387}
                          height={387}
                          className="object-contain"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={getImageUrl(resource.image)}
                        alt={getImageAlt(resource.image, resource.title)}
                        width={387}
                        height={387}
                        className="object-contain"
                      />
                    )}
                  </div>
                  <div className="px-4 pb-10 pt-5 flex flex-col flex-grow">
                    <Link href="#" className="md:text-xs text-xs font-bold text-wils_orang mb-3">
                      {resource.tag?.toUpperCase() || 'RESOURCE'}
                    </Link>
                    {hasLink ? (
                      <Link
                        href={resourceLink}
                        className="md:text-2xl text-xl font-medium text-black mb-3.5 hover:text-wils_orang hover:underline transition-colors"
                        {...(resource.linkType === 'external'
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {resource.title}
                      </Link>
                    ) : (
                      <h3 className="md:text-2xl text-xl font-medium text-black mb-3.5">
                        {resource.title}
                      </h3>
                    )}
                    <p className="text-sm font-normal text-black">{resource.description}</p>
                    <div className="flex gap-4 items-center py-5 border-t border-black/15 mt-5">
                      <div className="w-2/12">
                        <Image
                          src={wilsonTeamLogo}
                          alt="Author"
                          width={46}
                          height={46}
                          className="rounded-full w-full"
                        />
                      </div>
                      <div className="w-10/12">
                        <p className="text-sm font-medium text-black">Wilson Team</p>
                        <ul className="flex items-center flex-wrap gap-5">
                          <li className="text-xs font-normal text-black/50">Recent</li>
                          <li className="text-xs font-normal text-black/50">Featured</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
