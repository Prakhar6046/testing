'use client'
import React, { useState } from 'react'

type Service = {
    number: string
    title: string
    description: string
}

type GLBAServicesProps = {
    mainHeading: string
    implementationServices: {
        title: string
        services: Service[]
    }
    assessmentServices: {
        title: string
        services: Service[]
    }
}

const GLBAServicesSection = ({
    mainHeading,
    implementationServices,
    assessmentServices
}: GLBAServicesProps) => {
    const [activeTab, setActiveTab] = useState<'implementation' | 'assessment'>('implementation')

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                        {mainHeading}
                    </h1>
                </div>

                {/* Two Column Layout - Both Always Visible with Grey Background */}
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 max-w-6xl mx-auto">
                    {/* Headers Row - Side by side with underlines */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        {/* Implementation Header */}
                        <div
                            className="text-center cursor-pointer transition-all duration-300 hover:opacity-80"
                            onClick={() => setActiveTab('implementation')}
                        >
                            <h2 className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-300 ${activeTab === 'implementation'
                                ? 'text-[#00A2E7]'
                                : 'text-gray-600 hover:text-[#00A2E7]'
                                }`}>
                                {implementationServices.title}
                            </h2>
                            <div className={`w-full h-1 transition-all duration-300 ${activeTab === 'implementation'
                                ? 'bg-[#00A2E7]'
                                : 'bg-gray-300'
                                }`}></div>
                        </div>

                        {/* Assessment Header */}
                        <div
                            className="text-center cursor-pointer transition-all duration-300 hover:opacity-80"
                            onClick={() => setActiveTab('assessment')}
                        >
                            <h2 className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-300 ${activeTab === 'assessment'
                                ? 'text-[#00A2E7]'
                                : 'text-gray-600 hover:text-[#00A2E7]'
                                }`}>
                                {assessmentServices.title}
                            </h2>
                            <div className={`w-full h-1 transition-all duration-300 ${activeTab === 'assessment'
                                ? 'bg-[#00A2E7]'
                                : 'bg-gray-300'
                                }`}></div>
                        </div>
                    </div>

                    {/* Content Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column - Implementation Services */}
                        <div className="p-4">
                            {/* Services List - Show odd points (1,3,5) for left column */}
                            <div className="space-y-8">
                                {activeTab === 'implementation' ? (
                                    // Show Implementation Services odd points (1,3,5)
                                    implementationServices.services.filter((_, index) => index % 2 === 0).map((service, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="w-8 h-8 bg-white text-[#00A2E7] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1 shadow-md">
                                                {service.number}
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                                                    {service.title}
                                                </h3>
                                                <p className="text-base text-gray-700 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    // Show Assessment Services odd points (1,3,5)
                                    assessmentServices.services.filter((_, index) => index % 2 === 0).map((service, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="w-8 h-8 bg-white text-[#00A2E7] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1 shadow-md">
                                                {service.number}
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                                                    {service.title}
                                                </h3>
                                                <p className="text-base text-gray-700 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Right Column - Assessment Services */}
                        <div className="p-4">
                            {/* Services List - Show even points (2,4,6) for right column */}
                            <div className="space-y-8">
                                {activeTab === 'implementation' ? (
                                    // Show Implementation Services even points (2,4,6)
                                    implementationServices.services.filter((_, index) => index % 2 === 1).map((service, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="w-8 h-8 bg-white text-[#00A2E7] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1 shadow-md">
                                                {service.number}
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                                                    {service.title}
                                                </h3>
                                                <p className="text-base text-gray-700 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    // Show Assessment Services even points (2,4,6)
                                    assessmentServices.services.filter((_, index) => index % 2 === 1).map((service, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="w-8 h-8 bg-white text-[#00A2E7] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1 shadow-md">
                                                {service.number}
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                                                    {service.title}
                                                </h3>
                                                <p className="text-base text-gray-700 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GLBAServicesSection
