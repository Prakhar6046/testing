'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Media } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { FaPlay } from 'react-icons/fa'

interface HeroButton {
  text: string
  url: string
  style?: 'primary_btn' | 'secondary_btn'
  openInNewTab?: boolean
}

interface HeroProps {
  title: string
  description: string
  mainImage?: string | Media
  overlayIcon?: string | Media
  ctaButton?: HeroButton
  className?: string
  showRoundedCorners?: boolean
  videoMode?: boolean
  videoSectionId?: string
}

export default function Hero({
  title,
  description,
  mainImage,
  overlayIcon,
  ctaButton,
  className = '',
  showRoundedCorners = true,
  videoMode = false,
  videoSectionId,
}: HeroProps) {
  // Helper function to get media URL
  const getMediaUrl = (media: string | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return media
    return media.url || ''
  }

  // Helper function to get media alt text
  const getMediaAlt = (media: string | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return ''
    return media.alt || ''
  }

  // Default CTA button if none provided
  const defaultButton: HeroButton = {
    text: 'Request Consultation',
    url: '#',
    style: 'secondary_btn',
    openInNewTab: false,
  }

  function isEmpty(str: string | null | undefined): boolean {
    return !str || str.trim().length === 0
  }

  const button = ctaButton ? ctaButton : defaultButton

  // Handle play button click for video mode
  const handlePlayClick = () => {
    if (videoSectionId) {
      // Try to scroll to the specific video section
      const element = document.getElementById(videoSectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    // Fallback: find the first video section on the page
    const videoSection = document.querySelector('[id^="video-section-"]')
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      className={`bg-background md:px-14 py-10 md:py-20 ${showRoundedCorners ? 'rounded-b-[35px]' : ''} ${className}`}
    >
      <div className="container mx-auto md:px-0 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-[77.6px] md:leading-[77.5px] font-normal text-black tracking-[-4px]">
            {title}
          </h1>
          <p className="text-black text-lg md:text-xl font-normal max-w-[31rem]">{description}</p>
          {button && !isEmpty(button.text) && (
            <button className={cn(button.style || 'secondary_btn', 'px-4 py-2 text-nowrap')}>
              <Link
                href={button.url}
                rel={button.openInNewTab ? 'noopener noreferrer' : undefined}
                target={button.openInNewTab ? '_blank' : '_self'}
              >
                {button.text}
              </Link>
            </button>
          )}
        </div>

        {/* Right Content */}
        {videoMode ? (
          // Video Mode: Show play button
          <div className="relative flex items-center justify-center">
            <button
              onClick={handlePlayClick}
              className="group relative flex items-center justify-center w-full aspect-video max-w-[590px] bg-gradient-to-br from-wils_orang to-orange-600 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              aria-label="Play video"
            >
              <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-wils_orang text-3xl md:text-5xl ml-2" />
              </div>
            </button>
          </div>
        ) : (
          // Image Mode: Show images as before
          <div className="relative">
            {mainImage && (
              <Image
                src={getMediaUrl(mainImage)}
                alt={getMediaAlt(mainImage) || 'hero-image'}
                width={590}
                height={365}
                className="rounded-xl object-cover w-full mx-auto h-full"
              />
            )}
            {overlayIcon && (
              <Image
                src={getMediaUrl(overlayIcon)}
                alt={getMediaAlt(overlayIcon) || 'overlay-icon'}
                width={179}
                height={209}
                className="absolute -bottom-14 md:-left-16 -left-10"
              />
            )}
          </div>
        )}
      </div>
    </section>
  )
}
