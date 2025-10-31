'use client'

import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

interface ComplianceCheckProps {
    heading: string
    description: string
    importantNote: string
    callToAction: string
    buttonText: string
    buttonLink: string
    rightImage?: Media
}

export default function ComplianceCheck({
    heading,
    description,
    importantNote,
    callToAction,
    buttonText,
    buttonLink,
    rightImage,
}: ComplianceCheckProps) {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section - Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                            {heading}
                        </h1>

                        <div className="space-y-4 text-lg leading-relaxed">
                            <p className="text-black">{description}</p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-black">
                                <span className="font-bold">Please note:</span> {importantNote}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-black font-medium">{callToAction}</p>
                            <a
                                href={buttonLink}
                                className="inline-block bg-[#00A2E7] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0088CC] transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                {buttonText}
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex justify-center lg:justify-end">
                        {rightImage?.url ? (
                            <div className="relative w-80 h-80">
                                <Image
                                    src={rightImage.url}
                                    alt={rightImage.alt || 'CMMC Compliance Image'}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ) : (
                            <div className="w-80 h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                                <p className="text-gray-500">No image uploaded</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
