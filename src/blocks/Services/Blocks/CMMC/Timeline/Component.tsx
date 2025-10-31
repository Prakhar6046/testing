'use client'
import { Media } from '@/payload-types'
import Image from 'next/image'
import React from 'react'
import { motion, Variants } from 'motion/react'

interface Phase {
  title: string
  description: string
  phaseNumber: string
  date: string
  icon: Media
}

interface CmmcTimelineProps {
  heading: string
  phases: Phase[]
}

// Variants for timeline items: move from bottom to top
const timelineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50  // start below
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,  // move to natural position
    transition: {
      delay: custom * 0.3,  // stagger each item
      duration: 1.2,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
}


const CmmcTimeline: React.FC<CmmcTimelineProps> = ({ heading, phases }) => {
  return (
    <section className="bg-background md:px-14 py-10 md:py-20">
      <div className="container mx-auto md:px-0 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-8">
          <div className="col-span-2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl col-span-2 text-center font-bold">{heading}</h1>
          </div>
        </div>

        <div className="flex col-span-2 w-full justify-center">
          <div className="relative left-5 border-l-4 md:border-l-0 border-l-(--wils_orang) block md:hidden"></div>
          <div className="relative mt-10 w-full">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-(--wils_orang) transform -translate-x-1/2 hidden md:block"></div>

            <div className="flex flex-col gap-12">
              {phases.map((phase, index) => (
                <motion.div
                  key={index + 1}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={timelineVariants}
                  className="flex justify-end items-center w-full"
                >
                  <div className="relative flex items-start md:items-center w-full">
                    {/* Left side spacing on odd items */}
                    {(index + 1) % 2 !== 0 && (
                      <div className="md:w-1/2 px-4 md:px-12 hidden md:block"></div>
                    )}

                    {/* Right content for odd, left content for even */}
                    {(index + 1) % 2 !== 0 ? (
                      <div className="md:w-1/2 px-4 md:px-12 text-left md:text-left">
                        <h3 className="text-(--wils_orang) font-semibold">
                          {phase.date
                            ? new Date(phase.date).toLocaleString('default', {
                              month: 'long',
                              year: 'numeric',
                            })
                            : ''}
                        </h3>
                        <p className="text-gray-700">{phase.description}</p>
                        <p className="font-bold mt-1 text-(--foreground)">{phase.phaseNumber}</p>
                      </div>
                    ) : (
                      <div className="md:w-1/2 px-4 md:px-12 text-left md:text-right">
                        <h3 className="text-(--wils_orang) font-semibold">
                          {phase.date
                            ? new Date(phase.date).toLocaleString('default', {
                              month: 'long',
                              year: 'numeric',
                            })
                            : ''}
                        </h3>
                        <p className="text-gray-700">{phase.description}</p>
                        <p className="font-bold mt-1 text-(--foreground)">{phase.phaseNumber}</p>
                      </div>
                    )}

                    {/* Center icon */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-(--foreground) text-white">
                        {phase?.icon?.url && (
                          <Image
                            src={phase.icon.url}
                            alt={phase?.icon?.alt || 'Phase Icon'}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CmmcTimeline
