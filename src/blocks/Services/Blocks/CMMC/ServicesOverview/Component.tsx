'use client'

import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

interface ServiceItem {
    service: string
}

interface ServicesOverviewProps {
    leftSectionHeading: string
    leftSectionDescription: string
    backgroundImage: Media
    consultingHeading: string
    consultingSubheading: string
    consultingServices: ServiceItem[]
    remediationHeading: string
    remediationSubheading: string
    remediationServices: ServiceItem[]
}

export default function ServicesOverview({
    leftSectionHeading,
    leftSectionDescription,
    backgroundImage,
    consultingHeading,
    consultingSubheading,
    consultingServices,
    remediationHeading,
    remediationSubheading,
    remediationServices,
}: ServicesOverviewProps) {
    const blueColor = '#00A2E7'

    return (
        <div className="min-h-screen bg-white">
            <section className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Section - Dark Background with Padlock */}
                <div className="relative flex-1 p-8 md:p-16 flex flex-col justify-center items-start text-white overflow-hidden">
                    {/* Dark gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    {/* Background Image */}
                    {backgroundImage?.url && (
                        <div className="absolute inset-0 opacity-10">
                            <Image
                                src={backgroundImage.url}
                                alt={backgroundImage.alt || 'Background'}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Padlock Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-64 w-64 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-white opacity-20 blur-3xl"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {leftSectionHeading}
                        </h2>
                        <p className="text-lg leading-relaxed">
                            {leftSectionDescription}
                        </p>
                    </div>
                </div>

                {/* Right Section - White Background with Services */}
                <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-center">
                    <div className="max-w-2xl mx-auto space-y-12">
                        {/* CMMC Consulting */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 shadow-lg"
                                    style={{ backgroundColor: blueColor }}
                                >
                                    ✕
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-black">{consultingHeading}</h3>
                                    <p className="text-gray-700 font-medium">{consultingSubheading}</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-16">
                                {consultingServices?.map((item, index) => (
                                    <li key={index}>{item.service}</li>
                                ))}
                            </ul>
                        </div>

                        {/* CMMC Remediation */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 shadow-lg"
                                    style={{ backgroundColor: blueColor }}
                                >
                                    ✕
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-black">{remediationHeading}</h3>
                                    <p className="text-gray-700 font-medium">{remediationSubheading}</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-16">
                                {remediationServices?.map((item, index) => (
                                    <li key={index}>{item.service}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
