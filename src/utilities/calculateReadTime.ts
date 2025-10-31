/**
 * Calculate estimated read time based on content
 * @param content - The content blocks from the case study layout
 * @returns Estimated read time in minutes
 */

// Average reading speed in words per minute
const WORDS_PER_MINUTE = 200

/**
 * Extract text content from various block types
 */
function extractTextFromBlocks(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return ''

  let text = ''

  for (const block of blocks) {
    // Handle different block types
    switch (block.blockType) {
      case 'case-study-hero':
        // Extract title
        if (block.title) {
          text += block.title + ' '
        }
        // Extract description from rich text
        if (block.description) {
          text += extractTextFromRichText(block.description) + ' '
        }
        break

      case 'content':
      case 'richText':
        // Extract from rich text content
        if (block.content) {
          text += extractTextFromRichText(block.content) + ' '
        }
        if (block.richText) {
          text += extractTextFromRichText(block.richText) + ' '
        }
        break

      case 'markdown':
        // Extract markdown content
        if (block.markdown) {
          text += block.markdown + ' '
        }
        break

      case 'code':
        // Code blocks - count as text with reduced weight
        if (block.code) {
          // Code is typically skimmed faster, so we reduce word count
          const words = block.code.split(/\s+/).length
          text += ' '.repeat(Math.floor(words * 0.5)) // 50% weight for code
        }
        break

      case 'callout':
      case 'banner':
        // Extract callout/banner text
        if (block.text) {
          text += block.text + ' '
        }
        if (block.content) {
          text += extractTextFromRichText(block.content) + ' '
        }
        break

      case 'mediaBlock':
      case 'media':
        // Images don't count toward read time significantly
        // But captions do
        if (block.caption) {
          text += block.caption + ' '
        }
        break

      case 'accordion':
        // Extract from accordion items
        if (block.items && Array.isArray(block.items)) {
          for (const item of block.items) {
            if (item.title) text += item.title + ' '
            if (item.content) text += extractTextFromRichText(item.content) + ' '
          }
        }
        break

      case 'list':
        // Extract from list items
        if (block.items && Array.isArray(block.items)) {
          for (const item of block.items) {
            if (typeof item === 'string') {
              text += item + ' '
            } else if (item.text) {
              text += item.text + ' '
            }
          }
        }
        break

      case 'cta':
      case 'call-to-action':
        // Extract CTA text
        if (block.heading) text += block.heading + ' '
        if (block.description) text += block.description + ' '
        break

      default:
        // For any other blocks, try to extract common text fields
        if (block.text) text += block.text + ' '
        if (block.heading) text += block.heading + ' '
        if (block.description) text += block.description + ' '
        if (block.title) text += block.title + ' '
    }
  }

  return text
}

/**
 * Extract plain text from Payload CMS rich text structure
 */
function extractTextFromRichText(richText: any): string {
  if (!richText) return ''

  // If it's a string, return it
  if (typeof richText === 'string') return richText

  // If it's an array (Slate/Lexical format)
  if (Array.isArray(richText)) {
    return richText
      .map((node) => {
        if (node.children) {
          return extractTextFromRichText(node.children)
        }
        if (node.text) {
          return node.text
        }
        return ''
      })
      .join(' ')
  }

  // If it's an object with children
  if (richText.children && Array.isArray(richText.children)) {
    return extractTextFromRichText(richText.children)
  }

  // If it has text property
  if (richText.text) {
    return richText.text
  }

  // If it's root with content
  if (richText.root && richText.root.children) {
    return extractTextFromRichText(richText.root.children)
  }

  return ''
}

/**
 * Count words in text
 */
function countWords(text: string): number {
  // Remove extra whitespace and split by whitespace
  const words = text.trim().split(/\s+/)
  return words.filter((word) => word.length > 0).length
}

/**
 * Calculate read time in minutes
 */
export function calculateReadTime(content: any[]): number {
  const text = extractTextFromBlocks(content)
  const wordCount = countWords(text)
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE)

  // Minimum 1 minute read time
  return Math.max(1, minutes)
}
