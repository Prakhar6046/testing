import { Block } from 'payload'

const GLBAComplianceSectionConfig: Block = {
  slug: 'glba_compliance',
  labels: {
    singular: 'GLBA Compliance Section',
    plural: 'GLBA Compliance Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      required: true,
    },
    {
      name: 'requirements',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
        },
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
      ],
    },
  ],
}

export default GLBAComplianceSectionConfig
