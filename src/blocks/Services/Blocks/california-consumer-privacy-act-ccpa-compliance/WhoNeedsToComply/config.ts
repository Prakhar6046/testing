import { Block } from 'payload'

export const WhoNeedsToComply: Block = {
  slug: 'who_needs_to_comply',
  labels: {
    singular: 'Who Needs To Comply',
    plural: 'Who Needs To Comply',
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Section Title",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Section Description",
    },
    {
      name: "items",
      type: "array",
      label: "Compliance Items",
      labels: { singular: "Item", plural: "Items" },
      required: true,
      fields: [
        {
          name: "number",
          type: "text",
          label: "Item Number",
          required: true,
        },
        {
          name: "content",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media", 
      label: "Background Image",
    },
  ],
};
