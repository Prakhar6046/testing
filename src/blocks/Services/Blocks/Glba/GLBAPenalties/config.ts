import { Block } from 'payload'

const GLBAPenaltiesSectionConfig: Block = {
  slug: 'glba_penalties',
  labels: {
    singular: 'GLBA Penalties Section',
    plural: 'GLBA Penalties Sections',
  },
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: true,
    },
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
      name: 'penalties',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'number',
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
      name: 'footerNote',
      type: 'textarea',
      required: true,
    },
  ],
}

export default GLBAPenaltiesSectionConfig
