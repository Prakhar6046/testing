'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

type Principle = {
  heading: string
  content: string
  icon: Media
  arrowClosed: Media
  arrowOpen: Media
}

type GDPRSectionProps = {
  circleText: string
  backgroundImage: Media
  principles: Principle[]
}

export default function GdprPrinciples({ circleText, backgroundImage, principles }: GDPRSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section>
      <div
        className="bg-no-repeat bg-cover bg-left px-4 py-8 sm:py-14 lg:py-20"
        style={{ backgroundImage: `url('${backgroundImage?.url || ''}')` }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 flex justify-center items-center size-full">
              <div className="bg-(--wils_orang) size-full xl:max-w-[18vw] lg:max-w-[24vw] w-52 sm:w-80 xl:max-h-[18vw] lg:max-h-[24vw] h-52 sm:h-80 flex justify-center items-center px-20 rounded-full">
                <h2 className="text-center text-white font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.6em] m-0">
                  {circleText}
                </h2>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className={`flex flex-col gap-6`}>
                {principles.map((principle, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row cursor-pointer"
                    onClick={() => toggleAccordion(idx)}
                  >
                    {/* Check Icon */}
                    <div className="pt-5 w-1/12">
                      {principle.icon?.url && (
                        <Image
                          src={principle.icon.url}
                          alt={principle.icon.alt || 'Check Icon'}
                          width={41}
                          height={41}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`py-5 border-b border-white/20 w-11/12`}>
                      <h4 className="flex gap-3 justify-between cursor-pointer">
                        <span
                          className={`md:text-[28px] sm:text-2xl text-xl font-medium text-white`}
                        >
                          {principle?.heading || ''}
                        </span>
                        {openIndex === idx ? (
                          principle.arrowOpen?.url && (
                            <Image
                              src={principle.arrowOpen.url}
                              alt={principle.arrowOpen.alt || 'Accordion Open'}
                              width={40}
                              height={40}
                              className="transition-transform duration-300"
                            />
                          )
                        ) : (
                          principle.arrowClosed?.url && (
                            <Image
                              src={principle.arrowClosed.url}
                              alt={principle.arrowClosed.alt || 'Accordion Closed'}
                              width={40}
                              height={40}
                              className="transition-transform duration-300"
                            />
                          )
                        )}
                      </h4>

                      {/* Accordion Content */}
                      <div
                        className={`overflow-hidden transition-all mt-3.5 duration-500 ease-in-out ${openIndex === idx ? '' : 'hidden'
                          }`}
                      >
                        <p className={`md:text-xl text-lg font-normal text-white`}>
                          {principle?.content || ''}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
