import { link } from '@/fields/link'
import type { Block } from 'payload'
import { iconOptions } from '@/lib/icons'
import {
  lexicalEditor,
  HeadingFeature,
  UnorderedListFeature,
  OrderedListFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical'
import { defaultLexical } from '@/fields/defaultLexical'

export const CaseStudyContent: Block = {
  slug: 'case-study-cn',
  labels: {
    singular: 'Content Section (Resource)',
    plural: 'Content Section (Resource)',
  },
  fields: [
    {
      name: 'main-title',
      type: 'text',
      label: 'Main Title',
      required: false,
    },
    {
      name: 'main-content',
      type: 'richText',
      label: 'Main Content',
      required: false,
      editor: defaultLexical,
    },
    {
      name: 'content',
      type: 'array',
      label: 'Content',
      required: false,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon (Optional)',
          required: false,
          options: iconOptions,
          admin: {
            description: 'Optional icon to display next to the sub title',
            hidden: true,
          },
        },
        {
          name: 'image-icon',
          type: 'upload',
          label: 'Image Icon (Optional)',
          required: false,
          relationTo: 'media',
          admin: {
            description: 'Optional image icon to display next to the sub title',
          },
        },
        {
          name: 'sub-title',
          type: 'text',
          label: 'Sub Title',
          required: false,
        },
        {
          name: 'sub-content',
          type: 'richText',
          label: 'Sub Content',
          required: false,
          editor: defaultLexical,
        },
        {
          name: 'image-main',
          type: 'upload',
          label: 'Image Main (Optional)',
          required: false,
          relationTo: 'media',
          admin: {
            description: 'Optional image to display next to the sub content',
          },
        },
        {
          name: 'c',
          type: 'group',
          label: 'Content CTA',
          required: false,
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: false,
            },
            link({
              overrides: {
                label: 'CTA Link',
                required: false,
                name: 'c_l',
              },
              short: true,
            }),
          ],
        },
      ],
    },
    {
      name: 'main-image',
      type: 'upload',
      relationTo: 'media',
      label: 'Main Image',
      required: false,
    },
    {
      name: 'sb',
      type: 'group',
      label: 'Sidebar',
      required: false,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: false,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description',
          required: false,
          editor: defaultLexical,
        },
        {
          name: 'button-text',
          type: 'text',

          label: 'Button Text',
          required: false,
        },
        link({
          overrides: {
            label: 'Button Link',
            required: false,
            name: 'btn_link',
          },
          short: true,
        }),
      ],
    },
  ],
}
