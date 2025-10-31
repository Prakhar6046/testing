import type { Page } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import ServicesRecommendationsClient from './Component.client'

type ServicesRecommendationsBlockProps = Extract<Page['layout'][0], { blockType: 'services-more' }>

export default async function ServicesRecommendations(props: ServicesRecommendationsBlockProps) {
  const servicesRecommended = await getCachedGlobal('services-recommended', 1)

  const mergedProps: ServicesRecommendationsBlockProps = {
    ...props,
    title: props.title || (servicesRecommended as any)?.title || '',
    cards:
      props.cards && props.cards.length > 0
        ? props.cards
        : (servicesRecommended as any)?.cards || [],
  }

  return <ServicesRecommendationsClient {...mergedProps} />
}
