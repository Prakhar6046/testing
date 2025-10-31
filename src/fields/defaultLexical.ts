// import type { TextFieldSingleValidation } from 'payload'
// import {
//   lexicalEditor,
//   FixedToolbarFeature,
//   LinkFeature,
//   type LinkFields,
// } from '@payloadcms/richtext-lexical'

// export const defaultLexical = lexicalEditor({
//   features: ({ defaultFeatures }) => [
//     // 1) Keep all defaults (already includes Paragraph, Headings, Bold/Italic/Underline, Lists, etc.)
//     ...defaultFeatures,

//     // 2) Override Link (do this AFTER defaults so it replaces, not duplicates)
//     LinkFeature({
//       fields: ({ defaultFields }) => {
//         const defaultFieldsWithoutUrl = defaultFields.filter(
//           (field) => !('name' in field && field.name === 'url'),
//         )

//         return [
//           ...defaultFieldsWithoutUrl,
//           {
//             name: 'url',
//             type: 'text',
//             admin: {
//               condition: (_data, siblingData) => siblingData?.linkType !== 'internal',
//             },
//             label: ({ t }) => t('fields:enterURL'),
//             required: true,
//             validate: ((value, options) => {
//               if ((options?.siblingData as LinkFields)?.linkType === 'internal') return true
//               return value ? true : 'URL is required'
//             }) as TextFieldSingleValidation,
//           },
//         ]
//       },
//     }),

//     // 3) Opt-in fixed toolbar (this is where the block-type dropdown lives)
//     FixedToolbarFeature(),
//   ],
// })

import type { TextFieldSingleValidation } from 'payload'
import {
  lexicalEditor,
  FixedToolbarFeature,
  LinkFeature,
  type LinkFields,
} from '@payloadcms/richtext-lexical'

export const defaultLexical = lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures, // includes Unordered/Ordered lists by default
    FixedToolbarFeature(), // shows the block-type dropdown
    LinkFeature({
      // your link override (placed AFTER defaults to avoid dupes)
      fields: ({ defaultFields }) => {
        const defaultFieldsWithoutUrl = defaultFields.filter(
          (f) => !('name' in f && f.name === 'url'),
        )
        return [
          ...defaultFieldsWithoutUrl,
          {
            name: 'url',
            type: 'text',
            admin: { condition: (_d, s) => s?.linkType !== 'internal' },
            label: ({ t }) => t('fields:enterURL'),
            required: true,
            validate: ((value, { siblingData }) => {
              if ((siblingData as LinkFields)?.linkType === 'internal') return true
              return value ? true : 'URL is required'
            }) as TextFieldSingleValidation,
          },
        ]
      },
    }),
  ],
})
