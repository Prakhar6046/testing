import type { Block } from 'payload'

export const CaseStudyHero: Block = {
  slug: 'case-study-hero',
  labels: {
    singular: 'Hero Section (Resource)',
    plural: 'Hero Section (Resource)',
  },
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
      required: false,
    },
    {
      name: 'tags',
      type: 'group',
      label: 'Tags',
      required: true,
      fields: [
        {
          name: 'date',
          type: 'date',
          label: 'Date',
          required: false,
          admin: {
            hidden: true,
          },
        },
        {
          name: 'readTime',
          type: 'number',
          label: 'Read Time (in minutes) - Auto-calculated',
          required: false,
          admin: {
            readOnly: true,
            description: 'Automatically calculated from case study content',
          },
        },
      ],
    },
  ],
}
