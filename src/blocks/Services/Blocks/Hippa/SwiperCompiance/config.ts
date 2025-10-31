import { Block } from 'payload'

export const HipaaCardsBlockConfig: Block = {
  slug: 'hipaa_block',
  labels: {
    singular: 'HIPAA Cards Block',
    plural: 'HIPAA Cards Blocks',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
