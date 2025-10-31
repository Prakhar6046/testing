'use client'

import React from 'react'

interface FormFieldRowLabelProps {
  data: {
    name?: string
    label?: string
  }
  index: number
}

export const FormFieldRowLabel: React.FC<FormFieldRowLabelProps> = ({ data, index }) => {
  return <div>{data?.name || data?.label || `Form Field ${index + 1}`}</div>
}
