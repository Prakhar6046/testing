import type { CollectionConfig } from 'payload'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { authenticated } from '@/access/authenticated'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { slugField } from '@/fields/slug'
import { revalidateDelete, revalidatePage } from '@/hooks/revalidatePage'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { ServiceBlocks } from '@/globals/Blocks'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const Services: CollectionConfig = {
  slug: 'services',

  labels: {
    singular: 'Service',
    plural: 'Services',
  },

  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },

  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? `services/${data.slug}` : '',
          collection: 'services',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? `services/${data.slug}` : '',
        collection: 'services',
        req,
      })

      console.log('path', path)

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
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layoutPaste',
              type: 'ui',
              admin: {
                // components: {
                //   Field: {
                //     path: '/src/components/PasteAppend', // your component file
                //     clientProps: { targetPath: 'layout' }, // 👈 this is the path
                //   },
                // },
              },
            },
            {
              name: 'layout',
              type: 'blocks',
              blocks: [...ServiceBlocks],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
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
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
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
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePage],
    afterDelete: [revalidateDelete],
  },
}
