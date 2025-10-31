'use client'

import AnimateOnScroll, { useAutoDelay } from '@/components/AnimateOnScroll'
import Image from 'next/image'
import type { Media } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'

interface LeadershipPointsBlockProps {
  heading: {
    text: string
  }
  points: Array<{
    text: string
    featured?: boolean
  }>
}

type Props = {
  className?: string
  id?: string
} & LeadershipPointsBlockProps

export default function LeadershipPointsClient(props: Props) {
  const { heading, points, className = '', id } = props

  const getDelay = useAutoDelay()

  // Early return if no content
  if (!heading.text || !points || points.length === 0) {
    return null
  }

  const checkPoint = getMediaUrl(
    `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/prime_check-circle-1.svg`,
  )

  return (
    <section className={`py-16 md:py-20 bg-foreground ${className}`} id={id}>
      <AnimateOnScroll delay={getDelay()} type="fade-up">
        <div className="container mx-auto md:px-0 px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Heading Section */}
            <div className="w-full md:w-[42%]">
              <h2 className="text-3xl md:text-6xl font-medium text-white capitalize">
                {heading.text}
              </h2>
            </div>

            {/* Points Section */}
            <div className="w-full md:w-[58%]">
              <div className="space-y-0">
                {points.map((point, index) => (
                  <AnimateOnScroll key={index} type="fade-up" delay={getDelay()}>
                    <div
                      className={`
                      flex items-start gap-4 py-6
                      ${index < points.length - 1 ? 'border-b border-white/20' : ''}
                      ${point.featured ? 'bg-white/5' : ''}
                    `}
                    >
                      {/* Check Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <Image src={checkPoint} alt="Check" width={41} height={41} />
                      </div>

                      {/* Point Text */}
                      <p className="text-xl md:text-2xl font-medium text-white flex-1">
                        {point.text}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
