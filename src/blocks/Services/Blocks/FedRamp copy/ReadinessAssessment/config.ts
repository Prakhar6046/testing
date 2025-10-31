import { Block } from 'payload'
const ReadinessAssessmentSectionConfig: Block = {
  slug: 'readiness_assessment_section',
  labels: {
    singular: 'Readiness Assessment Section',
    plural: 'Readiness Assessment Sections',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraphs',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
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
        {
          name: 'width',
          type: 'number',
          required: true,
        },
        {
          name: 'height',
          type: 'number',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
  ],
}

export default ReadinessAssessmentSectionConfig
