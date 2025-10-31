import type { Block } from 'payload'

export const ServiceAbout2: Block = {
  slug: 'service-about-2',
  labels: {
    singular: 'Service About With List (Service)',
    plural: 'Service About With List (Service)',
  },
  fields: [
    // Section Heading
    {
      name: 'heading',
      type: 'group',
      label: 'Section Heading',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Heading Text',
          required: true,
          defaultValue: 'What is IT Change Management?',
          admin: {
            description: 'Main section heading',
          },
        },
      ],
    },

    // Content Section
    {
      name: 'content',
      type: 'group',
      label: 'Content Section',
      fields: [
        {
          name: 'image',
          type: 'group',
          label: 'Featured Image',
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
              admin: {
                description: 'Featured image for the content section',
              },
            },
          ],
        },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Content Paragraphs',
          minRows: 1,
          admin: {
            description: 'Add content paragraphs for this section',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Heading Text',
              admin: {
                description: 'Heading text',
              },
            },
            {
              name: 'text',
              type: 'textarea',
              label: 'Paragraph Text',
              admin: {
                description: 'Content paragraph',
              },
            },
          ],
        },
        {
          name: 'list',
          type: 'array',
          label: 'List',
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Icon',
              admin: {
                description: 'List icon',
              },
            },
            {
              name: 'text',
              type: 'textarea',
              label: 'List Text',
              required: true,
              admin: {
                description: 'List text',
              },
            },
          ],
        },
      ],
    },
  ],
}
