import { CollectionBeforeChangeHook } from 'payload'
import { calculateReadTime } from '@/utilities/calculateReadTime'

/**
 * Hook to automatically calculate read time based on content
 */
export const autoCalculateReadTime: CollectionBeforeChangeHook = async ({ data, operation }) => {
  // Only calculate for create and update operations
  if (operation === 'create' || operation === 'update') {
    // Check if layout/content exists
    if (data.layout && Array.isArray(data.layout)) {
      // Calculate read time from all content blocks
      const estimatedReadTime = calculateReadTime(data.layout)

      // Set the read time
      data.readTime = estimatedReadTime

      // Also update the hero block's readTime if it exists
      const heroBlock = data.layout.find(
        (block: any) => block.blockType === 'case-study-hero',
      )

      if (heroBlock && heroBlock.tags) {
        heroBlock.tags.readTime = estimatedReadTime
      }
    }
  }

  return data
}
