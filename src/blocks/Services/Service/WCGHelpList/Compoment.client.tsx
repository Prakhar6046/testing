'use client'

import AnimateOnScroll, { useAutoDelay } from '@/components/AnimateOnScroll'
import type { Service } from '@/payload-types'
import { getMediaAlt, getMediaUrl } from '@/utilities/getMediaUrl'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

type WCGHelpListBlockProps = Extract<Service['layout'][0], { blockType: 'wcg-help-list' }>

export default function WCGHelpListClient(props: WCGHelpListBlockProps) {
  const { title, description, 'process-steps': processSteps } = props

  const getDelay = useAutoDelay()

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <AnimateOnScroll type="fade-up" delay={getDelay()}>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-50/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            {title && (
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  {title}
                </h2>
                <div className="h-1 w-24 bg-wils_orang rounded-full mx-auto"></div>
              </div>
            )}

            {description && (
              <div className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                {typeof description === 'string' ? (
                  <p>{description}</p>
                ) : (
                  <RichText data={description} />
                )}
              </div>
            )}
          </div>

          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-700 delay-${index * 100} hover:scale-105`}
              >
                {/* Card Container */}
                <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Top Gradient Bar */}
                  <div className={`h-2 bg-wils_orang`}></div>

                  <div className="p-8 lg:p-10">
                    {/* Step Number and Title */}
                    <div className="flex items-start gap-6 mb-6">
                      {/* Step Number Circle */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br bg-wils_orang rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                        >
                          <span className="text-white font-bold text-xl">
                            {step['step-icon'] ? (
                              <Image
                                src={getMediaUrl(step['step-icon'])}
                                alt={getMediaAlt(step['step-icon'])}
                                width={80}
                                height={80}
                              />
                            ) : (
                              <span className="text-white font-extrabold text-xl">
                                {step['step-number']}
                              </span>
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight group-hover:text-wils_orang transition-colors duration-300">
                          {typeof step['step-title'] === 'string' ? (
                            step['step-title']
                          ) : (
                            <RichText data={step['step-title']} />
                          )}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-gray-600 leading-relaxed">
                      {typeof step['step-description'] === 'string' ? (
                        <p>{step['step-description']}</p>
                      ) : (
                        <RichText data={step['step-description']} />
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-wils_orang opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
