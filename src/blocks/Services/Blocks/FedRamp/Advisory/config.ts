import { Block } from 'payload'

const FedRampAdvisoryConfig: Block = {
  slug: 'fedramp_advisory',
  labels: {
    singular: 'FedRAMP Advisory',
    plural: 'FedRAMP Advisories',
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
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'listItems',
      type: 'array',
      label: 'Service List Items',
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
          required: false,
        },
      ],
    },
  ],
}

export default FedRampAdvisoryConfig
