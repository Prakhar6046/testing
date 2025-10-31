'use client'

import React, { useRef } from 'react'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import type { Media, Page } from '@/payload-types'
// import AnimateOnScroll, { useAutoDelay } from '@/components/AnimateOnScroll'

type TestimonialSliderBlockProps = Extract<Page['layout'][0], { blockType: 'testimonials' }>

type Testimonial = {
  name: string
  role: string
  rating: number
  quote: string
  avatar: string
}

const temp_testimonials: Testimonial[] = [
  {
    name: 'Orville Wilson',
    role: 'Chief Executive Officer',
    rating: 5,
    quote:
      'Orville Wilson is President and CEO of Wilson Consulting Group.He has more than 15 years of hands-on technology and security experience and is certified in CISM, CISA, PMP, PA-QSA, and QSA. Wilson specializes in conducting risk assessments, developing security strategies, processes and policies, and performing technical penetration testing and vulnerability scans. Wilson has extensive experience as a researcher and instructor for a variety of educational institutions, including Chicago State University, Loyola University (Chicago), DePaul University (Chicago) and George Washington University (Washington, D.C.).',
    avatar: '/images/company-avtar.png',
  },
  {
    name: 'Orville Wilson',
    role: 'Chief Executive Officer',
    rating: 5,
    quote:
      'Orville Wilson is President and CEO of Wilson Consulting Group.He has more than 15 years of hands-on technology and security experience and is certified in CISM, CISA, PMP, PA-QSA, and QSA. Wilson specializes in conducting risk assessments, developing security strategies, processes and policies, and performing technical penetration testing and vulnerability scans. Wilson has extensive experience as a researcher and instructor for a variety of educational institutions, including Chicago State University, Loyola University (Chicago), DePaul University (Chicago) and George Washington University (Washington, D.C.).',
    avatar: '/images/company-avtar.png',
  },
  {
    name: 'Orville Wilson',
    role: 'Chief Executive Officer',
    rating: 5,
    quote:
      'Orville Wilson is President and CEO of Wilson Consulting Group.He has more than 15 years of hands-on technology and security experience and is certified in CISM, CISA, PMP, PA-QSA, and QSA. Wilson specializes in conducting risk assessments, developing security strategies, processes and policies, and performing technical penetration testing and vulnerability scans. Wilson has extensive experience as a researcher and instructor for a variety of educational institutions, including Chicago State University, Loyola University (Chicago), DePaul University (Chicago) and George Washington University (Washington, D.C.).',
    avatar: '/images/company-avtar.png',
  },
]

export default function TestimonialSliderClient(props: TestimonialSliderBlockProps) {
  const { heading, testimonials = temp_testimonials } = props
  const sliderRef = useRef<Slider | null>(null)

  // Helper function to get media URL
  const getMediaUrl = (media: string | number | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return media
    if (typeof media === 'number') return '' // Handle ID case
    return media.url || ''
  }

  // Helper function to get media alt text
  const getMediaAlt = (media: string | number | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return ''
    if (typeof media === 'number') return '' // Handle ID case
    return media.alt || ''
  }

  // Navigation functions
  const next = () => sliderRef.current?.slickNext()
  const previous = () => sliderRef.current?.slickPrev()

  // Slider settings
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  // Early return if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="md:py-20 py-16 bg-background">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl md:text-6xl font-medium text-black text-center mb-12">
            {heading?.text || 'Executive management'}
          </h2>
        </div>
        <div>
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((t, index) => (
              <div key={index} className="!flex md:flex-row flex-col gap-11">
                <div className="md:w-1/2 w-full">
                  <Image
                    src={getMediaUrl(t.avatar)}
                    alt={getMediaAlt(t.avatar)}
                    width={564}
                    height={389}
                    className=""
                  />
                </div>
                <div className="md:w-1/2 w-full">
                  <p className="text-black md:text-xl text-lg font-normal">{t.quote}</p>
                  <div className="md:mt-12 mt-8">
                    <p className="md:text-2xl text-xl font-semibold text-black mb-2.5">{t.name}</p>
                    <p className="md:text-xl text-lg font-normal text-black">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          {/* Navigation Buttons */}
          <div className="md:mt-14 mt-8 flex justify-center gap-4">
            <button
              onClick={previous}
              className="md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-full text-[#9D9D9D] hover:text-wils_orang border border-black/15 flex items-center justify-center hover:border-wils_orang hover:scale-105 transition cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              className="md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-full text-[#9D9D9D] hover:text-wils_orang border border-black/15 flex items-center justify-center hover:border-wils_orang hover:scale-105 transition cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
