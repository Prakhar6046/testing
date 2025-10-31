import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'

export const ServicesRecommended: GlobalConfig = {
  slug: 'services-recommended',
  label: 'Recommended Services',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: false,
        },
        {
          name: 'icon',
          type: 'upload',
          label: 'Icon',
          required: false,
          relationTo: 'media',
        },
        {
          name: 'bg-image',
          type: 'upload',
          label: 'Decorative Background Image',
          required: false,
          relationTo: 'media',
        },
        link({
          overrides: {
            name: 'link',
            label: 'Link',
            required: false,
          },
          short: true,
        }),
      ],
    },
  ],
}
