import { HelpYouV2Client } from './Component.client'
import type { Service } from '@/payload-types'

type HelpYouV2BlockProps = Extract<Service['layout'][0], { blockType: 'help-you-v2' }>

export function HelpYouV2(props: HelpYouV2BlockProps) {
  return <HelpYouV2Client {...props} />
}
