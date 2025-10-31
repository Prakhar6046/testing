import { ServiceAboutClient2 } from './Component.client'
import type { Service } from '@/payload-types'

type ServiceAboutBlockProps = Extract<Service['layout'][0], { blockType: 'service-about-2' }>

export default function ServiceAbout2(props: ServiceAboutBlockProps) {
  return <ServiceAboutClient2 {...props} />
}
