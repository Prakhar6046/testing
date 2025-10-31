import { Block } from 'payload'

export const gdprPrinciples: Block = {
  slug: 'gdpr_principles',
  labels: {
    singular: 'GDPR Principle Block',
    plural: 'GDPR Principle Blocks',
  },
  fields: [
    {
      name: 'circleText',
      type: 'text',
      required: true,
      defaultValue: 'Key Principles Of GDPR',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: true,
    },
    {
      name: 'principles',
      type: 'array',
      label: 'Principles',
      labels: { singular: 'Principle', plural: 'Principles' },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Check Icon',
          required: true,
        },
        {
          name: 'arrowClosed',
          type: 'upload',
          relationTo: 'media',
          label: 'Arrow (Closed)',
          required: true,
        },
        {
          name: 'arrowOpen',
          type: 'upload',
          relationTo: 'media',
          label: 'Arrow (Open)',
          required: true,
        },
      ],
    },
  ],
}
