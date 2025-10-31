import { tree } from 'next/dist/build/templates/app-page'
import type { Block } from 'payload'

export const HeroService: Block = {
  slug: 'hero-service',
  labels: {
    singular: 'Hero Section (Global)',
    plural: 'Hero Section (Global)',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Hero Title',
      required: false,
      admin: {
        description: 'Main headline text for the hero section',
      },
    },
    {
      name: 'shortinfo',
      type: 'textarea',
      label: 'Description',
      required: false,
      admin: {
        description: 'Supporting description text below the title',
      },
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Call-to-Action Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Request Consultation',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          defaultValue: '#',
        },
        {
          name: 'style',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary_btn' },
            { label: 'Secondary', value: 'secondary_btn' },
          ],
          defaultValue: 'secondary_btn',
          required: true,
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          label: 'Open in New Tab',
          defaultValue: false,
          required: true,
        },
      ],
    },
    {
      name: 'videoMode',
      type: 'checkbox',
      label: 'Enable Video Mode',
      defaultValue: false,
      admin: {
        description: 'Enable this to show a play button that links to a video section instead of displaying images',
      },
    },
    {
      name: 'videoSectionId',
      type: 'text',
      label: 'Video Section ID',
      required: false,
      admin: {
        description: 'ID of the video section to scroll to when play button is clicked. Leave empty to scroll to the first video section.',
        placeholder: 'video-section-1',
        condition: (data, siblingData) => siblingData?.videoMode === true,
      },
    },
    {
      name: 'images',
      type: 'group',
      label: 'Hero Images',
      admin: {
        condition: (data, siblingData) => siblingData?.videoMode !== true,
      },
      fields: [
        {
          name: 'mainImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Main Hero Image',
          required: false,
          admin: {
            description: 'Primary background image for the hero section',
          },
        },
        {
          name: 'overlayIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Overlay Icon',
          required: false,
          admin: {
            description: 'Icon that appears overlaid on the main image',
          },
        },
      ],
    },
  ],
}
