import { Block } from 'payload'

export const PenetrationTesting: Block = {
  slug: 'penetration-testing',
  labels: {
    singular: 'Penetration Testing Section',
    plural: 'Penetration Testing Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
      defaultValue: 'When do you need Penetration Testing Services?',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
      defaultValue: 'We recommend fulfilling a cyber security penetration testing if:',
    },
    {
      name: 'testing-list',
      type: 'array',
      label: 'Testing Scenarios List',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'scenario',
          type: 'richText',
          required: true,
        },
      ],
    },
    {
      name: 'bottom-description',
      type: 'richText',
      label: 'Bottom Description',
      required: false,
      admin: {
        description: 'Concluding paragraph that appears after the list',
      },
    },
    {
      name: 'background-image',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: false,
      admin: {
        description: 'Background image that appears on the left side of the section',
      },
    },
  ],
}

// TypeScript interface for the block (if using TypeScript)
export interface PenetrationTestingBlockType {
  blockType: 'penetration-testing'
  title?: string
  subtitle?: string
  'testing-list'?: Array<{
    scenario: any // RichText type from Payload
  }>
  'bottom-description'?: any // RichText type from Payload
  'background-image'?:
    | string
    | {
        id: string
        url: string
        alt?: string
        filename: string
        width?: number
        height?: number
      }
}

// Alternative simpler configuration (if you prefer text instead of richText for scenarios)
export const PenetrationTestingBlockSimple = {
  slug: 'penetration-testing-simple',
  labels: {
    singular: 'Penetration Testing Section (Simple)',
    plural: 'Penetration Testing Sections (Simple)',
  },
  interfaceName: 'PenetrationTestingBlockSimple',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
      defaultValue: 'When do you need Penetration Testing Services?',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
      defaultValue: 'We recommend fulfilling a cyber security penetration testing if:',
    },
    {
      name: 'testing-list',
      type: 'array',
      label: 'Testing Scenarios List',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'scenario',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Enter testing scenario...',
          },
        },
      ],
    },
    {
      name: 'bottom-description',
      type: 'textarea',
      label: 'Bottom Description',
      required: false,
    },
    {
      name: 'background-image',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: false,
    },
  ],
}
