'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import type { Media, Service } from '@/payload-types'
import { CheckIcon } from 'lucide-react'

type ServiceAboutBlockProps = Extract<Service['layout'][0], { blockType: 'service-about-2' }>

export function ServiceAboutClient2({ heading, content }: ServiceAboutBlockProps) {
  const getMediaUrl = (media: string | number | Media | undefined | null): string => {
    if (!media) return ''
    if (typeof media === 'string') return media
    if (typeof media === 'number') return '' // Handle ID case
    return media.url || ''
  }

  const getMediaAlt = (media: string | number | Media | undefined | null): string => {
    if (!media) return ''
    if (typeof media === 'string') return ''
    if (typeof media === 'number') return '' // Handle ID case
    return media.alt || ''
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-medium text-black text-center mb-12">
          {heading?.text}
        </h2>
        <div className="flex md:flex-row flex-col items-center justify-between gap-5 mb-16">
          {content?.image?.media && (
            <div className="md:w-2/5 w-full">
              <Image
                src={getMediaUrl(content?.image?.media)}
                alt={getMediaAlt(content?.image?.media)}
                width={520}
                height={440}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
          <div className="w-full space-y-5">
            {content?.paragraphs?.map((paragraph, index) => {
              if (paragraph.heading) {
                return (
                  <h3 key={paragraph.id || index} className="text-lg font-medium text-black">
                    {paragraph.heading}
                  </h3>
                )
              }

              return (
                <p key={paragraph.id || index} className="md:text-lg font-normal text-black">
                  {paragraph.text}
                </p>
              )
            })}
            {content?.list?.map((item, index) => (
              <div key={item.id || index} className="flex items-center gap-2">
                <CheckIcon className="w-6 h-6 shrink-0" />
                <p className="text-lg font-normal text-black">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
