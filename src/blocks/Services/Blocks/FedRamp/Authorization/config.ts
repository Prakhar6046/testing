import { Block } from 'payload'

const AuthorizationMonitoringSectionConfig: Block = {
  slug: 'fedramp_auth',
  labels: {
    singular: 'Authorization & Monitoring Section',
    plural: 'Authorization & Monitoring Sections',
  },
  fields: [
    {
      name: 'authorization',
      type: 'group',
      fields: [
        { name: 'subtitle', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        {
          name: 'paragraphs',
          type: 'array',
          fields: [
            { name: 'text', type: 'textarea', required: true },
            { name: 'bold', type: 'checkbox', defaultValue: false },
          ],
        },
        {
          name: 'listItems',
          type: 'array',
          fields: [
            { name: 'text', type: 'text', required: true },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    {
      name: 'monitoring',
      type: 'group',
      fields: [
        { name: 'subtitle', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'listItems',
          type: 'array',
          fields: [
            { name: 'text', type: 'text', required: true },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
  ],
}

export default AuthorizationMonitoringSectionConfig
