// import { Block } from 'payload'

// const FISMAComplianceSectionConfig: Block = {
//   slug: 'fisma_compliance',
//   labels: {
//     singular: 'FISMA Compliance Section',
//     plural: 'FISMA Compliance Sections',
//   },
//   fields: [
//     {
//       name: 'heading',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'description',
//       type: 'textarea',
//       required: true,
//     },
//     {
//       name: 'boldText',
//       type: 'textarea',
//       required: true,
//     },
//     {
//       name: 'benefitsBgUrl',
//       type: 'upload',
//       relationTo: 'media',
//       required: true,
//       admin: {
//         description: 'Background image for the Key Benefits section',
//       },
//     },
//     {
//       name: 'penaltiesBgUrl',
//       type: 'upload',
//       relationTo: 'media',
//       required: true,
//       admin: {
//         description: 'Background image for the Penalties section',
//       },
//     },
//     {
//       name: 'benefits',
//       type: 'array',
//       fields: [
//         {
//           name: 'text',
//           type: 'text',
//           required: true,
//         },
//       ],
//     },
//     {
//       name: 'penalties',
//       type: 'array',
//       fields: [
//         {
//           name: 'text',
//           type: 'text',
//           required: true,
//         },
//       ],
//     },
//   ],
// }

// export default FISMAComplianceSectionConfig


import { Block } from "payload";

export const FISMAComplianceSectionConfig: Block = {
  slug: "fisma_compliance",
  labels: {
    singular: "FISMA Compliance Section",
    plural: "FISMA Compliance Sections",
  },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "subText", type: "text", required: true },

    {
      name: "leftSection",
      type: "group",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "backgroundImage", type: "upload", relationTo: "media", required: true },
        { name: "icon", type: "upload", relationTo: "media", required: true },
        {
          name: "items",
          type: "array",
          fields: [
            { name: "text", type: "text", required: true },
            { name: "icon", type: "upload", relationTo: "media", required: false }, // added icon field
          ],
        },
      ],
    },


    {
      name: "rightSection",
      type: "group",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "backgroundImage", type: "upload", relationTo: "media", required: true },
        { name: "icon", type: "upload", relationTo: "media", required: true },
        {
          name: "items",
          type: "array",
          fields: [{ name: "text", type: "text", required: true }, { name: "icon", type: "upload", relationTo: "media", required: false },],
        },
      ],
    },

    {
      name: "footerImage",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ],
};
