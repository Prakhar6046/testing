'use client'

import AnimateOnScroll, { useAutoDelay } from '@/components/AnimateOnScroll'
import RichText from '@/components/RichText'
import type { Service } from '@/payload-types'
import { getMediaAlt, getMediaUrl } from '@/utilities/getMediaUrl'
import Image from 'next/image'

type PeneterationTestingBlockProps = Extract<
  Service['layout'][0],
  { blockType: 'penetration-testing' }
>

export default function PeneterationTestingClient(props: PeneterationTestingBlockProps) {
  const {
    title,
    subtitle,
    'testing-list': testingList,
    'bottom-description': bottomDescription,
    'background-image': backgroundImage,
  } = props

  const getDelay = useAutoDelay()

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image Container */}
      <AnimateOnScroll type="fade-up" delay={getDelay()}>
        <div className="absolute inset-0">
          {backgroundImage && (
            <Image
              src={getMediaUrl(backgroundImage)}
              alt={getMediaAlt(backgroundImage)}
              className="w-full h-full object-cover"
            />
          )}
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16 xl:gap-20">
            {/* Right Side - Content Card */}
            <div className="w-auto lg:ml-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 xl:p-12 relative">
                {/* Blue accent line */}
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-wils_orang rounded-full"></div>

                <div className="space-y-8">
                  {/* Title */}
                  {title && (
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight pl-6">
                      {title}
                    </h2>
                  )}

                  {/* Subtitle */}
                  {subtitle && (
                    <p className="text-lg text-gray-800 font-medium leading-relaxed pl-6">
                      {subtitle}
                    </p>
                  )}

                  {/* Testing List */}
                  {testingList && testingList.length > 0 && (
                    <div className="pl-6">
                      <ul className="space-y-4">
                        {testingList.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 group">
                            <div className="flex-shrink-0 w-2 h-2 bg-wils_orang rounded-full mt-3 group-hover:scale-125 transition-transform duration-200"></div>
                            <span className="text-gray-700 text-base leading-relaxed font-medium">
                              {typeof item.scenario === 'string' ? (
                                item.scenario
                              ) : (
                                <RichText data={item.scenario} />
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Bottom Description */}
                  {bottomDescription && (
                    <div className="pl-6 pt-4 border-t border-gray-100">
                      <div className="text-gray-700 text-base leading-relaxed">
                        {typeof bottomDescription === 'string' ? (
                          <p>{bottomDescription}</p>
                        ) : (
                          <RichText data={bottomDescription} />
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-wils_orang rounded-tr-xl opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-wils_orang rounded-bl-xl opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
