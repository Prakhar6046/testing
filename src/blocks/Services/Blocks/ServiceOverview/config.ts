import { Block } from 'payload'

export const ServiceOverview: Block = {
  slug: 'servicesOverview',
  labels: {
    singular: 'Services Overview',
    plural: 'Services Overviews',
  },
  interfaceName: 'ServicesOverviewBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
      defaultValue: 'How will WCG help?',
      admin: {
        description: 'Main heading for the services section',
      },
    },
    {
      name: 'description',
      type: 'array',
      label: 'Description Paragraphs',
      required: true,
      minRows: 1,
      maxRows: 5,
      admin: {
        description: 'Paragraphs describing the organization and services',
      },
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
          admin: {
            placeholder: 'Enter a paragraph of description...',
          },
        },
      ],
    },
    {
      name: 'servicesIntroText',
      type: 'text',
      label: 'Services Introduction Text',
      required: true,
      defaultValue: 'WCG assists organizations to develop policies and procedures for:',
      admin: {
        description: 'Introductory text that appears before the services list',
      },
    },
    {
      name: 'leftColumnServices',
      type: 'array',
      label: 'Left Column Services',
      required: true,
      minRows: 1,
      admin: {
        description: 'Services that will appear in the left column of the list',
      },
      fields: [
        {
          name: 'service',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Enter service name...',
          },
        },
      ],
    },
    {
      name: 'rightColumnServices',
      type: 'array',
      label: 'Right Column Services',
      required: true,
      minRows: 1,
      admin: {
        description: 'Services that will appear in the right column of the list',
      },
      fields: [
        {
          name: 'service',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Enter service name...',
          },
        },
      ],
    },
  ],
}
