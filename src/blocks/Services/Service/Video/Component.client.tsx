'use client'

import React, { useEffect, useState } from 'react'
import type { Media, Page } from '@/payload-types'

type ServiceVideoBlockProps = Extract<Page['layout'][0], { blockType: 'service-video' }>

const ServiceVideoClient: React.FC<ServiceVideoBlockProps> = ({
  heading,
  videoId,
  videoType,
  youtubeUrl,
  videoMedia,
  content,
}) => {
  const [sectionId, setSectionId] = useState<string>('')

  useEffect(() => {
    // Generate a section ID if not provided
    if (videoId) {
      setSectionId(videoId)
    } else {
      // Auto-generate ID based on heading or random
      const autoId = `video-section-${heading?.text?.toLowerCase().replace(/\s+/g, '-') || Math.random().toString(36).substr(2, 9)}`
      setSectionId(autoId)
    }
  }, [videoId, heading])

  const getMediaUrl = (media: string | number | Media | undefined | null): string => {
    if (!media) return ''
    if (typeof media === 'string') return media
    if (typeof media === 'number') return '' // Handle ID case
    return media.url || ''
  }

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string | undefined | null): string => {
    if (!url) return ''

    try {
      // Handle various YouTube URL formats
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}`
      }
    } catch (error) {
      console.error('Error parsing YouTube URL:', error)
    }

    return ''
  }

  const youtubeEmbedUrl = videoType === 'youtube' ? getYouTubeEmbedUrl(youtubeUrl) : ''
  const uploadedVideoUrl = videoType === 'media' ? getMediaUrl(videoMedia) : ''

  return (
    <section id={sectionId} className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-medium text-black text-center mb-12">
          {heading?.text}
        </h2>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {/* YouTube Video */}
            {videoType === 'youtube' && youtubeEmbedUrl && (
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={youtubeEmbedUrl}
                title={heading?.text || 'Video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Uploaded Media Video */}
            {videoType === 'media' && uploadedVideoUrl && (
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
                controls
                preload="metadata"
              >
                <source src={uploadedVideoUrl} type="video/mp4" />
                <source src={uploadedVideoUrl} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* Fallback if no video */}
            {!youtubeEmbedUrl && !uploadedVideoUrl && (
              <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">No video available</p>
              </div>
            )}
          </div>
        </div>

        {/* Content Paragraphs */}
        {content?.paragraphs && content.paragraphs.length > 0 && (
          <div className="max-w-4xl mx-auto space-y-5">
            {content.paragraphs.map((paragraph, index) => (
              <p key={paragraph.id || index} className="md:text-xl text-lg font-normal text-black">
                {paragraph.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ServiceVideoClient
