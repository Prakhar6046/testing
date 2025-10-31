import { HelpYouVideoClient } from './Component.client'
import type { Service } from '@/payload-types'

type HelpYouVideoBlockProps = Extract<Service['layout'][0], { blockType: 'help-you-video' }>

export function HelpYouVideo(props: HelpYouVideoBlockProps) {
  return <HelpYouVideoClient {...props} />
}
