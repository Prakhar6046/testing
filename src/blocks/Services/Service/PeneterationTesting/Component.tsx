import type { Service } from '@/payload-types'
import PeneterationTestingClient from './Component.client'

type PeneterationTestingBlockProps = Extract<
  Service['layout'][0],
  { blockType: 'penetration-testing' }
>

export default function PeneterationTesting(props: PeneterationTestingBlockProps) {
  return <PeneterationTestingClient {...props} />
}
