import type { CollectionConfig } from 'payload'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { authenticated } from '@/access/authenticated'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { slugField } from '@/fields/slug'
import { revalidateCaseStudy, revalidateDelete } from './hooks/revalidateCaseStudy'
import { autoCalculateReadTime } from './hooks/calculateReadTime'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { GlobalBlocks } from '@/globals/Blocks'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',

  labels: {
    singular: 'Resource',
    plural: 'Resources',
  },

  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },

  admin: {
    defaultColumns: ['title', 'type', 'slug', 'client', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'case-studies',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'case-studies',
        req,
      })

      return path
    },
    useAsTitle: 'title',
  },

  versions: {
    drafts: {
      autosave: {
        interval: 3000, // Increased interval to prevent deadlocks (3 seconds)
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
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
      label: 'Description',
      required: false,
    },
    {
      name: 'datePublished',
      type: 'date',
      label: 'Resource Date Published',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'searchable',
      type: 'checkbox',
      label: 'Show in Resource Center',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: 'When enabled, this resource will appear in the Resource Center search results',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Type',
      options: [
        { label: 'Case Study', value: 'case-study' },
        { label: 'Blog', value: 'blog' },
        { label: 'Industies', value: 'industies' },
        { label: 'E-book', value: 'e-book' },
        { label: 'Info Sheet', value: 'info-sheet' },
        { label: 'Press Release', value: 'press-release' },
        { label: 'Whitepapers', value: 'whitepapers' },
        { label: 'Video', value: 'video' },
      ],
      defaultValue: 'case-study',
      required: false,
    },
    {
      name: 'client',
      type: 'text',
      label: 'Client Name',
      required: false,
    },
    {
      name: 'readTime',
      type: 'number',
      label: 'Read Time (in minutes) - Auto-calculated',
      required: false,
      admin: {
        step: 1,
        readOnly: true,
        description: 'Automatically calculated based on content length',
      },
      min: 1,
    },
    {
      name: 'industry',
      type: 'select',
      label: 'Industry',
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
    {
      name: 'categories',
      type: 'select',
      label: 'Topics',
      hasMany: true,
      options: [
        { label: 'FedRAMP', value: 'fedramp' },
        { label: 'Compliance', value: 'compliance' },
        { label: 'Cybersecurity', value: 'cybersecurity' },
        { label: 'Risk Management', value: 'risk-management' },
        { label: 'IT Governance', value: 'it-governance' },
        { label: 'Cloud Computing', value: 'cloud-computing' },
        { label: 'Data Analytics', value: 'data-analytics' },
        { label: 'Corporate', value: 'corporate' },
        { label: 'Culture', value: 'culture' },
        { label: 'Privacy', value: 'privacy' },
        { label: 'Threat Detection', value: 'threat-detection' },
      ],
    },
    {
      name: 'cover-image',
      type: 'upload',
      label: 'Cover Image (For the Resource Center)',
      relationTo: 'media',
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [...GlobalBlocks],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    ...slugField(),
  ],

  hooks: {
    beforeValidate: [
      ({ data }) => {
        const renameIDs = (val: any): any => {
          if (Array.isArray(val)) return val.map(renameIDs)
          if (val && typeof val === 'object') {
            const out: any = {}
            for (const [k, v] of Object.entries(val)) {
              const nk = k === 'id' || k === '_id' ? 'uid' : k // rename
              out[nk] = renameIDs(v)
            }
            return out
          }
          return val
        }
        if (Array.isArray(data?.layout)) data.layout = renameIDs(data.layout)
        return data
      },
    ],
    beforeChange: [populatePublishedAt, autoCalculateReadTime],
    afterChange: [revalidateCaseStudy],
    afterDelete: [revalidateDelete],
  },
}
