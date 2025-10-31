'use client'

import RichText from '@/components/RichText'
import type { Service } from '@/payload-types'
import Link from 'next/link'

type HelpYouVideoBlockProps = Extract<Service['layout'][0], { blockType: 'help-you-video' }>

export function HelpYouVideoClient(props: HelpYouVideoBlockProps) {
  const {
    title,
    description,
    'video-url': videoUrl,
    'cta-text': ctaText,
    'cta-url': ctaUrl,
    'bg-color': bgColor,
  } = props

  const bgColorClass = bgColor === 'gray' ? 'bg-[#F5F5F5]' : 'bg-[#0C324F]'

  return (
    <section className={`py-16 md:py-20 ${bgColorClass} text-white relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-background"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Stacked Layout */}
        <div className="flex flex-col gap-8 items-center text-center">
          {/* Title and Description */}
          <div className="max-w-4xl space-y-6">
            {title && (
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">
                  {title}
                </h2>
                <div className="h-1 w-20 bg-wils_orang rounded-full mx-auto"></div>
              </div>
            )}

            {description && (
              <div className="text-lg font-normal leading-relaxed text-gray-100">
                <RichText data={description} />
              </div>
            )}

            {/* CTA Button */}
            {ctaText && ctaUrl && (
              <div className="pt-4">
                <Link
                  href={ctaUrl || '/'}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-all duration-300 group"
                >
                  {ctaText}
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Video */}
          <div className="w-full max-w-4xl">
            <div className="relative">
              {/* Video Container with Enhanced Styling */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <div className="aspect-video w-full">
                  {videoUrl ? (
                    <iframe
                      src={videoUrl}
                      title="WCG Help Video"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                      <div className="text-center text-gray-400">
                        <svg
                          className="w-16 h-16 mx-auto mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-lg">Video will appear here</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400/30 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-blue-400/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container ul {
          list-style: none;
          padding-left: 0;
        }
        .container ul li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .container ul li:before {
          content: '•';
          color: #22d3ee;
          font-size: 1.25rem;
          position: absolute;
          left: 0;
          top: 0;
        }
        .container p {
          margin-bottom: 1.5rem;
        }
        .container p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </section>
  )
}
