import ServiceVideoClient from './Component.client'
import type { Page } from '@/payload-types'

type ServiceVideoBlockProps = Extract<Page['layout'][0], { blockType: 'service-video' }>

export default function ServiceVideo(props: ServiceVideoBlockProps) {
  return <ServiceVideoClient {...props} />
}
