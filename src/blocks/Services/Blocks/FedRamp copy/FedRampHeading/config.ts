import { Block } from 'payload'

const FedRampHeaderConfig: Block = {
  slug: 'fedramp_header',
  labels: {
    singular: 'Section Header',
    plural: 'Section Headers',
  },
  fields: [
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
}

export default FedRampHeaderConfig
