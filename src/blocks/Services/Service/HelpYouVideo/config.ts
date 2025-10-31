import type { Block } from 'payload'

export const HelpYouVideo: Block = {
  slug: 'help-you-video',
  labels: {
    singular: 'Help You Video Section',
    plural: 'Help You Video Sections',
  },
  interfaceName: 'WCGHelpVideoBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
      defaultValue: 'How will WCG help you?',
      admin: {
        description: 'Main heading for the help section',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description Content',
      required: true,
      admin: {
        description:
          'Rich text content describing your services and approach. Supports formatting, lists, and links.',
      },
    },
    {
      name: 'video-url',
      type: 'text',
      label: 'Video URL',
      required: false,
      admin: {
        description:
          'YouTube embed URL (e.g., https://www.youtube.com/embed/VIDEO_ID) or other video embed URL',
        placeholder: 'https://www.youtube.com/embed/VIDEO_ID',
      },
    },
    {
      name: 'cta-text',
      type: 'text',
      label: 'Call to Action Text',
      required: false,
      defaultValue: 'Connect with Our Expert',
      admin: {
        description: 'Text for the call-to-action link',
      },
    },
    {
      name: 'cta-url',
      type: 'text',
      label: 'Call to Action URL',
      required: false,
      defaultValue: '/contact',
      admin: {
        description: 'URL for the call-to-action link (internal or external)',
      },
    },
    {
      name: 'bg-color',
      type: 'select',
      label: 'Background Color',
      required: false,
      defaultValue: 'gray',
      options: [
        { label: 'Gray', value: 'gray' },
        { label: 'Blue', value: 'blue' },
      ],
    },
  ],
}
