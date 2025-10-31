import { Block } from 'payload'

export const CmccTimelineConfig: Block = {
  slug: 'cmcc_timeline',
  labels: {
    singular: 'CMMC Timeline Block',
    plural: 'CMMC Timeline Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'CMMC Timeline',
    },
    {
      name: 'phases',
      type: 'array',
      label: 'Phases',
      labels: { singular: 'Phase', plural: 'Phases' },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'phaseNumber',
          type: 'text',
        },
        {
          name: 'date',
          type: 'date',
        },
      ],
    },
  ],
}
