'use client'
import { Media } from '@/payload-types'
import React from 'react'
import Image from 'next/image'

type Penalty = {
  number: string
  text: string
}

type GLBAPenaltiesSectionProps = {
  backgroundImage: Media
  heading: string
  description: string
  penalties: Penalty[]
  footerNote: string
}

const GLBAPenaltiesSection = ({
  backgroundImage,
  heading,
  description,
  penalties,
  footerNote,
}: GLBAPenaltiesSectionProps) => {
  return (
    <section className={`bg-white md:px-14 py-10 md:py-20`}>
      <div className="container mx-auto md:px-0 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Panel - Text Content (2/3 width) */}
          <div className="lg:col-span-8 bg-[#E8F4FD] rounded-3xl p-8 lg:p-12 flex flex-col justify-center shadow-lg">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {heading}
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Decorative separator */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-gray-600 flex-1"></div>
              <div className="w-3 h-3 transform rotate-45 mx-4" style={{ backgroundColor: '#00A2E7' }}></div>
              <div className="h-px bg-gray-600 flex-1"></div>
            </div>

            {/* Penalties List */}
            <div className="space-y-6 mb-8">
              {penalties.map((penalty, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1" style={{ backgroundColor: '#00A2E7' }}>
                    {penalty.number}
                  </div>
                  <p className="text-base lg:text-lg text-gray-800 font-medium leading-relaxed">
                    {penalty.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              {footerNote}
            </p>
          </div>

          {/* Right Panel - Image (1/3 width) */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[500px] shadow-lg">
              <Image
                src={backgroundImage?.url || ''}
                alt={backgroundImage?.alt || 'Professional person'}
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GLBAPenaltiesSection
