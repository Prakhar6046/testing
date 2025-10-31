import { Block } from 'payload'

export const Soc2BlockConfig: Block = {
  slug: 'soc2_block',
  labels: {
    singular: 'SOC 2 Block',
    plural: 'SOC 2 Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'introParagraph',
      type: 'textarea',
    },
    {
      name: 'listItems',
      type: 'array',
      label: 'Intro List',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'mainParagraph',
      type: 'textarea',
    },
    {
      name: 'subTitle',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'checklist',
      type: 'array',
      label: 'Checklist',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
