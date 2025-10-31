'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper'
import { Media } from '@/payload-types'

type Card = {
    title: string;
    description: string;
    image: Media;
};

type ComponentProps = {
    cards: Card[];
};

export const HipaaCardsBlock: React.FC<ComponentProps> = ({ cards }) => {
    const prevRef = React.useRef<HTMLButtonElement | null>(null)
    const nextRef = React.useRef<HTMLButtonElement | null>(null)

    return (
        <section>
            <div className="container mx-auto h-full px-4 py-8 sm:py-14 lg:py-20">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: "swiper-pagination-bullet-active !mx-1 mt-20 !bg-orange-500",
                    }}
                    className="!p-5"
                >
                    {Array.isArray(cards) &&
                        cards.length > 0 &&
                        cards.map((card, idx) => (
                            <SwiperSlide key={idx} className='!h-auto mb-10'>
                                <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto flex flex-col h-full">
                                    {card?.image?.url && (
                                        <div className="relative w-full h-48 mb-4 flex-shrink-0">
                                            <Image
                                                fill
                                                src={card.image.url || "/placeholder.svg"}
                                                alt={card?.image?.alt || "Card Image"}
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    )}
                                    <div className="flex flex-col flex-grow min-h-0">
                                        <h3 className="font-bold text-xl mb-2 flex-shrink-0">{card?.title}</h3>
                                        <div className="flex-grow overflow-y-auto">
                                            <p className="text-gray-600 leading-relaxed">{card?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    )
}
