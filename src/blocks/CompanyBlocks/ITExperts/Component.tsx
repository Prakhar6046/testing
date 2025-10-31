import Image from 'next/image'
import type { Media } from '@/payload-types'
import ITExpertsClient from './Component.client'

// TypeScript interface matching the simplified Payload config
interface ITExpertsBlockProps {
  heading: {
    text: string
  }
  layout: {
    imagePosition: 'left' | 'right'
  }
  image: {
    media: string | Media
  }
  textContent: {
    content: string
  }
}

type Props = {
  className?: string
  id?: string
} & ITExpertsBlockProps

export default function ITExperts(props: Props) {
  return <ITExpertsClient {...props} />
}
