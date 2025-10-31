// import { Block } from 'payload'

// export const CmmcConsultingConfig: Block = {
//   slug: 'cmmc_why_us',
//   labels: {
//     singular: 'CMMC Consulting Block',
//     plural: 'CMMC Consulting Blocks',
//   },
//   fields: [
//     {
//       name: 'heading',
//       type: 'text',
//       required: true,
//       defaultValue: 'How can we help?',
//     },
//     {
//       name: 'description',
//       type: 'textarea',
//       required: true,
//       defaultValue:
//         'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape...',
//     },
//     {
//       name: 'items',
//       type: 'array',
//       label: 'Consulting Items',
//       labels: { singular: 'Item', plural: 'Items' },
//       fields: [
//         {
//           name: 'title',
//           type: 'text',
//         },
//         {
//           name: 'subtitle',
//           type: 'text',
//         },
//         {
//           name: 'points',
//           type: 'array',
//           label: 'Points',
//           fields: [
//             {
//               name: 'text',
//               type: 'textarea',
//               required: true,
//             },
//             {
//               name: 'icon',
//               type: 'upload',
//               relationTo: 'media',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }



import { Block } from 'payload'

export const CmmcConsultingConfig: Block = {
  slug: 'cmmc_why_us',
  labels: {
    singular: 'CMMC Cards Section',
    plural: 'CMMC Cards Sections',
  },
  fields: [
    {
      name: 'leftCard',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'text', required: true },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'text', type: 'text', required: true },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media', // or the collection you use for images
              required: false,
            },
          ],
        },
      ],
    },
    {
      name: 'center',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'rightCard',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'text', required: true },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'text', type: 'text', required: true },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },
      ],
    },
  ],
}


