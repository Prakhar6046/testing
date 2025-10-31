import Image from 'next/image'
import type { Media } from '@/payload-types'
import CompanyHeroClient from './Component.client'

// TypeScript interface matching the simplified Payload config
interface CompanyHeroBlockProps {
  heading: {
    text: string
  }
  description: {
    text: string
  }
  featuredImage: {
    media: string | Media
  }
}

type Props = {
  className?: string
  id?: string
} & CompanyHeroBlockProps

export default function CompanyHero(props: Props) {
  return <CompanyHeroClient {...props} />
}
