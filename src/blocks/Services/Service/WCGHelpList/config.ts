import { Block } from 'payload'

export const WCGHelpList: Block = {
  slug: 'wcg-help-list',
  labels: {
    singular: 'WCG Help List',
    plural: 'WCG Help Lists',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
      defaultValue: 'How will WCG help you?',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
      required: true,
    },
    {
      name: 'process-steps',
      type: 'array',
      label: 'Process Steps',
      required: true,
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'step-number',
          type: 'text',
          label: 'Step Number',
          required: true,
          admin: {
            placeholder: '01',
          },
        },
        {
          name: 'step-title',
          type: 'text',
          label: 'Step Title',
          required: true,
        },
        {
          name: 'step-description',
          type: 'textarea',
          label: 'Step Description',
          required: true,
        },
        {
          name: 'step-icon',
          type: 'upload',
          label: 'Step Icon',
          relationTo: 'media',
        },
      ],
    },
  ],
}
