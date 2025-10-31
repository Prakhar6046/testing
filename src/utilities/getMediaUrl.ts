import { getClientSideURL } from '@/utilities/getURL'
import { Media } from '@/payload-types'

/**
 * Processes media resource URL to ensure proper formatting
 * @param url The original URL from the resource
 * @param cacheTag Optional cache tag to append to the URL
 * @returns Properly formatted URL with cache tag if provided
 */
export const getMediaUrl = (
  url: string | number | null | undefined | Media,
  cacheTag?: string | null,
): string => {
  if (!url) return ''

  if (typeof url === 'object') return url.url || ''
  if (typeof url === 'number') return ''

  // Check if URL already has http/https protocol
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return cacheTag ? `${url}?${cacheTag}` : url
  }

  // Otherwise prepend client-side URL
  const baseUrl = getClientSideURL()
  return cacheTag ? `${baseUrl}${url}?${cacheTag}` : `${baseUrl}${url}`
}
// const getMediaAlt = (media: string | number | Media | undefined): string => {

export const getMediaAlt = (alt: string | number | null | undefined | Media): string => {
  if (!alt) return ''

  if (typeof alt === 'object') return alt.alt || ''

  if (typeof alt === 'string') return alt
  if (typeof alt === 'number') return ''

  return alt || ''
}
