'use client'
import React from 'react'

type FedRampHeader = {
  title: string
  description: string
}

const FedRampHead = ({ title, description }: FedRampHeader) => {
  return (
    <div className='container mx-auto md:px-5 px-4 mt-8'>
      <div className="text-center">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FedRampHead
