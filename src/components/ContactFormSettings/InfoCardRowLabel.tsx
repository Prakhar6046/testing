'use client'

import React from 'react'

interface InfoCardRowLabelProps {
  data: {
    heading?: string
  }
  index: number
}

export const InfoCardRowLabel: React.FC<InfoCardRowLabelProps> = ({ data, index }) => {
  return <div>{data?.heading || `Info Card ${index + 1}`}</div>
}
