import React from 'react'
import type { Media } from '@/payload-types'
import Hero from '@/components/Hero/Main'

interface HeroServiceBlockProps {
  title: string
  shortinfo: string
  ctaButton: {
    enabled: boolean
    text: string
    url: string
    style: 'primary_btn' | 'secondary_btn'
    openInNewTab: boolean
  }
  videoMode?: boolean
  videoSectionId?: string
  images: {
    mainImage: string | Media
    overlayIcon: string | Media
  }
}

type Props = {
  className?: string
} & HeroServiceBlockProps

export default function HeroService(props: Props) {
  const { title, shortinfo, ctaButton, images, videoMode, videoSectionId, className } = props

  return (
    <Hero
      title={title}
      description={shortinfo}
      mainImage={images?.mainImage}
      overlayIcon={images?.overlayIcon}
      ctaButton={{
        text: ctaButton.text,
        url: ctaButton.url,
        style: ctaButton.style,
        openInNewTab: ctaButton.openInNewTab,
      }}
      videoMode={videoMode}
      videoSectionId={videoSectionId}
      className={className}
      showRoundedCorners={true}
    />
  )
}
