import { Block } from 'payload'

const WhyChooseWCGSectionConfig: Block = {
  slug: 'why_choose_wcg',
  labels: {
    singular: 'Why Choose WCG Section',
    plural: 'Why Choose WCG Sections',
  },

  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'alt', type: 'text', required: true },
      ],
    },
  ],
}

export default WhyChooseWCGSectionConfig
