'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Media } from '@/payload-types'
import Image from 'next/image'

interface TimelineItem {
    year: string
    phase: string
    title: string
    description: string
    icon: Media
}

interface AnimatedTimelineProps {
    heading: string
    timelineItems: TimelineItem[]
    autoPlay?: boolean
    autoPlayInterval?: number
}

export default function AnimatedTimeline({
    heading,
    timelineItems,
    autoPlay = true,
    autoPlayInterval = 3000
}: AnimatedTimelineProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        if (!autoPlay || timelineItems.length <= 1) return

        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % timelineItems.length)
                setIsAnimating(false)
            }, 500)
        }, autoPlayInterval)

        return () => clearInterval(interval)
    }, [autoPlay, autoPlayInterval, timelineItems.length])

    const currentItem = timelineItems[currentIndex]

    if (!timelineItems || timelineItems.length === 0) {
        return null
    }

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-white px-4 py-10 md:py-20">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-center text-black mb-16">
                        {heading}
                    </h1>

                    {/* Timeline Container */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                            <div className="flex items-start">
                                {/* Years Column - Left Side */}
                                <div className="w-32 md:w-40 flex-shrink-0">
                                    <div className="space-y-8">
                                        {timelineItems.map((item, index) => (
                                            <motion.div
                                                key={item.year}
                                                className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${index === currentIndex
                                                    ? 'text-black'
                                                    : 'text-gray-400'
                                                    }`}
                                                animate={{
                                                    scale: index === currentIndex ? 1.0 : 1.0,
                                                    color: index === currentIndex ? '#000000' : '#9CA3AF'
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {item.year}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Column - Right Side */}
                                <div className="flex-1 ml-8 md:ml-12">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.5 }}
                                            className="space-y-4"
                                        >
                                            {/* Icon and Phase */}
                                            <div className="flex items-center space-x-4">
                                                <motion.div
                                                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                                                    style={{ backgroundColor: '#00A2E7' }}
                                                    animate={{
                                                        scale: isAnimating ? 1.2 : 1,
                                                        rotate: isAnimating ? 360 : 0
                                                    }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {currentItem.icon?.url ? (
                                                        <Image
                                                            src={currentItem.icon.url}
                                                            alt={currentItem.icon.alt || 'Timeline Icon'}
                                                            width={20}
                                                            height={20}
                                                            className="object-contain"
                                                        />
                                                    ) : (
                                                        <span className="text-lg leading-none">!</span>
                                                    )}
                                                </motion.div>
                                                <span
                                                    className="font-semibold text-lg"
                                                    style={{ color: '#00A2E7' }}
                                                >
                                                    {currentItem.phase}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <motion.h2
                                                className="text-2xl md:text-3xl font-bold text-black"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2, duration: 0.5 }}
                                            >
                                                {currentItem.title}
                                            </motion.h2>

                                            {/* Description */}
                                            <motion.p
                                                className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4, duration: 0.5 }}
                                            >
                                                {currentItem.description}
                                            </motion.p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex justify-center mt-12 space-x-3">
                        {timelineItems.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${index === currentIndex ? '' : 'bg-gray-300'
                                    }`}
                                style={{
                                    backgroundColor: index === currentIndex ? '#00A2E7' : '#D1D5DB'
                                }}
                                onClick={() => setCurrentIndex(index)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
