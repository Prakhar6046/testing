'use client'

import RichText from '@/components/RichText'
import { Service } from '@/payload-types'
import { getMediaAlt, getMediaUrl } from '@/utilities/getMediaUrl'
import Image from 'next/image'

type WCGTrainingServicesBlockProps = Extract<
  Service['layout'][0],
  { blockType: 'wcg-training-services' }
>

const ThumbsUpIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
)

export default function WCGTrainingServicesClient(props: WCGTrainingServicesBlockProps) {
  const {
    title,
    description,
    'training-services': trainingServices,
    'how-section-title': howSectionTitle,
    'how-description': howDescription,
    'background-image': backgroundImage,
  } = props

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={getMediaUrl(backgroundImage)}
          alt={getMediaAlt(backgroundImage)}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-gray-900/70 to-slate-800/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
          {/* Left Side - Spacer for background image visibility */}
          <div className="hidden lg:block lg:w-2/5 xl:w-1/2"></div>

          {/* Right Side - Content Card */}
          <div className="w-full lg:w-3/5 xl:w-1/2 lg:pl-8 xl:pl-12">
            <div className="bg-blue-900/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 xl:p-12 shadow-2xl border border-blue-700/30 h-full">
              {/* Main Content */}
              <div className="space-y-8">
                {/* Title */}
                {title && (
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-Sofia">
                      {typeof title === 'string' ? title : <RichText data={title} />}
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-white to-white/60 rounded-full"></div>
                  </div>
                )}

                {/* Description */}
                {description && (
                  <div className="text-white/90 text-lg leading-relaxed font-satoshi">
                    {typeof description === 'string' ? (
                      <p>{description}</p>
                    ) : (
                      <RichText data={description} />
                    )}
                  </div>
                )}

                {/* Training Services Grid */}
                {trainingServices && trainingServices.length > 0 && (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {trainingServices.map((s, index) => (
                      <div
                        key={index}
                        className="group flex items-center gap-3 p-4 lg:p-5 border-2 border-white/30 rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="text-white group-hover:text-white">
                          <ThumbsUpIcon />
                        </div>
                        <span className="text-white font-medium text-base lg:text-lg font-satoshi group-hover:text-white transition-colors">
                          {s.service}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* How Section */}
                {(howSectionTitle || howDescription) && (
                  <div className="space-y-6 pt-8 border-t border-white/20">
                    {/* How Title */}
                    {howSectionTitle && (
                      <h3 className="text-2xl lg:text-3xl font-bold text-white font-Sofia">
                        {typeof howSectionTitle === 'string' ? (
                          howSectionTitle
                        ) : (
                          <RichText data={howSectionTitle} />
                        )}
                      </h3>
                    )}

                    {/* How Description */}
                    {howDescription && (
                      <div className="space-y-4">
                        {Array.isArray(howDescription) ? (
                          howDescription.map((p, index) => (
                            <p
                              key={index}
                              className="text-white/90 text-base lg:text-lg leading-relaxed font-satoshi"
                            >
                              {p.paragraph}
                            </p>
                          ))
                        ) : (
                          <div className="text-white/90 text-base lg:text-lg leading-relaxed font-satoshi">
                            {typeof howDescription === 'string' ? (
                              <p>{howDescription}</p>
                            ) : (
                              <RichText data={howDescription} />
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-8 h-8 border-2 border-white/20 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 border-2 border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
