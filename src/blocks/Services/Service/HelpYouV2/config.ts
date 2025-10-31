import type { Block } from 'payload'

export const HelpYouV2: Block = {
  slug: 'help-you-v2',
  labels: { singular: 'Help You (New)', plural: 'Help You (New)' },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
      required: true,
    },
    {
      name: 'bottom-card',
      type: 'group',
      label: 'Bottom Card',
      fields: [
        {
          name: 'bottom-card-description',
          type: 'richText',
          label: 'Bottom Card Description',
          required: false,
        },
        {
          name: 'bottom-card-image',
          type: 'upload',
          relationTo: 'media',
          label: 'Bottom Card Image',
          required: false,
        },
      ],
    },
    {
      name: 'help-you-list',
      type: 'array',
      label: 'Help You List',
      required: true,
      fields: [
        {
          name: 'list-description',
          type: 'richText',
          label: 'List Description',
          required: true,
        },
      ],
    },
  ],
}
