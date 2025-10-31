import { Service } from '@/payload-types'
import WCGTrainingServicesClient from './Component.client'

type WCGTrainingServicesBlockProps = Extract<
  Service['layout'][0],
  { blockType: 'wcg-training-services' }
>

export default function WCGTrainingServices(props: WCGTrainingServicesBlockProps) {
  return <WCGTrainingServicesClient {...props} />
}
