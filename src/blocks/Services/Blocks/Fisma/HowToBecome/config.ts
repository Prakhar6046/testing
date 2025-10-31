import { Block } from 'payload'

const FISMABecomeSectionConfig: Block = {
  slug: 'fisma_how_to',
  labels: {
    singular: 'FISMA Become Section',
    plural: 'FISMA Become Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'requirementsHeading',
      type: 'text',
      required: true,
    },
    {
      name: 'requirements',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'borderImageUrl',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Top-left border SVG image',
      },
    },
    {
      name: 'listStyleImageUrl',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Star SVG image for list bullets',
      },
    },
    {
      name: 'backgroundImageUrl',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Background image behind the content',
      },
    },
  ],
}

export default FISMABecomeSectionConfig
