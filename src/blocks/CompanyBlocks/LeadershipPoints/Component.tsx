import LeadershipPointsClient from './Component.client'

// TypeScript interface matching the simplified Payload config
interface LeadershipPointsBlockProps {
  heading: {
    text: string
  }
  points: Array<{
    text: string
    featured?: boolean
  }>
}

type Props = {
  className?: string
  id?: string
} & LeadershipPointsBlockProps

export default function LeadershipPoints(props: Props) {
  return <LeadershipPointsClient {...props} />
}
