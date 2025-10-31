'use client'
import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

type FISMABecomeSectionProps = {
  heading: string
  description: string
  requirementsHeading: string
  requirements: {
    title: string
    text: string
  }[]
  borderImageUrl: Media
  listStyleImageUrl: Media
  backgroundImageUrl: Media
}

const FISMABecomeSection = ({
  heading,
  description,
  requirementsHeading,
  requirements,
  borderImageUrl,
  listStyleImageUrl,
  backgroundImageUrl,
}: FISMABecomeSectionProps) => {

  return (
    <section
      className="bg-no-repeat bg-cover md:px-14 py-10 md:py-20 mt-12 md:pb-0"
      style={{ backgroundImage: `url('${backgroundImageUrl?.url || ''}')` }}
    >
      <div className="container mx-auto md:px-0 px-4 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-span-2 bg-white z-20 p-5 md:p-16 rounded-2xl shadow-lg mb-20 relative bottom-40">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl">{heading}</h1>
            <div className="md:w-20 w-8 absolute top-0 -left-1 md:-top-4 md:-left-4">
              <Image width={80} height={80} src={borderImageUrl?.url || ''} alt="" />
            </div>
          </div>

          <div className="flex flex-col my-5 gap-4 max-w-5xl">
            <p className="text-lg my-4">{description}</p>
            <h3 className="text-xl font-bold">{requirementsHeading}</h3>
            <ul
              style={listStyleImageUrl ? { listStyleImage: `url(${listStyleImageUrl.url})` } : {}}
              className="flex flex-col gap-5 ps-5"
            >
              {requirements.map((req, idx) => (
                <li key={idx} className="text-lg">
                  <span className="font-semibold">{req.title}: </span>
                  {req.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FISMABecomeSection
