import WCGHelpListClient from './Compoment.client'
import type { Service } from '@/payload-types'

type WCGHelpListBlockProps = Extract<Service['layout'][0], { blockType: 'wcg-help-list' }>

export default function WCGHelpList(props: WCGHelpListBlockProps) {
  return <WCGHelpListClient {...props} />
}
