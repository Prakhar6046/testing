import type { Block } from 'payload'
import { link } from '@/fields/link'

export const Resources: Block = {
  slug: 'resources',
  labels: {
    singular: 'Resources (Resource Center)',
    plural: 'Resources (Resource Center)',
  },
  fields: [
    // Section heading
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Our Resources',
      // required: true,
    },

    // Population method (like ArchiveBlock)
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      label: 'Populate By',
      admin: {
        description: 'Automatically fetch all case studies or manually select specific ones',
      },
      options: [
        {
          label: 'Automatic (All Case Studies)',
          value: 'collection',
        },
        {
          label: 'Manual Selection',
          value: 'selection',
        },
      ],
    },

    // Industry filtering (when using collection)
    {
      name: 'industries',
      type: 'select',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        description:
          'Optional: Filter case studies by industry. Leave empty to show all industries.',
      },
      hasMany: true,
      label: 'Filter by Industries (Optional)',
      options: [
        { label: 'Healthcare', value: 'healthcare' },
        { label: 'Education', value: 'education' },
        { label: 'Government', value: 'government' },
        { label: 'Financial Services', value: 'financial-services' },
        { label: 'Technology', value: 'technology' },
        { label: 'Non-Profit', value: 'non-profit' },
        { label: 'Manufacturing', value: 'manufacturing' },
        { label: 'Other', value: 'other' },
      ],
    },

    // Manual selection option
    {
      name: 'selectedCaseStudies',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
      hasMany: true,
      label: 'Select Case Studies',
      relationTo: 'case-studies',
    },

    // Search & Filter settings
    {
      name: 'searchSettings',
      type: 'group',
      label: 'Search & Filter Settings',
      fields: [
        {
          name: 'enableSearch',
          type: 'checkbox',
          label: 'Enable Search',
          defaultValue: true,
        },
        {
          name: 'enableIndustryFilter',
          type: 'checkbox',
          label: 'Enable Industry Filter',
          defaultValue: true,
        },
      ],
    },

    // "See More" button
    {
      name: 'seeMoreBtn',
      type: 'group',
      label: 'See More Button',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Show See More Button',
          defaultValue: true,
        },
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'See More Resources',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        link({
          overrides: {
            name: 'link',
            label: 'Button Link',
            admin: {
              condition: (_, siblingData) => siblingData?.enabled,
            },
          },
          short: true,
        }),
      ],
    },
  ],
}
